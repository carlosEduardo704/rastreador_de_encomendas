function checaEmail(id){
    // API settings
    
    let myHeaders = new Headers();
    myHeaders.append("apikey", "CZy3sPQpJoi0P43NITTbvqzEFjyL5p9J");


    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };
    
    let email = document.getElementById(id).value;
    let url = `https://api.apilayer.com/email_verification/check?email=${email}`
    
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.success == false){
                let element = document.getElementById('errorMessageEmail');
                element.innerHTML = 'Email inválido!'
                return false
            }
            else{
                return true;
            }
        })
}

function checaSenha(id){
    // Password's requeriments
    let upperCases = /[A-Z]/;
    let lowerCase = /[a-z]/;
    let numbers = /[0-9]/;
    let specialCharacters = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

    let senha = document.getElementById('senha').value;
    let cSenha = document.getElementById('cSenha').value;

    let element = document.getElementById(`errorMessage${id}`);
    if(senha.length < 8){
        element.innerHTML = 'A senha deve conter no mínimo 8 caracteres!'
        return false
    }
    else if(upperCases.test(senha) == false){
        element.innerHTML = 'A senha deve conter pelo menos 1 letra maiúscula!'
        return false
    }
    else if(lowerCase.test(senha) == false){
        element.innerHTML = 'A senha precisa conter pelo menos 1 letra minúscula!'
        return false
    }
    else if(numbers.test(senha) == false){
        element.innerHTML = 'A senha deve conter pelos menos 1 número!'
        return false
    }
    else if(specialCharacters.test(senha) == false){
        element.innerHTML = 'A senha deve conter pelo menos 1 caractere especial!'
        return false
    }
    else if(senha != cSenha) {
        element.innerHTML = 'As senhas não coincidem!'
        return false
    }
    else{
        element.innerHTML = ''
        return true;
    }
   
}

