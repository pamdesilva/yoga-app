import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA0pZ4Ngi1-Cjupbev1NolUX8lUkSGwv_Y",
    authDomain: "yogi-finder.firebaseapp.com",
    databaseURL: "https://yogi-finder.firebaseio.com",
    projectId: "yogi-finder",
    storageBucket: "yogi-finder.appspot.com",
    messagingSenderId: "345283688925",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
