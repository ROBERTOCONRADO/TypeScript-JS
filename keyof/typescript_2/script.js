"use strict";
function selecionar(seletor) {
    return document.querySelector(seletor);
}
selecionar("a")?.href;
selecionar("video")?.volume;
selecionar(".botao");
