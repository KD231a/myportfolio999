// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // นำเข้า auth จาก firebase
import { getDatabase } from "firebase/database";  // นำเข้า Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSHYxpYmmY-VfxS3AFXpNhWCg0ebsg3IY",
  authDomain: "porforlio999.firebaseapp.com",
  databaseURL: "https://porforlio999-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "porforlio999",
  storageBucket: "porforlio999.firebasestorage.app",
  messagingSenderId: "506823677936",
  appId: "1:506823677936:web:03028fa08e61132e39ef35",
  measurementId: "G-Q9VJSPT236"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance and Database instance
const auth = getAuth(app);  // เพิ่มการใช้งาน getAuth
const database = getDatabase(app);

// Export auth and database for use in other files
export { auth, database };
