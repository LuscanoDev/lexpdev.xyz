var palavras = [
  "lexpdev passou aqui",
  "surfando na internet...",
  "rm -rf /*",
  "./lexpdev.sh",
  "i use arch btw",
];
var mensagemElemento = document.getElementById("topMessage");
var indiceAleatorio = Math.floor(Math.random() * palavras.length);
var mensagemAleatoria = palavras[indiceAleatorio];
mensagemElemento.textContent = mensagemAleatoria;
