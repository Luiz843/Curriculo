/**
 * @file resume.js
 * @description Fonte única de dados do currículo: informações pessoais,
 *              experiências, formação, skills e serviços. Todos os
 *              componentes devem importar daqui em vez de ter conteúdo hardcoded.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

// ── Informações pessoais ──────────────────────────────────────────

/** @type {{ name: string, role: string, email: string, github: string, linkedin: string, location: string, bio: string }} */
export const personalInfo = {
    name: "Luiz Carlos Polli",
    role: "Desenvolvedor Web Júnior",
    email: "lcpolli@ucs.br",
    github: "https://github.com/Luiz843",
    linkedin: "https://www.linkedin.com/in/luiz-carlos-polli-8124161a1/",
    location: "Caxias do Sul, RS",
    bio: "Desenvolvedor Web Júnior com experiência em PHP, HTML, CSS, JavaScript, React e PostgreSQL. Arquitetura MVC, testes unitários, documentação técnica e metodologias ágeis (Scrum). Familiaridade com Linux, Git, administração de servidores e suporte a equipamentos de TI.",
};

// ── Experiências profissionais ────────────────────────────────────

/**
 * @typedef  {{ company: string, role: string, start: string, end: string, location: string }} Experience
 * @type {Experience[]}
 */
export const experiences = [
    {
        company: "Plenatech",
        role: "Desenvolvedor Web Júnior",
        start: "Out/2024",
        end: "Atual",
        location: "Caxias do Sul, RS",
    },
    {
        company: "Roni Chaves",
        role: "Analista de Suporte → Analista de Sistemas",
        start: "Dez/2020",
        end: "Out/2024",
        location: "Caxias do Sul, RS",
    },
    {
        company: "Vero Dellaudo",
        role: "Analista de Suporte",
        start: "Dez/2017",
        end: "Jun/2020",
        location: "",
    },
];

// ── Formação acadêmica ────────────────────────────────────────────

/**
 * @typedef  {{ institution: string, course: string, status: string }} Education
 * @type {Education[]}
 */
export const education = [
    {
        institution: "UCS",
        course: "Análise e Desenvolvimento de Sistemas",
        status: "Cursando",
    },
];

// ── Habilidades ───────────────────────────────────────────────────

/** @type {string[]} */
export const skills = [
    "PHP", "JavaScript", "React", "HTML5", "CSS3",
    "PL/SQL", "PostgreSQL", "Oracle SQL", "Lua", "C",
    "Git", "Linux", "VMware", "Scrum", "MVC", "REST APIs",
];

// ── Serviços ──────────────────────────────────────────────────────

/**
 * @typedef  {{ title: string, description: string }} Service
 * @type {Service[]}
 */
export const services = [
    {
        title: "Desenvolvimento Web",
        description: "Criação de aplicações web modernas com React, PHP e boas práticas de arquitetura MVC.",
    },
    {
        title: "Suporte em TI",
        description: "Instalação, configuração e manutenção de desktops, notebooks e servidores físicos e virtuais.",
    },
    {
        title: "Análise de Sistemas",
        description: "Levantamento de requisitos, mapeamento de processos e modelagem de dados.",
    },
];

// ── Strings animadas para Sidebar (Typed.js) ─────────────────────

/**
 * Agrupa as skills em linhas de até 5 para exibição animada na sidebar.
 * @type {string[]}
 */
export const typedStrings = [
    skills.slice(0, 5).join(', '),   // PHP, JavaScript, React, HTML5, CSS3
    skills.slice(5, 10).join(', '),  // PL/SQL, PostgreSQL, Oracle SQL, Lua, C
    skills.slice(10).join(', '),     // Git, Linux, VMware, Scrum, MVC, REST APIs
];
