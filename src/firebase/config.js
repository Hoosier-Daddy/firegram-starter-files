import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';




firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

<<<<<<< HEAD
export {projectStorage,projectFirestore,timeStamp};
=======
export default {projectStorage,projectFirestore};
>>>>>>> cb82463582479b99d0ba6c4fd43fe228c1b4bfb8
