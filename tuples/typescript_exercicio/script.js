"use strict";
async function fetchVendas() {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    const data = await response.json();
    console.log(data);
    somarVendas(data);
}
fetchVendas();
function somarVendas(vendas) {
    let total1 = 0;
    for (let i = 0; i < vendas.length; i++) {
        total1 += vendas[i][1];
    }
    document.body.innerHTML += `<p>Total: ${total1}</p>`;
    const total2 = vendas.reduce((total, venda) => {
        return total + venda[1];
    }, 0);
    document.body.innerHTML += `<p>Total: ${total2}</p>`;
}
const arr = [3, 5, 10, 20, 30];
const somar = arr.reduce((anterior, atual) => {
    return anterior + atual;
}, 0);
console.log(somar);
