"use strict";
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
console.log(normalizar(" Produto ").toUpperCase());
console.log(normalizar([" Banana", "UVA   "]).filter);
function $(seletor) {
    return document.querySelector(seletor);
}
$("a")?.click();
$("video")?.volume;
$(".item");
