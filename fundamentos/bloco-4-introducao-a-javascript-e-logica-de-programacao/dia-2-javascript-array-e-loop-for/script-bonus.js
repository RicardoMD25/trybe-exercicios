let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 exercicio bonus

for (let index = 1; index < numbers2.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers2[index] < numbers2[secondIndex]) {
        let position = numbers2[index];
        numbers2[index] = numbers2[secondIndex];
        numbers2[secondIndex] = position;
      }
    }
  }

  console.log(numbers2);

  // 2 exercicio bonus

  for (let index = 1; index < numbers2.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers2[index] > numbers2[secondIndex]) {
        let position = numbers2[index];
        numbers2[index] = numbers2[secondIndex];
        numbers2[secondIndex] = position;
      }
    }
  }

  console.log(numbers2);

  // 3 exercicio bonus

  let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

  let resultados = [];

  for (let index = 0; index < numbers3.length; index += 1){

      if (index + 1 < numbers3.length){
        resultados.push(numbers3[index] * numbers3[index + 1]);
    } else {
      resultados.push(numbers3[index] * 2);
    }
  }
  console.log(resultados);


  