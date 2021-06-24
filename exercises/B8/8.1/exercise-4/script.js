const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificador = (gabarito, respostas) => {
  let nota = 0
  for (let index in gabarito) {
    if (gabarito[index] === respostas[index]) {
      nota += 1
    } else {
        if (respostas[index] !== 'N.A') {
          nota -= 0.5
        }
    }
  }
  return nota
}

const correcao = (gabarito, respostas, callback) => {
  const nota = callback(gabarito, respostas)
  return `A nota é igual a: ${nota}`
}

console.log(correcao(rightAnswers, studentAnswers, verificador))