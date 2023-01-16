import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBrNuJOkKyZi_Dr4-e6_j00l2lKM-vBHlA',
  authDomain: 'miniblog-f4567.firebaseapp.com',
  projectId: 'miniblog-f4567',
  storageBucket: 'miniblog-f4567.appspot.com',
  messagingSenderId: '496676756155',
  appId: '1:496676756155:web:81904950252953e80d679e',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
