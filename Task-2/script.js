// Salutation alert
function showSalutation() {
    alert("Namaskaram 🙏 Welcome to the world of Kuchipudi!");
}

// About modal open/close
function openModal() {
    document.getElementById('modal').style.display = 'block';
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Contact form modal open/close
function openContactForm() {
    document.getElementById('contactModal').style.display = 'block';
}
function closeContactForm() {
    document.getElementById('contactModal').style.display = 'none';
}

// Close modals on outside click
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    const contactModal = document.getElementById('contactModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
    if (event.target === contactModal) {
        contactModal.style.display = "none";
    }
};

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    let isValid = true;

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate Name
    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate Email
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        isValid = false;
    }

    if (isValid) {
        alert(`Thank you, ${name}! Your message has been received.`);
        this.reset();
        closeContactForm();
    }
});
