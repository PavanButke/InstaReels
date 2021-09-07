import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore";
import "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyDvEzB5ZE_u850P6nGeddJ3LKRn0vdopkY",
    authDomain: "instareels-d7baa.firebaseapp.com",
    projectId: "instareels-d7baa",
    storageBucket: "instareels-d7baa.appspot.com",
    messagingSenderId: "764746034361",
    appId: "1:764746034361:web:9f9fb70d3952d4c9457f68"
  };

  firebase.initializeApp(firebaseConfig);

  let provider = new firebase.auth.GoogleAuthProvider();

  export const auth = firebase.auth();
  export const firestore = firebase.firestore()
  export const storage = firebase.storage();

  export const signInWithGoogle =()=>
  {
      auth.signInWithPopup(provider);
  };

  export default firebase;