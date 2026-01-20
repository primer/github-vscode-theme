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
    
    // Map color tokens using switch statement for better readability
    switch (key) {
      // Accent colors
      case 'fgColor-accent':
        nested.accent.fg = val;
        break;
      case 'bgColor-accent-emphasis':
        nested.accent.emphasis = val;
        break;
      case 'bgColor-accent-muted':
        nested.accent.subtle = val;
        nested.accent.muted = val;
        break;

      // Danger colors
      case 'fgColor-danger':
        nested.danger.fg = val;
        break;
      case 'bgColor-danger-emphasis':
        nested.danger.emphasis = val;
        break;
      case 'bgColor-danger-muted':
        nested.danger.muted = val;
        nested.danger.subtle = val;
        break;

      // Attention colors
      case 'fgColor-attention':
        nested.attention.fg = val;
        break;
      case 'bgColor-attention-emphasis':
        nested.attention.emphasis = val;
        break;
      case 'bgColor-attention-muted':
        nested.attention.muted = val;
        break;

      // Success colors
      case 'fgColor-success':
        nested.success.fg = val;
        break;
      case 'bgColor-success-emphasis':
        nested.success.emphasis = val;
        break;
      case 'bgColor-success-muted':
        nested.success.muted = val;
        break;

      // Severe colors
      case 'fgColor-severe':
        nested.severe.fg = val;
        break;
      case 'bgColor-severe-muted':
        nested.severe.subtle = val;
        break;

      // Done colors
      case 'bgColor-done-muted':
        nested.done.subtle = val;
        break;

      // Sponsors colors
      case 'bgColor-sponsors-muted':
        nested.sponsors.subtle = val;
        break;

      // Neutral colors
      case 'bgColor-neutral-emphasis':
        nested.neutral.emphasis = val;
        nested.neutral.emphasisPlus = val;
        break;
      case 'bgColor-neutral-muted':
        nested.neutral.muted = val;
        nested.neutral.subtle = val;
        break;

      // CodeMirror colors
      case 'codeMirror-activeline-bgColor':
        nested.codemirror.activelineBg = val;
        break;

      // Primer border
      case 'borderColor-accent-emphasis':
        nested.primer.border.active = val;
        break;

      // Canvas colors
      case 'bgColor-default':
        nested.canvas.default = val;
        break;
      case 'bgColor-overlay':
        nested.canvas.overlay = val;
        break;
      case 'bgColor-inset':
        nested.canvas.inset = val;
        break;
      case 'bgColor-muted':
        nested.canvas.subtle = val;
        break;

      // Border colors
      case 'borderColor-default':
        nested.border.default = val;
        break;
      case 'borderColor-muted':
        nested.border.muted = val;
        break;

      // General fgColor-* to fg.*
      default:
        if (key.startsWith('fgColor-')) {
          const prop = key.replace('fgColor-', '').replace(/-/g, '');
          switch (prop) {
            case 'default':
              nested.fg.default = val;
              break;
            case 'muted':
              nested.fg.muted = val;
              break;
            case 'subtle':
              nested.fg.subtle = val;
              break;
            case 'onEmphasis':
              nested.fg.onEmphasis = val;
              break;
          }
        }
        
        // Map button colors
        else if (key.startsWith('button-')) {
          const btnProp = key.replace('button-', '');
          switch (btnProp) {
            case 'primary-bgColor-rest':
              nested.btn.primary = { ...nested.btn.primary, bg: val };
              break;
            case 'primary-bgColor-hover':
              nested.btn.primary = { ...nested.btn.primary, hoverBg: val };
              break;
            case 'primary-fgColor-rest':
              nested.btn.primary = { ...nested.btn.primary, text: val };
              break;
            case 'default-bgColor-rest':
              nested.btn.bg = val;
              break;
            case 'default-bgColor-hover':
              nested.btn.hoverBg = val;
              break;
            case 'default-bgColor-active':
              nested.btn.activeBg = val;
              break;
            case 'default-fgColor-rest':
              nested.btn.text = val;
              break;
          }
        }
        
        // Map ANSI colors
        else if (key.startsWith('color-ansi-')) {
          const ansiColor = key.replace('color-ansi-', '');
          switch (ansiColor) {
            case 'black':
              nested.ansi.black = val;
              break;
            case 'black-bright':
              nested.ansi.blackBright = val;
              break;
            case 'white':
              nested.ansi.white = val;
              break;
            case 'white-bright':
              nested.ansi.whiteBright = val;
              break;
            case 'red':
              nested.ansi.red = val;
              break;
            case 'red-bright':
              nested.ansi.redBright = val;
              break;
            case 'green':
              nested.ansi.green = val;
              break;
            case 'green-bright':
              nested.ansi.greenBright = val;
              break;
            case 'yellow':
              nested.ansi.yellow = val;
              break;
            case 'yellow-bright':
              nested.ansi.yellowBright = val;
              break;
            case 'blue':
              nested.ansi.blue = val;
              break;
            case 'blue-bright':
              nested.ansi.blueBright = val;
              break;
            case 'magenta':
              nested.ansi.magenta = val;
              break;
            case 'magenta-bright':
              nested.ansi.magentaBright = val;
              break;
            case 'cyan':
              nested.ansi.cyan = val;
              break;
            case 'cyan-bright':
              nested.ansi.cyanBright = val;
              break;
          }
        }
        
        // Map display scale colors (e.g., display-blue-scale-6)
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
        break;
    }
  });

  // Initialize btn.primary if not set
  if (!nested.btn.primary) {
    nested.btn.primary = {};
  }

  return nested;
}

function applyThemeOverrides(colors, theme) {
  // Overrides removed - now using values directly from @primer/primitives v11.3.2
  // The temporary overrides from v7.10.0 are no longer needed
}

module.exports = {
  getColors,
};
