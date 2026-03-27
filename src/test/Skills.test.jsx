/**
 * @file Skills.test.jsx
 * @description Testes unitários do componente Skills: verifica que todos os
 *              itens do array skills de resume.js são renderizados como tags.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import { render, screen } from '@testing-library/react';
import Skills from '../pages/sections/Skills';
import { skills } from '../data/resume';

// ── Skills — array de resume.js ───────────────────────────────────

describe('Skills — renderização a partir de resume.js', () => {
    it('renderiza todas as skills do array', () => {
        render(<Skills />);
        skills.forEach(skill => {
            expect(screen.getByText(skill)).toBeInTheDocument();
        });
    });

    it('renderiza exatamente o mesmo número de tags que skills.length', () => {
        render(<Skills />);
        // Cada skill é renderizada como um item com data-testid="skill-tag"
        const tags = screen.getAllByTestId('skill-tag');
        expect(tags.length).toBe(skills.length);
    });

    it('contém PHP (tecnologia que não estava no componente antigo)', () => {
        render(<Skills />);
        expect(screen.getByText('PHP')).toBeInTheDocument();
    });

    it('contém PL/SQL (tecnologia que não estava no componente antigo)', () => {
        render(<Skills />);
        expect(screen.getByText('PL/SQL')).toBeInTheDocument();
    });

    it('NÃO renderiza Python (estava hardcoded, não está em resume.js)', () => {
        render(<Skills />);
        expect(screen.queryByText('Python')).not.toBeInTheDocument();
    });
});
