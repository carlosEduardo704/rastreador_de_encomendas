let user = 'carlos_eduardo2761@hotmail.com';
let token = '83429b38f609e7ee3bc0fb8b51e8ce84be546289fdb2a40207b0f4bc0c0452ad'
let codigo = 'QP073635129BR'

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};


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

fetch(`https://api.linketrack.com/track/json?user=${user}&token=${token}&codigo=${codigo}`, requestOptions)
    .then(response => response.json())
    .then(dados => {
        const dat = dados.eventos;
        for(let i = 0; i < dados.eventos.length; i++){
            const dat = dados.eventos[i];
            const elemento = document.getElementById('informacoesPacotes');
            const liElement = document.createElement('li');
            elemento.appendChild(liElement);
            liElement.appendChild(divDataHora(dat.data, dat.hora))
            liElement.appendChild(divLocal(dat.local))
            liElement.appendChild(divStatus(dat.status))

        }
        

        
        
    })
    .catch(err => console.log(err))
