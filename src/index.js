import {initializeApp} from 'firebase/app';
import { getAuth, getFireStore, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAlmoaiDOd458zvZdC72sOuBnHXFLZKn9A",
    authDomain: "learn-6165f.firebaseapp.com",
    projectId: "learn-6165f",
    storageBucket: "learn-6165f.appspot.com",
    messagingSenderId: "679643246295",
    appId: "1:679643246295:web:d3c87f38f41b223c5aca92"
  };
  
 initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();



const signUpForm = document.querySelector('.signupForm');
    signUpForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const email = signUpForm.email.value;
      const password = signUpForm.password.value;
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User Created", userCredential.user)
        signUpForm.reset()
      })
      .catch((err) => {
        console.log(err.message)
      })
    })


    const logoutButton = document.querySelector('.logout');
    logoutButton.addEventListener('click', () => {
      signOut(auth)
      .then(() => {
        console.log("User Logged out")
      })
      .catch((err) => {
        console.log(err.message)
        })
      
    });



     //loging in users
     const loginForm = document.querySelector('.loginFormss');
     loginForm.addEventListener('submit', (e) => {
       e.preventDefault()
       const email = loginForm.email.value;
       const password = loginForm.password.value;
       signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         console.log("User Logged in", userCredential.user)
         loginForm.reset()
       })
       .catch((err) => {
         console.log(err.message)
       })
     })

