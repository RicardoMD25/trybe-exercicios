let peça = "cavAleiro";

switch (peça.toLowerCase( )) {
    case "rei":
        console.log("mova-se para um quandrado em qualquer direção.");
        break;
    case "rainha":
        console.log("mova-se em todas as direção, sem limites de quadrados.");
        break;
    case "bispo":
        console.log("mova-se na diagonal, sem limites de quadrados.");
        break;
    case "cavaleiro":
        console.log("mova-se em L, em qualquer direção.");
        break;
    case "torre":
        console.log("mova-se na horizontal ou vertical.");
        break;
    case "peão":
        console.log("mova-se uma casa, no primeiro movimento podem ser duas casas.");
        break;
    default:
        console.log("peça inválida, você so pode escolher essas opcoẽs: Rei, Rainha, Bispo, Cavalo, Torre ou Peão");
        break       
}

