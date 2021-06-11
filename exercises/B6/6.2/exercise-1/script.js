// document.querySelector('#enviar').addEventListener('click', (evento) => {
//   evento.preventDefault();
// });

var validator = new FormValidator();
// select your "form" element from the DOM and attach an "onsubmit" event handler to it:
document.forms[0].onsubmit = function(e){
    var validatorResult = validator.checkAll(this); // "this" reffers to the currently submitetd form element
    if (validatorResult.valid === true) {
      alert('Deu certo!');
      document.body.style.backgroundColor = 'blue';
    }
    e.preventDefault();
    return !!validatorResult.valid;
};

validator.texts.complete = 'está faltando o sobrenome'

