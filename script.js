// Mobile Menu Toggle
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

// Open and close mobile navigation
menu.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Close menu when a navigation link is clicked
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
    });
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Email subject
    const subject = encodeURIComponent('Portfolio contact from ' + name);

    // Email body
    const body = encodeURIComponent(
        'Name: ' + name +
        '\nEmail: ' + email +
        '\n\n' + message
    );

    // Open default email application
    window.location.href =
        'mailto:YOUR_EMAIL@example.com?subject=' + subject + '&body=' + body;
});