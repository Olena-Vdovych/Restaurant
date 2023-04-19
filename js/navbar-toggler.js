const navbarToggler = document.querySelector('.navbar__toggler span');
const navbarCollapse = document.querySelector('.navbar__collapse');
const navbarBtn = document.querySelector('.navbar__toggler');

navbarToggler.addEventListener('click', () => {
    let style = window.getComputedStyle(navbarCollapse);
    if (style.display == 'none') {
        navbarCollapse.style.display = 'block';
        navbarBtn.style.border = '1px solid white';
    } else {
        navbarCollapse.style.display = 'none';
        navbarBtn.style.border = 'none';
    }
})