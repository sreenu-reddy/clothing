import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

const db = getFirestore();

export const createUserDocumentFromAuth = async (
  response,
  additionalInformation = {}
) => {
  const userDocref = doc(db, "users", response.uid);
  const userSanpShot = await getDoc(userDocref);

  if (!userSanpShot.exists()) {
    const { displayName, email } = response;
    const createdAt = new Date();

    try {
      await setDoc(userDocref, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error("error creating user " + error.message);
    }
  }
  return userDocref;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    alert("something went wrong");
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    alert("something went wrong");
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListner = (callBack) =>
  onAuthStateChanged(auth, callBack);
