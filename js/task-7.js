const form = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');


form.addEventListener('input', textSize);

function textSize() {
    text.setAttribute("style", `font-size:${form.value}px`);
}