// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2VYqIyQf4rTkwgUhbPCXxhH3s3NOXOaE",
  authDomain: "vdroom-c91c2.firebaseapp.com",
  databaseURL: "https://vdroom-c91c2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vdroom-c91c2",
  storageBucket: "vdroom-c91c2.appspot.com",
  messagingSenderId: "194426018238",
  appId: "1:194426018238:web:e305fc1de8232e617181ef",
  measurementId: "G-LBW5574GKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)