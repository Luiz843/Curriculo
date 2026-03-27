/**
 * @file setup.js
 * @description Setup global do Vitest. Estende os matchers do Jest com
 *              os custom matchers do @testing-library/jest-dom
 *              (toBeInTheDocument, toHaveClass, toHaveStyle, etc.).
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import '@testing-library/jest-dom';
