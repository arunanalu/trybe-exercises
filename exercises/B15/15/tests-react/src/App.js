import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      joke: ''
    }
  }

  async componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    let response = await fetch(API_URL, { headers: { Accept: 'application/json' } })
    response = await response.json();
    this.setState({
      joke: response.joke,
    })
  }

  render() {
    const { joke } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h2>Joke</h2>
          <p>{ joke }</p>
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/details">About API</Link>
        </header>
      </div>
    );
  }
}

export default App;
