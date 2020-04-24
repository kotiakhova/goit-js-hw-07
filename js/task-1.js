const arrOfCategories = document.querySelectorAll(".item");

console.log(`В списке ${arrOfCategories.length} категории.`)

arrOfCategories.forEach(elem => { 
    let arrOfChildren = elem.querySelectorAll("li");
    let categoriesName = elem.querySelector("h2");
    console.log(`
        Категория: ${categoriesName.textContent};
        Количество элементов: ${arrOfChildren.length}
    `);
});