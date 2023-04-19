const dropdownToggle = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});



