const menuIcon = document.querySelector('.mobile-menu i');
const dropdown = document.querySelector('.mobile-menu-dropdown');

menuIcon.addEventListener('click', function() {
    dropdown.classList.toggle('active');
    
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});
