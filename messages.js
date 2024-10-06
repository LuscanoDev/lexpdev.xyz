var palavras = [
  "lexpdev was here",
  "surfing the internet...",
  "rm -rf /*",
  "./lexpdev.sh",
  "i use arch btw",
];
var mensagemElemento = document.getElementById("topMessage");
var indiceAleatorio = Math.floor(Math.random() * palavras.length);
var mensagemAleatoria = palavras[indiceAleatorio];
mensagemElemento.textContent = mensagemAleatoria;
