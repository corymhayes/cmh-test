import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCt4_nXNIoGWl_cdv6A7JRXO50aCvDIG6c",
  authDomain: "jct-monitoring.firebaseapp.com",
  databaseURL: "https://jct-monitoring.firebaseio.com",
  projectId: "jct-monitoring",
  storageBucket: "jct-monitoring.appspot.com",
  messagingSenderId: "87955720430"
};

firebase.initializeApp(config);
export default firebase;