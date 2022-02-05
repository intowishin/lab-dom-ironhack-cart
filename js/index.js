// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerText = price * quantity;
  return parseFloat(subTotal.innerText);
}

//ITERATION 2
//ITERATION 3
function calculateAll(product) {
  let total = 0;
  const products = document.getElementsByClassName('product');

  for (let i = 0; i < products.length; i++) {
    total = total + updateSubtotal(products[i]);
  }

  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
