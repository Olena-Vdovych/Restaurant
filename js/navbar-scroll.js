const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    if (window.scrollY > navbar.offsetTop) {
        navbar.classList.add('navbar-fixed');
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-fixed');
        navbar.classList.remove('navbar-scrolled');
    }
});