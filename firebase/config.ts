import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB34qqnmqKbpW_pgCIHQJaWqXBvZo_nV7U",
  authDomain: "nceatutor-6a0b8.firebaseapp.com",
  databaseURL: "https://nceatutor-6a0b8-default-rtdb.firebaseio.com",
  projectId: "nceatutor-6a0b8",
  storageBucket: "nceatutor-6a0b8.firebasestorage.app",
  messagingSenderId: "187738507048",
  appId: "1:187738507048:web:f76c6cc43333739ac7f21d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const database = getDatabase(app);

export default app;
