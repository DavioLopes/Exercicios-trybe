import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';
import App from './App';

it('deve renderizar o componente App', () => {
  renderWithRouter(<App />);

  const homeTitle = screen.getByRole('heading', {
    name: 'Você está na página Início',
  });
  expect(homeTitle).toBeInTheDocument();
}); 

it('deve renderizar o componente Sobre', () => {
  const { history } = renderWithRouter(<App />);

  const aboutLInk = screen.getByRole('link', { name: 'Sobre' });
  expect(aboutLInk).toBeInTheDocument();
  userEvent.click(aboutLInk);

  const { pathname } = history.location;
  expect(pathname).toBe('/about');

  const aboutTitle = screen.getByRole('heading',
    { name: 'Você está na página Sobre' });
  expect(aboutTitle).toBeInTheDocument();
});

it('Verifica se a pagina: "not found" aparece ao digitar um endereço errado', () => {
  const { history } = renderWithRouter(<App />);

  history.push('/paginaQueNaoExiste');

  const notFound = screen.getByRole('heading', { name: 'Página não encontrada' });

  expect(notFound).toBeInTheDocument();
});
