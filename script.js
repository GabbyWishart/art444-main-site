
function darkmode() {
  document.getElementsByClassName('main_nav')[0].classList.toggle('main_nav_dark_mode');
  document.getElementsByClassName('main_header')[0].classList.toggle('main_header_dark_mode');
  document.getElementsByClassName('about')[0].classList.toggle('about_dark_mode');
  document.getElementsByClassName('about_me_image')[0].classList.toggle('about_me_image_dark_mode');
  document.getElementById('body')[0].classList.toggle('body_dark_mode');





}


 function myMenu() {
    document.getElementById('mymenu').classList.toggle( 'open');
    document.getElementById('menuButton').classList.toggle('close');

  }

  function closemenu() {
    document.getElementById('mymenu').classList.remove( 'open');
    document.getElementById('menuButton').classList.remove('close');

  }

  