// api.js
// Centralized Firestore API helpers for CRUD operations with robust error handling.

// Assumes firebase SDK is loaded and initialized in app.js, and `db` is globally available.

export const getCollection = async (collectionName) => {
  try {
    const snapshot = await db.collection(collectionName).get();
    const data = [];
    snapshot.forEach(doc => {
      const docData = doc.data();
      // Preserve the Firestore document ID for further operations.
      docData.firebase_id = doc.id;
      data.push(docData);
    });
    return data;
  } catch (err) {
    console.error(`Error fetching ${collectionName}:`, err);
    throw err;
  }
};

export const addDocument = async (collectionName, payload) => {
  try {
    const docRef = await db.collection(collectionName).add(payload);
    return docRef.id;
  } catch (err) {
    console.error(`Error adding to ${collectionName}:`, err);
    throw err;
  }
};

export const updateDocument = async (collectionName, firebaseId, payload) => {
  try {
    await db.collection(collectionName).doc(firebaseId).update(payload);
    return true;
  } catch (err) {
    console.error(`Error updating ${collectionName}/${firebaseId}:`, err);
    throw err;
  }
};

export const deleteDocument = async (collectionName, firebaseId) => {
  try {
    await db.collection(collectionName).doc(firebaseId).delete();
    return true;
  } catch (err) {
    console.error(`Error deleting ${collectionName}/${firebaseId}:`, err);
    throw err;
  }
};
