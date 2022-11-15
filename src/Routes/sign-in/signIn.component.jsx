import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import {
  auth,
  sigeInWithGooglePopUp,
  signInWithGoogleredirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

const SignIn = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = createUserDocumentFromAuth(response.user);
    }
  }, []);
  const logInWithGoogle = async () => {
    const { user } = await sigeInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logInWithGoogle}>Sign in with Google</button>
      <button onClick={signInWithGoogleredirect}></button>
    </div>
  );
};

export default SignIn;
