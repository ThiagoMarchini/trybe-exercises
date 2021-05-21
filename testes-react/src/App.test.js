import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';


describe('Tela de inserção de email:', () => {
  it('Verifica se há um input Email', () => {
    const meuApp = render(<App />);
    const inputEmail = meuApp.getByLabelText('Email');

    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });

  it('Verifica se há dois botões', () => {
    const meuApp = render(<App />);
    const button = meuApp.getAllByRole('button');

    expect(button.length).toBe(2);
  })

  it('Verifica se há um botão de "Enviar"', () => {
    const meuApp = render(<App />);
    const sendButton = meuApp.getByTestId('id-send');

    expect(sendButton).toBeInTheDocument();
    expect(sendButton.type).toBe('button');
    expect(sendButton.value).toBe('Enviar');
  })

  it('Verifica se há um botão de "Voltar"', () => {
    const meuApp = render(<App />);
    const backButton = meuApp.getByTestId('id-back');

    expect(backButton).toBeInTheDocument();
    expect(backButton.type).toBe('button');
    expect(backButton.value).toBe('Voltar');
  })
})

test('Verificando se o botão e o campo email estão funcionando.', () => {
  const { getByTestId, getByLabelText } = render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});