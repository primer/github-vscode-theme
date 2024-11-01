const path = "@primer/primitives/dist/json/colors/";

/**
 * Returns a theme object based on the provided theme name.
 * @param {string} theme - The name of the theme to retrieve.
 * @returns {Object} - The theme object.
 * @throws Will throw an error if the given theme is not a valid option.
 */
function getColors(theme) {
  switch (theme) {
    case "light":
      return require(`${path}light.json`);
    case "light_high_contrast":
      return require(`${path}light_high_contrast.json`);
    case "light_colorblind":
      return require(`${path}light_colorblind.json`);
    case "dark":
      return require(`${path}dark.json`);
    case "dark_high_contrast":
      return require(`${path}dark_high_contrast.json`);
    case "dark_colorblind":
      return require(`${path}dark_colorblind.json`);
    case "dark_dimmed":
      return require(`${path}dark_dimmed.json`);
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}

// Exports the `getColors` function
module.exports = {
  getColors,
};

// IIFE to prevent global scope pollution
(() => {
  // Example usage
  const lightColors = getColors("light");
  console.log(lightColors);
})();
