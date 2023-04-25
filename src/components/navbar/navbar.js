var mobileMenu = document.getElementById('mobileMenu');
var menuIcon = document.getElementById('toggle_menu');
var navClose = document.getElementById('nav_close');

menuIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('show');
    menuIcon.style.display = 'none';
  });

navClose.addEventListener('click', function() {
    mobileMenu.classList.remove('show');
    menuIcon.style.display = 'block';
  });