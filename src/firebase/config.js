import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBrJaZL4PjLNDCiNLhSUdJdaNUNHoE2t8w",
    authDomain: "firegram-image-gallery.firebaseapp.com",
    projectId: "firegram-image-gallery",
    storageBucket: "firegram-image-gallery.appspot.com",
    messagingSenderId: "221457695784",
    appId: "1:221457695784:web:065a1c208e95bec678a11d"
}

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export default {projectStorage,projectFirestore};