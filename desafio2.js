// Desafio 02: Calculadora de partidas Rankeadas

let saldoVitorias = saldoRankeadas (20,5)
let nivel = nivelJogador (saldoVitorias)

console.log ("O Herói tem um saldo de " + saldoVitorias + " está no nível de " + nivel)

function saldoRankeadas (qtdVitorias, qtdDerrotas){
    return qtdVitorias - qtdDerrotas
}

function nivelJogador (vitorias){
    let classificacao
    if (vitorias <= 10) {
        classificacao = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        classificacao = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        classificacao = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        classificacao = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        classificacao = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        classificacao = "Lendário";
    } else {
        classificacao = "Imortal";
    }

    return classificacao
}