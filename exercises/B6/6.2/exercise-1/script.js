// meu JavaScript

function formularioCorreto() {
  alert('Enviado com sucesso!');
  let entradas = document.getElementsByTagName('input');
  for (let index = 0; index < entradas.length; index += 1) {
    entradas[index].value = '';
  }
  document.getElementById('textCurriculo').value = '';
}

/* ************************************************************************
configurações da biblioteca de validação abaixo
*************************************************************************** */

// biblioteca usada para validar o formulário https://github.com/yairEO/validator

var validator = new FormValidator();
// select your "form" element from the DOM and attach an "onsubmit" event handler to it:
document.forms[0].onsubmit = function(e){
    var validatorResult = validator.checkAll(this); // "this" reffers to the currently submitetd form element
    if (validatorResult.valid === true) {
      // alert('Deu certo!');
      // // apagarTudo();
      // // document.body.style.backgroundColor = 'green';
      formularioCorreto();
    }
    e.preventDefault();
    return !!validatorResult.valid;
};

validator.texts.complete = 'não está completo'
validator.texts.empty = 'Preencha o campo'
validator.texts.email = 'Insira um email válido'
validator.texts.number = 'Não é um número'


