import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['acordar', 'tomar café', 'estudar', 'almoçar', 'ir para a aula', 'fazer exercícios', 'jantar', 'dormir']

function App() {
  return (
    compromissos.map((elemento) => Task(elemento))
  );
}

export default App;
