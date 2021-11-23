const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");
const dimmedColors = require("@primer/primitives/dist/json/colors/dark_dimmed.json");
const lightColorblindColors = require("@primer/primitives/dist/json/colors/light_colorblind.json");
const hcColors = require("@primer/primitives/dist/json/colors/dark_high_contrast.json");
const darkColorblindColors = require("@primer/primitives/dist/json/colors/dark_colorblind.json");

function getColors(theme) {
  if (theme === "light") {
    return lightColors;
  } else if (theme === "dark") {
    return darkColors;
  } else if (theme === "dimmed") {
    return dimmedColors;
  } else if (theme === "light_colorblind") {
    return lightColorblindColors;
  } else if (theme === "hc") {
    return hcColors;
  } else if (theme === "dark_colorblind") {
    return darkColorblindColors;
  }
}

module.exports = {
  getColors,
};
