// import firebase from 'firebase';

// var config = {
//     apiKey: "AIzaSyDodYhgc4D-1rJl18w2FvcE9fzxVv-EV0s",
//     authDomain: "mont-corp-site.firebaseapp.com",
//     databaseURL: "https://mont-corp-site.firebaseio.com",
//     storageBucket: "mont-corp-site.appspot.com",
//     messagingSenderId: "94884760505"
// };
// firebase.initializeApp(config);

// var firebaseRef = firebase.database().ref();
  
// firebaseRef.set({
//   app: {
//     name: 'Corp-site',
//     version: '1.0.0'
//   },
//   isRunning: true,
//   user: {
//     name: 'benny',
//     species: 'dog',
//     age: 3.5
//   }
// }).then(() => {  
//   console.log('successfully updated DB');
// }, (e) => {
//   console.log('set failed');
// });

// THE then above is a promise

// firebaseRef().set({
//   appName: 'poopoo'
// });

// firebaseRef.child('user').set({
//   name: 'kirsty',
//   species: 'human',
//   age: 26
// });
// firebaseRef.update   ONLY updates what you ask it to
// firebaseRef.remove   WIPES information
// firebaseRef.child('appName').remove();  <-- removes appName
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('got entire DB:', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('no value', e);
// });

// firebaseRef.on('value', (snapshot) => {
//   console.log('got value', snapshot.val());
// });
// firebaseRef.off();
// firebaseRef.update({isRunning: false});

// var productsRef = firebaseRef.child('products');
// productsRef.on('child_added', (snapshot) => {
//   console.log('new item added to catalog!', snapshot.key, snapshot.val());
// });

// productsRef.push({
//   item: 'Dog',
// });
// productsRef.push({
//   item: 'Food'
// });
