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

  const pick = (options) => options[mode];
  // Usage: pick({ light: "lightblue", dark: "darkblue", spacegray: "steelblue" })

  // Usage: color.blue[6]
  // Color scheme from primer/primitives
  const color = getColors(mode);

  const workbenchForeground = pick({ light: color.gray[8], dark: color.gray[7] });
  const editorForeground = pick({ light: color.gray[9], dark: color.gray[7] });

  return {
    name: name,
    colors: {
      focusBorder: pick({ light: color.blue[4], dark: color.blue[3] }),
      foreground: pick({ light: color.gray[7], dark: color.gray[6] }),
      descriptionForeground: color.gray[5],
      errorForeground: color.red[6],

      "textLink.foreground": pick({ light: color.blue[5], dark: color.blue[6] }),
      "textLink.activeForeground": pick({ light: color.blue[6], dark: color.blue[7] }),
      "textBlockQuote.background": color.gray[0],
      "textBlockQuote.border": color.gray[2],
      "textCodeBlock.background": color.gray[1],
      "textPreformat.foreground": color.gray[6],
      "textSeparator.foreground": color.gray[3],

      "button.background": pick({ light: "#159739", dark: color.green[2] }),
      "button.foreground": pick({ light: color.white, dark: color.green[8] }),
      "button.hoverBackground": pick({ light: "#138934", dark: color.green[3] }),

      "checkbox.background": pick({ light: color.gray[0], dark: color.gray[2] }),
      "checkbox.border": pick({ light: color.gray[3], dark: color.white }),

      "dropdown.background": pick({ light: color.gray[0], dark: color.gray[1] }),
      "dropdown.border": pick({ light: color.gray[2], dark: color.white }),
      "dropdown.foreground": workbenchForeground,
      "dropdown.listBackground": pick({ light: color.white, dark: color.gray[0] }),

      "input.background": pick({ light: color.gray[0], dark: color.gray[1] }),
      "input.border": pick({ light: color.gray[2], dark: color.white }),
      "input.foreground": workbenchForeground,
      "input.placeholderForeground": pick({ light: color.gray[4], dark: color.gray[5] }),

      "badge.foreground": pick({ light: color.blue[6], dark: color.blue[7] }),
      "badge.background": pick({ light: color.blue[1], dark: color.blue[2] }),

      "progressBar.background": color.blue[4],

      "titleBar.activeForeground": workbenchForeground,
      "titleBar.activeBackground": pick({ light: color.white, dark: color.gray[0] }),
      "titleBar.inactiveForeground": color.gray[5],
      "titleBar.inactiveBackground": pick({ light: color.gray[1], dark: "#1f2428" }),
      "titleBar.border": pick({ light: color.gray[2], dark: color.white }),

      "activityBar.foreground": workbenchForeground,
      "activityBar.inactiveForeground": color.gray[4],
      "activityBar.background": pick({ light: color.white, dark: color.gray[0] }),
      "activityBarBadge.foreground": pick({ light: color.white, dark: color.black }),
      "activityBarBadge.background": pick({ light: color.blue[4], dark: color.blue[4] }),
      "activityBar.activeBorder": "#f9826c",
      "activityBar.border": pick({ light: color.gray[2], dark: color.white }),

      "sideBar.foreground": color.gray[6],
      "sideBar.background": pick({ light: color.gray[1], dark: "#1f2428" }),
      "sideBar.border": pick({ light: color.gray[2], dark: color.white }),
      "sideBarTitle.foreground": workbenchForeground,
      "sideBarSectionHeader.foreground": workbenchForeground,
      "sideBarSectionHeader.background": pick({ light: color.gray[1], dark: "#1f2428" }),
      "sideBarSectionHeader.border": pick({ light: color.gray[2], dark: color.white }),

      "list.hoverForeground": workbenchForeground,
      "list.inactiveSelectionForeground": workbenchForeground,
      "list.activeSelectionForeground": workbenchForeground,
      "list.hoverBackground": pick({ light: "#ebf0f4", dark: "#282e34" }),
      "list.inactiveSelectionBackground": pick({ light: "#e8eaed", dark: "#282e34" }),
      "list.activeSelectionBackground": pick({ light: "#e2e5e9", dark: "#39414a" }),
      "list.inactiveFocusBackground": pick({ light: color.blue[1], dark: "#1d2d3e" }),
      "list.focusBackground": pick({ light: "#cce5ff", dark: color.blue[2] }),

      "tree.indentGuidesStroke": pick({ light: color.gray[2], dark: color.gray[1] }),

      "notificationCenterHeader.foreground": color.gray[5],
      "notificationCenterHeader.background": pick({ light: color.gray[2], dark: color.gray[0] }),
      "notifications.foreground": workbenchForeground,
      "notifications.background": pick({ light: color.gray[0], dark: color.gray[1] }),
      "notifications.border": pick({ light: color.gray[2], dark: color.white }),
      "notificationsErrorIcon.foreground": color.red[5],
      "notificationsWarningIcon.foreground": color.orange[6],
      "notificationsInfoIcon.foreground": color.blue[6],

      "pickerGroup.border": color.gray[2],
      "pickerGroup.foreground": workbenchForeground,
      "quickInput.background": color.gray[0],
      "quickInput.foreground": workbenchForeground,

      "statusBar.foreground": color.gray[6],
      "statusBar.background": pick({ light: color.white, dark: color.gray[0] }),
      "statusBar.border": pick({ light: color.gray[2], dark: color.white }),
      "statusBar.noFolderBackground": pick({ light: color.white, dark: color.gray[0] }),
      "statusBar.debuggingBackground": auto("#f9826c"),
      "statusBar.debuggingForeground": pick({ light: color.white, dark: color.black }),
      "statusBarItem.prominentBackground": pick({ light: "#e8eaed", dark: "#282e34" }),

      "editorGroupHeader.tabsBackground": pick({ light: color.gray[1], dark: "#1f2428" }),
      "editorGroupHeader.tabsBorder": pick({ light: color.gray[2], dark: color.white }),
      "editorGroup.border": pick({ light: color.gray[2], dark: color.white }),

      "tab.activeForeground": workbenchForeground,
      "tab.inactiveForeground": color.gray[5],
      "tab.inactiveBackground": pick({ light: color.gray[1], dark: "#1f2428" }),
      "tab.activeBackground": pick({ light: color.white, dark: color.gray[0] }),
      "tab.hoverBackground": pick({ light: color.white, dark: color.gray[0] }),
      "tab.unfocusedHoverBackground": pick({ light: color.white, dark: color.gray[0] }),
      "tab.border": pick({ light: color.gray[2], dark: color.white }),
      "tab.unfocusedActiveBorderTop": pick({ light: color.gray[2], dark: color.white }),
      "tab.activeBorder": pick({ light: color.white, dark: color.gray[0] }),
      "tab.unfocusedActiveBorder": pick({ light: color.white, dark: color.gray[0] }),
      "tab.activeBorderTop": "#f9826c",

      "breadcrumb.foreground": color.gray[5],
      "breadcrumb.focusForeground": workbenchForeground,
      "breadcrumb.activeSelectionForeground": color.gray[6],
      "breadcrumbPicker.background": pick({ light: color.gray[0], dark: "#2b3036" }),

      "editor.foreground": editorForeground,
      "editor.background": pick({ light: color.white, dark: color.gray[0] }),
      "editorWidget.background": pick({ light: color.gray[1], dark: "#1f2428" }),
      "editor.foldBackground": pick({ light: color.gray[0], dark: "#282e33" }),
      "editor.lineHighlightBackground": pick({ light: color.gray[1], dark: "#2b3036" }),
      "editorLineNumber.foreground": pick({ light: "#1b1f234d", dark: color.gray[2] }),
      "editorLineNumber.activeForeground": editorForeground,
      "editorIndentGuide.background": pick({ light: "#eff2f6", dark: color.gray[1] }),
      "editorIndentGuide.activeBackground": pick({ light: "#d7dbe0", dark: color.gray[2] }),
      "editorWhitespace.foreground": pick({ light: color.gray[3], dark: color.gray[2] }),
      "editorCursor.foreground": color.blue[7],

      "editor.findMatchBackground": pick({ light: color.yellow[4], dark: "#ffd33d44" }),
      "editor.findMatchHighlightBackground": pick({ light: "#ffdf5d66", dark: "#ffd33d22" }),
      "editor.inactiveSelectionBackground": pick({ light: "#0366d611", dark: "#3392FF22" }),
      "editor.selectionBackground": pick({ light: "#0366d625", dark: "#3392FF44" }),
      "editor.selectionHighlightBackground": pick({ light: "#34d05840", dark: "#17E5E633" }),
      "editor.selectionHighlightBorder": pick({ light: "#34d05800", dark: "#17E5E600" }),
      "editor.wordHighlightBackground": pick({ light: "#34d05800", dark: "#17E5E600" }),
      "editor.wordHighlightStrongBackground": pick({ light: "#34d05800", dark: "#17E5E600" }),
      "editor.wordHighlightBorder": pick({ light: "#24943e99", dark: "#17E5E699" }),
      "editor.wordHighlightStrongBorder": pick({ light: "#24943e50", dark: "#17E5E666" }),
      "editorBracketMatch.background": pick({ light: "#34d05840", dark: "#17E5E650" }),
      "editorBracketMatch.border": pick({ light: "#34d05800", dark: "#17E5E600" }),

      "editorGutter.modifiedBackground": pick({ light: color.blue[4], dark: color.blue[5] }),
      "editorGutter.addedBackground": pick({ light: color.green[5], dark: color.green[4] }),
      "editorGutter.deletedBackground": color.red[5],

      "diffEditor.insertedTextBackground": pick({ light: "#34d05822", dark: "#28a74530" }),
      "diffEditor.removedTextBackground": pick({ light: "#d73a4922", dark: "#d73a4930" }),

      "scrollbar.shadow": pick({ light: "#6a737d33", dark: "#0008" }),
      "scrollbarSlider.background": pick({ light: "#959da533", dark: "#6a737d33" }),
      "scrollbarSlider.hoverBackground": pick({ light: "#959da544", dark: "#6a737d44" }),
      "scrollbarSlider.activeBackground": pick({ light: "#959da588", dark: "#6a737d88" }),
      "editorOverviewRuler.border": color.white,

      "panel.background": pick({ light: color.gray[1], dark: "#1f2428" }),
      "panel.border": pick({ light: color.gray[2], dark: color.white }),
      "panelTitle.activeBorder": "#f9826c",
      "panelTitle.activeForeground": workbenchForeground,
      "panelTitle.inactiveForeground": color.gray[5],
      "panelInput.border": pick({ light: color.gray[2], dark: color.gray[1] }),

      "terminal.foreground": color.gray[6],

      "gitDecoration.addedResourceForeground": color.green[5],
      "gitDecoration.modifiedResourceForeground": color.blue[6],
      "gitDecoration.deletedResourceForeground": color.red[5],
      "gitDecoration.untrackedResourceForeground": color.green[5],
      "gitDecoration.ignoredResourceForeground": color.gray[4],
      "gitDecoration.conflictingResourceForeground": color.orange[6],
      "gitDecoration.submoduleResourceForeground": color.gray[4],

      "debugToolBar.background": pick({ light: color.white, dark: "#2b3036" }),
      "editor.stackFrameHighlightBackground": pick({ light: color.yellow[1], dark: "#a707" }),
      "editor.focusedStackFrameHighlightBackground": pick({ light: color.yellow[2], dark: "#b808" }),

      "peekViewEditor.matchHighlightBackground": pick({ dark: "#ffd33d33" }),
      "peekViewResult.matchHighlightBackground": pick({ dark: "#ffd33d33" }),
      "peekViewEditor.background": pick({ dark: "#1f242888" }),
      "peekViewResult.background": pick({ dark: "#1f2428" }),

      "settings.headerForeground": workbenchForeground,
      "settings.modifiedItemIndicator": color.blue[4],
      "welcomePage.buttonBackground": color.gray[1],
      "welcomePage.buttonHoverBackground": color.gray[2],
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: pick({ light: color.gray[5], dark: color.gray[4] }),
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
          foreground: color.blue[6],
        },
      },
      {
        scope: ["entity", "entity.name"],
        settings: {
          foreground: pick({ light: color.purple[5], dark: color.purple[6] }),
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
          foreground: color.green[6],
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: pick({ light: color.red[5], dark: color.red[6] }),
        },
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          foreground: pick({ light: color.red[5], dark: color.red[6] }),
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
          foreground: pick({ light: color.blue[8], dark: "#9ecbff" }),
        },
      },
      {
        scope: "support",
        settings: {
          foreground: color.blue[6],
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: color.blue[6],
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: color.orange[6],
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
          foreground: color.red[7],
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: color.red[7],
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: color.red[7],
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: color.red[7],
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: pick({ light: color.red[5], dark: color.red[6] }),
          foreground: color.gray[0],
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: color.red[7],
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
          foreground: color.blue[6],
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: color.blue[8],
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
          foreground: color.blue[8],
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: color.green[6],
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: color.blue[6],
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: color.blue[6],
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: color.blue[6],
        },
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: color.orange[6],
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: color.blue[6],
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: color.green[6],
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
          foreground: color.blue[6],
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: color.red[0],
          foreground: color.red[7],
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: color.green[0],
          foreground: color.green[6],
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: color.orange[1],
          foreground: color.orange[6],
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: color.gray[1],
          background: color.blue[6],
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: pick({ light: color.purple[5], dark: color.purple[6] }),
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: color.blue[6],
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: color.blue[6],
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: color.blue[6],
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
          foreground: color.gray[6],
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: color.red[7],
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: color.blue[8],
          fontStyle: "underline",
        },
      },
    ],
  };
}

module.exports = getTheme;
