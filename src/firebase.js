import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCeh50mnk7sTUivWx1UwaaszPPJr5KF_Hg",
    authDomain: "unichat-4b594.firebaseapp.com",
    projectId: "unichat-4b594",
    storageBucket: "unichat-4b594.appspot.com",
    messagingSenderId: "88217916409",
    appId: "1:88217916409:web:2f12ecd650effba3fc6328"
}).auth();