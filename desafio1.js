// Desafio 01: Classificador de nível de Herói

//Declarando as variáveis
let nomeHeroi = "SaphCristal"; // Substitua pelo nome desejado
let xp = 10; // Substitua pela quantidade de XP desejada
let nivel;

//Definindo os níveis pela quantidade de xp
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log ("O Herói de nome " + nomeHeroi + " está no nível de " + nivel)
