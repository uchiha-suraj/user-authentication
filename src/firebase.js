import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBfyNqwSfgkQLT8JWJA77WdyMs6Q3-PvFw",
    authDomain: "user-auth-redux-a70a0.firebaseapp.com",
    projectId: "user-auth-redux-a70a0",
    storageBucket: "user-auth-redux-a70a0.appspot.com",
    messagingSenderId: "381948756579",
    appId: "1:381948756579:web:0d1f9b319854098f9cae56"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
