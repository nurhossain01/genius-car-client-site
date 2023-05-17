import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
const provider = new GoogleAuthProvider;


const SocialLogin = () => {
  const { googleSingIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSingIn(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  return (
    <div>
      <div className="divider">OR</div>
      <div  className='flex justify-center'>
        <button onClick={handleGoogleSignIn} className="btn btn-secondary rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;