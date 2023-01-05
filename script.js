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
/*    Exercicio 3
1 - Crie uma função chamada toNumber
2 - A função pode receber number | string
3 - Se a função receber número, retorne um número
4 - Se a função receber string, retorne um número
5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
*/
function toNumber(value) {
    if (typeof value === "number") {
        return value;
    }
    else if (typeof value === "string") {
        return Number(value);
    }
    else {
        throw "O valor deve ser um número ou string";
    }
}
console.log(toNumber('300'));
function preencherDados(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p> Valor: R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'Acompanha teclado mecânico.' : 'Não vem com teclado.'}</p>
    <p>Inclui mouse: ${dados.mouse ? 'Acompanha mouse sem fio.' : 'Não vem com mouse.'}</p>
  </div>`;
}
preencherDados({
    nome: 'Notebook Core I5',
    preco: 2999,
    teclado: false,
    mouse: true,
});
preencherDados({
    nome: 'Computador',
    preco: 2300,
    teclado: true,
    mouse: true,
});
function mostrarCategoria(categoria) {
    if (categoria === "Front-End") {
        console.log("Desenvolvedor Front-End");
    }
    else if (categoria === "Back-End") {
        console.log("Desenvolvedor Back-End");
    }
    else if (categoria === "UI/UX Designer") {
        console.log("User Experience");
    }
    else {
        console.log("Desenvolvedor Full-Stack");
    }
}
mostrarCategoria("Full-Stack");
// Exercício 4 
// Desina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.
async function fetchProduct() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
  <div>
    <h2>${data.nome}</h2>
    <p>${data.preco}</p>
    <div>
      <h3>${data.empresaFabricante.nome}</h3>
    </div>
    <div>
      <h3>${data.empresaMontadora.nome}</h3>
    </div>
  </div>
  `;
}
