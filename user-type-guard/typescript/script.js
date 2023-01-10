"use strict";
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursos(json);
}
fetchCursos();
function handleCursos(data) {
    if (data instanceof Array) {
        console.log("É uma instância de Array");
    }
    if (Array.isArray(data)) {
        console.log("É array");
    }
}
function isString(value) {
    if (typeof value === "string") {
        return true;
    }
    else {
        return false;
    }
}
function handleData(data) {
    if (isString(data)) {
        console.log(data.toLowerCase());
    }
}
handleData(200);
handleData("Origamid");
async function fetchProduto() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const json = await response.json();
    handleProduto(json);
}
fetchProduto();
function isProduto(value) {
    if (value &&
        typeof value === "object" &&
        "nome" in value &&
        "preco" in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleProduto(data) {
    if (isProduto(data)) {
        console.log(data.nome);
    }
}
