import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAOOfJChaMD8GJH6sqgErGyFgZtICX-iDE",
    authDomain: "coderbase-30293.firebaseapp.com",
    projectId: "coderbase-30293",
    storageBucket: "coderbase-30293.appspot.com",
    messagingSenderId: "773509562554",
    appId: "1:773509562554:web:984d7fd1e9b99563cc8283"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app);