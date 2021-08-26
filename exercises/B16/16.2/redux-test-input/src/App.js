import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import addTask from './redux/actions';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value,
    });
  };

  render() {

    const { inputText } = this.state;
    const { add, list } = this.props;

    return(
      <>
        <div>
          <h2>Adicionar tarefa</h2>
          <label htmlFor="texto">
            Digite a tarefa:
            <input id="texto" type="text" onChange={(event) => this.handleChange(event)} value={ inputText }></input>
          </label>
          <button onClick={() => add(inputText)}>Adicionar</button>
        </div>
        <div>
          <h2>Lista de tarefas:</h2>
          {
            list.map((task, index) => {
              return(
                <p key={ index }>{ task }</p>
              );
            })
          }
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (task) => dispatch(addTask(task))
});

const mapStateToProps = (state) => ({
  list: state.listReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
