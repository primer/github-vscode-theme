const lightPrimerColors = require("@primer/primitives/dist/json/colors/light.json");
const darkPrimerColors = require("@primer/primitives/dist/json/colors/dark.json");
const dimmedPrimerColors = require("@primer/primitives/dist/json/colors/dimmed.json");

// We only need the scale for now
const lightColors = lightPrimerColors.scale;
const darkColors = darkPrimerColors.scale;
const dimmedColors = dimmedPrimerColors.scale;

function getColors(theme) {
  if (theme === "light") {
    return lightColors;
  } else if (theme === "dark") {
    return darkColors;
  } else if (theme === "dimmed") {
    return dimmedColors;
  }
}

module.exports = {
  getColors,
};
