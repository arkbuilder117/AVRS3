// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {enableIndexedDbPersistence, getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAcFrWrr7Crw4qMKKB-2AG3PhKcDH2kfqk',
  authDomain: 'avrs-29e3d.firebaseapp.com',
  projectId: 'avrs-29e3d',
  storageBucket: 'avrs-29e3d.appspot.com',
  messagingSenderId: '452168744554',
  appId: '1:452168744554:web:9634d0e099cfd33dd8d413',
  measurementId: 'G-3NELSQK0TZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
// enableIndexedDbPersistence(db);
// enableIndexedDbPersistence(db).catch(err => {
//   if (err.code === 'failed-precondition') {
//     // Multiple tabs open, persistence can only be enabled
//     // in one tab at a a time.
//     // ...
//     console.log(err.code);
//   } else if (err.code === 'unimplemented') {
//     // The current browser does not support all of the
//     // features required to enable persistence
//     // ...
//     console.log(err.code);
//   }
// });
console.log('firebase ' + auth);

export {auth, db, storage};
