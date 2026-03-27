/**
 * @file Services.test.jsx
 * @description Testes unitários do componente Services: cards de serviços
 *              oferecidos com título e descrição.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import { render, screen } from '@testing-library/react';
import Services from '../pages/sections/Services';

// ── Cards de serviços ─────────────────────────────────────────────

describe('Services — cards', () => {
  it('exibe serviço Desenvolvimento Web', () => {
    render(<Services />);
    expect(screen.getByText(/desenvolvimento web/i)).toBeInTheDocument();
  });

  it('exibe serviço Suporte em TI', () => {
    render(<Services />);
    expect(screen.getByText(/suporte em ti/i)).toBeInTheDocument();
  });

  it('exibe serviço Análise de Sistemas', () => {
    render(<Services />);
    expect(screen.getByText(/análise de sistemas/i)).toBeInTheDocument();
  });

  it('renderiza 3 cards de serviços', () => {
    render(<Services />);
    // Cada card tem um título h3
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings.length).toBeGreaterThanOrEqual(3);
  });
});
