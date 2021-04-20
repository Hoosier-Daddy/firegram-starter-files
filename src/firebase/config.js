import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';




firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export default {projectStorage,projectFirestore};
