/**
 * @file Sidebar.test.jsx
 * @description Testes unitários do componente Sidebar: verifica que
 *              personalInfo.role, github e linkedin são usados corretamente.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import { render, screen } from '@testing-library/react';
import Sidebar from '../components/Sidebar/Sidebar';
import { personalInfo } from '../data/resume';

// Mock do Typed.js para evitar manipulação real de DOM em testes
vi.mock('typed.js', () => ({
    default: vi.fn().mockImplementation(() => ({ destroy: vi.fn() })),
}));

// ── Sidebar — dados de personalInfo ──────────────────────────────

describe('Sidebar — dados de personalInfo', () => {
    const noop = () => {};

    it('renderiza personalInfo.role no título h1', () => {
        render(<Sidebar isOpen={true} setIsOpen={noop} />);
        expect(screen.getByRole('heading', { level: 1, name: personalInfo.role }))
            .toBeInTheDocument();
    });

    it('link LinkedIn usa personalInfo.linkedin', () => {
        render(<Sidebar isOpen={true} setIsOpen={noop} />);
        expect(screen.getByRole('link', { name: /linkedin/i }))
            .toHaveAttribute('href', personalInfo.linkedin);
    });

    it('link GitHub usa personalInfo.github', () => {
        render(<Sidebar isOpen={true} setIsOpen={noop} />);
        expect(screen.getByRole('link', { name: /github/i }))
            .toHaveAttribute('href', personalInfo.github);
    });
});
