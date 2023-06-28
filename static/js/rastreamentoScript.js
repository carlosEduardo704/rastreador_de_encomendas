let codigo = localStorage.getItem('codigo');

document.addEventListener('DOMContentLoaded', function(event){
    const codRastreamento = document.querySelector('h2');
    codRastreamento.textContent = codigo;

})




// Funcões que criam elementos

function spanDataHora(data, hora){
    const spanElement = document.createElement('span');
    spanElement.classList.add('spanDataHora');
    spanElement.innerHTML = `${data} ${hora}`
    return spanElement
}

function spanLocal(local){
    const spanElement = document.createElement('span');
    spanElement.classList.add('spanLocal')
    spanElement.innerHTML = `${local}`
    return spanElement
}

function divStatus(status){
    const divElement = document.createElement('div');
    divElement.classList.add('spanStatus')

    const strongElement = document.createElement('strong');
    strongElement.classList.add('statusPacote')

    divElement.append(checaStatusImg(status))
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
        // const situacao = document.getElementById('situacaoPacote');
        // situacao.textContent = dat[0].status;
        
        for(let i = 0; i < dados.eventos.length; i++){
            const dat = dados.eventos[i];
            const elemento = document.getElementById('informacoesPacotes');
            const liElement = document.createElement('li');
            elemento.appendChild(liElement)
            liElement.appendChild(spanDataHora(dat.data, dat.hora))
            liElement.appendChild(spanLocal(dat.local))
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

function checaStatusImg(statusImg){
    const imgElement = document.createElement('img');
    imgElement.classList.add('imgStatus');

    if(statusImg.includes('entregue')){
        imgElement.src = 'https://storage.cloud.google.com/package-track/entregue.webp';
        return imgElement
    }else if(statusImg.includes('saiu para entrega')){
        imgElement.src = 'https://storage.cloud.google.com/package-track/saiu_entregar.webp';
        return imgElement
    }else if(statusImg.includes('não localizado')){
        imgElement.src = 'https://storage.cloud.google.com/package-track/nao_localizado.webp';
        return imgElement
    }else if(statusImg.includes('Em trânsito') || statusImg.includes('Fiscalização') || statusImg.includes('encaminhado')){
        imgElement.src = 'https://storage.cloud.google.com/package-track/em_transito.webp';
        return imgElement
    }else if(statusImg.includes('postado') || statusImg.includes('recebido')){
        imgElement.src = 'https://storage.cloud.google.com/package-track/postado.webp';
        return imgElement
    }else {
        return ''
    }
}