"use strict";
function somar(a, b) {
    return a + b;
}
console.log(somar(8, 10));
function dividir(c, d) {
    return c / d;
}
console.log(dividir(8, 10));
function multiplicar(e, f) {
    return e * f;
}
console.log(multiplicar(8, 10));
let produto = "livro";
const preco = 100;
/*    Exercicio 1
  Conserte a função com typescript

function normalizarTexto(texto) {
  return texto.trims().toLowerCase();
}

*/
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto('ÓLA, SEJA BEM-VINDO(a).'));
