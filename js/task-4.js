const incrementButton = document.querySelector('button[data-action="increment"] ');

const decrementButton = document.querySelector('button[data-action="decrement"] ');

const numberValue = document.querySelector('#value')

let counterValue = 0


incrementButton.addEventListener('click', increment);

decrementButton.addEventListener('click', decrement);

function increment () {

  counterValue += 1;

  numberValue.textContent = counterValue;
}

function decrement () {

  counterValue -= 1;

  numberValue.textContent = counterValue;
}
