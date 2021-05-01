import React from 'react';
import Input from '../Input/Input'
import Select from '../Select/Select'
import Radio from '../Radio/Radio'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      kind: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({
      [name]: value
    })
  }

  //based on: https://stackoverflow.com/questions/4374822/remove-all-special-characters-with-regexp
  removeSpecials = (value) => {
    return value.replace(/[^\w\s]/gi, '')
  }

  removeStartingNumbers = (value) => {
    if (value.match(/^\d/)) {
      return '';
    }
    return value;
  }

  render() {
    return (
      <form>
        <h1>My Form 2.0</h1>
          <fieldset>
            <Input
              label="Nome:"
              type="text"
              name="name"
              maxLength="40"
              value={this.state.name.toUpperCase()}
            handleChange={this.handleChange}
            required="false"
          />
          <br /><br />
          <Input
              label="Email:"
              type="text"
              name="email"
              maxLength="50"
              value={this.state.email}
              handleChange={this.handleChange}
              required="true"
          />
          <br /><br />
          <Input
              label="CPF:"
              type="text"
              name="cpf"
              maxLength="11"
              value={this.state.cpf}
              handleChange={this.handleChange}
              required="true"
          />
          <br /><br />
          <Input
              label="Endereço:"
              type="text"
              name="address"
              maxLength="200"
              // Remover qualquer caractere especial que seja digitado
              value={this.removeSpecials(this.state.address)}
              handleChange={this.handleChange}
              required="true"
          />
          <br /><br />
          <Input
              label="Cidade:"
              type="text"
              name="city"
              maxLength="28"
              // Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
              value={this.removeStartingNumbers(this.state.city)}
              handleChange={this.handleChange}
              required="true"
          />
          <br /><br />
          <Select
            label="Estado"
            name="state"
            value={this.state.state}
            handleChange={this.handleChange}
            required="true"
          />
          <br /><br />
          Logradouro:<br />
          <label>
            <Radio
              type="radio"
              name="kind"
              value="casa"
              handleChange={this.handleChange}
              required="true"
            />
            Casa
          </label>
          <label>
            <Radio
              type="radio"
              name="kind"
              value="apartamento"
              handleChange={this.handleChange}
              required="true"
            />
            Apartamento
          </label>
          </fieldset>
      </form>
    )
  }
}

export default Form;