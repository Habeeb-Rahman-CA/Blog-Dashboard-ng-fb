import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu9ysYZvsgfmYtJ_Sb-ztIYQkab-N6Gh0",
  authDomain: "angular-blog-599fb.firebaseapp.com",
  projectId: "angular-blog-599fb",
  storageBucket: "angular-blog-599fb.firebasestorage.app",
  messagingSenderId: "738712605983",
  appId: "1:738712605983:web:02448d4ba8c94340460c2a"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app)