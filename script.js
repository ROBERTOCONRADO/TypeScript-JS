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
  return texto.trims().toLowercase();
}

*/
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto(' ÓLA, SEJA BEM-VINDO(a). '));
/*    Exercicio 2
  Conserte as funções com typescript

<h1>Bônus de 100 - 20% do total:</h1>
<label>Total</label>
<input type="number" />
<p></p>

*/
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (input && total) {
    input.value = total;
    calcularGanho(+input.value);
}
function calcularGanho(value) {
    const p = document.querySelector("p");
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem("total", input.value);
        calcularGanho(Number(input.value));
    }
}
if (input) {
    input.addEventListener("keyup", totalMudou);
}
