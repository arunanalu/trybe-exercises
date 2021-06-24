// Não acho que esteja de acordo com o exercício, mas é um HOF de qualquer jeito
//
// const sorteio = () => {
//     return Math.floor(Math.random() * 5 + 1)
// }

// const checagem = (callback, numeroEscolhido) => {
//     const numeroSorteado = callback()
//     if (numeroSorteado === numeroEscolhido) {
//         console.log(`Parabéns, você ganhou`)
//     } else {
//         console.log(`Tente novamente!`)
//     }
// }

// checagem(sorteio, 4)

// agora sim, está correto de acordo com o que o exercício pede

const verificador = (numeroEscolhido, numeroSorteado) => {
  if (numeroSorteado === numeroEscolhido) {
    return `Parabéns, você ganhou`
  } else {
    return `Tente novamente!`
  }
}

const sorteio = (callback, numeroEscolhido) => {
  const numeroSorteado = Math.floor(Math.random() * 5 + 1)
  return callback(numeroEscolhido, numeroSorteado)
}

console.log(sorteio(verificador, 3))