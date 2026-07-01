// activity.js

// Exported ActivityDatabase class and singleton instance
import { getCollection, addDocument, updateDocument, deleteDocument } from './api.js';

class ActivityDatabase {
  constructor() {
    this.storageKey = 'activities_db_records_v2';
    this.activities = this.loadFromStorage();
    if (db) this.setupFirebaseSync();
  }

  setupFirebaseSync() {
    db.collection('activities').onSnapshot(snapshot => {
      const newData = [];
      snapshot.forEach(doc => {
        const data = doc.data();
        data.firebase_id = doc.id;
        newData.push(data);
      });
      if (newData.length > 0 || snapshot.empty) {
        this.activities = newData;
        this.saveToStorage();
        refreshActiveView();
      }
    }, err => {
      console.error('Firestore Activities Sync Error:', err);
      alert('Network error syncing activities from database. Please check your connection.');
    });
  }

  loadFromStorage() {
    const data = localStorage.getItem(this.storageKey);
    if (!data) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
      return [];
    }
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error('Error parsing localStorage database records:', e);
      return [];
    }
  }

  saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.activities));
  }

  getAll() {
    return this.activities;
  }

  getFiltered(filters = {}) {
    return this.activities.filter(item => {
      if (filters.search) {
        const query = filters.search.toLowerCase();
        const activityMatch = item.activity && item.activity.toLowerCase().includes(query);
        const venueMatch = item.venue && item.venue.toLowerCase().includes(query);
        if (!activityMatch && !venueMatch) return false;
      }
      if (filters.month && item.month !== filters.month) return false;
      if (filters.status && item.status !== filters.status) return false;
      if (filters.chapter && item.chapter_area !== filters.chapter) return false;

      if (filters.semester) {
        const firstSemMonths = ['January', 'February', 'March', 'April', 'May', 'June'];
        const secondSemMonths = ['July', 'August', 'September', 'October', 'November', 'December'];
        if (filters.semester === 'first-semester' && !firstSemMonths.includes(item.month)) return false;
        if (filters.semester === 'second-semester' && !secondSemMonths.includes(item.month)) return false;
      }
      return true;
    });
  }

  add(record) {
    const newId = this.activities.length > 0 ? Math.max(...this.activities.map(a => parseInt(a.id))) + 1 : 1;
    const newRecord = { id: newId, ...record };
    this.activities.push(newRecord);
    this.saveToStorage();
    if (db) db.collection('activities').doc(newId.toString()).set(newRecord);
    return newRecord;
  }

  update(id, updatedFields) {
    const index = this.activities.findIndex(a => a.id === parseInt(id));
    if (index !== -1) {
      this.activities[index] = { ...this.activities[index], ...updatedFields };
      this.saveToStorage();
      const firestoreId = this.activities[index].firebase_id || id.toString();
      if (db) db.collection('activities').doc(firestoreId).set(this.activities[index]);
      return true;
    }
    return false;
  }

  delete(id) {
    const index = this.activities.findIndex(a => a.id === parseInt(id));
    if (index !== -1) {
      const firestoreId = this.activities[index].firebase_id || id.toString();
      this.activities.splice(index, 1);
      this.saveToStorage();
      if (db) db.collection('activities').doc(firestoreId).delete();
      return true;
    }
    return false;
  }

  import(records, mode = 'overwrite') {
    if (mode === 'overwrite') {
      this.activities = [];
      if (db) db.collection('activities').get().then(snap => snap.forEach(doc => doc.ref.delete()));
    }
    let maxId = this.activities.length > 0 ? Math.max(...this.activities.map(a => parseInt(a.id))) : 0;
    records.forEach(record => {
      maxId++;
      const newAct = {
        id: maxId,
        month: record.month || '',
        week: record.week || '',
        date: record.date || '',
        activity: record.activity || 'Unnamed Activity',
        chapter_area: record.chapter_area || '',
        status: record.status || '',
        held_in: record.held_in || '',
        participants: parseInt(record.participants) || 0,
        venue: record.venue || '',
        coordinator_id: record.coordinator_id || null,
        attendee_ids: Array.isArray(record.attendee_ids) ? record.attendee_ids : []
      };
      this.activities.push(newAct);
      if (db) db.collection('activities').doc(maxId.toString()).set(newAct);
    });
    this.saveToStorage();
  }
}

export const dbActivities = new ActivityDatabase();
