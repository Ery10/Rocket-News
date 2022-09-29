const inputEmail = document.getElementById('input-email');
const button = document.getElementById('button');

function start() {
    inputEmail.focus();
    sendEmail();
}
function warningAlert(message) {
    alert(message);
}
function emptyInput() {
    if(inputEmail.value === ''){
        warningAlert('E-mail não preenchido !')
        inputEmail.focus();
    }else {
        warningAlert('E-mail enviado com sucesso !!!')
    }
}
function sendEmail() {
    button.addEventListener('click', () => {
        emptyInput();
    })
}

start();
