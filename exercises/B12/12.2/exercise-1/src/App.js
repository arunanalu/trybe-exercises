import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loginEmail: '',
      loginPassword: '',
      regEmail: '',
      regPassword: '',
    }
    this.submitEvent = this.submitEvent.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  submitEvent(event) {
    event.preventDefault();
    alert(`Parabéns !`)
  }

  render() {
    const { loginEmail, loginPassword, regEmail, regPassword } = this.state;
    return (
      <>
      <main className="main">
        <section className="login">
          <h1>Login</h1>
          <form onSubmit={ this.submitEvent }>
            <label htmlFor="login-mail">
              Email:
              <input value={ loginEmail } type="mail" id="login-mail" name="loginEmail" onChange={this.handleChange} />
            </label>
            <label htmlFor="login-password">
              Senha:
              <input value={ loginPassword } type="password" id="login-password" name="loginPassword" onChange={this.handleChange} />
            </label>
            <button type="submit">Enter</button>
          </form>
        </section>
        <section className="register">
          <h1>Register</h1>
          <form onSubmit={ this.submitEvent }>
            <label htmlFor="reg-mail">
              Email:
              <input value={ regEmail } type="mail" id="reg-mail" name="regEmail" onChange={this.handleChange} />
            </label>
            <label htmlFor="reg-password">
              Senha:
              <input value={ regPassword } type="password" id="reg-password" name="regPassword" onChange={this.handleChange} />
            </label>
            <button type="submit">Create your account</button>
          </form>
        </section>
      </main>
      </>
    );
  }
}

export default App;
