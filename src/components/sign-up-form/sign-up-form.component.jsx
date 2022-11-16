import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

import FormInput from "../../components/form-input/form-input.component";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

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
    if (password !== confirmPassword) {
      alert("password did not match");
      return;
    }

    // reset form fields
    const resetFormFields = () => {
      setformFields(defaultFormFields);
    };

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === " auth/email-already-in-use") {
        alert("Cannot create user , email already in use");
      } else {
        console.error("User creation has encontered a problem", error);
      }
    }
  };
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={submitHandler}>
        <FormInput
          label="DisplayName"
          type="text"
          required
          name="displayName"
          onChange={chnageHandler}
          value={displayName}
        ></FormInput>
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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          onChange={chnageHandler}
          value={confirmPassword}
        ></FormInput>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
