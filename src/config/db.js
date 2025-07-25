
//import { config } from "dotenv";
//config();

import { getFirestore } from 'firebase/firestore'; 
import { initializeApp } from "firebase/app";
import { envs } from "./envs.js";
console.log(envs);

const {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} = envs.database;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };





// ----------------------

// Import the functions you need from the SDKs you need
/* import { initializeApp } from "firebase/app";
 
const firebaseConfig = {
  apiKey: "AIzaSyCw798DT9WRqgQRgYrv_qlPRrxrMOAVtaM",
  authDomain: "api-prueba-node-fsg-2025.firebaseapp.com",
  projectId: "api-prueba-node-fsg-2025",
  storageBucket: "api-prueba-node-fsg-2025.firebasestorage.app",
  messagingSenderId: "982451142389",
  appId: "1:982451142389:web:18d34f8c91f169c0574fbc"
}; */
 
// Initialize Firebase
/* const app = initializeApp(firebaseConfig); */