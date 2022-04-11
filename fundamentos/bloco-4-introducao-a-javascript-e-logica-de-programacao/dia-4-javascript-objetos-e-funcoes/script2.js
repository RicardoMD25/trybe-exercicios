
//exercicio 1

function Palindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(Palindrome('arara'));
  console.log(Palindrome('desenvolvimento'));


  //exercicio 2

  function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));


// exercicios 3

function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
      if (numeros[indiceMenor] > numeros[indice]) {
        indiceMenor = indice;
      }
    }
    return indiceMenor;
  }
  
  console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));


  //exercicio 4

  function maiorNome(nomeDePessoas){
    let maiorNome = nomeDePessoas[0];
    for(let index in nomeDePessoas){
        if (maiorNome.length < nomeDePessoas[index].length) {
            maiorNome = nomeDePessoas[index];
        }
    }
    return maiorNome;
  }

  console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))