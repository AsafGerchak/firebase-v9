// ✨NEW Firebase✨
// (version 9+, uses function modules)


// ================== ✨✨
// 1. Configure and initialize firebase

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'YOUR-API-KEY',
  authDomain: 'YOUR-PROJECT-ID.firebaseapp.com',
  projectId: 'YOUR-PROJECT-ID',
  storageBucket: 'YOUR-PROJECT-ID.appspot.com',
  messagingSenderId: 'YOUR-SENDER-ID',
  appId: 'YOUR-APP-ID'
};

const firebase = initializeApp(firebaseConfig);

export default firebase;





// ================== ✨✨
// 2. Creating a reference to your realtime database

import firebase from './firebase';
import { getDatabase, ref } from 'firebase/database';


const database = getDatabase(firebase);

const dbRef = ref(database);
// OR
const childNodeRef = ref(database, `childNode/nestedNode`);





// ================== ✨✨
// 3. Reading data from your Firebase database

import { onValue } from 'firebase/database';

onValue(dbRef, (snapshot) => {
  const myData = snapshot.val();
  // ...etc...
})





// ================== ✨✨
// 4. Writing data to Firebase
      // Functions must be imported as they are needed

  // 4a. Add NEW DATA to a NEW NODE with *push*
      // Will add a new property, and generate a new hexadecimal property name.
      // First argument is the node in your database, second is the value to push.

  import { push } from 'firebase/database';
  // ...some other code...
  push(dbRef, 'some new value');


  // 4b. REPLACE DATA in an EXISTING NODE with *set*
      // Overwrites any and all data at the specified node in your database.
      // First argument is the node in your database, second is the value to set.

  import { set } from 'firebase/database';
  // ...some other code...

  const userProfile = {
    name: 'safi',
    handsome: true,
    howHandsome: 10,
    obsession: 'inevitability of death'
  }

  set(dbRef, userProfile);


  // 4c. ADD NEW DATA inside an EXISTING NODE with *update*
      // Takes an object as an argument, and will assign that object's properties to the specified node. New properties are added to any that are already there, but note that any existing properties with the same names will be overwritten.
      // First argument is the node in your database, second is the object of new properties.

  import { update } from 'firebase/database';
  // ...some other code...

  const newUserInfo = {
    favFood: 'salad',
    beard: true,
    howHandsome: 11
  }

  update(dbRef, newUserInfo);
  // In this example, if we are updating a node where the above `userProfile` object is stored, this update will add two new properties (`favFood` and `beard`) and assign a new value to the `howHandsome` property (11 instead of 10).





// ================== ✨✨
// 5. Deleting data from Firebase

import { remove } from 'firebase/database';
// ... some other code...

remove(specificNodeRef);
// The above will remove all data stored at `specificNodeToRemoveRef`.

// Note that data can also be deleted by calling set() and passing a value of null.