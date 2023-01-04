const emailInput = document.querySelector('input[type="email"]')

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}


const handleEmailBlur = ({ target : input}) => {
    const { value : email } = input

    const isValidEmail = validateEmail(email)

    if(!isValidEmail){
        emailInput.setAttribute('aria-invalid', true)
    }else {
        emailInput.setAttribute('aria-invalid', false)
    }
}

emailInput.addEventListener('blur', handleEmailBlur)


const formElement = document.querySelector('form')

formElement.addEventListener('submit', (event) => {
    event.preventDefault()
})