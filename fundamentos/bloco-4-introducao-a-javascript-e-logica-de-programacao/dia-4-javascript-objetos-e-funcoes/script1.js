// exercicio 1


let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Bem vinda, " + info.personagem);
  console.log("Bem Vinda, " + info["personagem"]);


// exercicio 2

info.recorrente = "Sim";

console.log(info);

console.log(info.recorrente);


// exercicio 3

for (let index in info) {
    console.log(index);
}

// exercicio 4

for (let index2 in info) {
    console.log(info[index2]);
}

// exercicio 5

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}

console.log(info.personagem + " e " + info2.personagem);
console.log(info.origem + " e " + info2.origem);
console.log(info.nota + " e " + info2.nota);

if (info.recorrente === info2.recorrente){
    console.log("ambos recorrentes");
}
 
// exercicio 6

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };



console.log("O livro favorito de " + leitor["nome"] + " " + leitor.sobrenome + " se chama. " + leitor.livrosFavoritos[0].titulo + '"');

// exercicio 7


leitor.livrosFavoritos.push( 
    {
        titulo: "Harry Potter e o Prisioneiro de Azkaban",
        autor: "JK Rowling",
        editora: "Rocco",

    }
);

console.log(leitor.livrosFavoritos);

// exercicio 8

console.log('"' + leitor.nome + " tem "  + leitor.livrosFavoritos.length + "," + "livros Favoritos" + '"')

