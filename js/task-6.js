const form = document.querySelector('input#validation-input');


form.addEventListener('blur', verification);

function verification (event) {
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.add('valid');
        if (event.currentTarget.classList.contains('invalid')) {
            event.currentTarget.classList.remove('invalid')
        }
    } else {
        event.currentTarget.classList.add('invalid');
        if (event.currentTarget.classList.contains('valid')) {
            event.currentTarget.classList.remove('valid')
        }

    }

}