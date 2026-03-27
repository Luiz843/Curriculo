/**
 * @file Resume.test.jsx
 * @description Testes unitários do componente Resume: linha do tempo de
 *              experiências profissionais e seção de formação acadêmica.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import { render, screen } from '@testing-library/react';
import Resume from '../pages/sections/Resume';

// ── Experiências profissionais ────────────────────────────────────

describe('Resume — experiências', () => {
  it('exibe Plenatech na linha do tempo', () => {
    render(<Resume />);
    expect(screen.getByText(/plenatech/i)).toBeInTheDocument();
  });

  it('exibe cargo Desenvolvedor Web Júnior', () => {
    render(<Resume />);
    expect(screen.getByText(/desenvolvedor web júnior/i)).toBeInTheDocument();
  });

  it('exibe Roni Chaves na linha do tempo', () => {
    render(<Resume />);
    expect(screen.getByText(/roni chaves/i)).toBeInTheDocument();
  });

  it('exibe Vero Dellaudo na linha do tempo', () => {
    render(<Resume />);
    expect(screen.getByText(/vero dellaudo/i)).toBeInTheDocument();
  });

  it('exibe período Out/2024 - Atual', () => {
    render(<Resume />);
    expect(screen.getByText(/out\/2024 - atual/i)).toBeInTheDocument();
  });
});

// ── Formação acadêmica ────────────────────────────────────────────

describe('Resume — formação', () => {
  it('exibe UCS como instituição', () => {
    render(<Resume />);
    expect(screen.getByText(/ucs/i)).toBeInTheDocument();
  });

  it('exibe Análise e Desenvolvimento de Sistemas', () => {
    render(<Resume />);
    expect(screen.getByText(/análise e desenvolvimento de sistemas/i)).toBeInTheDocument();
  });

  it('exibe status Cursando', () => {
    render(<Resume />);
    expect(screen.getByText(/cursando/i)).toBeInTheDocument();
  });
});
