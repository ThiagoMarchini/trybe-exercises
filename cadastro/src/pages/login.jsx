import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { newAction } from '../actions';

class Login extends React.Component{
  constructor() {
    super();

    this.state = {
      redirect: false,
      userLogin: '',
      userPassword: '',
    };
  }

  findClient = (e) => {
    e.preventDefault();
    const { userLogin, userPassword } = this.state;
    const foundLogin = this.props.myState.find((element) => element.login === userLogin);
    const foundPassword = this.props.myState.find((element) => element.password === userPassword);
    if (foundLogin && foundPassword) {
      this.props.myDispatch({ type: 'LOGIN' });
      this.setState({ redirect: true });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/clientes" />
    }
    return(
      <form>
        <label>
          E-mail:
          <input type="email" onChange={(event) => this.setState({
            userLogin: event.target.value,
          })}/>
        </label>
        <label>
          Senha:
          <input type="password" onChange={(event) => this.setState({
            userPassword: event.target.value,
          })} />
        </label>
        <button onClick={this.findClient}>Login</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  myState: state.myReducer.users,
});

const mapDispatchToProps = (dispatch) => ({
  myDispatch: state => dispatch(newAction(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
