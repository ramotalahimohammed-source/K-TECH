// script.js

// Navigation menu functionality
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('open');
}

// Functionality for modal popups for video/PDF viewing
function openModal(contentType, contentSrc) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = '';
    if (contentType === 'video') {
        modalContent.innerHTML = `<video controls><source src="${contentSrc}" type="video/mp4">Your browser does not support the video tag.</video>`;
    } else if (contentType === 'pdf') {
        modalContent.innerHTML = `<iframe src="${contentSrc}" width="100%" height="500px"></iframe>`;
    }
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Filter functionality for inventions
function filterInventions(keyword) {
    const inventions = document.querySelectorAll('.invention');
    inventions.forEach(invention => {
        if (invention.textContent.toLowerCase().includes(keyword.toLowerCase())) {
            invention.style.display = '';
        } else {
            invention.style.display = 'none';
        }
    });
}

// Event listeners for opening/closing modal
document.getElementById('modal-close').addEventListener('click', closeModal);

// Example of how to use it (should be called with actual content in a real scenario)
// openModal('video', 'path/to/video.mp4');

// To implement filtering, you would call filterInventions(keyword) with the input from the user.