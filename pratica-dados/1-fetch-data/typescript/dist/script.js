import fetchData from "./fetchData.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    if (data) {
        data.forEach((item) => {
            console.log(item["Valor (R$)"]);
        });
    }
    console.log("codigo continuou");
}
handleData();
