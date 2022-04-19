// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs, onSnapshot, query, orderBy } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI9B8pS_2zA-_F2SFvYOTacOWdKvwHW_k",
  authDomain: "fir-app-d490a.firebaseapp.com",
  projectId: "fir-app-d490a",
  storageBucket: "fir-app-d490a.appspot.com",
  messagingSenderId: "344512881198",
  appId: "1:344512881198:web:b95c87bfa5e5fa4c0cb5bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);
export const setMessages = (message) => addDoc(collection(db, 'messages'), message);
export const q = query(collection(db,'messages'), orderBy("time", "desc"));
export const getMessages = () => getDocs(q);
export const onGetMessages = (callback) => onSnapshot(q, callback);
export const logout = () => signOut(auth);
export const getQuestions = () => getDocs(collection(db, 'questions'));