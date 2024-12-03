var openModalButton = document.getElementById('openModalButton');
var myModal = document.getElementById('myModal');
var closeButton = document.querySelector('.close');
var contactForm = document.getElementById('contact-form');

var toggleModal = (action) => myModal.style.display = action;

openModalButton.addEventListener('click', () => toggleModal('flex'));
closeButton.addEventListener('click', () => toggleModal('none'));

window.addEventListener('click', (event) => event.target === myModal && toggleModal('none'));

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert("Thank you for your message!");
    contactForm.reset();
    toggleModal('none');
});

