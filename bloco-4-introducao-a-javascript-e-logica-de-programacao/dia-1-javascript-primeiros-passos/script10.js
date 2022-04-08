const produto = 18;
const valorDoVenda = 30;

let vendas = 200;
let custoDoProduto = produto * 0.6;

let lucro = 0;

if (produto < 0 || valorDoVenda < 0) {
    console.log("erro numero invalido");
} else {
    lucro = (valorDoVenda - custoDoProduto) * vendas;

    console.log(lucro);
}




