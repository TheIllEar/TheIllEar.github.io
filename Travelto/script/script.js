const modalContactBox = document.querySelector('.header-main__contacts--modal');
const modalContact = document.querySelector('#header-main__contacts-tel');
modalContact.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalContactBox.classList.toggle('header-main__contacts--active');
});
