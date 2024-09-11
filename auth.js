import { login } from './auth';

// Function to handle form submission
document.querySelector('.login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    login(email, password);
});

// Password toggle visibility
document.getElementById('togglePassword').addEventListener('click', () => {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    
});
