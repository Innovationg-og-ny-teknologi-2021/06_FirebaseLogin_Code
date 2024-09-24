import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import AuthScreen from './screens/AuthScreen';
import MainScreen from './screens/MainScreen';

import {getApps, initializeApp} from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDby5iEj2N_B2XUJhUZdSRYZbMJkDbhvHk",
  authDomain: "firebare2024.firebaseapp.com",
  databaseURL: "https://firebare2024-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "firebare2024",
  storageBucket: "firebare2024.appspot.com",
  messagingSenderId: "258536604961",
  appId: "1:258536604961:web:102aaddee934c9e05eea60"
};


export default function App() {
  const [user, setUser] = useState({ loggedIn: false });
  

  if (getApps().length < 1) {
    initializeApp(firebaseConfig);
    console.log("Firebase On!");
    // Initialize other firebase products here
  };

  const auth = getAuth();

  function onAuthStateChange(callback) {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        callback({loggedIn: true, user: user});
        console.log("You are logged in!");
        // ...
      } else {
        // User is signed out
        // ...
        callback({loggedIn: false});
      }
    });
  };
  //Heri aktiverer vi vores listener i form af onAuthStateChanged, så vi dynamisk observerer om brugeren er aktiv eller ej.
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
   user.loggedIn ? <MainScreen/> : <AuthScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
