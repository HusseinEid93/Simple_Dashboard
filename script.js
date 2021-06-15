const toggleBtn = document.querySelector('.toggle');
const navigationMenu = document.querySelector('.navigation');
const main = document.querySelector('main');
const closeBtn = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const viewAllBtn = document.querySelector('.btn');
const hiddenRows = document.querySelectorAll('tr.hide');


toggleBtn.addEventListener('click', () => {
   navigationMenu.classList.toggle('active');
   main.classList.toggle('active');
   overlay.classList.add('active');
});


closeBtn.addEventListener('click', () => {
   navigationMenu.classList.remove('active');
   overlay.classList.remove('active');
});


overlay.addEventListener('click', () => closeBtn.click());

viewAllBtn.addEventListener('click', e => {
   e.preventDefault();
   viewAllBtn.classList.toggle('active');
   hiddenRows.forEach(row => row.classList.toggle('hide'))
});