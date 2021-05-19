let notaDoCandidato = 98;
let resultado;
if (notaDoCandidato >= 80) {
  resultado = "Parabéns, você foi aprovada(o)";
}
else if (notaDoCandidato >= 60 && notaDoCandidato < 80) {
  resultado = "Você está na nossa lista de espera";
}
else {
  resultado = "Você foi reprovada(o)";
}
console.log(resultado);