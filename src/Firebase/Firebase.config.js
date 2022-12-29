// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_H91bdzg9r2WMcY1cO9kbczQAbObYYRg",
    authDomain: "task-app-f9a3c.firebaseapp.com",
    projectId: "task-app-f9a3c",
    storageBucket: "task-app-f9a3c.appspot.com",
    messagingSenderId: "29604087498",
    appId: "1:29604087498:web:69720725b82cfbce455633"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;