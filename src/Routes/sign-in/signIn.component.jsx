import {
  sigeInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";
const SignIn = () => {
  const logInWithGoogle = async () => {
    const { user } = await sigeInWithGooglePopUp();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logInWithGoogle}>Sign in with Google</button>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
