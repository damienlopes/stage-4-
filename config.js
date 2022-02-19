import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAiQRWZorpfTzpaXdrJ2h2wJQBy3hreh7U",
    authDomain: "witre-not-yes-book-place.firebaseapp.com",
    projectId: "witre-not-yes-book-place",
    storageBucket: "witre-not-yes-book-place.appspot.com",
    messagingSenderId: "1078932334966",
    appId: "1:1078932334966:web:63fc9b9ff7f69df58ff257"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
