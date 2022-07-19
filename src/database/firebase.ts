import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { collection, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVRubt4A09Q5takQ2EvY_Hf0hNefx3CrM",
    authDomain: "sports-news-5fd0a.firebaseapp.com",
    databaseURL: "https://sports-news-5fd0a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sports-news-5fd0a",
    storageBucket: "sports-news-5fd0a.appspot.com",
    messagingSenderId: "909673712718",
    appId: "1:909673712718:web:9e4050e23ffe9d94f7471f",
    measurementId: "G-KZJ6NQ3RED"
}
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


export async function database() {
    const q = query(collection(db, "scrapper"), where("post_type", "==", "wp"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc: any) => {
      console.log(doc.id, " => ", doc.data());
    })
}