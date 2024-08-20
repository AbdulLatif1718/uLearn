
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB278GquD8vN7pAL1pKAtvKkAvCGLZ-Wqk",
    authDomain: "ulearn-69b99.firebaseapp.com",
    projectId: "ulearn-69b99",
    storageBucket: "ulearn-69b99.appspot.com",
    messagingSenderId: "1034331292867",
    appId: "1:1034331292867:web:1ac91a71f12b6d80f40e76",
    measurementId: "G-H0DH4V0SFX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const analytics = getAnalytics(app);

  // Form submission handling
  document.querySelector(".signup-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const username = document.querySelector("#username").value;
    const fullname = document.querySelector("#fullname").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered successfully!");
      // Redirect or update the UI as needed
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Error registering user: " + error.message);
    }
  });

