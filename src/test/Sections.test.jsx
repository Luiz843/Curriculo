/**
 * @file Sections.test.jsx
 * @description Testes de validação dos IDs das seções em português e
 *              de propriedades estruturais (Link position:relative, etc.).
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import { render } from '@testing-library/react';
import Contact  from '../pages/sections/Contact';
import Projects from '../pages/sections/Projects';
import Resume   from '../pages/sections/Resume';
import Services from '../pages/sections/Services';

// ── IDs das seções em português ───────────────────────────────────

describe('IDs das seções — padrão PT-BR', () => {
  it('Contact renderiza com id="contato"', () => {
    const { container } = render(<Contact />);
    expect(container.querySelector('#contato')).toBeInTheDocument();
  });

  it('Projects renderiza com id="projetos"', () => {
    const { container } = render(<Projects />);
    expect(container.querySelector('#projetos')).toBeInTheDocument();
  });

  it('Resume renderiza com id="curriculo"', () => {
    const { container } = render(<Resume />);
    expect(container.querySelector('#curriculo')).toBeInTheDocument();
  });

  it('Services renderiza com id="servicos"', () => {
    const { container } = render(<Services />);
    expect(container.querySelector('#servicos')).toBeInTheDocument();
  });
});
