const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const ul = document.querySelector("#ingredients");

let arrOfIngredients = [];

ingredients.forEach(elem => { 
    let pointOfIngredient = document.createElement('li');
    pointOfIngredient.textContent = elem;
    arrOfIngredients.push(pointOfIngredient);

});

ul.append(...arrOfIngredients);
