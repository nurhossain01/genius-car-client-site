import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
// component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createRegistration = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const createUserLogin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  };

  const googleSingIn = (provider) => {
    return signInWithPopup(auth, provider);
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser && currentUser.email) {
        const loggedUser = {
          email: currentUser.email
        }
        fetch('http://localhost:5000/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(loggedUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log('jwt response', data);
            // warning: local storage is not the best to store access token
            localStorage.setItem("car-access-token", data.token);
          })
      }
      else{
        localStorage.removeItem('car-access-token');
      }
    })
    return () => {
      unsubscribe();
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createRegistration,
    createUserLogin,
    googleSingIn,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;