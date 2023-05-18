import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBtFCs2zVi_8PFBYOsvCFBEM3QoMqnAp5Q",
  authDomain: "bca-species-list.firebaseapp.com",
  databaseURL: "https://bca-species-list-default-rtdb.firebaseio.com",
  projectId: "bca-species-list",
  storageBucket: "bca-species-list.appspot.com",
  messagingSenderId: "340753792027",
  appId: "1:340753792027:web:78806b76728aa53fc94cbe",
  measurementId: "G-S0W6QGZE0L"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);