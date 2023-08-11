const fail = document.getElementById('fail-text');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const submit = document.getElementById('btn-submit');

function enviar() {
    let emailInput = document.getElementById('email');
    let email = emailInput.value;

    if (email == '') {
        fail.style.display = 'block';
        emailInput.style.border = '2px solid red';
    } else if (!emailRegex.test(email)) {
        fail.style.display = 'block';
        emailInput.style.border = '2px solid red';
    } else {
        alert("Email sended")
        fail.style.display = 'none';
        emailInput.style.border = 'none'
    }
}