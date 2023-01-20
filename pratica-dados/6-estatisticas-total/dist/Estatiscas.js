function filtrarValor(transacao) {
    return transacao.valor !== null;
}
export default class Estatiscas {
    transacoes;
    total;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
    }
    setTotal() {
        return this.transacoes.filter(filtrarValor).reduce((acc, item) => {
            return acc + item.valor;
        }, 0);
    }
}
//# sourceMappingURL=Estatiscas.js.map