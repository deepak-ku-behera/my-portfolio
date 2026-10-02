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


// Technical Skills Filter

const filterButtons = document.querySelectorAll(".filter-btn");
const skillCards = document.querySelectorAll(".skill-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Remove active state from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activate clicked button
        button.classList.add("active");

        const selectedCategory = button.dataset.filter;

        // Show or hide skill cards
        skillCards.forEach(card => {
            const category = card.dataset.category;

            if (
                selectedCategory === "all" ||
                category === selectedCategory
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
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