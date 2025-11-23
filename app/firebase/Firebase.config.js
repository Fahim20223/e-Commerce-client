// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_A2YXGy88CV_i5UITohSF4vxf3Vrcsis",
  authDomain: "ecommerce-client-4c133.firebaseapp.com",
  projectId: "ecommerce-client-4c133",
  storageBucket: "ecommerce-client-4c133.firebasestorage.app",
  messagingSenderId: "106036660158",
  appId: "1:106036660158:web:657603d8cda0384c761bef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
