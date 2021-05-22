import React from 'react';
import renderWithRouter from './renderWithRouter';
import { fireEvent } from '@testing-library/react';
import App, { About } from './App';

describe('Teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
  });

  it('deve renderizar o componente sobre', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText(/sobre/i));
    const pathname = history.location.pathname;
    expect(pathname).toBe('/about');
    const aboutAll = getByText(/você está na página sobre/i);
    expect(aboutAll).toBeInTheDocument();
  });

  it('testa um caminho inexistente e a renderização da página Not Found', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/caminho/inexistente');
    const noPage = getByText(/página não encontrada/i);
    expect(noPage).toBeInTheDocument();
  });

  it('deve renderizar o componente About (apenas componente)', () => {
    const { getByText } = renderWithRouter(<About />);
    const aboutOnly = getByText(/Você está na página Sobre/i);
    expect(aboutOnly).toBeInTheDocument();
  });
});
