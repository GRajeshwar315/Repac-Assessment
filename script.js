// Mobile Navigation Toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}. Your message has been sent!`);

        // Reset the form fields
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});