const textoInput = document.getElementById("texto");
const resultado = document.getElementById("resultado");
const criptografarBtn = document.getElementById("criptografar");
const descriptografarBtn = document.getElementById("descriptografar");

function criptografar() {
  const texto = textoInput.value.toLowerCase(); // converte para minúsculo
  const textoCriptografado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  resultado.textContent = textoCriptografado;
}

function descriptografar() {
  const texto = textoInput.value.toLowerCase(); // converte para minúsculo
  const textoDescriptografado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  resultado.textContent = textoDescriptografado;
}

criptografarBtn.addEventListener("click", criptografar);
descriptografarBtn.addEventListener("click", descriptografar);
