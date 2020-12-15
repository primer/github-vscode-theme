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
  } else if (theme === "spacegray") {
    return invertColors(lightColors);
  }
}

function invertColors(colors) {
  /* The array of light to dark colors are reversed to auto-generate dark theme */
  Object.entries(colors).forEach(([name, val]) => {
    if (name === "black") {
      colors.white = val;
    } else if (name === "white") {
      colors.black = val;
    } else {
      colors[name] = [...val].reverse();
    }
  });
  return colors;
}

module.exports = {
  getColors,
};
