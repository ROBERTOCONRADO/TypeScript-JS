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
// Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.
async function fetchProduct() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML += `
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
// Array
const numeros = [10, 20, 30, 40, 50, 60];
const valores = [10, 20, "Taxas", 40, "Produtos", 60, "Descontos"];
function maiorQue10(data) {
    return data.filter((n) => n > 10);
}
function filtrarValores(data) {
    return data.filter((item) => typeof item === "number");
}
console.log(filtrarValores(valores));
console.log(maiorQue10(numeros));
// Exercício 5 
// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
// Existem apenas dois níveis de cursos, iniciante e avançado.
// Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach(curso => {
        let color;
        if (curso.nivel === 'iniciante') {
            color = 'blue';
        }
        else if (curso.nivel === 'avancado') {
            color = 'red';
        }
        document.body.innerHTML += `
      <div>
        <h2 style="color: ${color};">${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Aulas: ${curso.horas}</p>
        <p>Tipo: ${curso.gratuito ? 'Free' : 'paid out'}</p>
        <p>Tags: ${curso.tags.join(", ")}</p>
        <p>Aulas: ${curso.idAulas.join(" | ")}</p>
      </div>
    `;
    });
}
// instanceof
class Product {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
class Livro extends Product {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Product {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduct(busca) {
    if (busca === 'O Hobbit') {
        return new Livro('O hobbit', 'J. R. R. Tolkien');
    }
    if (busca === 'Dark Souls') {
        return new Jogo('Dark Souls', 1);
    }
    return null;
}
const product = buscarProduct('O Hobbit');
if (product instanceof Livro) {
    console.log(product.autor);
}
if (product instanceof Jogo) {
    console.log(product.nome);
}
// Exercício 
// 1 - Selecione o link utilizando o método getelementById.
// 2 - Substitua o href do link(HTMLAnchorElement) de http:// para https://
//<a id="origamid" href="http://www.origamid.com">Origamid</a>
const linkk = document.getElementById('origamid');
if (linkk instanceof HTMLAnchorElement) {
    linkk.href = linkk.href.replace('http://', 'https://');
}
// Exercício 
// Selecione os elementos com classe link
// Crie uma função que deve ser executada para cada elemento.
// Modificar através de função o estilo color e border.
const links = document.querySelectorAll('.link');
function ativarElemento(elemento) {
    elemento.style.color = 'violet';
    elemento.style.textDecoration = 'none';
    elemento.style.border = '2px solid black';
}
links.forEach((link) => {
    if (link instanceof HTMLElement) {
        ativarElemento(link);
    }
});
