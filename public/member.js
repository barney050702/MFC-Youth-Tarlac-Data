// member.js
// Wrapper around api.js for member CRUD operations.
import { getCollection, addDocument, updateDocument, deleteDocument } from './api.js';

class MembersDatabase {
  constructor() {
    this.storageKey = 'members_db_records_v2';
    const cached = localStorage.getItem(this.storageKey);
    this.members = cached ? JSON.parse(cached) : [];
  }

  async refreshCache() {
    try {
      const data = await getCollection('members');
      this.members = data;
      localStorage.setItem(this.storageKey, JSON.stringify(this.members));
    } catch (e) {
      console.warn('Failed to refresh members cache', e);
    }
  }

  async getAll() {
    if (this.members.length === 0) await this.refreshCache();
    return this.members;
  }

  async getById(id) {
    const all = await this.getAll();
    return all.find(m => m.id === id || m.firebase_id === id);
  }

  async add(record) {
    const id = await addDocument('members', record);
    record.firebase_id = id;
    this.members.push(record);
    localStorage.setItem(this.storageKey, JSON.stringify(this.members));
    return id;
  }

  async update(id, payload) {
    await updateDocument('members', id, payload);
    const idx = this.members.findIndex(m => m.id === id || m.firebase_id === id);
    if (idx >= 0) {
      this.members[idx] = { ...this.members[idx], ...payload };
      localStorage.setItem(this.storageKey, JSON.stringify(this.members));
    }
  }

  async delete(id) {
    await deleteDocument('members', id);
    this.members = this.members.filter(m => !(m.id === id || m.firebase_id === id));
    localStorage.setItem(this.storageKey, JSON.stringify(this.members));
  }

  async getFiltered(filterFn) {
    const all = await this.getAll();
    return all.filter(filterFn);
  }

  saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.members));
  }
}

export const dbMembers = new MembersDatabase();
