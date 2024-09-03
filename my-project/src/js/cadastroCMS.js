// Register account CMS
const nameInput = document.getElementById('nome')
const surnameInput = document.getElementById('sobrenome')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('senha')
const registerButton = document.getElementById('botao')

const inputValidationErrorMessage = () => {
    Swal.fire({
        position: 'center',
        timer: 2000,
        title: '<p class="text-2xl text-blue-3"> Preencha todas as informações corretamente<p>',
        icon: 'warning',
        iconColor: '#E8B455',
        showConfirmButton: false,
        width: '25rem',
        heightAuto: false
    })  
}

const userInfoValidation = () => {
    let status = true
    if (
        nameInput.value == '' ||
        surnameInput.value == '' ||
        emailInput.value == '' ||
        !emailInput.value.includes('@') ||
        !emailInput.value.includes('.com') ||
        passwordInput.value == '' 
    ) {
        console.log(oioioio)
        inputValidationErrorMessage()
        status = false
    }
    return status
}

registerButton.addEventListener('click', () => {
    if(userInfoValidation()){
        alert(alooooo)
    }
})

