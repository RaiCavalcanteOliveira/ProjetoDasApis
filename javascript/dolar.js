fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta => {
 return resposta.json()
}).then(economia => {
    console.log(economia);
    document.getElementById("dolar").innerHTML= "<p class='descricao'><span>Dólar :</span> "+economia.USDBRL.bid+ "</p>";
    document.getElementById("codigo").innerHTML= "<p class='descricao'><span>Code:</span> "+economia.USDBRL.code+"</p>";
    document.getElementById("nome").innerHTML= "<p class='descricao'> <span>Moeda: </span>"+economia.USDBRL.name+"</p>";
})
