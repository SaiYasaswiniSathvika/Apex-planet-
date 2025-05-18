function showSalutation() {
    alert("Namaskaram 🙏 Welcome to the world of Kuchipudi!");
}

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Optional: Close modal if user clicks outside the content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
