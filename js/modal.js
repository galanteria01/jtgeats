let cartButton = document.querySelector('#nav--cartopener');
let cartClose = document.querySelector('#cart--close');

let cartModal = document.querySelector('.cart');

cartButton.onclick = function() {
  cartModal.style.display = 'block';
}

cartClose.onclick = function() {
  cartModal.style.display = 'none';
}

// Event to disable modal as soon as click is observed
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}