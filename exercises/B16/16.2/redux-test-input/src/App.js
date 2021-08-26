import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import TaskList from './components/TaskList';
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
    const { add } = this.props;

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
        <TaskList />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (task) => dispatch(addTask(task))
});

export default connect(null, mapDispatchToProps)(App);
