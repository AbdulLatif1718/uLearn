import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { register } from './auth';

// Firebase configuration
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

// Toggle sidebar
const sidebar = document.getElementById('sidebar');
const closeSidebarButton = document.getElementById('close-sidebar');
const toggleSidebarButton = document.getElementById('toggle-sidebar');
const hamburgerButton = document.getElementById('hamburger');
const footer = document.getElementById('footer');

closeSidebarButton.addEventListener('click', () => {
    sidebar.classList.add('sidebar-hidden');
    sidebar.classList.remove('sidebar-visible');
});

toggleSidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-hidden');
    sidebar.classList.toggle('sidebar-visible');
});

hamburgerButton.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-hidden');
    sidebar.classList.add('sidebar-visible');
});

// Authentication handling
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('username').textContent = user.displayName || 'User';
        // Load user-specific data
        loadUserData();
    } else {
        document.getElementById('username').textContent = 'Guest';
        footer.style.display = 'none'; // Hide footer if not logged in
    }
});

function loadUserData() {
    // Load and display user-specific data like courses, achievements, etc.
    fetchUserCourses();
    fetchUserAchievements();
}

function fetchUserCourses() {
    // Example function to fetch user courses
    const inProgressList = document.getElementById('in-progress-list');
    const completedList = document.getElementById('completed-list');
    // Fetch data from your backend or Firebase
    // Populate the lists with courses
}

function fetchUserAchievements() {
    // Example function to fetch user achievements
    const achievementsList = document.getElementById('achievements-list');
    // Fetch data from your backend or Firebase
    // Populate the achievements list
}

// Example login function
function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User signed in:', user);
        })
        .catch((error) => {
            console.error('Error signing in:', error);
        });
}





// Function to handle form submission
document.querySelector('.signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const username = event.target.username.value;
    const fullname = event.target.fullname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    register(username, fullname, email, password);
});




