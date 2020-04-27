const fs = require("fs");
const getTheme = require("./theme");

const lightTheme = getTheme({
  style: "light",
  name: "GitHub Light",
});
fs.writeFileSync("./themes/light.json", JSON.stringify(lightTheme, null, 2));

const darkTheme = getTheme({
  style: "dark",
  name: "GitHub Dark",
});
fs.writeFileSync("./themes/dark.json", JSON.stringify(darkTheme, null, 2));
