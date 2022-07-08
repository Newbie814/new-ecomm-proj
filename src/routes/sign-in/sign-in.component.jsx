import React from 'react';

import {
  signInWithGooglePopop,
  createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopop();
    const userDocRef = await createUserDocFromAuth(user);
    console.log(userDocRef);
    console.log(user);
  };
  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </>
  );
};

export default SignIn;
