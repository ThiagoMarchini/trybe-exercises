import React from 'react';
import Input from "./Input";

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      age: 0,
      email: '',
      name: '',
      state: '',
      gostaDeReact: false,
    }

  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form>
        <h1>Formulários com React</h1>
        <fieldset>
          <Input
            label="Qual é a sua idade?"
            type="number"
            name="age"
            value={this.state.age}
            handleChange={this.handleChange}
          />
          <Input
              label="Qual é o seu email?"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
          />
          <label>
            Em qual estado você nasceu?
            <select
              name="state"
              onChange={this.handleChange}>
              <option value="SP">SP</option>
              <option value="PR">PR</option>
              <option value="ES">ES</option>
            </select>
          </label>
          <label>
          Foto:
          <input type="file" />
          </label>
        </fieldset>
        <fieldset>
          <Input
              label="Qual o seu nome?"
              type="text"
              name="name"
              value={this.state.name}
              handleChange={this.handleChange}
            />
          <label>
            Gosta de React?
            <input
              type="checkbox"
              name="gostaDeReact"
              value={this.state.gostaDeReact}
              onChange={this.handleChange}
            />
          </label>
      </fieldset>
      </form>
    );
  }
}

export default Form;