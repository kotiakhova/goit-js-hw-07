document.querySelector('button[data-action="render"]' ).addEventListener('click', (event) => {
    
    
    createBoxes(document.querySelector('div#controls' ).firstElementChild.value);

})

document.querySelector('button[data-action="destroy"]' ).addEventListener('click', (event) => {
    
    
    destroyBoxes();

})

function createBoxes(amount) {
    document.querySelector('div#boxes').innerHTML = '';
    let arrOfDiv = [];
    let size = 30;
    for (let i = 0; i < amount; i += 1) {
        let point = document.createElement('div');
        point.setAttribute("style", `width:${size}px; height:${size}px;  background: rgb(${Math.round(Math.random() * (255 - 1) + 1)}, ${Math.round(Math.random() * (255 - 1) + 1)}, ${Math.round(Math.random() * (255 - 1) + 1)});`);
        size = size + 10;
        arrOfDiv.push(point);
        
      }
      console.log(arrOfDiv)
      document.querySelector('div#boxes').append(...arrOfDiv)
}

function destroyBoxes() {
    document.querySelector('div#boxes').innerHTML = '';
}
