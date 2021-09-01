const lightColors = require("@primer/primitives/dist/json/colors_v2/light.json");
const darkColors = require("@primer/primitives/dist/json/colors_v2/dark.json");
const dimmedColors = require("@primer/primitives/dist/json/colors_v2/dark_dimmed.json");
const hcColors = require("@primer/primitives/dist/json/colors_v2/dark_high_contrast.json");

function getColors(theme) {
  if (theme === "light") {
    return lightColors;
  } else if (theme === "dark") {
    return darkColors;
  } else if (theme === "dimmed") {
    return dimmedColors;
  } else if (theme === "hc") {
    return hcColors;
  }
}

module.exports = {
  getColors,
};
