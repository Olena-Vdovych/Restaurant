const navbarToggler = document.querySelector('.navbar__toggler span');
const navbarCollapse = document.querySelector('.navbar__collapse');

navbarToggler.addEventListener('click', () => {
    let style = window.getComputedStyle(navbarCollapse);
    if (style.display == 'none') {
        navbarCollapse.style.display = 'block';
    } else {
        navbarCollapse.style.display = 'none';
    }
})