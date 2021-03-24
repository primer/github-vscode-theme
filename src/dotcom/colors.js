const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");
const dimmedColors = require("@primer/primitives/dist/json/colors/dark_dimmed.json");

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
