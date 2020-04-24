const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];



const ul = document.querySelector("#gallery");

const htmlCode = createBigLine(images);

ul.classList.add('flexbox');


ul.insertAdjacentHTML('afterbegin', htmlCode);

function createBigLine (elements){
    let bigLine = elements.map(elem => createTemplateLine(elem));
    return bigLine.join('')

}

function createTemplateLine ({url, alt}) {
    let line = `<li><img width = '400' src=${url} alt=${alt}></li>`
    return line;
}

