const fs = require("fs").promises;
const getTheme = require("./theme");

const lightTheme = getTheme({
  theme: "light",
  name: "GitHub Light",
});

const darkTheme = getTheme({
  theme: "dark",
  name: "GitHub Dark",
});

// const dimmedTheme = getTheme({
//   theme: "dimmed",
//   name: "GitHub Dimmed",
// });

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/light.json", JSON.stringify(lightTheme, null, 2)),
    fs.writeFile("./themes/dark.json", JSON.stringify(darkTheme, null, 2)),
    // fs.writeFile("./themes/dimmed.json", JSON.stringify(dimmedTheme, null, 2)),
  ]))
  .catch(() => process.exit(1))
