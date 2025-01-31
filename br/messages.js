var palavras = [
    "lexpdev passou aqui",
    "surfando na internet...",
    "rm -rf /*",
    "./lexpdev.sh",
    "i use arch btw",
    ":(){:|:&};:",
    '¯\\_(ツ)_/¯',
    'ᕕ( ᐛ )ᕗ',
    '+500 linhas de CSS!'
  ];
  var mensagemElemento = document.getElementById("message");
  var indiceAleatorio = Math.floor(Math.random() * palavras.length);
  var mensagemAleatoria = palavras[indiceAleatorio];
  mensagemElemento.textContent = mensagemAleatoria;
  
