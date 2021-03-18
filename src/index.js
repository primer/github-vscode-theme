const fs = require("fs").promises;
const theme = require("./theme");

const lightTheme = theme({
  theme: "light",
  name: "GitHub Light",
});

const darkTheme = theme({
  theme: "dark",
  name: "GitHub Dark",
});

const dimmedTheme = theme({
  theme: "dimmed",
  name: "Github Dimmed"
})

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/light.json", JSON.stringify(lightTheme, null, 2)),
    fs.writeFile("./themes/dark.json", JSON.stringify(darkTheme, null, 2)),
    fs.writeFile("./themes/dimmed.json", JSON.stringify(dimmedTheme, null, 2))
  ]))
  .catch(() => process.exit(1))
