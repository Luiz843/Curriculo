/**
 * @file Projects.test.jsx
 * @description Testes unitários do componente Projects: cards de projetos
 *              com título, descrição e link externo.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import { render, screen } from '@testing-library/react';
import Projects from '../pages/sections/Projects';

// ── Cards de projetos ─────────────────────────────────────────────

describe('Projects — cards', () => {
  it('renderiza pelo menos 2 títulos de projetos (h3)', () => {
    render(<Projects />);
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings.length).toBeGreaterThanOrEqual(2);
  });

  it('cada projeto tem um link de acesso', () => {
    render(<Projects />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(2);
  });

  it('renderiza projeto Hefesto — Discord Bot', () => {
    render(<Projects />);
    expect(screen.getByText(/hefesto/i)).toBeInTheDocument();
  });

  it('renderiza projeto Portfólio Web', () => {
    render(<Projects />);
    expect(screen.getByText(/portfólio web/i)).toBeInTheDocument();
  });
});
