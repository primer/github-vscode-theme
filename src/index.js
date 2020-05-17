const fs = require("fs").promises;
const getTheme = require("./theme");

const lightTheme = getTheme({
  style: "light",
  name: "GitHub Light",
});

const darkTheme = getTheme({
  style: "dark",
  name: "GitHub Dark",
});

fs.mkdir("./themes").then(() => {
  fs.writeFile("./themes/light.json", JSON.stringify(lightTheme, null, 2))
  fs.writeFile("./themes/dark.json", JSON.stringify(darkTheme, null, 2))
})
