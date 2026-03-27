# Luiz Carlos Polli — Portfólio

Portfólio pessoal responsivo desenvolvido com **React + Vite + styled-components**.
Dark theme com paleta amarela (#ffd100 / #ffee32), sidebar animada, linha do tempo de carreira e formulário de contato.

**Demo:** [luiz843.github.io/Curriculo](https://luiz843.github.io/Curriculo)

---

## Tecnologias

| Camada | Ferramentas |
|---|---|
| UI | React 19, styled-components 6 |
| Animação | Typed.js |
| Build | Vite 7 |
| Testes | Vitest 3 + Testing Library + jsdom |
| Cobertura | @vitest/coverage-istanbul |
| Deploy | GitHub Pages via gh-pages |
| Qualidade | ESLint 9 |

---

## Rodar localmente

**Pré-requisitos:** Node.js ≥ 18 (recomendado ≥ 20), npm ≥ 9.

```bash
# 1. Clonar o repositório
git clone https://github.com/Luiz843/Curriculo.git
cd Curriculo

# 2. Instalar dependências
npm install

# 3. Iniciar servidor de desenvolvimento
npm run dev
# → http://localhost:5173/Curriculo/
```

### Outros comandos úteis

```bash
npm run build        # Build de produção (pasta dist/)
npm run preview      # Servir o build localmente
npm run lint         # Lint ESLint
npm test             # Vitest em modo watch
npm run test:run     # Vitest modo CI (uma execução)
npm run test:coverage # Vitest + relatório de cobertura
```

---

## Deploy no GitHub Pages

```bash
# Publica a pasta dist/ no branch gh-pages automaticamente
npm run deploy
```

O script `predeploy` executa `npm run build` antes de cada deploy.
URL final: **https://luiz843.github.io/Curriculo**

> **Configuração necessária (uma vez):**
> No repositório GitHub → Settings → Pages → Source: `gh-pages` branch, raiz `/`.

---

## Estrutura de pastas

```
Curriculo/
├── public/
│   ├── avatar.jpeg          # Foto de perfil
│   └── vite.svg             # Favicon
├── src/
│   ├── components/
│   │   ├── Avatar/          # Foto circular com borda animada
│   │   ├── Card/            # Card reutilizável (ícone + título + descrição)
│   │   ├── Link/            # Link com hover fill animado
│   │   ├── Navbar/          # Barra de navegação fixa + hamburguer mobile
│   │   ├── Section/         # Container genérico de seção
│   │   └── Sidebar/         # Sidebar retrátil com Typed.js
│   ├── data/
│   │   └── resume.js        # ★ Fonte única de dados do currículo
│   ├── pages/
│   │   ├── Main.jsx         # Orquestrador de layout
│   │   ├── Main.styles.js
│   │   └── sections/
│   │       ├── About.jsx    # Sobre mim
│   │       ├── Contact.jsx  # Formulário + links sociais
│   │       ├── Projects.jsx # Cards de projetos
│   │       ├── Resume.jsx   # Linha do tempo + formação
│   │       ├── Services.jsx # Cards de serviços
│   │       └── Skills.jsx   # Tags de habilidades
│   ├── test/
│   │   ├── App.test.jsx
│   │   ├── About.test.jsx
│   │   ├── Contact.test.jsx
│   │   ├── Projects.test.jsx
│   │   ├── Resume.test.jsx
│   │   ├── Sections.test.jsx
│   │   ├── Services.test.jsx
│   │   ├── Sidebar.test.jsx
│   │   ├── Skills.test.jsx
│   │   ├── resume.test.js
│   │   ├── JSDOC_PADRAO.md
│   │   └── setup.js
│   ├── index.css            # Reset CSS + scroll-behavior: smooth
│   └── main.jsx             # Entry point React
├── index.html
├── vite.config.js           # Vite + Vitest + base '/Curriculo/'
├── package.json
└── eslint.config.js
```

---

## Atualizar dados do currículo

Edite **apenas** o arquivo `src/data/resume.js`. Todos os componentes importam
os dados dele — nenhum outro arquivo precisa ser alterado para atualizar
nome, experiências, skills, serviços ou links de contato.

---

## Licença

MIT © 2025 [Luiz Carlos Polli](https://github.com/Luiz843)
