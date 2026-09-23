/**
 * @file Skills.test.jsx
 * @description Testes unitários do componente Skills: verifica que todos os
 *              itens do array skillBars de resume.js são renderizados como
 *              barras de progresso com nome e percentual.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import { render, screen } from '@testing-library/react';
import Skills from '../pages/sections/Skills';
import { skillBars } from '../data/resume';

// ── Skills — array de resume.js ───────────────────────────────────

describe('Skills — renderização a partir de resume.js', () => {
    it('renderiza o nome de todas as skills do array', () => {
        render(<Skills />);
        skillBars.forEach(({ name }) => {
            expect(screen.getByText(name)).toBeInTheDocument();
        });
    });

    it('renderiza exatamente o mesmo número de itens que skillBars.length', () => {
        render(<Skills />);
        // Cada skill é renderizada como um item com data-testid="skill-tag"
        const tags = screen.getAllByTestId('skill-tag');
        expect(tags.length).toBe(skillBars.length);
    });

    it('contém PHP (tecnologia que não estava no componente antigo)', () => {
        render(<Skills />);
        expect(screen.getByText('PHP')).toBeInTheDocument();
    });

    it('exibe o percentual de cada skill', () => {
        render(<Skills />);
        const tags = screen.getAllByTestId('skill-tag');
        skillBars.forEach(({ percent }) => {
            expect(tags.some(tag => tag.textContent.includes(`${percent}%`))).toBe(true);
        });
    });

    it('NÃO renderiza Python (estava hardcoded, não está em resume.js)', () => {
        render(<Skills />);
        expect(screen.queryByText('Python')).not.toBeInTheDocument();
    });
});
