


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 exercicio

for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}

// 2 exercicio

let resultado = 0

for (let index = 0; index < numbers.length; index += 1){
    resultado += numbers[index];

    
}

console.log(resultado);

// 3 exercicio


    let total = resultado / numbers.length;

    console.log(total);

// 4 exercicio
 
if (total > 20){
    console.log("valor maior de 20");
} else {
    console.log("valor monor ou igual a 20");
}

// 5 exercicio

let numeroMaior = numbers[0];

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > numeroMaior){
        numeroMaior = numbers[index];
    }
}

console.log(numeroMaior);

// 6 exercicio

let result = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !== 0){
        result += 1;
    } 
}

if (result > 0){
    console.log(result)
} else {
    console.log("nenhum valor ímpar encontrado")
}


// 7 exercicio

let numeroMenor = numbers[0];

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] < numeroMenor){
        numeroMenor = numbers[index];
    }
}

console.log(numeroMenor);

// 8 exercicio

let numero =[];

for (let index = 0; index < 25 ; index += 1){
    numero.push(index);
    
}
console.log(numero);

// 9 exercicio

let resul = 0

for (let index = 0; index < numero.length ; index += 1){
    resul = numero[index] / 2;
    console.log(resul);
}
console.log(resul);
