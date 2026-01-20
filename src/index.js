const fs = require("fs").promises;
const getTheme = require("./theme");
const getClassicTheme = require("./classic/theme");

const lightDefaultTheme = getTheme({
  theme: "light",
  name: "GitHub Light Default",
});

const lightHighContrastTheme = getTheme({
  theme: "light_high_contrast",
  name: "GitHub Light High Contrast"
})

const lightColorblindTheme = getTheme({
  theme: "light_colorblind",
  name: "GitHub Light Colorblind",
});

const lightColorblindHighContrastTheme = getTheme({
  theme: "light_colorblind_high_contrast",
  name: "GitHub Light Colorblind High Contrast",
});

const lightTritanopiaTheme = getTheme({
  theme: "light_tritanopia",
  name: "GitHub Light Tritanopia",
});

const lightTritanopiaHighContrastTheme = getTheme({
  theme: "light_tritanopia_high_contrast",
  name: "GitHub Light Tritanopia High Contrast",
});

const darkDefaultTheme = getTheme({
  theme: "dark",
  name: "GitHub Dark Default",
});

const darkHighContrastTheme = getTheme({
  theme: "dark_high_contrast",
  name: "GitHub Dark High Contrast"
})

const darkColorblindTheme = getTheme({
  theme: "dark_colorblind",
  name: "GitHub Dark Colorblind"
})

const darkColorblindHighContrastTheme = getTheme({
  theme: "dark_colorblind_high_contrast",
  name: "GitHub Dark Colorblind High Contrast"
})

const darkTritanopiaTheme = getTheme({
  theme: "dark_tritanopia",
  name: "GitHub Dark Tritanopia"
})

const darkTritanopiaHighContrastTheme = getTheme({
  theme: "dark_tritanopia_high_contrast",
  name: "GitHub Dark Tritanopia High Contrast"
})

const darkDimmedTheme = getTheme({
  theme: "dark_dimmed",
  name: "GitHub Dark Dimmed"
})

const darkDimmedHighContrastTheme = getTheme({
  theme: "dark_dimmed_high_contrast",
  name: "GitHub Dark Dimmed High Contrast"
})

// Classic

const lightTheme = getClassicTheme({
  style: "light",
  name: "GitHub Light",
});

const darkTheme = getClassicTheme({
  style: "dark",
  name: "GitHub Dark",
});

// Write themes

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/light-default.json", JSON.stringify(lightDefaultTheme, null, 2)),
    fs.writeFile("./themes/light-high-contrast.json", JSON.stringify(lightHighContrastTheme, null, 2)),
    fs.writeFile("./themes/light-colorblind.json", JSON.stringify(lightColorblindTheme, null, 2)),
    fs.writeFile("./themes/light-colorblind-high-contrast.json", JSON.stringify(lightColorblindHighContrastTheme, null, 2)),
    fs.writeFile("./themes/light-tritanopia.json", JSON.stringify(lightTritanopiaTheme, null, 2)),
    fs.writeFile("./themes/light-tritanopia-high-contrast.json", JSON.stringify(lightTritanopiaHighContrastTheme, null, 2)),
    fs.writeFile("./themes/dark-default.json", JSON.stringify(darkDefaultTheme, null, 2)),
    fs.writeFile("./themes/dark-high-contrast.json", JSON.stringify(darkHighContrastTheme, null, 2)),
    fs.writeFile("./themes/dark-colorblind.json", JSON.stringify(darkColorblindTheme, null, 2)),
    fs.writeFile("./themes/dark-colorblind-high-contrast.json", JSON.stringify(darkColorblindHighContrastTheme, null, 2)),
    fs.writeFile("./themes/dark-tritanopia.json", JSON.stringify(darkTritanopiaTheme, null, 2)),
    fs.writeFile("./themes/dark-tritanopia-high-contrast.json", JSON.stringify(darkTritanopiaHighContrastTheme, null, 2)),
    fs.writeFile("./themes/dark-dimmed.json", JSON.stringify(darkDimmedTheme, null, 2)),
    fs.writeFile("./themes/dark-dimmed-high-contrast.json", JSON.stringify(darkDimmedHighContrastTheme, null, 2)),
    fs.writeFile("./themes/light.json", JSON.stringify(lightTheme, null, 2)),
    fs.writeFile("./themes/dark.json", JSON.stringify(darkTheme, null, 2)),
  ]))
  .catch(() => process.exit(1))
