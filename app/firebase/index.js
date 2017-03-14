import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDodYhgc4D-1rJl18w2FvcE9fzxVv-EV0s",
    authDomain: "mont-corp-site.firebaseapp.com",
    databaseURL: "https://mont-corp-site.firebaseio.com",
    storageBucket: "mont-corp-site.appspot.com",
    messagingSenderId: "94884760505"
  };
  
  firebase.initializeApp(config);
} catch (e) {
  
}

export var firebaseRef = firebase.database().ref();
export default firebase;