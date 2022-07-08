import React from 'react';

import { signInWithGooglePopop } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const reponse = await signInWithGooglePopop();
    console.log(reponse);
  };
  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </>
  );
};

export default SignIn;
