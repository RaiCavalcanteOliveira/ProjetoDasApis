const myArray = '{"nome": "Lissandra", "poder" : "900", "vida" : "1200"}';
const myArray2 = '{"nome": "Lux", "poder" : "100", "vida" : "1000"}';
const myArray5 = '{"nome": "Ivern", "poder" : "900", "vida" : "400"}';
const myArray4 = '{"nome": "Taric", "poder" : "100", "vida" : "1400"}';
const myArray3 = '{"nome": "Sona", "poder" : "500", "vida" : "1"}';
const myArray6= '{"nome": "Yuumi", "poder" : "10", "vida" : "1"}';




const json = JSON.parse(myArray);
const json2 = JSON.parse(myArray2);
const json3 = JSON.parse(myArray3);
const json4 = JSON.parse(myArray4);
const json5 = JSON.parse(myArray5);
const json6= JSON.parse(myArray6);


  const vidalissandra=json.vida;

  
  const skillqlissandra=

document.getElementById("myButton").addEventListener("click", function () {

  document.getElementById("exibeinformacoes").innerHTML ="<img src='imagens/Lissandra.jpg' width='200px' alt=''>" + "<br>" + "<p class='nome' >Habilidades</p>" + "<br>" + "<div class='englobahabilidades'>" + "<img  class='habilidades' src='imagens/wlissandra.png'  onclick='wlissandra()'  style='cursor:pointer' alt=''></img>" + "<img class='habilidades' onclick='qlissandra()' src='imagens/qlissandra.png' style='cursor:pointer' alt=''>" + "<img   class='habilidades' src='imagens/rlissandra.png' onclick='rlissandra()' style='cursor:pointer' alt=''>" + " <img  class='habilidades' onclick='elissandra()' src='imagens/elissandra.png' style='cursor:pointer' alt=''>" + "</div>"+"<div class='custoshabilidades'><p>50/<span class='dano'>20</span></p><p>100/<span class='dano'>70</span></p><p>40/<span class='dano'>10</span></p><p>30/<span class='dano'>30</span></p></div>" + "<p class='nome'>" + json.nome + "</p>" + "<br>" + "<p class='p1'>" + "Poder: " +"<span id='manalissandra'>"+json.poder+"</span>" + "</p>" + "<p class='p2'>" + "Vida: " + "<span id='vidinhaliss'>"+json.vida+"</span>"+ "</p>";




})




document.getElementById("myButton2").addEventListener("click", function () {
  document.getElementById("exibeinformacoes2").innerHTML = "<img src='imagens/sona.jpg' width='200px' alt=''>" + "<br>" + "<p class='nome' >Habilidades</p>" + "<br>" + "<div class='englobahabilidades'>" + "<img class='habilidades' onclick='wlux()' src='imagens/wlux.png' style='cursor:pointer'  alt=''></img>" + "<img  class='habilidades' onclick='qlux()' src='imagens/qlux.png' style='cursor:pointer'  alt=''>" + "<img  class='habilidades' onclick='rlux()' src='imagens/rlux.png'  style='cursor:pointer'  alt=''>" + " <img class='habilidades' onclick='elux()'  src='imagens/elux.png' style='cursor:pointer'  alt=''>" + "</div>"+"<div class='custoshabilidades'><p>10/<span class='dano'>30</p><p>30/<span class='dano'>50</p><p>10/<span class='dano'>1000</span></p><p>10/<span class='dano'>100</span></p></div>" + "<p class='nome'>" + json2.nome + "</p>" + "<br>" + "<p class='p1'>" + "Poder: " +"<span id='manalux' >"+ json2.poder+"</span>" + "</p>" + "<p class='p2'>" + "Vida: " +"<span id='vidinhalux'>"+ json2.vida+"<span>"+ "</p>";

})







document.getElementById("myButton3").addEventListener("click", function () {
  document.getElementById("exibeinformacoes2").innerHTML = "<img src='imagens/minionsona.png' width='200px' alt=''>" + "<br>" + "<p class='nome' >Habilidades</p>" + "<br>" + "<div class='englobahabilidades'>" + "<img class='habilidades' onclick='wsona()' src='imagens/wsona.jpg' style='cursor:pointer'  alt=''></img>" + "<img  class='habilidades' onclick='qsona()' src='imagens/qsona.jpg' style='cursor:pointer'  alt=''>" + "<img  class='habilidades' onclick='rsona()' src='imagens/rsona.jpg'  style='cursor:pointer'  alt=''>" + " <img class='habilidades' onclick='esona()'  src='imagens/esona.jpg' style='cursor:pointer'  alt=''>" + "</div>" + "<p class='nome'>" + json3.nome + "</p>" + "<br>" + "<p class='p1'>" + "Poder: " +"<span id='manasona' >"+ json3.poder+"</span>" + "</p>" + "<p class='p2'>" + "Vida: " +"<span id='vidinhasona'>"+ json3.vida+"</span>"+ "</p>";

})


document.getElementById("myButton4").addEventListener("click", function () {
  document.getElementById("exibeinformacoes2").innerHTML = "<img src='imagens/ivern.jpg' width='200px' alt=''>" + "<br>" + "<p class='nome' >Habilidades</p>" + "<br>" + "<div class='englobahabilidades'>" + "<img class='habilidades' onclick='wsona()' src='imagens/eivern.png' style='cursor:pointer'  alt=''></img>" + "<img  class='habilidades' onclick='qsona()' src='imagens/IvernR.png' style='cursor:pointer'  alt=''>" + "<img  class='habilidades' onclick='rsona()' src='imagens/qivern.png'  style='cursor:pointer'  alt=''>" + " <img class='habilidades' onclick='esona()'  src='imagens/wivern.png' style='cursor:pointer'  alt=''>" + "</div>" + "<p class='nome'>" + json5.nome + "</p>" + "<br>" + "<p class='p1'>" + "Poder: " +"<span id='manasona' >"+ json5.poder+"</span>" + "</p>" + "<p class='p2'>" + "Vida: " +"<span id='vidinhasona'>"+ json5.vida+"</span>"+ "</p>";
})

document.getElementById("myButton5").addEventListener("click", function () {
  document.getElementById("exibeinformacoes2").innerHTML = "<img src='imagens/taric.jpg' width='200px' alt=''>" + "<br>" + "<p class='nome' >Habilidades</p>" + "<br>" + "<div class='englobahabilidades'>" + "<img class='habilidades' onclick='wsona()' src='imagens/wtaric.png' style='cursor:pointer'  alt=''></img>" + "<img  class='habilidades' onclick='qsona()' src='imagens/qtaric.png' style='cursor:pointer'  alt=''>" + "<img  class='habilidades' onclick='rsona()' src='imagens/rtaric.png'  style='cursor:pointer'  alt=''>" + " <img class='habilidades' onclick='esona()'  src='imagens/etaric.png' style='cursor:pointer'  alt=''>" + "</div>" + "<p class='nome'>" + json4.nome + "</p>" + "<br>" + "<p class='p1'>" + "Poder: " +"<span id='manasona' >"+ json4.poder+"</span>" + "</p>" + "<p class='p2'>" + "Vida: " +"<span id='vidinhasona'>"+ json4.vida+"</span>"+ "</p>";
})

document.getElementById("myButton6").addEventListener("click", function () {
  document.getElementById("exibeinformacoes2").innerHTML = "<img src='imagens/Yuumi.jpg' width='200px' alt=''>" + "<br>" + "<p class='nome' >Habilidades</p>" + "<br>" + "<div class='englobahabilidades'>" + "<img class='habilidades' onclick='wsona()' src='imagens/wyuumi.png' style='cursor:pointer'  alt=''></img>" + "<img  class='habilidades' onclick='qsona()' src='imagens/qyuumi.png' style='cursor:pointer'  alt=''>" + "<img  class='habilidades' onclick='rsona()' src='imagens/ryuumi.png'  style='cursor:pointer'  alt=''>" + " <img class='habilidades' onclick='esona()'  src='imagens/eyuumi.png' style='cursor:pointer'  alt=''>" + "</div>" + "<p class='nome'>" + json6.nome + "</p>" + "<br>" + "<p class='p1'>" + "Poder: " +"<span id='manasona' >"+ json6.poder+"</span>" + "</p>" + "<p class='p2'>" + "Vida: " +"<span id='vidinhasona'>"+ json6.vida+"</span>"+ "</p>";
})




function wlissandra(){

  let skillwlissandra=20;
  let podergasto=50;
  document.getElementById('vidinhalux').innerHTML=json2.vida-=skillwlissandra;

  document.getElementById('manalissandra').innerHTML=json.poder-=podergasto;
  

  if(json.poder<=0){
    window.alert("Lissandra perdeu");
    window.location.reload();
  }else if(json2.vida<=0 || json3.vida<=0){
    window.alert("Lissandra perdeu");
    window.location.reload();
  }


}


function rlissandra(){
  let skillrlissandra=70;
  let podergasto=100;
  
  document.getElementById('vidinhalux').innerHTML = json2.vida-=skillrlissandra;

  document.getElementById('manalissandra').innerHTML=json.poder-=podergasto;

  if(json.poder<=0){
    window.alert("Lissandra perdeu");
    window.location.reload();
  }else if(json2.vida<=0 || json3.vida<=0){
    window.alert("Lissandra perdeu");
    window.location.reload();
  }
}


function qlissandra(){
 
  let skillqlissandra=10;
  let podergasto=40;
  
  document.getElementById('vidinhalux').innerHTML = json2.vida-=skillqlissandra;

  document.getElementById('manalissandra').innerHTML=json.poder-=podergasto;

  if(json.poder<=0){
    window.alert("Lissandra perdeu");
    window.location.reload();
  }else if(json2.vida<=0){
    window.alert("Lissandra perdeu");
    window.location.reload();
  }
}





function elissandra(){

  let skillelissandra=30;
  let podergasto=30;
  


  document.getElementById('vidinhalux').innerHTML = json2.vida-=skillelissandra;
 
  document.getElementById('manalissandra').innerHTML=json.poder-=podergasto;

  if(json.poder<=0){
    window.alert("Lissandra perdeu");
    window.location.reload();
  }else if(json2.vida<=0){
    window.alert("Lissandra perdeu");
    window.location.reload();
  }
}


function wlux(){
  let skillwlux=30;
  let podergasto=10;

  document.getElementById('vidinhaliss').innerHTML = json.vida-=skillwlux;
  document.getElementById('manalux').innerHTML=json2.poder-=podergasto;

  if(json2.poder<=0){
    window.alert("Lux perdeu");
    window.location.reload();
  }else if(json.vida<=0){
    window.alert("Lux ganhou");
    window.location.reload();
  }

}
function qlux(){

  let skillqlux=50;
  let podergasto=30;

  document.getElementById('vidinhaliss').innerHTML = json.vida-=skillqlux;
  document.getElementById('manalux').innerHTML=json2.poder-=podergasto;


  if(json2.poder<=0){
    window.alert("Lux perdeu");
    window.location.reload();
  }else if(json.vida<=0){
    window.alert("Lux ganhou");
    window.location.reload();
  }

}

function elux(){

  let skillelux=100;
  let podergasto=10;
  document.getElementById('vidinhaliss').innerHTML = json.vida-=skillelux;
  document.getElementById('manalux').innerHTML=json2.poder-=podergasto;


  if(json2.poder<=0){
    window.alert("Lux perdeu");
    window.location.reload();
  }else if(json.vida<=0){
    window.alert("Lux ganhou");
    window.location.reload();
  }

}
function rlux(){
  let skillrlux=1000;
  let podergasto=10;

  document.getElementById('vidinhaliss').innerHTML = json.vida-=skillrlux;
  document.getElementById('manalux').innerHTML=json2.poder-=podergasto;


  if(json2.poder<=0){
    window.alert("Lux perdeu");
    window.location.reload();
  }else if(json.vida<=0){
    window.alert("Lux ganhou");
    window.location.reload();
  }

}









