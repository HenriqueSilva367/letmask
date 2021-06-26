import firebase from 'firebase/app';

import 'firebase/auth/';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDXuIIkSMQxtcWl4uGS1xDa0xQu6W__5Nk",
  authDomain: "letmeask-f7726.firebaseapp.com",
  databaseURL: "https://letmeask-f7726-default-rtdb.firebaseio.com",
  projectId: "letmeask-f7726",
  storageBucket: "letmeask-f7726.appspot.com",
  messagingSenderId: "31623302103",
  appId: "1:31623302103:web:3c9b8c7aae597fa70f9992"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
