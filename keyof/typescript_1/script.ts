interface Produto {
  nome: string;
  preco: number;
  novo: boolean;
}

let chave: keyof Produto;
// let chave: "nome" | "preco" | "novo";

chave = "novo";

function coordenas(x: number, y: number) {
  return { x, y };
}

let coord: typeof coordenas;

coord = (x: number, y: number) => {
  return {
    x,
    y,
  };
};
