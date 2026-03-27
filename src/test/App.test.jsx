/**
 * @file App.test.jsx
 * @description Testes de validação do ambiente Vitest + Testing Library.
 *              Verifica que jsdom, globals e jest-dom estão configurados.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../components/Card/Card';

// ── Testes do componente Card ─────────────────────────────────────

describe('Card', () => {
  it('renderiza o título corretamente', () => {
    render(<Card title="Meu Título" />);

    expect(screen.getByText('Meu Título')).toBeInTheDocument();
  });

  it('renderiza a descrição quando fornecida', () => {
    render(<Card title="Título" description="Descrição do card" />);

    expect(screen.getByText('Descrição do card')).toBeInTheDocument();
  });

  it('não renderiza descrição quando ausente', () => {
    render(<Card title="Título" />);

    expect(screen.queryByText('Descrição do card')).not.toBeInTheDocument();
  });

  it('renderiza o ícone quando fornecido', () => {
    render(<Card title="Título" icon="🚀" />);

    expect(screen.getByText('🚀')).toBeInTheDocument();
  });

  it('chama onClick ao ser clicado', () => {
    const handleClick = vi.fn();
    render(<Card title="Clicável" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Clicável'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

// ── Validação do ambiente de testes ──────────────────────────────

describe('Ambiente de testes', () => {
  it('globals do Vitest estão disponíveis (describe, it, expect)', () => {
    expect(true).toBe(true);
  });

  it('jest-dom está configurado (toBeInTheDocument disponível)', () => {
    const { container } = render(<span data-testid="probe">ok</span>);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('jsdom está ativo (window e document existem)', () => {
    expect(typeof window).toBe('object');
    expect(typeof document).toBe('object');
  });
});
