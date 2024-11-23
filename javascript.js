// Get the button, modal, and close button elements
const openModalButton = document.getElementById('openModalButton');
const myModal = document.getElementById('myModal');
const closeButton = document.querySelector('.close');
const contactForm = document.getElementById('contact-form');

// Add event listener to open the modal when button is clicked
openModalButton.addEventListener('click', () => {
    myModal.style.display = 'flex'; // Show the modal
});

// Add event listener to close the modal when close button is clicked
closeButton.addEventListener('click', () => {
    myModal.style.display = 'none'; // Hide the modal
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === myModal) {
        myModal.style.display = 'none'; // Hide the modal
    }
});

// Handle form submission
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting the default way

    // Display an alert thanking the user
    alert("Thank you for your message! We will get back to you soon.");

    // Optionally, you can reset the form fields after submission
    contactForm.reset();

    // Close the modal after submission
    myModal.style.display = 'none';
});
