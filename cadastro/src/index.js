import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './pages/login';
import Clientes from './pages/clientes';
import Cadastro from './pages/cadastro';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/clientes" component={Clientes} />
        <Route path="/login" component={Login} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
