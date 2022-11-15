import {
  sigeInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

const SignIn = () => {
  const logInWithGoogle = async () => {
    const { user } = await sigeInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
