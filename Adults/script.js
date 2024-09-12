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
    { title: "Elective Mathematics", description: "Advanced topics in mathematics, including calculus, algebra, and statistics.", status: "in-progress", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFW1G7Nq0V6Zn8QouCjSruDeTrORd6oW7s3A&s" },
    { title: "English Language", description: "Comprehensive study of English language including literature, grammar, and writing skills.", status: "completed", image: "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2021/04/english-language-irregularities-437x230.jpeg", link: "shs-english.html" },
    { title: "Social Studies", description: "Exploration of social systems, history, and cultures.", status: "in-progress", image: "https://i.pinimg.com/originals/e0/8f/fd/e08ffdd752fef3ec414652eccef9ca12.jpg" },
    { title: "Integrated Science", description: "Study of basic principles in biology, chemistry, and physics.", status: "completed", image: "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(29)(91).jpg" },
    { title: "Physics", description: "Introduction to the principles of physics, including mechanics and electricity.", status: "in-progress", image: "https://media.geeksforgeeks.org/wp-content/uploads/20240502160218/Physics.webp" },
    { title: "Chemistry", description: "Study of chemical reactions, properties, and the periodic table.", status: "in-progress", image: "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/03/23211546/chem-300x225.jpg" },
    { title: "Biology", description: "Basics of living organisms, including anatomy, ecology, and genetics.", status: "completed", image: "https://media.geeksforgeeks.org/wp-content/uploads/20231110153856/Biology-copy.webp" },
    { title: "Geography", description: "Understanding physical and human geography, including maps and environmental systems.", status: "", image: "https://study.com/cimages/videopreview/videopreview-full/p3c2j8y73a.jpg" },
    { title: "Economics", description: "Introduction to economic principles, including micro and macroeconomics.", status: "", image: "https://i.ytimg.com/vi/42wq0gyw3p4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB5mpmuLDX1Shg832ZO3l8uYMWfhw" },
    { title: "Personal Health and Wellness", description: "Focuses on maintaining physical health, nutrition, and exercise.", status: "", image: "https://cdn.prod.website-files.com/65fda7b5fdef3cef45c71e36/660a90a790a05eb56f3496e8_651c8d5cc9737092ac09f06b_HealthWellness%2520Banner.png" },
    { title: "Mental Health Awareness", description: "Understanding mental health issues, stress management, and emotional well-being.", status: "", image: "https://i.ytimg.com/vi/b_ZFjw-eEGo/maxresdefault.jpg" },
    { title: "Sexual Education", description: "Provides information on sexual health, relationships, and reproductive health.", status: "in-progress", image: "https://world.edu/wp-content/uploads/2018/07/sex-ed.jpg" },
    { title: "Substance Abuse Prevention", description: "Educates about the risks of drug and alcohol use and strategies for prevention.", status: "", image: "https://media.slidesgo.com/storage/44190978/conversions/0-substance-abuse-prevention-health-6th-grade-thumb.jpg" },
    { title: "Nutrition and Healthy Eating", description: "Covers the principles of a balanced diet, meal planning, and healthy eating habits.", status: "", image: "https://i0.wp.com/fitonapp.com/wp-content/uploads/FitOn-Definitive-Guide-to-Healthy-Eating-2.png?fit=1200%2C526&ssl=1" },
    { title: "Physical Education", description: "Promotes physical fitness through various sports and exercise routines.", image: "https://3.files.edl.io/e8b3/20/06/03/173520-4fea658e-b146-4b70-b8f8-5feb6053e380.jpg" },
    { title: "First Aid and Safety", description: "Basic first aid skills, emergency response, and personal safety.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-oA5JiKsL-t9bs_PRIzAWP7Elifma1b2AVw&s" },
    { title: "Life Skills and Personal Development", description: "Includes practical skills such as financial literacy, time management, and goal setting.", image: "https://miro.medium.com/v2/resize:fit:860/1*ORFKWFBfDSGaH7Rno7RwQQ.jpeg" },
    { title: "Stress Management and Resilience", description: "Techniques for managing stress, building resilience, and maintaining mental well-being.", image: "https://media.licdn.com/dms/image/C5612AQG4nYmvXgf3Lg/article-cover_image-shrink_720_1280/0/1631917864859?e=2147483647&v=beta&t=61cKTUKkzjqzJ6rIxxM6gSpeTFR3vl-wpLle3s1Qhy0" }
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
        { title: "Completed Elective Mathematics Course", description: "Successfully completed a comprehensive course on Elective Mathematics.", date: "January 2024", icon: "fas fa-heartbeat" },
        { title: "Top Performer in Mental Health Awareness", description: "Achieved top performance in a mental health awareness course.", date: "March 2024", icon: "fas fa-brain" },
        { title: "Certified First Aid and Safety Expert", description: "Earned certification in basic first aid and emergency response.", date: "May 2024", icon: "fas fa-first-aid" },
        { title: "Outstanding Achievement in Nutrition and Healthy Eating", description: "Recognized for exceptional performance in a nutrition and healthy eating course.", date: "July 2024", icon: "fas fa-apple-alt" },
        { title: "Mastered Life Skills and Personal Development", description: "Completed a course on life skills, including financial literacy and time management.", date: "September 2024", icon: "fas fa-briefcase" }
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

