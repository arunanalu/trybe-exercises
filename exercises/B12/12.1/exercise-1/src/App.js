import './App.css';
import React from 'react'
import employees from './employees';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filterCpf: '',
    };

    this.handleClickCpf = this.handleClickCpf.bind(this);
    this.handleClickName = this.handleClickName.bind(this);
  }


  async handleClickCpf() {
    await this.setState({ filterCpf: document.getElementById('input-text').value})
    const { filterCpf } = this.state
    return (
      ReactDOM.render(
        employees.filter(({ cpf }) => cpf.includes(filterCpf))
          .map(({ cpf, nome}) => (
            <div className="pessoa" key={ cpf }>
              <p><strong>Nome:</strong> {nome.primeiroNome}</p>
              <p><strong>CPF:</strong> {cpf}</p>
            </div>
          ))
          , document.getElementById('card')
      )
    );
  }

  async handleClickName() {
    await this.setState({ filterCpf: document.getElementById('input-text').value})
    const { filterCpf } = this.state
    return (
      ReactDOM.render(
        employees.filter(({ nome }) => nome.primeiroNome.includes(filterCpf))
          .map(({ cpf, nome}) => (
            <div className="pessoa" key={ cpf }>
              <p><strong>Nome:</strong> {nome.primeiroNome}</p>
              <p><strong>CPF:</strong> {cpf}</p>
            </div>
          ))
          , document.getElementById('card')
      )
    );
  }

  render() {
    return (
      <section className="main">
        <h1 className="title">Selecionar funcionario</h1>
        <input type="text" id="input-text"/>
        <div className="buttons">
        <button onClick={this.handleClickCpf}>Pesquisar por CPF</button>
        <button onClick={this.handleClickName}>Pesquisar por nome</button>
        </div>
        <div className="card" id="card" />
      </section>
    );
  }
}

export default App;
