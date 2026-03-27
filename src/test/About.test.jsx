/**
 * @file About.test.jsx
 * @description Testes unitários do componente About: verifica que os dados
 *              reais de personalInfo (name e bio) são renderizados.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import { render, screen } from '@testing-library/react';
import About from '../pages/sections/About';
import { personalInfo } from '../data/resume';

// ── About — dados de personalInfo ────────────────────────────────

describe('About — dados de personalInfo', () => {
    it('renderiza o nome de personalInfo.name', () => {
        render(<About />);
        expect(screen.getByText(personalInfo.name)).toBeInTheDocument();
    });

    it('renderiza a bio de personalInfo.bio', () => {
        render(<About />);
        // A bio é longa; basta verificar um trecho característico
        expect(screen.getByText(personalInfo.bio)).toBeInTheDocument();
    });

    it('renderiza a localização de personalInfo.location', () => {
        render(<About />);
        expect(screen.getByText(personalInfo.location)).toBeInTheDocument();
    });

    it('renderiza o cargo de personalInfo.role', () => {
        render(<About />);
        expect(screen.getByText(personalInfo.role)).toBeInTheDocument();
    });

    it('seção tem id="sobre"', () => {
        const { container } = render(<About />);
        expect(container.querySelector('#sobre')).toBeInTheDocument();
    });
});
