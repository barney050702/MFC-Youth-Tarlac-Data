import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, enableIndexedDbPersistence } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7jhQiLGx-2UH51ecsCex4QkATDxkslzw",
  authDomain: "mfc-youth-portal.firebaseapp.com",
  projectId: "mfc-youth-portal",
  storageBucket: "mfc-youth-portal.firebasestorage.app",
  messagingSenderId: "159791974431",
  appId: "1:159791974431:web:9364e826b3a4577c5c6d2a",
  measurementId: "G-GH8XX4DJNB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

enableIndexedDbPersistence(db).catch((err) => {
  console.warn('Firestore persistence could not be enabled:', err);
});
export const auth = getAuth(app);
