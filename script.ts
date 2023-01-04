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