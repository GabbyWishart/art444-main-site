
const faqToggle = document.querySelectorAll ('.faq-toggle') 
for (let i = 0; i < faqToggle.length; i++) { 
  faqToggle[i].addEventListener("click", function() { this.classList.toggle('faq-open') })
}


function darkmode() {

  const headlinkdark = document.querySelectorAll('.head-link') 
  for (let i = 0; i < headlinkdark.length; i++) { 
  headlinkdark[i].classList.toggle('head-link-dark-mode'); }

  const gallerydark = document.querySelectorAll('.image') 
  for (let i = 0; i < gallerydark.length; i++) { 
  gallerydark[i].classList.toggle('image-dark'); }

  const skillsdark = document.querySelectorAll('.skills1') 
  for (let i = 0; i < skillsdark.length; i++) { 
  skillsdark[i].classList.toggle('skills1-dark'); }

  const h2dark = document.querySelectorAll('.h2') 
  for (let i = 0; i < h2dark.length; i++) { 
  h2dark[i].classList.toggle('h2-dark'); }

  const h3dark = document.querySelectorAll('h3') 
  for (let i = 0; i < h3dark.length; i++) { 
  h3dark[i].classList.toggle('h3-dark'); }

  const hrdark = document.querySelectorAll('hr') 
  for (let i = 0; i < hrdark.length; i++) { 
  hrdark[i].classList.toggle('hr-dark'); }


 
  document.getElementsByTagName('body')[0].classList.toggle('body-dark');
  
  document.getElementsByClassName('dark-mode-button')[0].classList.toggle('light-mode-button');
  

  document.getElementsByTagName('form')[0].classList.toggle('form-dark');


  document.getElementsByClassName('main_nav')[0].classList.toggle('main_nav_dark_mode');
  


  document.getElementsByClassName('main_header')[0].classList.toggle('main_header_dark_mode');
  document.getElementById('header').classList.toggle('header_dark_mode');
  document.getElementsByClassName('hello_im')[0].classList.toggle('hello_im_dark_mode');

  document.getElementById('about').classList.toggle('about_dark_mode');
  document.getElementsByClassName('about_me_image') [0].classList.toggle('about_me_image_dark');

  document.getElementById('skills').classList.toggle('skills_dark_mode');

  document.getElementById('gallery').classList.toggle('gallery-dark-mode');

  
  document.getElementById('faqs').classList.toggle('faqs-dark');
  document.getElementById('contact').classList.toggle('contact-dark');

  document.getElementById('name').classList.toggle('name-dark');
  document.getElementById('email').classList.toggle('email-dark');
  document.getElementById('message').classList.toggle('message-dark');

  
  document.getElementsByClassName('software') [0].classList.toggle('software-dark');
  document.getElementsByClassName('personal')[0].classList.toggle('personal-dark');

  document.getElementsByClassName('vertical_line_left')[0].classList.toggle('vertical_line_left_dark');
  document.getElementsByClassName('vertical_line_right')[0].classList.toggle('vertical_line_right_dark');

  document.getElementsByClassName('horizontal_line_1')[0].classList.toggle('horizontal_line_1_dark');
  document.getElementsByClassName('horizontal_line_2')[0].classList.toggle('horizontal_line_2_dark');
  document.getElementsByClassName('horizontal_line_3')[0].classList.toggle('horizontal_line_3_dark');
  document.getElementsByClassName('horizontal_line_4')[0].classList.toggle('horizontal_line_4_dark');
  document.getElementsByClassName('horizontal_line_5')[0].classList.toggle('horizontal_line_5_dark');
  document.getElementsByClassName('horizontal_line_6')[0].classList.toggle('horizontal_line_6_dark');
  document.getElementsByClassName('horizontal_line_7')[0].classList.toggle('horizontal_line_7_dark');
  document.getElementsByClassName('horizontal_line_8')[0].classList.toggle('horizontal_line_8_dark');

  document.getElementsByClassName('mobile_menu')[0].classList.toggle('mobile_menu_dark');
  document.getElementsByClassName('mobile-menu-popout')[0].classList.toggle('mobile-menu-popout-dark');
  document.getElementsByClassName('close')[0].classList.toggle('close-dark');

  document.getElementsByTagName('p').classList.toggle('p-dark');

  


  



}


 function myMenu() {
    document.getElementById('mymenu').classList.toggle( 'open');
    document.getElementById('menuButton').classList.toggle('close');

  }

  function closemenu() {
    document.getElementById('mymenu').classList.remove( 'open');
    document.getElementById('menuButton').classList.remove('close');

  }

  // // function faqtoggle() {
  //   document.getElementsByClassName ('faq-toggle').classList.toggle ('faq-open')
  // // }