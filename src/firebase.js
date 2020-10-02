import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRpGfEWfAvXdiL3W4Tbf_UYieMLZ7EQ_A",
  authDomain: "context-api-8f1d8.firebaseapp.com",
  databaseURL: "https://context-api-8f1d8.firebaseio.com",
  projectId: "context-api-8f1d8",
  storageBucket: "context-api-8f1d8.appspot.com",
  messagingSenderId: "502612424219",
  appId: "1:502612424219:web:6317912020a75b20d4eabe",
};

firebase.initializeApp(firebaseConfig);

export const fbInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
