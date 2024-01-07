//Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

//Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

//Klik di luar elemen
const hamburger = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbxZSyWO86MFjap0YGniJVnTCObcY5P79VjX8Uq3xEk-vHKIti6tdWRshUS_A5jK2OeQ0w/exec';
const form = document.forms['Amy-Boutique'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // ketika tombol submit di klik
  // tampilkan tombol loading, hilangkan tombol kirim

  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      //tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      //tampilkan alert
      myAlert.classList.toggle('d-none');
      //reset form
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
