// OLD Firebase 👴🏽
// (version 8 and below, uses namespace objects)


// ================== 👴🏽
// 1. Configure and initialize firebase

import firebase from 'firebase/app';
import 'firebase/database';
// Note that in vanilla JS we did the above by using a <script> tag to import the library from the CDN

const config = {
  apiKey: 'YOUR-API-KET',
  authDomain: 'YOUR-PROJECT-ID.firebaseapp.com',
  databaseURL: 'https://YOUR-PROJECT-NAME.firebaseio.com',
  projectId: 'YOUR-PROJECT-ID',
  storageBucket: 'YOUR-PROJECT-ID.appspot.com',
  messagingSenderId: 'YOUR-SENDER-ID',
};
firebase.initializeApp(config);

export default firebase;





// ================== 👴🏽
// 2. Creating a reference to your realtime database

import firebase from 'firebase';


const dbRef = firebase.database().ref();
//OR
const childNodeRef = firebase.database().ref(`childNode/nestedNode`);





// ================== 👴🏽
// 3. Reading data from your Firebase database

dbRef.on('value', (snapshot) => {
  const myData = snapshot.val();
  // ...etc...
})





// ================== 👴🏽
// 4. Writing data to Firebase
      // No new imports needed, functions are methods on the database reference object.

  // 4a. Add NEW DATA to a NEW NODE with *push*
      // Will add a new property, and generate a new hexadecimal property name.
      // Only argument is the value to push.

  dbRef.push('some new value');


  // 4b. REPLACE DATA in an EXISTING NODE with *set*
      // Overwrites any and all data at the specified node in your database.
      // Only argument is the value to set.

  const userProfile = {
    name: 'safi',
    handsome: true,
    howHandsome: 10,
    obsession: 'inevitability of death'
  }

  dbRef.set(userProfile);


  // 4c. ADD NEW DATA inside an EXISTING NODE with *update*
      // Takes an object as an argument, and will assign that object's properties to the specified node. New properties are added to any that are already there, but note that any existing properties with the same names will be overwritten.

  const newUserInfo = {
    favFood: 'salad',
    beard: true,
    howHandsome: 11
  }

  dbRef.update(newUserInfo);
  // In this example, if we are updating a node where the above `userProfile` object is stored, this update will add two new properties (`favFood` and `beard`) and assign a new value to the `howHandsome` property (11 instead of 10).





// ================== 👴🏽
// 5. Deleting data from Firebase

specificNodeRef.remove();
// The above will remove all data stored at `specificNodeToRemoveRef`.

// Note that data can also be deleted by calling .set() and passing a value of null.