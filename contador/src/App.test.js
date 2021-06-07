import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('after clicking the button the text should be 1', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    userEvent.click(buttonAdicionar);
    expect(queryByText('1')).toBeInTheDocument();
  });

  test('initial value 10 and click', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    const buttonAdicionar = queryByText('Clique aqui');

    expect(queryByText('10')).toBeInTheDocument();
    userEvent.click(buttonAdicionar);
    expect(queryByText('11')).toBeInTheDocument();
  })
});
