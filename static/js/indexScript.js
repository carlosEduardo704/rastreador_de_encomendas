// "QP073635129BR"


var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

function pegaCodigo() {
  let codigo = document.getElementById("inputCodigo").value;

  return codigo
}

function rastreamento() {

  let codigo = pegaCodigo()

  fetch("https://api.linketrack.com/track/json?user=carlos_eduardo2761@hotmail.com&token=83429b38f609e7ee3bc0fb8b51e8ce84be546289fdb2a40207b0f4bc0c0452ad&codigo="+ `${codigo}`, requestOptions)
  .then(response => response.json())
  .then(data => console.log(data.eventos))
  .catch(error => console.log('error', error))
}
