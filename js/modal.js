let cartButton = document.querySelector('#nav--cartopener');
let cartClose = document.querySelector('#cart--close');
let cartModal = document.querySelector('.cart');

let requestButton = document.querySelector('#items--requestopener');
let requestClose = document.querySelector('.request--buttonsleft');
let requestModal = document.querySelector('.request');

cartButton.onclick = function() {
  cartModal.style.display = 'block';
  document.body.classList.add('lock-scroll');
}

cartClose.onclick = function() {
  cartModal.style.display = 'none';
  document.body.classList.remove('lock-scroll');
}

requestButton.onclick = function() {
  requestModal.style.display = 'block';
  document.body.classList.add('lock-scroll');
}

requestClose.onclick = function() {
  requestModal.style.display = 'none';
  document.body.classList.remove('lock-scroll');
}