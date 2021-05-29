function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDaysList() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const dezDaysListUl = document.querySelector('#days');

  for (let index of dezDaysList) {
    const dezDaysListItem = document.createElement('li');
    dezDaysListItem.innerHTML = index;
    dezDaysListItem.className = 'day';
    if (index === 24 || index === 31) {
      dezDaysListItem.className = 'day holiday';
    }
    if (index === 4 || index === 11 || index === 18) {
      dezDaysListItem.className = 'day friday';
    }
    if (index === 25) {
      dezDaysListItem.className = 'day friday holiday'
    }
    dezDaysListUl.appendChild(dezDaysListItem);
  }
}

function createDaysListAgain() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const dezDaysListItems = document.querySelectorAll('.day');
  let cont = 0;
  for (let index of dezDaysListItems) {
    index.innerHTML = dezDaysList[cont];
    cont+= 1;
  }
}

createDaysList();

function criarBotaoFeriados (feriados) {
  let botaoFeriados = document.createElement('button');
  let divPai = document.querySelector('.buttons-container');
  botaoFeriados.innerHTML = feriados;
  botaoFeriados.id = 'btn-holiday'
  divPai.appendChild(botaoFeriados);
}

criarBotaoFeriados ('feriados');

function adicionarFeriadosEvento () {
  document.querySelector('#btn-holiday').addEventListener('click', function() {
    let holidays = document.querySelectorAll('.holiday');
    for (let index of holidays) {
      if (index.style.backgroundColor === '') {
        index.style.backgroundColor = '#87fdbe';
      }
      else if (index.style.backgroundColor = '#87fdbe') {
        index.style.backgroundColor = '';
      }
    }
  })
}

adicionarFeriadosEvento ();

function criarBotaoSexta (dia) {
  let botao = document.createElement('button');
  let divPai = document.querySelector('.buttons-container');
  botao.innerHTML = dia;
  botao.id = 'btn-friday';
  divPai.appendChild(botao);
}

criarBotaoSexta ('Sexta-feira');

function adicionarSexta () {
  document.querySelector('#btn-friday').addEventListener('click', function() {
    let sextas = document.querySelectorAll('.friday');
    if (sextas[0].innerHTML === 'sextou!') {
      createDaysListAgain ();
    }
    else {
      for (let index of sextas) {
        index.innerHTML = 'sextou!';
      }
    }
  })
}

adicionarSexta ();

function zoomDiaDoMes () {
  let dias = document.querySelectorAll('.day');
  for (let index = 0; index < dias.length; index += 1) {
    dias[index].addEventListener('mouseenter', function(evento) {
      evento.target.style.transform = 'scale(1.5)';
    })
    dias[index].addEventListener('mouseout', function(evento) {
      evento.target.style.transform = '';
    })
  }
}

zoomDiaDoMes ();

function adicionarTarefa (tarefa) {
  let span = document.createElement('span');
  let divPai = document.querySelector('.my-tasks');
  span.innerHTML = tarefa;
  divPai.appendChild(span);
}

adicionarTarefa ('estudar');

function addLegendaComCor (cor) {
  let div = document.createElement('div');
  let divPai = document.querySelector('.my-tasks');
  div.className = 'task';
  div.id = 'divTask'
  div.style.backgroundColor = cor;
  divPai.appendChild(div);
}

addLegendaComCor ('blue');

function selecionarTarefa () {
  document.querySelector('.task').addEventListener('click', function(event) {
    if (event.target.className === 'task') {
      event.target.className = 'taskSelected';
    }
    else {
      event.target.className = 'task';
    }
  })
}

selecionarTarefa ();

let verificador = false;

function verificadorDeTarefaSelecionada () {
  document.querySelector('#divTask').addEventListener('click', function(event) {
    if (verificador === false) {
      verificador = true;
      alterarCorDia ();
      event.target.style.border = '5px black solid'
    }
    else {
      verificador = false;
      alterarCorDia ();
      event.target.style.border = '0px black solid'
    }
  })
}

verificadorDeTarefaSelecionada ();

function alterarCorDia () {
    let dias = document.querySelectorAll('.day');
    for (let index = 0; index < dias.length; index += 1) {
    dias[index].addEventListener('click', function(evento) {
      if (evento.target.style.color === '') {
        evento.target.style.color = document.querySelector('#divTask').style.backgroundColor;
      }
      else {
        evento.target.style.color = '';
      }
    })
  }
}

