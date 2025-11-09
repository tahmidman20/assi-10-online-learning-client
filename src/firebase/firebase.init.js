// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg1HOW6XF47-dktEIKi46noBzHYhDLgO8",
  authDomain: "online-learning-9dedb.firebaseapp.com",
  projectId: "online-learning-9dedb",
  storageBucket: "online-learning-9dedb.firebasestorage.app",
  messagingSenderId: "640439516495",
  appId: "1:640439516495:web:75e10c67d26602c15c193a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
