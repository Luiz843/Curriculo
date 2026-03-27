# Padrão JSDoc — Projeto Curriculo

Todo arquivo `.jsx`, `.js` e `.styles.js` do projeto **deve** iniciar com
o seguinte cabeçalho:

```js
/**
 * @file NomeDoArquivo.jsx
 * @description Descrição do componente ou módulo
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */
```

## Campos obrigatórios

| Tag           | Conteúdo                                          |
|---------------|---------------------------------------------------|
| `@file`       | Nome exato do arquivo com extensão                |
| `@description`| O que o componente/módulo faz (1–2 linhas)        |
| `@author`     | `Luiz Carlos Polli <lcpolli@ucs.br>`              |
| `@copyright`  | `2025 Luiz Carlos Polli`                          |
| `@license`    | `MIT`                                             |
| `@version`    | `1.0.0` (incrementar a cada release significativa)|

## Funções e componentes

```js
/**
 * @description O que a função/componente faz
 * @param {string}   title       - Título exibido no card
 * @param {string}   [description] - Descrição opcional
 * @param {Function} [onClick]   - Callback ao clicar
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function Card({ title, description, onClick }) { ... }
```

## Arquivos de estilo (*.styles.js)

```js
/**
 * @file Card.styles.js
 * @description Styled-components do Card: CardContainer, CardTitle, etc.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */
```

## Arquivos de teste (*.test.jsx)

```js
/**
 * @file NomeDoComponente.test.jsx
 * @description Testes unitários do componente NomeDoComponente
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */
```
