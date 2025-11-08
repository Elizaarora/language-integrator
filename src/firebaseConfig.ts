// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/*
  Replace the values below with the config object from Firebase Console:
  (Project Settings → Your apps → firebaseConfig)
*/
const firebaseConfig = {
  apiKey: "AIzaSyAYwjOFxVPhlqZJkV9wzYaykfRSyhUkCzY",
  authDomain: "local-language-integrato-25ab4.firebaseapp.com",
  projectId: "local-language-integrato-25ab4",
  storageBucket: "local-language-integrato-25ab4.firebasestorage.app",
  messagingSenderId: "313583362431",
  appId: "1:313583362431:web:d66514dd06bf5d6c8d7a4a",
  measurementId: "G-M1NWJ0FHNK"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Exports for the rest of your app
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// === Local emulator hookup (ONLY for local dev) ===
// When running the Firebase emulator (firebase emulators:start),
// the Firestore emulator usually listens at localhost:8080.
// This connects the Firestore instance in your app to the emulator.
// It only runs when the app is served from localhost.

if (typeof window !== "undefined") {
  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1") {
    // change ports if your emulator uses different ones (see emulator output)
    connectFirestoreEmulator(db, "127.0.0.1", 8080);
    // If you use auth emulator, connect it similarly in your auth usage:
    // import { connectAuthEmulator } from "firebase/auth";
    // connectAuthEmulator(auth, "http://127.0.0.1:9099");
    console.info("[firebaseConfig] connected Firestore to emulator at 127.0.0.1:8080");
  }
}
