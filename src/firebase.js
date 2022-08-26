import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7thn9xo-g8fvPU4xXd31UqVZcn5N6L4s",
  authDomain: "react-blog-website-41bbc.firebaseapp.com",
  projectId: "react-blog-website-41bbc",
  storageBucket: "react-blog-website-41bbc.appspot.com",
  messagingSenderId: "629994366257",
  appId: "1:629994366257:web:32001fdc06d55b28f33c10",
  measurementId: "G-G3YKHQN2BX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
