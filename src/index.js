const fs = require("fs").promises;
const theme = require("./theme");

const dotcomLight = theme({
  theme: "light",
  name: "GitHub.com Light",
});

const dotcomDark = theme({
  theme: "dark",
  name: "GitHub.com Dark",
});

const dotcomDimmed = theme({
  theme: "dimmed",
  name: "Github.com Dimmed"
})

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/dotcom-light.json", JSON.stringify(dotcomLight, null, 2)),
    fs.writeFile("./themes/dotcom-dark.json", JSON.stringify(dotcomDark, null, 2)),
    fs.writeFile("./themes/dotcom-dimmed.json", JSON.stringify(dotcomDimmed, null, 2))
  ]))
  .catch(() => process.exit(1))
