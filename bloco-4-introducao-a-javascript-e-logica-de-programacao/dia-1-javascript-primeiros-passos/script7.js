let grade = 71;

if (grade > 100 || grade < 0){
    console.log("numero invalido, valor digite um numero 0 a 100.");
} else if (grade >= 90) {
    console.log("Sua nota è A");
} else if (grade >= 80) {
    console.log("Sua nota è B");
} else if (grade >= 70) {
    console.log("Sua nota è C");
} else if (grade >= 60) {
    console.log("Sua nota è D");
} else if (grade >= 50) {
    console.log("Sua nota è E");
} else {
    console.log("Sua nota è F");
}