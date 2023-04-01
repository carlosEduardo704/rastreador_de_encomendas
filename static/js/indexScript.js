var usuario = ""
var token = ""
var codigo = "QP073635129BR"


var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo="+ `${codigo}`, requestOptions)
  .then(response => response.json())
  .then(data => console.log(data.eventos[0]))
  .catch(error => console.log('error', error));