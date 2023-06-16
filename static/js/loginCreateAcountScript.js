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
    let access_key = '79a8fc5f62c19a60bfa99202aeb84991'
    let url = `https://api.apilayer.com/email_verification/check?email=${email}`
    
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            if(error){
                console.log('erro', error)
            }
        })
}

function checaSenha(id, s2){
    // Password's requeriments
    let upperCases = /[A-Z]/;
    let lowerCase = /[a-z]/;
    let numbers = /[0-9]/;
    let specialCharacters = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

    let senha = document.getElementById(id).value;

    let element = document.getElementById(`errorMessage${s2}`);
    if(senha.length < 8){
        element.innerHTML = 'A senha deve conter no mínimo 8 caracteres!';
    }
    else if(upperCases.test(senha) == false){
        element.innerHTML = 'A senha deve conter pelo menos 1 letra maiúscula!';
    }
    else if(lowerCase.test(senha) == false){
        element.innerHTML = 'A senha precisa conter pelo menos 1 letra minúscula!';
    }
    else if(numbers.test(senha) == false){
        element.innerHTML = 'A senha deve conter pelos menos 1 número!';
    }
    else if(specialCharacters.test(senha) == false){
        element.innerHTML = 'A senha deve conter pelo menos 1 caractere especial!';
    }
    else{
        element.innerHTML = '';
        return true;
    }
   
}

