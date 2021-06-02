import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { newAction } from '../actions';

class Clientes extends React.Component {
  constructor() {
    super();

    this.state = {
      redirect: false,
      sort: false,
    };
  }

goToForm = () => {
  this.setState({ redirect: true });
}

orderList = () => {
  this.setState((prevState) => ({ sort: !prevState.sort } ));
}

removeClient = (e) => {
  e.preventDefault();
  console.log(e.target.value);
  this.props.myDispatch({ 
    type: 'REMOVE',
    payload: e.target.value,
  })
}

  render() {
    const { clients } = this.props;
    const { sort } = this.state;
    console.log(clients);
    const orderedClients = [...clients];
    orderedClients.sort((a, b) => (a.name > b.name) ? 1 : -1);
    console.log(sort);
    if (this.state.redirect) {
      return <Redirect to="/cadastro" />
    }
    if (this.props.authorized) {
      if(this.state.sort) {
        return(
          <div>
            Usuários cadastrados:
              {orderedClients.map((entry, index) => (
                <p key={index}>Nome: {entry.name}  Idade: {entry.age}  E-mail: {entry.email}
                  <button value={entry.name} onClick={this.removeClient}>X</button></p>
              ))}
            <button onClick={this.goToForm}>Cadastrar</button>
            <button onClick={this.orderList}>Ordenar</button>
          </div>
        )
      } else {
        return(
          <div>
            Usuários cadastrados:
              {clients.map((entry, index) => (
                <p key={index}>Nome: {entry.name}<br />Idade: {entry.age}<br />E-mail: {entry.email}
                  <button value={entry.name} onClick={this.removeClient}>X</button></p>
              ))}
            <button onClick={this.goToForm}>Cadastrar</button>
            <button onClick={this.orderList}>Ordenar</button>
          </div>
        )
      }
    } else {
      return (
        <h2>Login não efetuado!</h2>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  clients: state.myReducer.clients,
  authorized: state.myReducer.authorized,
});

const mapDispatchToProps = (dispatch) => ({
  myDispatch: state => dispatch(newAction(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clientes);