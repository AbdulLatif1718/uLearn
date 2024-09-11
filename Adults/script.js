const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('close-sidebar');
const toggleSidebar = document.getElementById('toggle-sidebar');
const hamburger = document.getElementById('hamburger');
const sidebarText = document.querySelectorAll('.sidebar-text');

// Toggle sidebar on hamburger click
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-visible');
    sidebar.classList.toggle('sidebar-hidden');
});

// Close sidebar on close button click
closeSidebar.addEventListener('click', () => {
    sidebar.classList.add('sidebar-hidden');
    sidebar.classList.remove('sidebar-visible');
});

// Toggle sidebar on large screen toggle button click
toggleSidebar.addEventListener('click', () => {
    if (sidebar.classList.contains('lg-sidebar-expanded')) {
        sidebar.classList.remove('lg-sidebar-expanded');
        sidebar.classList.add('lg-sidebar-collapsed');
        toggleSidebar.innerHTML = '<i class="fas fa-angle-double-right"></i>';
        sidebarText.forEach(text => text.classList.add('hidden'));
        document.querySelector('.lg\\:pl-64').classList.add('lg:pl-16');
        document.querySelector('.lg\\:pl-64').classList.remove('lg:pl-64');
    } else {
        sidebar.classList.remove('lg-sidebar-collapsed');
        sidebar.classList.add('lg-sidebar-expanded');
        toggleSidebar.innerHTML = '<i class="fas fa-angle-double-left"></i>';
        sidebarText.forEach(text => text.classList.remove('hidden'));
        document.querySelector('.lg\\:pl-16').classList.add('lg:pl-64');
        document.querySelector('.lg\\:pl-16').classList.remove('lg:pl-16');
    }
});

// Mock data for user authentication (Replace with Firebase authentication later)
const mockUsername = "Senior Man";

// Function to display greeting with username
function displayGreeting() {
    const usernameElement = document.getElementById('username');
    usernameElement.textContent = mockUsername;
}

// Display greeting on page load
displayGreeting();

// Mock course data
const courses = [
    { title: "Full-Stack Web Development", description: "Learn full-stack development with Node.js and React.", status: "in-progress", image: "https://via.placeholder.com/150" },
    { title: "Introduction to Programming", description: "Basic programming concepts using Python.", status: "completed", image: "https://via.placeholder.com/150" },
    { title: "Front-End Engineering", description: "Advanced front-end techniques with React.", status: "in-progress", image: "https://via.placeholder.com/150" },
    { title: "Back-End Development", description: "Back-end development using Node.js and Express.", status: "completed", image: "https://via.placeholder.com/150" },
    { title: "Data Structures and Algorithms", description: "Master data structures and algorithms.", status: "in-progress", image: "https://via.placeholder.com/150" },
    { title: "Database Management Systems", description: "Learn SQL and database management.", status: "completed", image: "https://via.placeholder.com/150" },
    { title: "Machine Learning Basics", description: "Introduction to machine learning concepts.", status: "in-progress", image: "https://via.placeholder.com/150" },
    { title: "Cloud Computing", description: "Learn about cloud services and deployment.", status: "completed", image: "https://via.placeholder.com/150" },
    { title: "Cyber Security Essentials", description: "Fundamentals of cyber security.", status: "in-progress", image: "https://via.placeholder.com/150" },
    { title: "Software Engineering", description: "Principles of software engineering.", status: "completed", image: "https://via.placeholder.com/150" }
];

// Function to render courses
function renderCourses() {
    const inProgressList = document.getElementById('in-progress-list');
    const completedList = document.getElementById('completed-list');
    const allCoursesList = document.getElementById('all-courses-list');

    courses.forEach(course => {
        const courseButton = document.createElement('button');
        courseButton.classList.add('mb-2', 'p-2', 'bg-[#1e9ebe]', 'hover:bg-[#0082a2]', 'rounded', 'shadow-md', 'text-center', 'font-semibold', 'w-full', 'text-white');

        if (course.status === 'in-progress') {
            courseButton.textContent = course.title;
            inProgressList.appendChild(courseButton);
        } else if (course.status === 'completed') {
            courseButton.textContent = course.title;
            completedList.appendChild(courseButton);
        }
    });

    const maxCoursesToShow = 5;
    courses.slice(0, maxCoursesToShow).forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('bg-white', 'text-gray-800', 'p-4', 'rounded', 'shadow-md', 'hover:shadow-lg', 'transition-shadow', 'duration-300', 'flex', 'flex-col', 'items-center');
        courseCard.innerHTML = `
            <img src="${course.image}" alt="${course.title}" class="w-full h-32 object-cover rounded-md mb-4">
            <h3 class="text-xl font-semibold mb-2">${course.title}</h3>
            <p class="text-gray-600 mb-4">${course.description}</p>
            <button class="bg-[#1e9ebe] text-white py-2 px-4 rounded shadow-md hover:bg-[#0082a2]">View Course</button>
        `;
        allCoursesList.appendChild(courseCard);
    });
}

// Function to render achievements
function renderAchievements() {
    const achievementsList = document.getElementById('achievements-list');

    const achievements = [
        { title: "Completed Full-Stack Bootcamp", description: "Successfully completed a 12-week full-stack development bootcamp.", date: "January 2024", icon: "fas fa-medal" },
        { title: "Top Scorer in Data Structures", description: "Achieved the highest score in Data Structures and Algorithms course.", date: "March 2024", icon: "fas fa-trophy" },
        { title: "Certified Cloud Practitioner", description: "Earned AWS Certified Cloud Practitioner certification.", date: "May 2024", icon: "fas fa-certificate" }
    ];

    achievements.forEach(achievement => {
        const achievementCard = document.createElement('div');
        achievementCard.classList.add('bg-white', 'text-gray-800', 'p-4', 'rounded', 'shadow-md', 'hover:shadow-lg', 'transition-shadow', 'duration-300', 'flex', 'flex-col', 'items-center');
        achievementCard.innerHTML = `
            <i class="${achievement.icon} text-4xl text-[#fbbf24] mb-4"></i>
            <h3 class="text-xl font-semibold mb-2">${achievement.title}</h3>
            <p class="text-gray-600 mb-2">${achievement.description}</p>
            <p class="text-gray-500 text-sm">${achievement.date}</p>
        `;
        achievementsList.appendChild(achievementCard);
    });
}

renderCourses();
renderAchievements();

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // Toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // Toggle the text between "show" and "hide"
    this.textContent = type === "password" ? "show" : "hide";
});
