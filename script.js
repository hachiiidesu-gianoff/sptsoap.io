const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;
  const url = `mailto:tolentinogian150@gmail.com?subject=Message from ${name} (${email})&body=${message}`;
  window.location.href = url;
});

function myFunction() {
  window.alert("Are you ok?");
  window.alert("Hello World");
  window.alert("Love Yourself");
  window.alert("I love You")
}