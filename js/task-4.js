const incrementButton = document.querySelector('button[data-action="increment"] ');

const decrementButton = document.querySelector('button[data-action="decrement"] ');

const numberValue = document.querySelector('#value')

let counterValue = 0


incrementButton.addEventListener('click', (event) => increment(numberValue));

decrementButton.addEventListener('click', (event) => decrement(numberValue));

function increment (value) {

  counterValue += 1;

  value.textContent = counterValue;
}

function decrement (value) {

  counterValue -= 1;

  value.textContent = counterValue;
}
