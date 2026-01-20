const lightColors = require("@primer/primitives/dist/docs/functional/themes/light.json");
const lightHighContrastColors = require("@primer/primitives/dist/docs/functional/themes/light-high-contrast.json");
const lightColorblindColors = require("@primer/primitives/dist/docs/functional/themes/light-colorblind.json");
const lightColorblindHighContrastColors = require("@primer/primitives/dist/docs/functional/themes/light-colorblind-high-contrast.json");
const lightTritanopiaColors = require("@primer/primitives/dist/docs/functional/themes/light-tritanopia.json");
const lightTritanopiaHighContrastColors = require("@primer/primitives/dist/docs/functional/themes/light-tritanopia-high-contrast.json");
const darkColors = require("@primer/primitives/dist/docs/functional/themes/dark.json");
const darkHighContrastColors = require("@primer/primitives/dist/docs/functional/themes/dark-high-contrast.json");
const darkColorblindColors = require("@primer/primitives/dist/docs/functional/themes/dark-colorblind.json");
const darkColorblindHighContrastColors = require("@primer/primitives/dist/docs/functional/themes/dark-colorblind-high-contrast.json");
const darkTritanopiaColors = require("@primer/primitives/dist/docs/functional/themes/dark-tritanopia.json");
const darkTritanopiaHighContrastColors = require("@primer/primitives/dist/docs/functional/themes/dark-tritanopia-high-contrast.json");
const dimmedColors = require("@primer/primitives/dist/docs/functional/themes/dark-dimmed.json");
const dimmedHighContrastColors = require("@primer/primitives/dist/docs/functional/themes/dark-dimmed-high-contrast.json");

/**
 * Get color primitives for a given theme
 * Returns the raw @primer/primitives v11 structure (flat keys with .value property)
 */
function getColors(theme) {
  switch(theme) {
    case "light":
      return lightColors;
    case "light_high_contrast":
      return lightHighContrastColors;
    case "light_colorblind":
      return lightColorblindColors;
    case "light_colorblind_high_contrast":
      return lightColorblindHighContrastColors;
    case "light_tritanopia":
      return lightTritanopiaColors;
    case "light_tritanopia_high_contrast":
      return lightTritanopiaHighContrastColors;
    case "dark":
      return darkColors;
    case "dark_high_contrast":
      return darkHighContrastColors;
    case "dark_colorblind":
      return darkColorblindColors;
    case "dark_colorblind_high_contrast":
      return darkColorblindHighContrastColors;
    case "dark_tritanopia":
      return darkTritanopiaColors;
    case "dark_tritanopia_high_contrast":
      return darkTritanopiaHighContrastColors;
    case "dark_dimmed":
      return dimmedColors;
    case "dark_dimmed_high_contrast":
      return dimmedHighContrastColors;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}

/**
 * Helper to get a color value from primitives
 * @param {Object} colors - The primitives object
 * @param {string} key - The color key (e.g., 'fgColor-default')
 * @returns {string} The hex color value
 */
function getColor(colors, key) {
  return colors[key]?.value || '';
}

/**
 * Helper to get scale color (e.g., blue[6])
 * @param {Object} colors - The primitives object
 * @param {string} colorName - The color name (e.g., 'blue')
 * @param {number} index - The scale index (0-9)
 * @returns {string} The hex color value
 */
function getScaleColor(colors, colorName, index) {
  return colors[`display-${colorName}-scale-${index}`]?.value || '';
}

module.exports = {
  getColors,
  getColor,
  getScaleColor,
};
