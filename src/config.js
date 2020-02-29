import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcvd6fNRvFbPJIYINvkd3V-VdxewdxRbg",
  authDomain: "my-dashboard-9b4f3.firebaseapp.com",
  databaseURL: "https://my-dashboard-9b4f3.firebaseio.com",
  projectId: "my-dashboard-9b4f3",
  storageBucket: "my-dashboard-9b4f3.appspot.com",
  messagingSenderId: "729749950851",
  appId: "1:729749950851:web:9266e2827f1989e6c726b6"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  

  export default firebase;