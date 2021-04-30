import React from 'react';
import Input from '../Input/Input'

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
            />
          </fieldset>
      </form>
    )
  }
}

export default Form;