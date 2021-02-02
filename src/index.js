const fs = require("fs").promises;
const getTheme = require("./classic/theme");
const getDotcomTheme = require("./dotcom/theme");

// Classic

const classicLight = getTheme({
  style: "light",
  name: "GitHub Light",
});

const classicDark = getTheme({
  style: "dark",
  name: "GitHub Dark",
});

// Dotcom

const dotcomLight = getDotcomTheme({
  theme: "light",
  name: "GitHub.com Light",
});

const dotcomDark = getDotcomTheme({
  theme: "dark",
  name: "GitHub.com Dark",
});

// Write themes

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/classic-light.json", JSON.stringify(classicLight, null, 2)),
    fs.writeFile("./themes/classic-dark.json", JSON.stringify(classicDark, null, 2)),
    fs.writeFile("./themes/dotcom-light.json", JSON.stringify(dotcomLight, null, 2)),
    fs.writeFile("./themes/dotcom-dark.json", JSON.stringify(dotcomDark, null, 2)),
  ]))
  .catch(() => process.exit(1))
