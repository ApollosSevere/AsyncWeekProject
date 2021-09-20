import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCuXoEt0b9OLR02BL-VxYhvorqKl_QtYAw",
  authDomain: "auth-hooks-learning-dev.firebaseapp.com",
  projectId: "auth-hooks-learning-dev",
  storageBucket: "auth-hooks-learning-dev.appspot.com",
  messagingSenderId: "61369580099",
  appId: "1:61369580099:web:f25079125fde5b4498f2f6",
});

export const auth = app.auth();
console.log(auth);
export default app;
