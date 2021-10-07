const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");
const dimmedColors = require("@primer/primitives/dist/json/colors/dark_dimmed.json");
const protanopiaColors = require("@primer/primitives/dist/json/colors/light_protanopia.json");
const hcColors = require("@primer/primitives/dist/json/colors/dark_high_contrast.json");
const darkProtanopiaColors = require("@primer/primitives/dist/json/colors/dark_protanopia.json");

function getColors(theme) {
  if (theme === "light") {
    return lightColors;
  } else if (theme === "dark") {
    return darkColors;
  } else if (theme === "dimmed") {
    return dimmedColors;
  } else if (theme === "protanopia") {
    return protanopiaColors;
  } else if (theme === "hc") {
    return hcColors;
  } else if (theme === "dark-protanopia") {
    return darkProtanopiaColors;
  }
}

module.exports = {
  getColors,
};
