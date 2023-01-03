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
  return texto.trim().toLowercase();
}

*/
function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}
console.log(normalizarTexto(' ÓLA, SEJA BEM-VINDO(a). '));