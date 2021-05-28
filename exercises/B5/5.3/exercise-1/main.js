const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetElement(event) {
  // O Event é passado como um parâmetro para a função.
  // event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
  let antigo = document.querySelector('.tech')
  antigo.className = 'antigo';
  event.target.className = 'tech';
}

divUm.addEventListener('dblclick', resetElement);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
divDois.addEventListener('dblclick', resetElement);
divTres.addEventListener('dblclick', resetElement);
input.addEventListener('keyup', alterarTexto);

function alterarTexto(event) {
  if (event.keyCode === 13) {
    let texto = event.target.value
    let divAlterada = document.querySelector('.tech');
    divAlterada.innerHTML = texto;
  }
}

myWebpage.addEventListener('dblclick', redirecionar);
myWebpage.addEventListener('mouseover', mudarCor);
myWebpage.addEventListener('mouseout', retornarCor);

function redirecionar () {
  //window.location.href = 'https://www.google.com.br';
  if(confirm("Deseja ser redirecionado?")){
		window.location="https://www.betrybe.com/";
	}
}

function mudarCor (event) {
  event.target.style.color = 'green';
}

function retornarCor (event) {
  event.target.style.color = 'white';
}