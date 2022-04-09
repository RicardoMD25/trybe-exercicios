let salario = 3000.00;

let aliquotaINSS;
let aliquotaIR;


if (salario <= 1556.94){
    aliquotaINSS = salario * 0.08;
} else if (salario <= 2594.92){
    aliquotaINSS = salario * 0.09;
} else if (salario <= 5189.82){
    aliquotaINSS = salario * 0.11;
} else {
    aliquotaINSS = 570.88;
}

let descontoDoINSS = salario - aliquotaINSS;


if (descontoDoINSS <= 1903.98){
    aliquotaIR = 0;
} else if (descontoDoINSS <= 2826.65){
    aliquotaIR = (descontoDoINSS * 0.075) - 142.80;
} else if (descontoDoINSS <= 3751.05){
    aliquotaIR = (descontoDoINSS * 0.15) - 354.80;
} else if (descontoDoINSS <= 4664.68){
    aliquotaIR = (descontoDoINSS * 0.225) - 636.13;
} else {
    aliquotaIR = (descontoDoINSS * 0.275) - 869.36;
}



let salarioAReceber = descontoDoINSS - aliquotaIR;
console.log(salarioAReceber);