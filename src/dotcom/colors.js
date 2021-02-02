const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");

function getColors(theme) {
  if (theme === "light") {
    return lightColors;
  } else if (theme === "dark") {
    return darkColors;
  }
}

module.exports = {
  getColors,
};
