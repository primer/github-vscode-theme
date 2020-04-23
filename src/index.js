const fs = require("fs");
const { colors } = require("@primer/primitives");

const getTheme = require("./theme");

/* The array of light to dark colors are reversed to auto-generate dark theme */
const darkColors = {};
Object.entries(colors).forEach(([name, val]) => {
  if (name === "black") {
    darkColors.white = val;
  } else if (name === "white") {
    darkColors.black = val;
  } else {
    darkColors[name] = [...val].reverse();
  }
});

const lightTheme = getTheme({ colors, name: "GitHub Light" });
fs.writeFileSync("./themes/light.json", JSON.stringify(lightTheme, null, 2));

const darkTheme = getTheme({ colors: darkColors, name: "GitHub Dark" });
fs.writeFileSync("./themes/dark.json", JSON.stringify(darkTheme, null, 2));
