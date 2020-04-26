document.querySelector('input#name-input')
.addEventListener('input', yourName)

function yourName() {
        if (event.currentTarget.value == '') {
                document.querySelector('span#name-output').textContent = 'незнакомец'
        } else {
                document.querySelector('span#name-output').textContent = event.currentTarget.value;
        }

}