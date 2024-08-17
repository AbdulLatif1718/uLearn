// Firebase configuration (dummy data for now)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Simulated user data (replace this with Firebase auth later)
const dummyUsername = "John Doe";

// Function to set the username
function setUsername() {
    const usernameElement = document.getElementById('username');
    usernameElement.textContent = dummyUsername;
}

// Call function on page load
window.addEventListener('load', setUsername);
