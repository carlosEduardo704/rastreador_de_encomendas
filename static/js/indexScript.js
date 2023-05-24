// Funcão para checar se o codigo é válido.
function checaCodigo(){
    const codigo = document.getElementById('inputCodigo').value.toUpperCase();
    localStorage.setItem('codigo', codigo);

    if(codigo.length == 13){

        // Informações para API
        var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };

        let user = 'carlos_eduardo2761@hotmail.com';
        let token = '83429b38f609e7ee3bc0fb8b51e8ce84be546289fdb2a40207b0f4bc0c0452ad';
        let apiLink = `https://api.linketrack.com/track/json?user=${user}&token=${token}&codigo=${codigo}`;

        // API
        fetch(apiLink, requestOptions)
            .catch(error => {
            let elemento = document.getElementById('errorMessage');
            return elemento.innerHTML = 'Código inválido!'
            })
            .then(data => {
                window.location.href = 'templates/rastreamento.html'      
            })
        
    }

    else{
        let elemento = document.getElementById('errorMessage');
        return elemento.innerHTML = 'Código inválido!'
    }

}
