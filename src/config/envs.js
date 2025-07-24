import { config } from "dotenv";
config();

//import {getFirestore} from 'firebase/firestore';


// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export const envs = {
  database: {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
  },
  port: process.env.PORT || 5000,
  secrets: {
    jwt_secret: process.env.jwt_secret || "xssqakjdkjhdkjhd",
    session: process.env.session_key || 'kjhskjhdskjh'
  }
};


// Initialize Firebase
//const app = initializeApp(firebaseConfig);


//const db = getFirestore(app);
//export { db };