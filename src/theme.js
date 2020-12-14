const { getColors } = require("./colors");

// Choosing colors
// There are two ways to define what color is used:

// 1. Color scale from primer/primitives.
//    e.g. "textLink.foreground": themes({ light: color.blue[5], dark: color.blue[2], spacegray: color.blue[6] }),
// 2. Hex value: All themes will use this color. Only use for exceptions
//    e.g. "textLink.foreground": "#fff",

function getTheme({ theme, name }) {
  // Usage: themes({ light: "lightblue", dark: "darkblue", spacegray: "steelblue" })
  const themes = (options) => options[theme];
  // Usage: color.blue[6]
  const color = getColors(theme);

  const workbenchForeground = themes({ light: color.gray[8], dark: color.gray[1], spacegray: color.gray[7] });
  const editorForeground    = themes({ light: color.gray[9], dark: color.gray[1], spacegray: color.gray[7] });
  const borderPrimary       = themes({ light: color.gray[2], dark: color.gray[6], spacegray: color.white });

  return {
    name: name,
    colors: {
      focusBorder          : themes({ light: color.blue[4], dark: color.blue[6], spacegray: color.blue[3] }),
      foreground           : themes({ light: color.gray[7], dark: color.gray[1], spacegray: color.gray[6] }),
      descriptionForeground: themes({ light: color.gray[5], dark: color.gray[3], spacegray: color.gray[5] }),
      errorForeground      : themes({ light: color.red[6], dark: color.red[3], spacegray: color.red[6] }),

      "textLink.foreground"      : themes({ light: color.blue[5], dark: color.blue[3], spacegray: color.blue[6] }),
      "textLink.activeForeground": themes({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[7] }),
      "textBlockQuote.background": themes({ light: color.gray[0], dark: color.gray[9], spacegray: color.gray[0] }),
      "textBlockQuote.border"    : themes({ light: color.gray[2], dark: color.gray[7], spacegray: color.gray[2] }),
      "textCodeBlock.background" : themes({ light: color.gray[1], dark: color.gray[8], spacegray: color.gray[1] }),
      "textPreformat.foreground" : themes({ light: color.gray[6], dark: color.gray[3], spacegray: color.gray[6] }),
      "textSeparator.foreground" : themes({ light: color.gray[3], dark: color.gray[6], spacegray: color.gray[3] }),

      "button.background"     : themes({ light: "#159739", dark: color.green[7], spacegray: color.green[2] }),
      "button.foreground"     : themes({ light: color.white, dark: color.green[1], spacegray: color.green[8] }),
      "button.hoverBackground": themes({ light: "#138934", dark: color.green[6], spacegray: color.green[3] }),

      "checkbox.background": themes({ light: color.gray[0], dark: color.gray[7], spacegray: color.gray[2] }),
      "checkbox.border"    : themes({ light: color.gray[3], dark: color.black, spacegray: color.white }),

      "dropdown.background"    : themes({ light: color.gray[0], dark: color.gray[8], spacegray: color.gray[1] }),
      "dropdown.border"        : borderPrimary,
      "dropdown.foreground"    : workbenchForeground,
      "dropdown.listBackground": themes({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),

      "input.background"           : themes({ light: color.gray[0], dark: color.gray[8], spacegray: color.gray[1] }),
      "input.border"               : borderPrimary,
      "input.foreground"           : workbenchForeground,
      "input.placeholderForeground": themes({ light: color.gray[4], dark: color.gray[4], spacegray: color.gray[5] }),

      "badge.foreground": themes({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[7] }),
      "badge.background": themes({ light: color.blue[1], dark: color.blue[7], spacegray: color.blue[2] }),

      "progressBar.background": themes({ light: color.blue[4], dark: color.blue[5], spacegray: color.blue[4] }),

      "titleBar.activeForeground"  : workbenchForeground,
      "titleBar.activeBackground"  : themes({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "titleBar.inactiveForeground": themes({ light: color.gray[5], dark: color.gray[4], spacegray: color.gray[5] }),
      "titleBar.inactiveBackground": themes({ light: color.gray[1], dark: color.gray[9], spacegray: "#1f2428" }),
      "titleBar.border"            : borderPrimary,

      "activityBar.foreground"        : workbenchForeground,
      "activityBar.inactiveForeground": themes({ light: color.gray[4], dark: color.gray[5], spacegray: color.gray[4] }),
      "activityBar.background"        : themes({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "activityBarBadge.foreground"   : themes({ light: color.white, dark: color.white, spacegray: color.black }),
      "activityBarBadge.background"   : themes({ light: color.blue[4], dark: color.blue[5], spacegray: color.blue[4] }),
      "activityBar.activeBorder"      : "#f9826c",
      "activityBar.border"            : borderPrimary,

      "sideBar.foreground"             : themes({ light: color.gray[6], dark: color.gray[3], spacegray: color.gray[6] }),
      "sideBar.background"             : themes({ light: color.gray[1], dark: color.gray[9], spacegray: "#1f2428" }),
      "sideBar.border"                 : borderPrimary,
      "sideBarTitle.foreground"        : workbenchForeground,
      "sideBarSectionHeader.foreground": workbenchForeground,
      "sideBarSectionHeader.background": themes({ light: color.gray[1], dark: color.gray[9], spacegray: "#1f2428" }),
      "sideBarSectionHeader.border"    : borderPrimary,

      "list.hoverForeground"            : workbenchForeground,
      "list.inactiveSelectionForeground": workbenchForeground,
      "list.activeSelectionForeground"  : workbenchForeground,
      "list.hoverBackground"            : themes({ light: "#ebf0f4", dark: color.gray[8], spacegray: "#282e34" }),
      "list.inactiveSelectionBackground": themes({ light: "#e8eaed", dark: color.gray[8], spacegray: "#282e34" }),
      "list.activeSelectionBackground"  : themes({ light: "#e2e5e9", dark: color.gray[7], spacegray: "#39414a" }),
      "list.inactiveFocusBackground"    : themes({ light: color.blue[1], dark: color.blue[9], spacegray: "#1d2d3e" }),
      "list.focusBackground"            : themes({ light: "#cce5ff", dark: color.blue[8], spacegray: color.blue[2] }),

      "tree.indentGuidesStroke": themes({ light: color.gray[2], dark: color.gray[7], spacegray: color.gray[1] }),

      "notificationCenterHeader.foreground": themes({ light: color.gray[5], dark: color.gray[4], spacegray: color.gray[5] }),
      "notificationCenterHeader.background": themes({ light: color.gray[2], dark: color.gray[9], spacegray: color.gray[0] }),
      "notifications.foreground"           : workbenchForeground,
      "notifications.background"           : themes({ light: color.gray[0], dark: color.gray[8], spacegray: color.gray[1] }),
      "notifications.border"               : borderPrimary,
      "notificationsErrorIcon.foreground"  : themes({ light: color.red[5], dark: color.red[4], spacegray: color.red[5] }),
      "notificationsWarningIcon.foreground": themes({ light: color.orange[6], dark: color.orange[3], spacegray: color.orange[6] }),
      "notificationsInfoIcon.foreground"   : themes({ light: color.blue[6], dark: color.blue[3], spacegray: color.blue[6] }),

      "pickerGroup.border"    : themes({ light: color.gray[2], dark: color.gray[7], spacegray: color.gray[2] }),
      "pickerGroup.foreground": workbenchForeground,
      "quickInput.background" : themes({ light: color.gray[0], dark: color.gray[9], spacegray: color.gray[0] }),
      "quickInput.foreground" : workbenchForeground,

      "statusBar.foreground"             : themes({ light: color.gray[6], dark: color.gray[3], spacegray: color.gray[6] }),
      "statusBar.background"             : themes({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "statusBar.border"                 : borderPrimary,
      "statusBar.noFolderBackground"     : themes({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "statusBar.debuggingBackground"    : themes({ light: "#f9826c", dark: "#931b06", spacegray: "#931b06" }),
      "statusBar.debuggingForeground"    : themes({ light: color.white, dark: color.white, spacegray: color.black }),
      "statusBarItem.prominentBackground": themes({ light: "#e8eaed", dark: "#282e34", spacegray: "#282e34" }),

      "editorGroupHeader.tabsBackground": themes({ light: color.gray[1], dark: color.gray[9], spacegray: "#1f2428" }),
      "editorGroupHeader.tabsBorder"    : borderPrimary,
      "editorGroup.border"              : borderPrimary,

      "tab.activeForeground"        : workbenchForeground,
      "tab.inactiveForeground"      : themes({ light: color.gray[5], dark: color.gray[4], spacegray: color.gray[5] }),
      "tab.inactiveBackground"      : themes({ light: color.gray[1], dark: color.gray[9], spacegray: "#1f2428" }),
      "tab.activeBackground"        : themes({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "tab.hoverBackground"         : themes({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "tab.unfocusedHoverBackground": themes({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "tab.border"                  : borderPrimary,
      "tab.unfocusedActiveBorderTop": borderPrimary,
      "tab.activeBorder"            : themes({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "tab.unfocusedActiveBorder"   : themes({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "tab.activeBorderTop"         : "#f9826c",

      "breadcrumb.foreground"               : themes({ light: color.gray[5], dark: color.gray[4], spacegray: color.gray[5] }),
      "breadcrumb.focusForeground"          : workbenchForeground,
      "breadcrumb.activeSelectionForeground": themes({ light: color.gray[6], dark: color.gray[3], spacegray: color.gray[6] }),
      "breadcrumbPicker.background"         : themes({ light: color.gray[0], dark: color.gray[8], spacegray: "#2b3036" }),

      "editor.foreground"                 : editorForeground,
      "editor.background"                 : themes({ light: color.white, dark: color.gray[9], spacegray: color.gray[0] }),
      "editorWidget.background"           : themes({ light: color.gray[1], dark: color.gray[8], spacegray: "#1f2428" }),
      "editor.foldBackground"             : themes({ light: color.gray[0], dark: color.gray[7], spacegray: "#282e33" }),
      "editor.lineHighlightBackground"    : themes({ light: color.gray[1], dark: color.gray[8], spacegray: "#2b3036" }),
      "editorLineNumber.foreground"       : themes({ light: "#1b1f234d", dark: "#f0f6fc4d", spacegray: color.gray[2] }),
      "editorLineNumber.activeForeground" : editorForeground,
      "editorIndentGuide.background"      : themes({ light: "#eff2f6", dark: color.gray[7], spacegray: color.gray[1] }),
      "editorIndentGuide.activeBackground": themes({ light: "#d7dbe0", dark: color.gray[6], spacegray: color.gray[2] }),
      "editorWhitespace.foreground"       : themes({ light: color.gray[3], dark: color.gray[5], spacegray: color.gray[2] }),
      "editorCursor.foreground"           : themes({ light: color.blue[7], dark: color.blue[2], spacegray: color.blue[7] }),

      "editor.findMatchBackground"          : themes({ light: color.yellow[4], dark: "#ffd33d44", spacegray: "#ffd33d44" }),
      "editor.findMatchHighlightBackground" : themes({ light: "#ffdf5d66", dark: "#ffd33d22", spacegray: "#ffd33d22" }),
      "editor.inactiveSelectionBackground"  : themes({ light: "#0366d611", dark: "#3392FF22", spacegray: "#3392FF22" }),
      "editor.selectionBackground"          : themes({ light: "#0366d625", dark: "#3392FF44", spacegray: "#3392FF44" }),
      "editor.selectionHighlightBackground" : themes({ light: "#34d05840", dark: "#17E5E633", spacegray: "#17E5E633" }),
      "editor.selectionHighlightBorder"     : themes({ light: "#34d05800", dark: "#17E5E600", spacegray: "#17E5E600" }),
      "editor.wordHighlightBackground"      : themes({ light: "#34d05800", dark: "#17E5E600", spacegray: "#17E5E600" }),
      "editor.wordHighlightStrongBackground": themes({ light: "#34d05800", dark: "#17E5E600", spacegray: "#17E5E600" }),
      "editor.wordHighlightBorder"          : themes({ light: "#24943e99", dark: "#17E5E699", spacegray: "#17E5E699" }),
      "editor.wordHighlightStrongBorder"    : themes({ light: "#24943e50", dark: "#17E5E666", spacegray: "#17E5E666" }),
      "editorBracketMatch.background"       : themes({ light: "#34d05840", dark: "#17E5E650", spacegray: "#17E5E650" }),
      "editorBracketMatch.border"           : themes({ light: "#34d05800", dark: "#17E5E600", spacegray: "#17E5E600" }),

      "editorGutter.modifiedBackground": themes({ light: color.blue[4], dark: color.blue[4], spacegray: color.blue[5] }),
      "editorGutter.addedBackground"   : themes({ light: color.green[5], dark: color.green[5], spacegray: color.green[4] }),
      "editorGutter.deletedBackground" : themes({ light: color.red[5], dark: color.red[4], spacegray: color.red[5] }),

      "diffEditor.insertedTextBackground": themes({ light: "#34d05822", dark: "#23863626", spacegray: "#28a74530" }),
      "diffEditor.removedTextBackground":  themes({ light: "#d73a4922", dark: "#da363326", spacegray: "#d73a4930" }),

      "scrollbar.shadow"                : themes({ light: "#6a737d33", dark: "#0008", spacegray: "#0008" }),
      "scrollbarSlider.background"      : themes({ light: "#959da533", dark: "#484F5833", spacegray: "#6a737d33" }),
      "scrollbarSlider.hoverBackground" : themes({ light: "#959da544", dark: "#484F5844", spacegray: "#6a737d44" }),
      "scrollbarSlider.activeBackground": themes({ light: "#959da588", dark: "#484F5888", spacegray: "#6a737d88" }),
      "editorOverviewRuler.border"      : themes({ light: color.white, dark: color.black, spacegray: color.white }),

      "panel.background"             : themes({ light: color.gray[1], dark: color.gray[9], spacegray: "#1f2428" }),
      "panel.border"                 : borderPrimary,
      "panelTitle.activeBorder"      : "#f9826c",
      "panelTitle.activeForeground"  : workbenchForeground,
      "panelTitle.inactiveForeground": themes({ light: color.gray[5], dark: color.gray[4], spacegray: color.gray[5] }),
      "panelInput.border"            : themes({ light: color.gray[2], dark: color.gray[8], spacegray: color.gray[1] }),

      "terminal.foreground": themes({ light: color.gray[6], dark: color.gray[3], spacegray: color.gray[6] }),

      "gitDecoration.addedResourceForeground"      : themes({ light: color.green[5], dark: color.green[4], spacegray: color.green[5] }),
      "gitDecoration.modifiedResourceForeground"   : themes({ light: color.blue[6], dark: color.blue[3], spacegray: color.blue[6] }),
      "gitDecoration.deletedResourceForeground"    : themes({ light: color.red[5], dark: color.red[4], spacegray: color.red[5] }),
      "gitDecoration.untrackedResourceForeground"  : themes({ light: color.green[5], dark: color.green[4], spacegray: color.green[5] }),
      "gitDecoration.ignoredResourceForeground"    : themes({ light: color.gray[4], dark: color.gray[5], spacegray: color.gray[4] }),
      "gitDecoration.conflictingResourceForeground": themes({ light: color.orange[6], dark: color.orange[3], spacegray: color.orange[6] }),
      "gitDecoration.submoduleResourceForeground"  : themes({ light: color.gray[4], dark: color.gray[5], spacegray: color.gray[4] }),

      "debugToolBar.background"                    : themes({ light: color.white, dark: color.gray[8], spacegray: "#2b3036" }),
      "editor.stackFrameHighlightBackground"       : themes({ light: color.yellow[1], dark: "#a707", spacegray: "#a707" }),
      "editor.focusedStackFrameHighlightBackground": themes({ light: color.yellow[2], dark: "#b808", spacegray: "#b808" }),

      "peekViewEditor.matchHighlightBackground": themes({ dark: "#ffd33d33", spacegray: "#ffd33d33" }),
      "peekViewResult.matchHighlightBackground": themes({ dark: "#ffd33d33", spacegray: "#ffd33d33" }),
      "peekViewEditor.background"              : themes({ dark: "#0d111788", spacegray: "#1f242888" }),
      "peekViewResult.background"              : themes({ dark: color.gray[9], spacegray: "#1f2428" }),

      "settings.headerForeground"        : workbenchForeground,
      "settings.modifiedItemIndicator"   : themes({ light: color.blue[4], dark: color.blue[5], spacegray: color.blue[4] }),
      "welcomePage.buttonBackground"     : themes({ light: color.gray[1], dark: color.gray[8], spacegray: color.gray[1] }),
      "welcomePage.buttonHoverBackground": themes({ light: color.gray[2], dark: color.gray[7], spacegray: color.gray[2] }),
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: themes({ light: color.gray[5], dark: color.gray[3], spacegray: color.gray[4] }),
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
          foreground: themes({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: ["entity", "entity.name"],
        settings: {
          foreground: themes({ light: color.purple[5], dark: color.purple[2], spacegray: color.purple[6] }),
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
          foreground: themes({ light: color.green[6], dark: color.green[1], spacegray: color.green[6] }),
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: themes({ light: color.red[5], dark: color.red[3], spacegray: color.red[6] }),
        },
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          foreground: themes({ light: color.red[5], dark: color.red[3], spacegray: color.red[6] }),
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
          foreground: themes({ light: color.blue[8], dark: color.blue[1], spacegray: "#9ecbff" }),
        },
      },
      {
        scope: "support",
        settings: {
          foreground: themes({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: themes({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: themes({ light: color.orange[6], dark: color.orange[2], spacegray: color.orange[6] }),
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
          foreground: themes({ light: color.red[7], dark: color.red[2], spacegray: color.red[7] }),
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: themes({ light: color.red[7], dark: color.red[2], spacegray: color.red[7] }),
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: themes({ light: color.red[7], dark: color.red[2], spacegray: color.red[7] }),
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: themes({ light: color.red[7], dark: color.red[2], spacegray: color.red[7] }),
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: themes({ light: color.red[5], dark: color.red[3], spacegray: color.red[6] }),
          foreground: themes({ light: color.gray[0], dark: color.gray[9], spacegray: color.gray[0] }),
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: themes({ light: color.red[7], dark: color.red[2], spacegray: color.red[7] }),
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
          foreground: themes({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: themes({ light: color.blue[8], dark: color.blue[1], spacegray: color.blue[8] }),
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
          foreground: themes({ light: color.blue[8], dark: color.blue[1], spacegray: color.blue[8] }),
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: themes({ light: color.green[6], dark: color.green[1], spacegray: color.green[6] }),
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: themes({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: themes({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: themes({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: themes({ light: color.orange[6], dark: color.orange[2], spacegray: color.orange[6] }),
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: themes({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: themes({ light: color.green[6], dark: color.green[1], spacegray: color.green[6] }),
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
          foreground: themes({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: themes({ light: color.red[0], dark: color.red[9], spacegray: color.red[0] }),
          foreground: themes({ light: color.red[7], dark: color.red[2], spacegray: color.red[7] }),
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: themes({ light: color.green[0], dark: color.green[9], spacegray: color.green[0] }),
          foreground: themes({ light: color.green[6], dark: color.green[1], spacegray: color.green[6] }),
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: themes({ light: color.orange[1], dark: color.orange[8], spacegray: color.orange[1] }),
          foreground: themes({ light: color.orange[6], dark: color.orange[2], spacegray: color.orange[6] }),
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: themes({ light: color.gray[1], dark: color.gray[8], spacegray: color.gray[1] }),
          background: themes({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: themes({ light: color.purple[5], dark: color.purple[2], spacegray: color.purple[6] }),
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: themes({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: themes({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: themes({ light: color.blue[6], dark: color.blue[2], spacegray: color.blue[6] }),
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
          foreground: themes({ light: color.gray[6], dark: color.gray[3], spacegray: color.gray[6] }),
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: themes({ light: color.red[7], dark: color.red[2], spacegray: color.red[7] }),
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: themes({ light: color.blue[8], dark: color.blue[1], spacegray: color.blue[8] }),
          fontStyle: "underline",
        },
      },
    ],
  };
}

module.exports = getTheme;
