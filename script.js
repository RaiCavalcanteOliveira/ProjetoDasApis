// //Metodo fetch () para buscar o arquivo dados.json ou 
// qualquer API,transformando o resultado em um objeto usando o método response.json.

fetch('dados.json')
    .then(response => response.json())
    .then(corpo =>{
        document.getElementById('imagem').innerHTML= 
        corpo.item1.imagem;
        document.getElementById('nome').innerHTML= 
        "Nome: "+corpo.item1.name;
        document.getElementById('reino').innerHTML= 
        "Reino: "+corpo.item1.reino;
        document.getElementById('classe').innerHTML= 
        "Classe: "+corpo.item1.classe;
        document.getElementById('preco').innerHTML=
        "Preço: R$ "+corpo.item1.valor;



        document.getElementById('imagem2').innerHTML= 
        corpo.item2.imagem;
        document.getElementById('nome2').innerHTML= 
        "Nome: "+corpo.item2.name;
        document.getElementById('reino2').innerHTML= 
        "Reino: "+corpo.item2.reino;
        document.getElementById('classe2').innerHTML= 
        "Classe: "+corpo.item2.classe;
        document.getElementById('preco2').innerHTML=
        "Preço: R$ "+corpo.item2.valor;
      
        
        document.getElementById('imagem3').innerHTML= 
        corpo.item3.imagem;
        document.getElementById('nome3').innerHTML= 
        "Nome: "+corpo.item3.name;
        document.getElementById('reino3').innerHTML= 
        "Reino: "+corpo.item3.reino;
        document.getElementById('classe3').innerHTML= 
        "Classe: "+corpo.item3.classe;
        document.getElementById('preco3').innerHTML=
        "Preço: R$ "+corpo.item3.valor;
       

    });
