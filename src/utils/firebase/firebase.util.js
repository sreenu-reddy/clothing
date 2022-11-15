import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbLa_Dll786wn97jRNozQdyjos8QliXUg",
  authDomain: "clothing-commerce-db-b3876.firebaseapp.com",
  projectId: "clothing-commerce-db-b3876",
  storageBucket: "clothing-commerce-db-b3876.appspot.com",
  messagingSenderId: "804416148622",
  appId: "1:804416148622:web:9a0031dee97b8367ace5df",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const sigeInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleredirect = () =>
  signInWithRedirect(auth, googleProvider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (response) => {
  const userDocref = doc(db, "users", response.uid);
  console.log(userDocref);
  const userSanpShot = await getDoc(userDocref);
  console.log(userSanpShot);
  console.log(userSanpShot.exists());

  if (!userSanpShot.exists()) {
    const { displayName, email } = response;
    const createdAt = new Date();

    try {
      await setDoc(userDocref, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error("error creating user " + error.message);
    }
  }
  return userDocref;
};
