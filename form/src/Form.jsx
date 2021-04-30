import React from 'react';

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      age: 0,
      email: '',
      interests: '',
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
          <label>
            Qual é a sua idade?
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Qual o seu email?
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
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
          <label>
            Quais os seus hobbys?
            <textarea
              type="text"
              name="interests"
              value={this.state.interests}
              onChange={this.handleChange}
            />
          </label>
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