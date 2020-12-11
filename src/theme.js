const { getVariant } = require("./process");
const { getColors } = require("./colors");

// Choosing colors
// There are different ways to define what color is used:

// 1. Hex value: All themes will use this color
//    e.g. "textLink.foreground": "#fff",

// 2. Auto Hex: light themes will use this color, dark themes with auto invert the color
//    e.g. "textLink.foreground": auto("#fff"),

// 3. Auto Primer: light themes will use this primer color, dark themes with auto invert the primer color
//    e.g. "textLink.foreground": color.blue[6],

// 4. Manual: each theme uses the defined color without auto inverting
//    e.g. "textLink.foreground": pick({ light: color.blue[5], dark: color.blue[6], spacegray: color.blue[6] }),

// The prefered way is "Auto Primer" or "Manual". In some exceptions it's also ok to use hex values

function getTheme({ theme, mode, name }) {
  // Usage: auto('pink')
  const auto = (hex) => getVariant(hex, mode);

  // Usage: pick({ light: "lightblue", dark: "darkblue", spacegray: "steelblue" })
  const pick = (options) => options[theme];

  // Usage: color.blue[6]
  // Color scheme from primer/primitives
  const color = getColors(theme);

  const workbenchForeground = pick({ light: color.gray[8], dark: color.gray[2], spacegray: color.gray[7] });
  const editorForeground    = pick({ light: color.gray[9], dark: color.gray[2], spacegray: color.gray[7] });
  const borderPrimary       = pick({ light: color.gray[2], dark: color.gray[6], spacegray: color.white });

  return {
    name: name,
    colors: {
      focusBorder          : pick({ light: color.blue[4], dark: color.blue[6], spacegray: color.blue[3] }),
      foreground           : pick({ light: color.gray[7], dark: color.gray[3], spacegray: color.gray[6] }),
      descriptionForeground: pick({ light: color.gray[5], dark: color.gray[4], spacegray: color.gray[5] }),
      errorForeground      : pick({ light: color.red[6], dark: color.red[3], spacegray: color.red[6] }),

      "textLink.foreground"      : pick({ light: color.blue[5], dark: color.blue[3], spacegray: color.blue[6] }),
      "textLink.activeForeground": pick({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[7] }),
      "textBlockQuote.background": pick({ light: color.gray[0], dark: color.gray[9], spacegray: color.gray[0] }),
      "textBlockQuote.border"    : pick({ light: color.gray[2], dark: color.gray[7], spacegray: color.gray[2] }),
      "textCodeBlock.background" : pick({ light: color.gray[1], dark: color.gray[8], spacegray: color.gray[1] }),
      "textPreformat.foreground" : pick({ light: color.gray[6], dark: color.gray[3], spacegray: color.gray[6] }),
      "textSeparator.foreground" : pick({ light: color.gray[3], dark: color.gray[6], spacegray: color.gray[3] }),

      "button.background"     : pick({ light: "#159739", dark: color.green[7], spacegray: color.green[2] }),
      "button.foreground"     : pick({ light: color.white, dark: color.green[1], spacegray: color.green[8] }),
      "button.hoverBackground": pick({ light: "#138934", dark: color.green[6], spacegray: color.green[3] }),

      "checkbox.background": pick({ light: color.gray[0], dark: color.gray[7], spacegray: color.gray[2] }),
      "checkbox.border"    : pick({ light: color.gray[3], dark: color.black, spacegray: color.white }),

      "dropdown.background"    : pick({ light: color.gray[0], dark: color.gray[8], spacegray: color.gray[1] }),
      "dropdown.border"        : borderPrimary,
      "dropdown.foreground"    : workbenchForeground,
      "dropdown.listBackground": pick({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),

      "input.background"           : pick({ light: color.gray[0], dark: color.gray[8], spacegray: color.gray[1] }),
      "input.border"               : borderPrimary,
      "input.foreground"           : workbenchForeground,
      "input.placeholderForeground": pick({ light: color.gray[4], dark: color.gray[4], spacegray: color.gray[5] }),

      "badge.foreground": pick({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[7] }),
      "badge.background": pick({ light: color.blue[1], dark: color.blue[7], spacegray: color.blue[2] }),

      "progressBar.background": pick({ light: color.blue[4], dark: color.blue[5], spacegray: color.blue[4] }),

      "titleBar.activeForeground"  : workbenchForeground,
      "titleBar.activeBackground"  : pick({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "titleBar.inactiveForeground": pick({ light: color.gray[5], dark: color.gray[4], spacegray: color.gray[5] }),
      "titleBar.inactiveBackground": pick({ light: color.gray[1], dark: color.gray[9], spacegray: "#1f2428" }),
      "titleBar.border"            : borderPrimary,

      "activityBar.foreground"        : workbenchForeground,
      "activityBar.inactiveForeground": pick({ light: color.gray[4], dark: color.gray[5], spacegray: color.gray[4] }),
      "activityBar.background"        : pick({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "activityBarBadge.foreground"   : pick({ light: color.white, dark: color.white, spacegray: color.black }),
      "activityBarBadge.background"   : pick({ light: color.blue[4], dark: color.blue[5], spacegray: color.blue[4] }),
      "activityBar.activeBorder"      : "#f9826c",
      "activityBar.border"            : borderPrimary,

      "sideBar.foreground"             : pick({ light: color.gray[6], dark: color.gray[3], spacegray: color.gray[6] }),
      "sideBar.background"             : pick({ light: color.gray[1], dark: color.gray[9], spacegray: "#1f2428" }),
      "sideBar.border"                 : borderPrimary,
      "sideBarTitle.foreground"        : workbenchForeground,
      "sideBarSectionHeader.foreground": workbenchForeground,
      "sideBarSectionHeader.background": pick({ light: color.gray[1], dark: color.gray[9], spacegray: "#1f2428" }),
      "sideBarSectionHeader.border"    : borderPrimary,

      "list.hoverForeground"            : workbenchForeground,
      "list.inactiveSelectionForeground": workbenchForeground,
      "list.activeSelectionForeground"  : workbenchForeground,
      "list.hoverBackground"            : pick({ light: "#ebf0f4", dark: "#282e34", spacegray: "#282e34" }),
      "list.inactiveSelectionBackground": pick({ light: "#e8eaed", dark: "#282e34", spacegray: "#282e34" }),
      "list.activeSelectionBackground"  : pick({ light: "#e2e5e9", dark: "#39414a", spacegray: "#39414a" }),
      "list.inactiveFocusBackground"    : pick({ light: color.blue[1], dark: "#1d2d3e", spacegray: "#1d2d3e" }),
      "list.focusBackground"            : pick({ light: "#cce5ff", dark: color.blue[7], spacegray: color.blue[2] }),

      "tree.indentGuidesStroke": pick({ light: color.gray[2], dark: color.gray[8], spacegray: color.gray[1] }),

      "notificationCenterHeader.foreground": pick({ light: color.gray[5], dark: color.gray[4], spacegray: color.gray[5] }),
      "notificationCenterHeader.background": pick({ light: color.gray[2], dark: color.gray[9], spacegray: color.gray[0] }),
      "notifications.foreground"           : workbenchForeground,
      "notifications.background"           : pick({ light: color.gray[0], dark: color.gray[8], spacegray: color.gray[1] }),
      "notifications.border"               : borderPrimary,
      "notificationsErrorIcon.foreground"  : pick({ light: color.red[5], dark: color.red[4], spacegray: color.red[5] }),
      "notificationsWarningIcon.foreground": pick({ light: color.orange[6], dark: color.orange[3], spacegray: color.orange[6] }),
      "notificationsInfoIcon.foreground"   : pick({ light: color.blue[6], dark: color.blue[3], spacegray: color.blue[6] }),

      "pickerGroup.border"    : pick({ light: color.gray[2], dark: color.gray[7], spacegray: color.gray[2] }),
      "pickerGroup.foreground": workbenchForeground,
      "quickInput.background" : pick({ light: color.gray[0], dark: color.gray[9], spacegray: color.gray[0] }),
      "quickInput.foreground" : workbenchForeground,

      "statusBar.foreground"             : pick({ light: color.gray[6], dark: color.gray[3], spacegray: color.gray[6] }),
      "statusBar.background"             : pick({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "statusBar.border"                 : borderPrimary,
      "statusBar.noFolderBackground"     : pick({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "statusBar.debuggingBackground"    : pick({ light: "#f9826c", dark: "#931b06", spacegray: "#931b06" }),
      "statusBar.debuggingForeground"    : pick({ light: color.white, dark: color.white, spacegray: color.black }),
      "statusBarItem.prominentBackground": pick({ light: "#e8eaed", dark: "#282e34", spacegray: "#282e34" }),

      "editorGroupHeader.tabsBackground": pick({ light: color.gray[1], dark: color.gray[9], spacegray: "#1f2428" }),
      "editorGroupHeader.tabsBorder"    : borderPrimary,
      "editorGroup.border"              : borderPrimary,

      "tab.activeForeground"        : workbenchForeground,
      "tab.inactiveForeground"      : pick({ light: color.gray[5], dark: color.gray[4], spacegray: color.gray[5] }),
      "tab.inactiveBackground"      : pick({ light: color.gray[1], dark: color.gray[9], spacegray: "#1f2428" }),
      "tab.activeBackground"        : pick({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "tab.hoverBackground"         : pick({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "tab.unfocusedHoverBackground": pick({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "tab.border"                  : borderPrimary,
      "tab.unfocusedActiveBorderTop": borderPrimary,
      "tab.activeBorder"            : pick({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "tab.unfocusedActiveBorder"   : pick({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "tab.activeBorderTop"         : "#f9826c",

      "breadcrumb.foreground"               : pick({ light: color.gray[5], dark: color.gray[4], spacegray: color.gray[5] }),
      "breadcrumb.focusForeground"          : workbenchForeground,
      "breadcrumb.activeSelectionForeground": pick({ light: color.gray[6], dark: color.gray[3], spacegray: color.gray[6] }),
      "breadcrumbPicker.background"         : pick({ light: color.gray[0], dark: "#2b3036", spacegray: "#2b3036" }),

      "editor.foreground"                 : editorForeground,
      "editor.background"                 : pick({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "editorWidget.background"           : pick({ light: color.gray[1], dark: color.gray[9], spacegray: "#1f2428" }),
      "editor.foldBackground"             : pick({ light: color.gray[0], dark: "#282e33", spacegray: "#282e33" }),
      "editor.lineHighlightBackground"    : pick({ light: color.gray[1], dark: "#2b3036", spacegray: "#2b3036" }),
      "editorLineNumber.foreground"       : pick({ light: "#1b1f234d", dark: color.gray[7], spacegray: color.gray[2] }),
      "editorLineNumber.activeForeground" : editorForeground,
      "editorIndentGuide.background"      : pick({ light: "#eff2f6", dark: color.gray[8], spacegray: color.gray[1] }),
      "editorIndentGuide.activeBackground": pick({ light: "#d7dbe0", dark: color.gray[7], spacegray: color.gray[2] }),
      "editorWhitespace.foreground"       : pick({ light: color.gray[3], dark: color.gray[7], spacegray: color.gray[2] }),
      "editorCursor.foreground"           : pick({ light: color.blue[7], dark: color.blue[2], spacegray: color.blue[7] }),

      "editor.findMatchBackground"          : pick({ light: color.yellow[4], dark: "#ffd33d44", spacegray: "#ffd33d44" }),
      "editor.findMatchHighlightBackground" : pick({ light: "#ffdf5d66", dark: "#ffd33d22", spacegray: "#ffd33d22" }),
      "editor.inactiveSelectionBackground"  : pick({ light: "#0366d611", dark: "#3392FF22", spacegray: "#3392FF22" }),
      "editor.selectionBackground"          : pick({ light: "#0366d625", dark: "#3392FF44", spacegray: "#3392FF44" }),
      "editor.selectionHighlightBackground" : pick({ light: "#34d05840", dark: "#17E5E633", spacegray: "#17E5E633" }),
      "editor.selectionHighlightBorder"     : pick({ light: "#34d05800", dark: "#17E5E600", spacegray: "#17E5E600" }),
      "editor.wordHighlightBackground"      : pick({ light: "#34d05800", dark: "#17E5E600", spacegray: "#17E5E600" }),
      "editor.wordHighlightStrongBackground": pick({ light: "#34d05800", dark: "#17E5E600", spacegray: "#17E5E600" }),
      "editor.wordHighlightBorder"          : pick({ light: "#24943e99", dark: "#17E5E699", spacegray: "#17E5E699" }),
      "editor.wordHighlightStrongBorder"    : pick({ light: "#24943e50", dark: "#17E5E666", spacegray: "#17E5E666" }),
      "editorBracketMatch.background"       : pick({ light: "#34d05840", dark: "#17E5E650", spacegray: "#17E5E650" }),
      "editorBracketMatch.border"           : pick({ light: "#34d05800", dark: "#17E5E600", spacegray: "#17E5E600" }),

      "editorGutter.modifiedBackground": pick({ light: color.blue[4], dark: color.blue[4], spacegray: color.blue[5] }),
      "editorGutter.addedBackground"   : pick({ light: color.green[5], dark: color.green[5], spacegray: color.green[4] }),
      "editorGutter.deletedBackground" : pick({ light: color.red[5], dark: color.red[4], spacegray: color.red[5] }),

      "diffEditor.insertedTextBackground": pick({ light: "#34d05822", dark: "#28a74530", spacegray: "#28a74530" }),
      "diffEditor.removedTextBackground":  pick({ light: "#d73a4922", dark: "#d73a4930", spacegray: "#d73a4930" }),

      "scrollbar.shadow"                : pick({ light: "#6a737d33", dark: "#0008", spacegray: "#0008" }),
      "scrollbarSlider.background"      : pick({ light: "#959da533", dark: "#6a737d33", spacegray: "#6a737d33" }),
      "scrollbarSlider.hoverBackground" : pick({ light: "#959da544", dark: "#6a737d44", spacegray: "#6a737d44" }),
      "scrollbarSlider.activeBackground": pick({ light: "#959da588", dark: "#6a737d88", spacegray: "#6a737d88" }),
      "editorOverviewRuler.border"      : pick({ light: color.white, dark: color.black, spacegray: color.white }),

      "panel.background"             : pick({ light: color.gray[1], dark: color.gray[9], spacegray: "#1f2428" }),
      "panel.border"                 : borderPrimary,
      "panelTitle.activeBorder"      : "#f9826c",
      "panelTitle.activeForeground"  : workbenchForeground,
      "panelTitle.inactiveForeground": pick({ light: color.gray[5], dark: color.gray[4], spacegray: color.gray[5] }),
      "panelInput.border"            : pick({ light: color.gray[2], dark: color.gray[8], spacegray: color.gray[1] }),

      "terminal.foreground": pick({ light: color.gray[6], dark: color.gray[3], spacegray: color.gray[6] }),

      "gitDecoration.addedResourceForeground"      : pick({ light: color.green[5], dark: color.green[4], spacegray: color.green[5] }),
      "gitDecoration.modifiedResourceForeground"   : pick({ light: color.blue[6], dark: color.blue[3], spacegray: color.blue[6] }),
      "gitDecoration.deletedResourceForeground"    : pick({ light: color.red[5], dark: color.red[4], spacegray: color.red[5] }),
      "gitDecoration.untrackedResourceForeground"  : pick({ light: color.green[5], dark: color.green[4], spacegray: color.green[5] }),
      "gitDecoration.ignoredResourceForeground"    : pick({ light: color.gray[4], dark: color.gray[5], spacegray: color.gray[4] }),
      "gitDecoration.conflictingResourceForeground": pick({ light: color.orange[6], dark: color.orange[3], spacegray: color.orange[6] }),
      "gitDecoration.submoduleResourceForeground"  : pick({ light: color.gray[4], dark: color.gray[5], spacegray: color.gray[4] }),

      "debugToolBar.background"                    : pick({ light: color.white, dark: "#2b3036", spacegray: "#2b3036" }),
      "editor.stackFrameHighlightBackground"       : pick({ light: color.yellow[1], dark: "#a707", spacegray: "#a707" }),
      "editor.focusedStackFrameHighlightBackground": pick({ light: color.yellow[2], dark: "#b808", spacegray: "#b808" }),

      "peekViewEditor.matchHighlightBackground": pick({ dark: "#ffd33d33", spacegray: "#ffd33d33" }),
      "peekViewResult.matchHighlightBackground": pick({ dark: "#ffd33d33", spacegray: "#ffd33d33" }),
      "peekViewEditor.background"              : pick({ dark: "#0d111788", spacegray: "#1f242888" }),
      "peekViewResult.background"              : pick({ dark: color.gray[9], spacegray: "#1f2428" }),

      "settings.headerForeground"        : workbenchForeground,
      "settings.modifiedItemIndicator"   : pick({ light: color.blue[4], dark: color.blue[5], spacegray: color.blue[4] }),
      "welcomePage.buttonBackground"     : pick({ light: color.gray[1], dark: color.gray[8], spacegray: color.gray[1] }),
      "welcomePage.buttonHoverBackground": pick({ light: color.gray[2], dark: color.gray[7], spacegray: color.gray[2] }),
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: pick({ light: color.gray[5], dark: color.gray[3], spacegray: color.gray[4] }),
        },
      },
      {
        scope: [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.language",
        ],
        settings: {
          foreground: pick({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: ["entity", "entity.name"],
        settings: {
          foreground: pick({ light: color.purple[5], dark: color.purple[2], spacegray: color.purple[6] }),
        },
      },
      {
        scope: "variable.parameter.function",
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: pick({ light: color.green[6], dark: color.green[1], spacegray: color.green[6] }),
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: pick({ light: color.red[5], dark: color.red[3], spacegray: color.red[6] }),
        },
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          foreground: pick({ light: color.red[5], dark: color.red[3], spacegray: color.red[6] }),
        },
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
        ],
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: [
          "string",
          "punctuation.definition.string",
          "string punctuation.section.embedded source",
        ],
        settings: {
          foreground: pick({ light: color.blue[8], dark: color.blue[1], spacegray: "#9ecbff" }),
        },
      },
      {
        scope: "support",
        settings: {
          foreground: pick({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: pick({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: pick({ light: color.orange[6], dark: color.orange[2], spacegray: color.orange[6] }),
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: pick({ light: color.red[7], dark: color.red[2], spacegray: color.red[7] }),
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: pick({ light: color.red[7], dark: color.red[2], spacegray: color.red[7] }),
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: pick({ light: color.red[7], dark: color.red[2], spacegray: color.red[7] }),
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: pick({ light: color.red[7], dark: color.red[2], spacegray: color.red[7] }),
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: pick({ light: color.red[5], dark: color.red[3], spacegray: color.red[6] }),
          foreground: pick({ light: color.gray[0], dark: color.gray[9], spacegray: color.gray[0] }),
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: pick({ light: color.red[7], dark: color.red[2], spacegray: color.red[7] }),
        },
      },
      {
        scope: "string source",
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: "string variable",
        settings: {
          foreground: pick({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: pick({ light: color.blue[8], dark: color.blue[1], spacegray: color.blue[8] }),
        },
      },
      {
        scope: [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition",
        ],
        settings: {
          foreground: pick({ light: color.blue[8], dark: color.blue[1], spacegray: color.blue[8] }),
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: pick({ light: color.green[6], dark: color.green[1], spacegray: color.green[6] }),
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: pick({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: pick({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: pick({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: pick({ light: color.orange[6], dark: color.orange[2], spacegray: color.orange[6] }),
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: pick({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: pick({ light: color.green[6], dark: color.green[1], spacegray: color.green[6] }),
        },
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: editorForeground,
        },
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: editorForeground,
        },
      },
      {
        scope: "markup.raw",
        settings: {
          foreground: pick({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: pick({ light: color.red[0], dark: color.red[9], spacegray: color.red[0] }),
          foreground: pick({ light: color.red[7], dark: color.red[2], spacegray: color.red[7] }),
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: pick({ light: color.green[0], dark: color.green[9], spacegray: color.green[0] }),
          foreground: pick({ light: color.green[6], dark: color.green[1], spacegray: color.green[6] }),
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: pick({ light: color.orange[1], dark: color.orange[8], spacegray: color.orange[1] }),
          foreground: pick({ light: color.orange[6], dark: color.orange[2], spacegray: color.orange[6] }),
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: pick({ light: color.gray[1], dark: color.gray[8], spacegray: color.gray[1] }),
          background: pick({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: pick({ light: color.purple[5], dark: color.purple[2], spacegray: color.purple[6] }),
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: pick({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: pick({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: pick({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote",
        ],
        settings: {
          foreground: pick({ light: color.gray[6], dark: color.gray[3], spacegray: color.gray[6] }),
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: pick({ light: color.red[7], dark: color.red[2], spacegray: color.red[7] }),
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: pick({ light: color.blue[8], dark: color.blue[1], spacegray: color.blue[8] }),
          fontStyle: "underline",
        },
      },
    ],
  };
}

module.exports = getTheme;
