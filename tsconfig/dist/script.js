import plugin from "./plugin.js";
plugin();
function handleProduto(dados) {
    dados;
}
const link = document.querySelector("a");
if (link) {
    link.innerHTML = "Teste";
}
const teste = "ola";
function handleClick() {
    console.log(this.innerHTML);
}
document.documentElement.addEventListener("click", handleClick);
function trocarModo(modo) {
    if (modo === "dark") {
        return "color: black;";
    }
    else {
        return "color: white;";
    }
}
trocarModo("light");
function maiuscula(frase) {
    const total = 100;
}
//# sourceMappingURL=script.js.map