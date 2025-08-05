// Importa o pacote para ler dados do usuário no terminal
const prompt = require('prompt-sync')();

// Pergunta o nome do herói
let nome = prompt("Qual o seu nome? ");

// Se o nome estiver vazio, avisa e encerra
if (nome.trim() === "") {
    console.log("Por favor, escreva seu nome!");
    process.exit();
}

// Pergunta o XP do herói
let xpTexto = prompt("Quanto de XP você tem? ");

// Converte o texto para número decimal
let xp = parseFloat(xpTexto);

// Se não for um número válido, avisa e encerra
if (isNaN(xp)) {
    console.log("Por favor, escreva um número válido para o XP!");
    process.exit();
}

// Define o nível do herói baseado no XP
let nivel;

if (xp < 1000) {
    nivel = "Ferro";
} else if (xp <= 2000) {
    nivel = "Bronze";
} else if (xp <= 5000) {
    nivel = "Prata";
} else if (xp <= 7000) {
    nivel = "Ouro";
} else if (xp <= 8000) {
    nivel = "Platina";
} else if (xp <= 9000) {
    nivel = "Ascendente";
} else if (xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Mostra o resultado para o usuário
console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
