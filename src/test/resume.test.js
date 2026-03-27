/**
 * @file resume.test.js
 * @description Testes de validação do arquivo de dados centralizado src/data/resume.js.
 *              Verifica shape, tipos e conteúdo obrigatório de cada export.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import {
    personalInfo,
    experiences,
    education,
    skills,
    services,
} from '../data/resume';

// ── personalInfo ──────────────────────────────────────────────────

describe('resume.js — personalInfo', () => {
    it('exporta objeto personalInfo', () => {
        expect(personalInfo).toBeDefined();
        expect(typeof personalInfo).toBe('object');
    });

    it('contém todos os campos obrigatórios', () => {
        const campos = ['name', 'role', 'email', 'github', 'linkedin', 'location', 'bio'];
        campos.forEach(campo => expect(personalInfo).toHaveProperty(campo));
    });

    it('name é "Luiz Carlos Polli"', () => {
        expect(personalInfo.name).toBe('Luiz Carlos Polli');
    });

    it('email aponta para lcpolli@ucs.br', () => {
        expect(personalInfo.email).toBe('lcpolli@ucs.br');
    });

    it('github aponta para https://github.com/Luiz843', () => {
        expect(personalInfo.github).toBe('https://github.com/Luiz843');
    });

    it('linkedin contém o perfil correto', () => {
        expect(personalInfo.linkedin).toContain('luiz-carlos-polli');
    });

    it('bio é uma string não-vazia', () => {
        expect(typeof personalInfo.bio).toBe('string');
        expect(personalInfo.bio.length).toBeGreaterThan(10);
    });
});

// ── experiences ───────────────────────────────────────────────────

describe('resume.js — experiences', () => {
    it('exporta array de experiências com pelo menos 3 itens', () => {
        expect(Array.isArray(experiences)).toBe(true);
        expect(experiences.length).toBeGreaterThanOrEqual(3);
    });

    it('cada experiência tem os campos obrigatórios', () => {
        experiences.forEach(exp => {
            expect(exp).toHaveProperty('company');
            expect(exp).toHaveProperty('role');
            expect(exp).toHaveProperty('start');
            expect(exp).toHaveProperty('end');
        });
    });

    it('primeira experiência é Plenatech', () => {
        expect(experiences[0].company).toBe('Plenatech');
        expect(experiences[0].end).toBe('Atual');
    });
});

// ── education ─────────────────────────────────────────────────────

describe('resume.js — education', () => {
    it('exporta array de formação com pelo menos 1 item', () => {
        expect(Array.isArray(education)).toBe(true);
        expect(education.length).toBeGreaterThanOrEqual(1);
    });

    it('formação contém UCS e status Cursando', () => {
        expect(education[0].institution).toBe('UCS');
        expect(education[0].status).toBe('Cursando');
    });

    it('curso é Análise e Desenvolvimento de Sistemas', () => {
        expect(education[0].course).toBe('Análise e Desenvolvimento de Sistemas');
    });
});

// ── skills ────────────────────────────────────────────────────────

describe('resume.js — skills', () => {
    it('exporta array de strings com pelo menos 16 itens', () => {
        expect(Array.isArray(skills)).toBe(true);
        expect(skills.length).toBeGreaterThanOrEqual(16);
        skills.forEach(s => expect(typeof s).toBe('string'));
    });

    it('contém tecnologias principais', () => {
        expect(skills).toContain('PHP');
        expect(skills).toContain('React');
        expect(skills).toContain('JavaScript');
        expect(skills).toContain('Git');
    });
});

// ── services ─────────────────────────────────────────────────────

describe('resume.js — services', () => {
    it('exporta array de serviços com 3 itens', () => {
        expect(Array.isArray(services)).toBe(true);
        expect(services.length).toBe(3);
    });

    it('cada serviço tem title e description', () => {
        services.forEach(srv => {
            expect(srv).toHaveProperty('title');
            expect(srv).toHaveProperty('description');
        });
    });

    it('contém Desenvolvimento Web, Suporte em TI, Análise de Sistemas', () => {
        const titles = services.map(s => s.title);
        expect(titles).toContain('Desenvolvimento Web');
        expect(titles).toContain('Suporte em TI');
        expect(titles).toContain('Análise de Sistemas');
    });
});
