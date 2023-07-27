import { useState, useEffect } from 'react';
import { auth } from '../config/configFirebase';
import { onAuthStateChanged } from 'firebase/auth';

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    try {
      return onAuthStateChanged(auth, (user) => setCurrentUser(user));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return currentUser;
}
