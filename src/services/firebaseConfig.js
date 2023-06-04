import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyDyTdUMXkepUxEzFZNX4X8kwCNv-p1hkiQ",
  authDomain: "academyprosa2.firebaseapp.com",
  projectId: "academyprosa2",
  storageBucket: "academyprosa2.appspot.com",
  messagingSenderId: "127510606452",
  appId: "1:127510606452:web:aafc106a31e3aad50c1721",
  measurementId: "G-3D0MJ2SLQK"

};





export const app = initializeApp(firebaseConfig);
export const databaseApp = getFirestore(app);
