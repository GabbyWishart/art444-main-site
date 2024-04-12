
  function myMenu() {
    document.getElementById('mymenu').classList.toggle( 'open');
    document.getElementById('menuButton').classList.toggle('close');

  }

  function closemenu() {
    document.getElementById('mymenu').classList.remove( 'open');
    document.getElementById('menuButton').classList.remove('close');

  }

  function darkmode() {
    document.getElementsByClassName('body')[0].classList.toggle('body-dark-mode');

  }

