var palavras = [
    "o lexp.dev está online!"
  ];
  var mensagemElemento = document.getElementById("message");
  var indiceAleatorio = Math.floor(Math.random() * palavras.length);
  var mensagemAleatoria = palavras[indiceAleatorio];
  mensagemElemento.textContent = mensagemAleatoria;
  
