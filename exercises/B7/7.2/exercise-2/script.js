const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const adicionarEntradas = (objeto, chave, valor) => {
    objeto[chave] = valor;
  }

  adicionarEntradas(lesson2, 'turno', 'manhã');

const listarChaves = (objeto) => {
  console.log(`${Object.keys(objeto)}`);
}

listarChaves(lesson3)

const tamanhoObjeto = (objeto) => {
  console.log(`${Object.keys(objeto).length}`)
}

tamanhoObjeto(lesson3)

const listarValores = (objeto) => {
  console.log(`${Object.values(objeto)}`)
}

listarValores(lesson3)

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3})

console.log(allLessons)

const numeroEstudantes = () => {
  console.log(`${allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes}`)
}

numeroEstudantes()

const chavePosicao = (objeto, posicao) => Object.values(objeto)[posicao]

console.log(chavePosicao(lesson2, 0))

const verificarPar = (objeto, chave, valor) => {
  let res = 'false'
  for (let index in Object.entries(objeto)) {
    if (Object.entries(objeto)[index][0] === chave && Object.entries(objeto)[index][1] === valor) {
      res = true
      break;
    }
  }
  console.log(res)
}

verificarPar(lesson1, 'materia', 'Matemática')
verificarPar(lesson3, 'numeroEstudantes', 10)