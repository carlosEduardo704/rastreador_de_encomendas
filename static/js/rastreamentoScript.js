let codigo = localStorage.getItem('codigo');

document.addEventListener('DOMContentLoaded', function(event){
    const codRastreamento = document.querySelector('h2');
    codRastreamento.textContent = codigo;

})




// Funcões que criam elementos

function divDataHora(data, hora){
    const divElement = document.createElement('span');
    divElement.classList.add('spanDataHora');
    divElement.innerHTML = `${data} ${hora}`
    return divElement
}

function divLocal(local){
    const divElement = document.createElement('span');
    divElement.classList.add('spanLocal')
    divElement.innerHTML = `${local}`
    return divElement
}

function divStatus(status){
    const divElement = document.createElement('span');
    const strongElement = document.createElement('strong');

    divElement.classList.add('spanStatus')
    divElement.appendChild(strongElement)
    strongElement.innerHTML = `${status}`
    return divElement
}


// Configurações API
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

const user = 'carlos_eduardo2761@hotmail.com';
const token = '83429b38f609e7ee3bc0fb8b51e8ce84be546289fdb2a40207b0f4bc0c0452ad';
const apiLink = `https://api.linketrack.com/track/json?user=${user}&token=${token}&codigo=${codigo}`;

// API
fetch(apiLink, requestOptions)
    .catch(err => console.log(err))
    .then(response => response.json())
    .then(dados => {
        const dat = dados.eventos;
        const situacao = document.getElementById('situacaoPacote');
        situacao.textContent = dat[0].status;
        
        for(let i = 0; i < dados.eventos.length; i++){
            const dat = dados.eventos[i];
            const elemento = document.getElementById('informacoesPacotes');
            const liElement = document.createElement('li');
            elemento.appendChild(liElement)
            liElement.appendChild(divDataHora(dat.data, dat.hora))
            liElement.appendChild(divLocal(dat.local))
            liElement.appendChild(divStatus(dat.status))

        }
           
    })


// Função para checar se o codigo é válido.

function checaCodigo(){
    const codigo = document.getElementById('inputCodigo').value.toUpperCase();
    localStorage.setItem('codigo', codigo);

    if(codigo.length == 13){

        // API
        fetch(apiLink, requestOptions)
            .catch(error => {
                alert('Código inválido')
            })
            .then(data => {
                location.reload();      
            })
        
    }

    else{
        alert('Código inválido')
    }

}
