// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-NcghY4tSin1g82PPILJvMYT1az4ApGQ",
  authDomain: "payment-task-aa389.firebaseapp.com",
  projectId: "payment-task-aa389",
  storageBucket: "payment-task-aa389.appspot.com",
  messagingSenderId: "655201100579",
  appId: "1:655201100579:web:6eb8eb325fe9dffbaaa296"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth