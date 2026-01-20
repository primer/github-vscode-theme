const lightColors = require("@primer/primitives/dist/docs/functional/themes/light.json");
const lightHighContrastColors = require("@primer/primitives/dist/docs/functional/themes/light-high-contrast.json");
const lightColorblindColors = require("@primer/primitives/dist/docs/functional/themes/light-colorblind.json");
const lightColorblindHighContrastColors = require("@primer/primitives/dist/docs/functional/themes/light-colorblind-high-contrast.json");
const lightTritanopiaColors = require("@primer/primitives/dist/docs/functional/themes/light-tritanopia.json");
const lightTritanopiaHighContrastColors = require("@primer/primitives/dist/docs/functional/themes/light-tritanopia-high-contrast.json");
const darkColors = require("@primer/primitives/dist/docs/functional/themes/dark.json");
const darkHighContrastColors = require("@primer/primitives/dist/docs/functional/themes/dark-high-contrast.json");
const darkColorblindColors = require("@primer/primitives/dist/docs/functional/themes/dark-colorblind.json");
const darkColorblindHighContrastColors = require("@primer/primitives/dist/docs/functional/themes/dark-colorblind-high-contrast.json");
const darkTritanopiaColors = require("@primer/primitives/dist/docs/functional/themes/dark-tritanopia.json");
const darkTritanopiaHighContrastColors = require("@primer/primitives/dist/docs/functional/themes/dark-tritanopia-high-contrast.json");
const dimmedColors = require("@primer/primitives/dist/docs/functional/themes/dark-dimmed.json");
const dimmedHighContrastColors = require("@primer/primitives/dist/docs/functional/themes/dark-dimmed-high-contrast.json");

function getColors(theme) {

  let rawColors;
  switch(theme) {
    case "light":
      rawColors = lightColors;
      break;
    case "light_high_contrast":
      rawColors = lightHighContrastColors;
      break;
    case "light_colorblind":
      rawColors = lightColorblindColors;
      break;
    case "light_colorblind_high_contrast":
      rawColors = lightColorblindHighContrastColors;
      break;
    case "light_tritanopia":
      rawColors = lightTritanopiaColors;
      break;
    case "light_tritanopia_high_contrast":
      rawColors = lightTritanopiaHighContrastColors;
      break;
    case "dark":
      rawColors = darkColors;
      break;
    case "dark_high_contrast":
      rawColors = darkHighContrastColors;
      break;
    case "dark_colorblind":
      rawColors = darkColorblindColors;
      break;
    case "dark_colorblind_high_contrast":
      rawColors = darkColorblindHighContrastColors;
      break;
    case "dark_tritanopia":
      rawColors = darkTritanopiaColors;
      break;
    case "dark_tritanopia_high_contrast":
      rawColors = darkTritanopiaHighContrastColors;
      break;
    case "dark_dimmed":
      rawColors = dimmedColors;
      break;
    case "dark_dimmed_high_contrast":
      rawColors = dimmedHighContrastColors;
      break;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }

  // Transform new flat structure to old nested structure for backward compatibility
  const transformed = transformToNestedStructure(rawColors);
  
  // Apply theme-specific overrides
  applyThemeOverrides(transformed, theme);
  
  return transformed;
}

// Transform new flat structure (e.g., "fgColor-default") to old nested structure (e.g., fg.default)
// The new primitives use a flat key structure with hyphenated names, where each value is an object
// with a `.value` property. This function transforms that to the old nested object structure
// for backward compatibility with the existing theme.js code.
//
// Input format: { "fgColor-default": { value: "#1f2328", ... }, ... }
// Output format: { fg: { default: "#1f2328" }, ... }
function transformToNestedStructure(flatColors) {
  const nested = {
    scale: {
      // Note: black and white are not in the scale arrays in new primitives,
      // so we extract them from the flat structure if available, or use fallback values
      black: flatColors['bgColor-black']?.value || '#1f2328',
      white: flatColors['bgColor-white']?.value || '#ffffff',
      gray: [],
      blue: [],
      green: [],
      yellow: [],
      orange: [],
      red: [],
      purple: [],
      pink: [],
      coral: []
    },
    fg: {},
    canvas: {},
    border: {},
    accent: {},
    danger: {},
    attention: {},
    success: {},
    severe: {},
    done: {},
    sponsors: {},
    neutral: {},
    btn: {},
    ansi: {},
    codemirror: {},
    primer: {
      border: {}
    }
  };

  // Map fgColor-* to fg.*
  Object.keys(flatColors).forEach(key => {
    const val = flatColors[key].value;
    
    // Map accent colors (must come before general fgColor- check)
    if (key === 'fgColor-accent') {
      nested.accent.fg = val;
    }
    else if (key === 'bgColor-accent-emphasis') {
      nested.accent.emphasis = val;
    }
    else if (key === 'bgColor-accent-muted') {
      nested.accent.subtle = val;
      nested.accent.muted = val;
    }
    
    // Map danger colors (must come before general fgColor- check)
    else if (key === 'fgColor-danger') {
      nested.danger.fg = val;
    }
    else if (key === 'bgColor-danger-emphasis') {
      nested.danger.emphasis = val;
    }
    else if (key === 'bgColor-danger-muted') {
      nested.danger.muted = val;
      nested.danger.subtle = val;
    }
    
    // Map attention colors (must come before general fgColor- check)
    else if (key === 'fgColor-attention') {
      nested.attention.fg = val;
    }
    else if (key === 'bgColor-attention-emphasis') {
      nested.attention.emphasis = val;
    }
    else if (key === 'bgColor-attention-muted') {
      nested.attention.muted = val;
    }
    
    // Map success colors (must come before general fgColor- check)
    else if (key === 'fgColor-success') {
      nested.success.fg = val;
    }
    else if (key === 'bgColor-success-emphasis') {
      nested.success.emphasis = val;
    }
    else if (key === 'bgColor-success-muted') {
      nested.success.muted = val;
    }
    
    // Map severe colors (must come before general fgColor- check)
    else if (key === 'fgColor-severe') {
      nested.severe.fg = val;
    }
    else if (key === 'bgColor-severe-muted') {
      nested.severe.subtle = val;
    }
    
    // General fgColor-* to fg.*
    else if (key.startsWith('fgColor-')) {
      const prop = key.replace('fgColor-', '').replace(/-/g, '');
      if (prop === 'default') nested.fg.default = val;
      else if (prop === 'muted') nested.fg.muted = val;
      else if (prop === 'subtle') nested.fg.subtle = val;
      else if (prop === 'onEmphasis') nested.fg.onEmphasis = val;
    }
    
    // Helper to check if a key should be mapped to canvas
    const isCanvasBgColor = (key) => {
      return key.startsWith('bgColor-') && 
             !key.startsWith('bgColor-accent-') && 
             !key.startsWith('bgColor-danger-') && 
             !key.startsWith('bgColor-attention-') && 
             !key.startsWith('bgColor-success-') && 
             !key.startsWith('bgColor-neutral-');
    };
    
    // Helper to check if a key should be mapped to border
    const isBorderColor = (key) => {
      return key.startsWith('borderColor-') && 
             !key.startsWith('borderColor-accent-') && 
             !key.startsWith('borderColor-danger-') && 
             !key.startsWith('borderColor-attention-') && 
             !key.startsWith('borderColor-success-');
    };
    
    // Map bgColor-* to canvas.*
    if (isCanvasBgColor(key)) {
      if (key === 'bgColor-default') nested.canvas.default = val;
      else if (key === 'bgColor-overlay') nested.canvas.overlay = val;
      else if (key === 'bgColor-inset') nested.canvas.inset = val;
      else if (key === 'bgColor-muted') nested.canvas.subtle = val;
    }
    
    // Map borderColor-* to border.*
    else if (isBorderColor(key)) {
      if (key === 'borderColor-default') nested.border.default = val;
      else if (key === 'borderColor-muted') nested.border.muted = val;
    }
    
    // Map done colors
    else if (key === 'bgColor-done-muted') {
      nested.done.subtle = val;
    }
    
    // Map sponsors colors
    else if (key === 'bgColor-sponsors-muted') {
      nested.sponsors.subtle = val;
    }
    
    // Map neutral colors
    else if (key === 'bgColor-neutral-emphasis') {
      nested.neutral.emphasis = val;
      nested.neutral.emphasisPlus = val;
    }
    else if (key === 'bgColor-neutral-muted') {
      nested.neutral.muted = val;
      nested.neutral.subtle = val;
    }
    
    // Map button colors
    else if (key.startsWith('button-')) {
      const btnProp = key.replace('button-', '');
      if (btnProp === 'primary-bgColor-rest') nested.btn.primary = { ...nested.btn.primary, bg: val };
      else if (btnProp === 'primary-bgColor-hover') nested.btn.primary = { ...nested.btn.primary, hoverBg: val };
      else if (btnProp === 'primary-fgColor-rest') nested.btn.primary = { ...nested.btn.primary, text: val };
      else if (btnProp === 'default-bgColor-rest') nested.btn.bg = val;
      else if (btnProp === 'default-bgColor-hover') nested.btn.hoverBg = val;
      else if (btnProp === 'default-bgColor-active') nested.btn.activeBg = val;
      else if (btnProp === 'default-fgColor-rest') nested.btn.text = val;
    }
    
    // Map ANSI colors
    else if (key.startsWith('color-ansi-')) {
      const ansiColor = key.replace('color-ansi-', '');
      if (ansiColor === 'black') nested.ansi.black = val;
      else if (ansiColor === 'black-bright') nested.ansi.blackBright = val;
      else if (ansiColor === 'white') nested.ansi.white = val;
      else if (ansiColor === 'white-bright') nested.ansi.whiteBright = val;
      else if (ansiColor === 'red') nested.ansi.red = val;
      else if (ansiColor === 'red-bright') nested.ansi.redBright = val;
      else if (ansiColor === 'green') nested.ansi.green = val;
      else if (ansiColor === 'green-bright') nested.ansi.greenBright = val;
      else if (ansiColor === 'yellow') nested.ansi.yellow = val;
      else if (ansiColor === 'yellow-bright') nested.ansi.yellowBright = val;
      else if (ansiColor === 'blue') nested.ansi.blue = val;
      else if (ansiColor === 'blue-bright') nested.ansi.blueBright = val;
      else if (ansiColor === 'magenta') nested.ansi.magenta = val;
      else if (ansiColor === 'magenta-bright') nested.ansi.magentaBright = val;
      else if (ansiColor === 'cyan') nested.ansi.cyan = val;
      else if (ansiColor === 'cyan-bright') nested.ansi.cyanBright = val;
    }
    
    // Map display scale colors (e.g., display-blue-scale-6)
    // Expected format: "display-{color}-scale-{index}"
    else if (key.startsWith('display-') && key.includes('-scale-')) {
      const parts = key.split('-');
      if (parts.length >= 4 && parts[0] === 'display' && parts[2] === 'scale') {
        const color = parts[1]; // e.g., "blue"
        const indexStr = parts[3]; // e.g., "6"
        const index = parseInt(indexStr, 10);
        
        if (!isNaN(index) && nested.scale[color]) {
          nested.scale[color][index] = val;
        }
      }
    }
    
    // Map codemirror activelineBg
    else if (key === 'codeMirror-activeline-bgColor') {
      nested.codemirror.activelineBg = val;
    }
    
    // Map primer.border.active
    else if (key === 'borderColor-accent-emphasis') {
      nested.primer.border.active = val;
    }
  });

  // Initialize btn.primary if not set
  if (!nested.btn.primary) {
    nested.btn.primary = {};
  }

  return nested;
}

function applyThemeOverrides(colors, theme) {
  switch(theme) {
    case "light":
      // Temp override until Primitives are updated
      if (colors.success) colors.success.emphasis = "#1f883d";
      if (colors.btn.primary) {
        colors.btn.primary.bg = colors.success.emphasis;
        if (colors.scale.green && colors.scale.green[5]) {
          colors.btn.primary.hoverBg = colors.scale.green[5];
        }
      }
      colors.fg.default = "#1f2328";
      colors.fg.muted = "#656d76";
      break;
    case "dark":
      // Temp override until Primitives are updated
      colors.fg.default = "#e6edf3";
      colors.fg.muted = "#7d8590";
      colors.accent.fg = "#2f81f7";
      colors.severe.subtle = "rgba(219, 109, 40, 0.1)";
      colors.danger.subtle = "rgba(248, 81, 73, 0.1)";
      colors.done.subtle = "rgba(163, 113, 247, 0.1)";
      colors.sponsors.subtle = "rgba(219, 97, 162, 0.1)";
      break;
  }
}

module.exports = {
  getColors,
};
