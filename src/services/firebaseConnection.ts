import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCT6uMXxdm7PijGj05rsA5Q87yNU4plyVg",
  authDomain: "dashboardescola-6d3b3.firebaseapp.com",
  projectId: "dashboardescola-6d3b3",
  storageBucket: "dashboardescola-6d3b3.appspot.com",
  messagingSenderId: "101099581605",
  appId: "1:101099581605:web:afdbfde0e4a9b271cb1d4c"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
