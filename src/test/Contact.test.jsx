/**
 * @file Contact.test.jsx
 * @description Testes unitários do componente Contact: formulário,
 *              campos, botão Enviar e links sociais.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import { render, screen } from '@testing-library/react';
import Contact from '../pages/sections/Contact';

// ── Formulário ────────────────────────────────────────────────────

describe('Contact — formulário', () => {
  it('renderiza campo Nome', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/nome/i)).toBeInTheDocument();
  });

  it('renderiza campo Email', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });

  it('renderiza campo Mensagem', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/mensagem/i)).toBeInTheDocument();
  });

  it('renderiza botão Enviar', () => {
    render(<Contact />);
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });
});

// ── Links sociais ─────────────────────────────────────────────────

describe('Contact — links sociais', () => {
  it('link GitHub aponta para https://github.com/Luiz843', () => {
    render(<Contact />);
    expect(screen.getByRole('link', { name: /github/i }))
      .toHaveAttribute('href', 'https://github.com/Luiz843');
  });

  it('link LinkedIn aponta para o perfil correto', () => {
    render(<Contact />);
    expect(screen.getByRole('link', { name: /linkedin/i }))
      .toHaveAttribute('href', 'https://www.linkedin.com/in/luiz-carlos-polli-8124161a1/');
  });

  it('link Email aponta para mailto:lcpolli@ucs.br', () => {
    render(<Contact />);
    expect(screen.getByRole('link', { name: /email/i }))
      .toHaveAttribute('href', 'mailto:lcpolli@ucs.br');
  });
});
