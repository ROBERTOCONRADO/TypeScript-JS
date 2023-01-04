function somar(a: number, b: number) {
  return a + b;
}
console.log(somar(8, 10));

function dividir(c: number, d: number) {
  return c / d;
}
console.log(dividir(8, 10));

function multiplicar(e: number, f: number) {
  return e * f;
}
console.log(multiplicar(8, 10));

let produto: string = "livro";
const preco: number = 100;
 

/*    Exercicio 1  
  Conserte a função com typescript

function normalizarTexto(texto) {
  return texto.trims().toLowercase();
}

*/
function normalizarTexto(texto: string) {
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
if(input && total) {
  input.value = total;
  calcularGanho(+input.value);
}

function calcularGanho(value: number) {
  const p = document.querySelector("p");
  if(p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
  if(input) {
    localStorage.setItem("total", input.value);
    calcularGanho(Number(input.value));
  }
}

if(input) {
  input.addEventListener("keyup", totalMudou);
}


/*    Exercicio 3 
1 - Crie uma função chamada toNumber
2 - A função pode receber number | string
3 - Se a função receber número, retorne um número
4 - Se a função receber string, retorne um número
5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
*/

function toNumber(value: number | string) {
  if(typeof value === "number") {
    return value;
  } else if(typeof value === "string") {
    return Number(value);
  } else {
    throw "O valor deve ser um número ou string";
  }
}
console.log(toNumber('300'));

//   Types e Interfaces

type NumberorString = string | number;

type Produto =  {
  nome: string;
  preco: number;
  teclado: boolean;
  mouse: boolean;
}

function preencherDados(dados: Produto) {
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

// 

type Categorias = "Back-End" | "Front-End" | "Full-Stack" | "UI/UX Designer";

function mostrarCategoria(categoria: Categorias) {
  if (categoria === "Front-End") {
    console.log("Desenvolvedor Front-End");
  } else if (categoria === "Back-End") {
    console.log("Desenvolvedor Back-End");
  } else if (categoria === "UI/UX Designer") {
    console.log("User Experience");  
  } else {
    console.log("Desenvolvedor Full-Stack");
  }
}
mostrarCategoria("Full-Stack");