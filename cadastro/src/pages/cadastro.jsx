import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { newAction } from '../actions';

class Cadastro extends React.Component {
  constructor() {
    super();

    this.state = {
      age: 0,
      email: '',
      name: '',
    };
  }

  addClient = (e) => {
    e.preventDefault();
    this.props.myDispatch({ 
      type: 'ADD',
      payload: this.state,
    })
  }

  render() {
    if (this.props.authorized) {
      return(
        <form>
          <h2>Cadastro</h2>
          <label>
            Nome:
            <input
              type="text"
              onChange={(event) => this.setState({
                name: event.target.value,
              })}
            />
          </label>
          <br />
          <br />
          <label>
            Idade:
            <input
              type="number"
              onChange={(event) => this.setState({
                age: event.target.value,
              })}
            />
          </label>
          <br />
          <br />
          <label>
            E-mail:
            <input
              type="email"
              onChange={(event) => this.setState({
                email: event.target.value,
              })}
            />
          </label>
          <br />
          <br />
          <button onClick={this.addClient}>Cadastrar</button>
          <Link to="/clientes">Voltar</Link>
        </form>
      )
    } else {
      return (
        <h2>Login não efetuado!</h2>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  myDispatch: state => dispatch(newAction(state)),
});

const mapStateToProps = (state) => ({
  authorized: state.myReducer.authorized,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);