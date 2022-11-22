import { useState } from "react";

import {
  sigeInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.util";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";
const defaultFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await sigeInWithGooglePopUp();
  };

  // event handlers
  const chnageHandler = (event) => {
    const { name, value } = event.target;
    setformFields({
      ...formFields,
      [name]: value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    // reset form fields
    const resetFormFields = () => {
      setformFields(defaultFormFields);
    };

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("wrong password for email");
          break;
        case "auth/user-not-found":
          alert("user not assossicated with this email");
          break;
        default:
          alert(error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={chnageHandler}
          value={email}
        ></FormInput>
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={chnageHandler}
          value={password}
        ></FormInput>
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttontype="google" onClick={signInWithGoogle}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};
