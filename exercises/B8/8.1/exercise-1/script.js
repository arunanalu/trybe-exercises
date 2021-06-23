const manha = () => 'Acordando!!'
const tarde = () => 'Bora tomar café!!'
const noite = () => 'Partiu dormir!!'

const horaDoDia = (callback) => console.log(callback());

horaDoDia(noite)