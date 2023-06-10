const emailValidator = require('email-validator');
const passwordValidator = require('password-validator');

function checaEmail(id){
    let email = document.getElementById(`${id}`).value;
    
    return console.log(emailValidator.validate(email))
}

function checaSenha(id){
    const schema = new passwordValidator();

    schema
        .is().min(8) // min 8 characters
        .is().max(100) // max 1 characters
        .has().uppercase() // min 1 capital letter
        .has().lowercase() // have lowercase
        .has().digits(1) // min 1 number
        .has().not().spaces(); // don't have spaces
    
    let senha = document.getElementById(`${id}`);
    
    return console.log(schema.validate(senha))
}
