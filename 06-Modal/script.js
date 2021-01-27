'use strict';
//79 & 80 lecture video
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//function to open
const openModal = function () {
  //console.log('Button clicked');
  //do not need . in the below statement
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//function to close
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//close model window and remove overlay when clicking the close 'X'
btnCloseModal.addEventListener('click', closeModal);

//remove overlay and close model window when clicking anywhere on the overlay
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //console.log('A key was pressed');
  //console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
