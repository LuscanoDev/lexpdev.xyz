var palavras = [
    "lexpdev was here",
    "surfing the internet...",
    "rm -rf /*",
    ":(){:|:&};:",
    "./lexpdev.sh",
    "i use arch btw",
    '¯\\_(ツ)_/¯',
    'ᕕ( ᐛ )ᕗ',
    '+500 lines of CSS!'
  ];
  var mensagemElemento = document.getElementById("message");
  var indiceAleatorio = Math.floor(Math.random() * palavras.length);
  var mensagemAleatoria = palavras[indiceAleatorio];
  mensagemElemento.textContent = mensagemAleatoria;
  
