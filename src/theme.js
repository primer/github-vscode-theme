const chroma = require("chroma-js");
const { getColors } = require("./colors");

// Convert to hex
// VS Code doesn't support other formats like hsl, rgba etc.

function hex(color) {
  return chroma(color).hex();
}

// Choosing colors from primer/primitives
// There are multiple ways to define what color is used:

// 1. Global variable
//    e.g. "textLink.foreground": hex(color.fg.default),
// 2. Color scale
//    e.g. "textLink.foreground": scale.blue[5],
// 3. Hex value: All themes will use this scale. Only use for exceptions
//    e.g. "textLink.foreground": "#fff",
// 4. Per theme. Useful when a certain theme needs an exception
//    e.g. "textLink.foreground": themes({ light: scale.blue[5], light_colorblind: scale.blue[5], dark: scale.blue[2], dark_colorblind: scale.blue[2], dimmed: scale.blue[3], hc: scale.blue[3] }),

function getTheme({ theme, name }) {
  const themes = (options) => options[theme]; // Usage: themes({ light: "lightblue", light_colorblind: "lightblue", dark: "darkblue", dark_colorblind: "darkblue," dimmed: "royalblue", hc: "blue" })
  const color = getColors(theme); // Usage: color.fg.default
  const scale = color.scale; // Usage: scale.blue[6]

  return {
    name: name,
    colors: {
      focusBorder          : hex(color.accent.emphasis),
      foreground           : hex(color.fg.default),
      descriptionForeground: hex(color.fg.muted),
      errorForeground      : hex(color.danger.fg),

      "textLink.foreground"      : hex(color.accent.fg),
      "textLink.activeForeground": hex(color.accent.fg),
      "textBlockQuote.background": hex(color.canvas.inset),
      "textBlockQuote.border"    : hex(color.border.default),
      "textCodeBlock.background" : hex(color.neutral.muted),
      "textPreformat.foreground" : hex(color.fg.muted),
      "textSeparator.foreground" : hex(color.border.muted),

      "button.background"     : hex(color.btn.primary.bg),
      "button.foreground"     : hex(color.btn.primary.text),
      "button.hoverBackground": hex(color.btn.primary.hoverBg),

      "button.secondaryBackground"     : hex(color.btn.activeBg),
      "button.secondaryForeground"     : hex(color.btn.text),
      "button.secondaryHoverBackground": hex(color.btn.hoverBg),

      "checkbox.background": hex(color.canvas.subtle),
      "checkbox.border"    : hex(color.border.default),

      "dropdown.background"    : hex(color.canvas.overlay),
      "dropdown.border"        : hex(color.border.default),
      "dropdown.foreground"    : hex(color.fg.default),
      "dropdown.listBackground": hex(color.canvas.overlay),

      "input.background"           : hex(color.canvas.default),
      "input.border"               : hex(color.border.default),
      "input.foreground"           : hex(color.fg.default),
      "input.placeholderForeground": hex(color.fg.subtle),

      "badge.foreground": hex(color.fg.onEmphasis),
      "badge.background": hex(color.accent.emphasis),

      "progressBar.background": hex(color.accent.emphasis),

      "titleBar.activeForeground"  : hex(color.fg.muted),
      "titleBar.activeBackground"  : hex(color.canvas.default),
      "titleBar.inactiveForeground": hex(color.fg.muted),
      "titleBar.inactiveBackground": hex(color.canvas.inset),
      "titleBar.border"            : hex(color.border.default),

      "activityBar.foreground"        : hex(color.fg.default),
      "activityBar.inactiveForeground": hex(color.fg.muted),
      "activityBar.background"        : hex(color.canvas.default),
      "activityBarBadge.foreground"   : hex(color.fg.onEmphasis),
      "activityBarBadge.background"   : hex(color.accent.emphasis),
      "activityBar.activeBorder"      : hex(color.primer.border.active),
      "activityBar.border"            : hex(color.border.default),

      "sideBar.foreground"             : hex(color.fg.default),
      "sideBar.background"             : hex(color.canvas.inset),
      "sideBar.border"                 : hex(color.border.default),
      "sideBarTitle.foreground"        : hex(color.fg.default),
      "sideBarSectionHeader.foreground": hex(color.fg.default),
      "sideBarSectionHeader.background": hex(color.canvas.inset),
      "sideBarSectionHeader.border"    : hex(color.border.default),

      "list.hoverForeground"            : hex(color.fg.default),
      "list.inactiveSelectionForeground": hex(color.fg.default),
      "list.activeSelectionForeground"  : hex(color.fg.default),
      "list.hoverBackground"            : hex(color.neutral.subtle),
      "list.inactiveSelectionBackground": hex(color.neutral.muted),
      "list.activeSelectionBackground"  : hex(color.neutral.muted),
      "list.focusForeground"            : hex(color.fg.default),
      "list.focusBackground"            : hex(color.accent.subtle),
      "list.inactiveFocusBackground"    : hex(color.accent.subtle),
      "list.highlightForeground"        : hex(color.accent.fg),

      "tree.indentGuidesStroke": hex(color.border.muted),

      "notificationCenterHeader.foreground": hex(color.fg.muted),
      "notificationCenterHeader.background": hex(color.canvas.subtle),
      "notifications.foreground"           : hex(color.fg.default),
      "notifications.background"           : hex(color.canvas.overlay),
      "notifications.border"               : hex(color.border.default),
      "notificationsErrorIcon.foreground"  : hex(color.danger.fg),
      "notificationsWarningIcon.foreground": hex(color.attention.fg),
      "notificationsInfoIcon.foreground"   : hex(color.accent.fg),

      "pickerGroup.border"    : hex(color.border.default),
      "pickerGroup.foreground": hex(color.fg.muted),
      "quickInput.background" : hex(color.canvas.overlay),
      "quickInput.foreground" : hex(color.fg.default),

      "statusBar.foreground"             : hex(color.fg.muted),
      "statusBar.background"             : hex(color.canvas.default),
      "statusBar.border"                 : hex(color.border.default),
      "statusBar.noFolderBackground"     : hex(color.canvas.default),
      "statusBar.debuggingBackground"    : hex(color.danger.emphasis),
      "statusBar.debuggingForeground"    : hex(color.fg.onEmphasis),
      "statusBarItem.prominentBackground": hex(color.canvas.subtle),

      "editorGroupHeader.tabsBackground": hex(color.canvas.inset),
      "editorGroupHeader.tabsBorder"    : hex(color.border.default),
      "editorGroup.border"              : hex(color.border.default),

      "tab.activeForeground"        : hex(color.fg.default),
      "tab.inactiveForeground"      : hex(color.fg.muted),
      "tab.inactiveBackground"      : hex(color.canvas.inset),
      "tab.activeBackground"        : hex(color.canvas.default),
      "tab.hoverBackground"         : hex(color.canvas.default),
      "tab.unfocusedHoverBackground": hex(color.neutral.subtle),
      "tab.border"                  : hex(color.border.default),
      "tab.unfocusedActiveBorderTop": hex(color.border.default),
      "tab.activeBorder"            : hex(color.canvas.default),
      "tab.unfocusedActiveBorder"   : hex(color.canvas.default),
      "tab.activeBorderTop"         : hex(color.primer.border.active),

      "breadcrumb.foreground"               : hex(color.fg.muted),
      "breadcrumb.focusForeground"          : hex(color.fg.default),
      "breadcrumb.activeSelectionForeground": hex(color.fg.muted),
      "breadcrumbPicker.background"         : hex(color.canvas.overlay),

      "editor.foreground"                 : hex(color.fg.default),
      "editor.background"                 : hex(color.canvas.default),
      "editorWidget.background"           : hex(color.canvas.overlay),
      "editor.foldBackground"             : hex(chroma(color.neutral.emphasis).alpha(0.1)), // needs opacity
      "editor.lineHighlightBackground"    : hex(color.codemirror.activelineBg),
      "editor.lineHighlightBorder"        : themes({ hc: color.accent.fg }), // only add border to HC
      "editorLineNumber.foreground"       : hex(color.codemirror.linenumberText),
      "editorLineNumber.activeForeground" : hex(color.fg.default),
      "editorIndentGuide.background"      : hex(color.border.muted),
      "editorIndentGuide.activeBackground": hex(color.border.default),
      "editorWhitespace.foreground"       : hex(color.fg.subtle),
      "editorCursor.foreground"           : hex(color.accent.fg),

      "editor.findMatchBackground"          : themes({ light: "#bf8700", light_colorblind: "#bf8700", dark: "#ffd33d44", dark_colorblind: "#ffd33d44", dimmed: "#ffd33d44", hc: "#ffd33d44"   }),
      "editor.findMatchHighlightBackground" : themes({ light: "#ffdf5d66", light_colorblind: "#ffdf5d66", dark: "#ffd33d22", dark_colorblind: "#ffd33d22", dimmed: "#ffd33d22", hc: "#ffd33d22" }),
      "editor.linkedEditingBackground"      : themes({ light: "#0366d611", light_colorblind: "#0366d611", dark: "#3392FF22", dark_colorblind: "#3392FF22", dimmed: "#3392FF22", hc: "#3392FF22" }),
      "editor.inactiveSelectionBackground"  : themes({ light: "#0366d611", light_colorblind: "#0366d611", dark: "#3392FF22", dark_colorblind: "#3392FF22", dimmed: "#3392FF22", hc: "#addcff66" }),
      "editor.selectionBackground"          : themes({ light: "#0366d625", light_colorblind: "#0366d625", dark: "#3392FF44", dark_colorblind: "#3392FF44", dimmed: "#3392FF44", hc: "#addcff99" }),
      "editor.selectionHighlightBackground" : themes({ light: "#34d05840", light_colorblind: "#34d05840", dark: "#17E5E633", dark_colorblind: "#17E5E633", dimmed: "#17E5E633", hc: "#17E5E633" }),
      "editor.selectionHighlightBorder"     : themes({ light: "#34d05800", light_colorblind: "#34d05800", dark: "#17E5E600", dark_colorblind: "#17E5E600", dimmed: "#17E5E600", hc: "#17E5E600" }),
      "editor.wordHighlightBackground"      : themes({ light: "#34d05800", light_colorblind: "#34d05800", dark: "#17E5E600", dark_colorblind: "#17E5E600", dimmed: "#17E5E600", hc: "#17E5E600" }),
      "editor.wordHighlightStrongBackground": themes({ light: "#34d05800", light_colorblind: "#34d05800", dark: "#17E5E600", dark_colorblind: "#17E5E600", dimmed: "#17E5E600", hc: "#17E5E600" }),
      "editor.wordHighlightBorder"          : themes({ light: "#24943e99", light_colorblind: "#24943e99", dark: "#17E5E699", dark_colorblind: "#17E5E699", dimmed: "#17E5E699", hc: "#17E5E699" }),
      "editor.wordHighlightStrongBorder"    : themes({ light: "#24943e50", light_colorblind: "#24943e50", dark: "#17E5E666", dark_colorblind: "#17E5E666", dimmed: "#17E5E666", hc: "#17E5E666" }),
      "editorBracketMatch.background"       : themes({ light: "#34d05840", light_colorblind: "#34d05840", dark: "#17E5E650", dark_colorblind: "#17E5E650", dimmed: "#17E5E650", hc: "#17E5E650" }),
      "editorBracketMatch.border"           : themes({ light: "#34d05800", light_colorblind: "#34d05800", dark: "#17E5E600", dark_colorblind: "#17E5E600", dimmed: "#17E5E600", hc: "#17E5E600" }),

      "editorGutter.modifiedBackground": hex(color.attention.muted),
      "editorGutter.addedBackground"   : hex(color.success.muted),
      "editorGutter.deletedBackground" : hex(color.danger.muted),

      "diffEditor.insertedTextBackground": hex(color.success.subtle),
      "diffEditor.removedTextBackground" : hex(color.danger.subtle),

      "scrollbar.shadow"                : themes({ light: "#6a737d33", light_colorblind: "#6a737d33", dark: "#0008", dark_colorblind: "#0008", dimmed: "#0008" }),
      "scrollbarSlider.background"      : themes({ light: "#959da533", light_colorblind: "#959da533", dark: "#484F5833", dark_colorblind: "#484F5833", dimmed: "#484F5833", hc: "#484F5833" }),
      "scrollbarSlider.hoverBackground" : themes({ light: "#959da544", light_colorblind: "#959da544", dark: "#484F5844", dark_colorblind: "#484F5844", dimmed: "#484F5844", hc: "#484F5844" }),
      "scrollbarSlider.activeBackground": themes({ light: "#959da588", light_colorblind: "#959da588", dark: "#484F5888", dark_colorblind: "#484F5888", dimmed: "#484F5888", hc: "#484F5888" }),
      "editorOverviewRuler.border"      : themes({ light: scale.white, light_colorblind: scale.white, dark: scale.black, dark_colorblind: scale.black, dimmed: scale.black, hc: scale.black }),

      "panel.background"             : hex(color.canvas.inset),
      "panel.border"                 : hex(color.border.default),
      "panelTitle.activeBorder"      : hex(color.primer.border.active),
      "panelTitle.activeForeground"  : hex(color.fg.default),
      "panelTitle.inactiveForeground": hex(color.fg.muted),
      "panelInput.border"            : hex(color.border.default),

      "terminal.foreground": hex(color.fg.muted),
      'terminal.ansiBlack': hex(color.ansi.black),
      'terminal.ansiRed': hex(color.ansi.red),
      'terminal.ansiGreen': hex(color.ansi.green),
      'terminal.ansiYellow': hex(color.ansi.yellow),
      'terminal.ansiBlue': hex(color.ansi.blue),
      'terminal.ansiMagenta': hex(color.ansi.magenta),
      'terminal.ansiCyan': hex(color.ansi.cyan),
      'terminal.ansiWhite': hex(color.ansi.white),
      'terminal.ansiBrightBlack': hex(color.ansi.blackBright),
      'terminal.ansiBrightRed': hex(color.ansi.redBright),
      'terminal.ansiBrightGreen': hex(color.ansi.greenBright),
      'terminal.ansiBrightYellow': hex(color.ansi.yellowBright),
      'terminal.ansiBrightBlue': hex(color.ansi.blueBright),
      'terminal.ansiBrightMagenta': hex(color.ansi.magentaBright),
      'terminal.ansiBrightCyan': hex(color.ansi.cyanBright),
      'terminal.ansiBrightWhite': hex(color.ansi.whiteBright),

      "gitDecoration.addedResourceForeground"      : hex(color.success.fg),
      "gitDecoration.modifiedResourceForeground"   : hex(color.attention.fg),
      "gitDecoration.deletedResourceForeground"    : hex(color.danger.fg),
      "gitDecoration.untrackedResourceForeground"  : hex(color.success.fg),
      "gitDecoration.ignoredResourceForeground"    : hex(color.fg.subtle),
      "gitDecoration.conflictingResourceForeground": hex(color.severe.fg),
      "gitDecoration.submoduleResourceForeground"  : hex(color.fg.muted),

      "debugToolBar.background"                    : hex(color.canvas.overlay),
      "editor.stackFrameHighlightBackground"       : themes({ light: "#ffd33d33", light_colorblind: "#ffd33d33", dark: "#D2992225", dark_colorblind: "#D2992225", dimmed: "#C6902625", hc: "#C6902625" }), // needs opacity (yellow)
      "editor.focusedStackFrameHighlightBackground": themes({ light: "#28a74525", light_colorblind: "#28a74525", dark: "#3FB95025", dark_colorblind: "#3FB95025", dimmed: "#2b6a3033", hc: "#2b6a3033" }), // needs opacity (green)

      "peekViewEditor.matchHighlightBackground": themes({ dark: "#ffd33d33", dark_colorblind: "#ffd33d33", dimmed: "#ffd33d33", hc: "#ffd33d33" }),
      "peekViewResult.matchHighlightBackground": themes({ dark: "#ffd33d33", dark_colorblind: "#ffd33d33", dimmed: "#ffd33d33", hc: "#ffd33d33" }),
      "peekViewEditor.background"              : themes({ dark: "#0d111788", dark_colorblind: "#0d111788", dimmed: "#0d111788", hc: "#0d111788" }),
      "peekViewResult.background"              : themes({ dark: scale.gray[9], dark_colorblind: scale.gray[9], dimmed: scale.gray[9], hc: scale.gray[9] }),

      "settings.headerForeground"        : hex(color.fg.muted),
      "settings.modifiedItemIndicator"   : hex(color.attention.muted),
      "welcomePage.buttonBackground"     : hex(color.btn.bg),
      "welcomePage.buttonHoverBackground": hex(color.btn.hoverBg),
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: themes({ light: scale.gray[5], light_colorblind: scale.gray[5], dark: scale.gray[3], dark_colorblind: scale.gray[3], dimmed: scale.gray[3], hc: scale.gray[3] }),
        },
      },
      {
        scope: [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.language",
          "entity",
        ],
        settings: {
          foreground: themes({ light: scale.blue[6], light_colorblind: scale.blue[6], dark: scale.blue[2], dark_colorblind: scale.blue[2], dimmed: scale.blue[2], hc: scale.blue[2] }),
        },
      },
      {
        scope: [
          "entity.name",
          "meta.export.default",
          "meta.definition.variable"
        ],
        settings: {
          foreground: themes({ light: scale.orange[6], light_colorblind: scale.orange[6], dark: scale.orange[2], dark_colorblind: scale.orange[6], dimmed: scale.orange[2], hc: scale.orange[2] }),
        },
      },
      {
        scope: [
          "variable.parameter.function",
          "meta.jsx.children",
          "meta.block",
          "meta.tag.attributes",
          "entity.name.constant",
          "meta.object.member",
          "meta.embedded.expression"
        ],
        settings: {
          foreground: hex(color.fg.default),
        },
      },
      {
        "scope": "entity.name.function",
        "settings": {
          foreground: themes({ light: scale.purple[5], light_colorblind: scale.purple[5], dark: scale.purple[2], dark_colorblind: scale.purple[2], dimmed: scale.purple[2], hc: scale.purple[2] }),
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "support.class.component"
        ],
        settings: {
          foreground: themes({ light: scale.green[6], light_colorblind: scale.green[6], dark: scale.green[1], dark_colorblind: scale.green[1], dimmed: scale.green[1], hc: scale.green[1] }),
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: themes({ light: scale.red[5], light_colorblind: scale.red[5], dark: scale.red[3], dark_colorblind: scale.red[3], dimmed: scale.red[3], hc: scale.red[3] }),
        },
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          foreground: themes({ light: scale.red[5], light_colorblind: scale.red[5], dark: scale.red[3], dark_colorblind: scale.red[3], dimmed: scale.red[3], hc: scale.red[3] }),
        },
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
        ],
        settings: {
          foreground: hex(color.fg.default),
        },
      },
      {
        scope: [
          "string",
          "punctuation.definition.string",
          "string punctuation.section.embedded source",
        ],
        settings: {
          foreground: themes({ light: scale.blue[8], light_colorblind: scale.blue[8], dark: scale.blue[1], dark_colorblind: scale.blue[1], dimmed: scale.blue[1], hc: scale.blue[1] }),
        },
      },
      {
        scope: "support",
        settings: {
          foreground: themes({ light: scale.blue[6], light_colorblind: scale.blue[6], dark: scale.blue[2], dark_colorblind: scale.blue[2], dimmed: scale.blue[2], hc: scale.blue[2] }),
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: themes({ light: scale.blue[6], light_colorblind: scale.blue[6], dark: scale.blue[2], dark_colorblind: scale.blue[2], dimmed: scale.blue[2], hc: scale.blue[2] }),
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: themes({ light: scale.orange[6], light_colorblind: scale.orange[6], dark: scale.orange[2], dark_colorblind: scale.orange[2], dimmed: scale.orange[2], hc: scale.orange[2] }),
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: hex(color.fg.default),
        },
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: themes({ light: scale.red[7], light_colorblind: scale.red[7], dark: scale.red[2], dark_colorblind: scale.red[7], dimmed: scale.red[2], hc: scale.red[2] }),
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: themes({ light: scale.red[7], light_colorblind: scale.red[7], dark: scale.red[2], dark_colorblind: scale.red[2], dimmed: scale.red[2], hc: scale.red[2] }),
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: themes({ light: scale.red[7], light_colorblind: scale.red[7], dark: scale.red[2], dark_colorblind: scale.red[2], dimmed: scale.red[2], hc: scale.red[2] }),
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: themes({ light: scale.red[7], light_colorblind: scale.red[7], dark: scale.red[2], dark_colorblind: scale.red[2], dimmed: scale.red[2], hc: scale.red[2] }),
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: themes({ light: scale.red[5], light_colorblind: scale.red[5], dark: scale.red[3], dark_colorblind: scale.red[3], dimmed: scale.red[3], hc: scale.red[3] }),
          foreground: themes({ light: scale.gray[0], light_colorblind: scale.gray[0], dark: scale.gray[9], dark_colorblind: scale.gray[9], dimmed: scale.gray[9], hc: scale.gray[9] }),
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: themes({ light: scale.red[7], light_colorblind: scale.red[7], dark: scale.red[2], dark_colorblind: scale.red[2], dimmed: scale.red[2], hc: scale.red[2] }),
        },
      },
      {
        scope: "string source",
        settings: {
          foreground: hex(color.fg.default),
        },
      },
      {
        scope: "string variable",
        settings: {
          foreground: themes({ light: scale.blue[6], light_colorblind: scale.blue[6], dark: scale.blue[2], dark_colorblind: scale.blue[2], dimmed: scale.blue[2], hc: scale.blue[2] }),
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: themes({ light: scale.blue[8], light_colorblind: scale.blue[8], dark: scale.blue[1], dark_colorblind: scale.blue[1], dimmed: scale.blue[1], hc: scale.blue[1] }),
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
          foreground: themes({ light: scale.blue[8], light_colorblind: scale.blue[8], dark: scale.blue[1], dark_colorblind: scale.blue[1], dimmed: scale.blue[1], hc: scale.blue[1] }),
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: themes({ light: scale.green[6], light_colorblind: scale.green[6], dark: scale.green[1], dark_colorblind: scale.green[1], dimmed: scale.green[1], hc: scale.green[1] }),
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: themes({ light: scale.blue[6], light_colorblind: scale.blue[6], dark: scale.blue[2], dark_colorblind: scale.blue[2], dimmed: scale.blue[2], hc: scale.blue[2] }),
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: themes({ light: scale.blue[6], light_colorblind: scale.blue[6], dark: scale.blue[2], dark_colorblind: scale.blue[2], dimmed: scale.blue[2], hc: scale.blue[2] }),
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: themes({ light: scale.blue[6], light_colorblind: scale.blue[6], dark: scale.blue[2], dark_colorblind: scale.blue[2], dimmed: scale.blue[2], hc: scale.blue[2] }),
        },
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: themes({ light: scale.orange[6], light_colorblind: scale.orange[6], dark: scale.orange[2], dark_colorblind: scale.orange[2], dimmed: scale.orange[2], hc: scale.orange[2] }),
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: themes({ light: scale.blue[6], light_colorblind: scale.blue[6], dark: scale.blue[2], dark_colorblind: scale.blue[2], dimmed: scale.blue[2], hc: scale.blue[2] }),
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: themes({ light: scale.green[6], light_colorblind: scale.green[6], dark: scale.green[1], dark_colorblind: scale.green[1], dimmed: scale.green[1], hc: scale.green[1] }),
        },
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: hex(color.fg.default),
        },
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: hex(color.fg.default),
        },
      },
      {
        scope: "markup.raw",
        settings: {
          foreground: themes({ light: scale.blue[6], light_colorblind: scale.blue[6], dark: scale.blue[2], dark_colorblind: scale.blue[2], dimmed: scale.blue[2], hc: scale.blue[2] }),
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: themes({ light: scale.red[0], light_colorblind: scale.red[0], dark: scale.red[9], dark_colorblind: scale.red[9], dimmed: scale.red[9], hc: scale.red[9] }),
          foreground: themes({ light: scale.red[7], light_colorblind: scale.red[7], dark: scale.red[2], dark_colorblind: scale.red[2], dimmed: scale.red[2], hc: scale.red[2] }),
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: themes({ light: scale.green[0], light_colorblind: scale.green[0], dark: scale.green[9], dark_colorblind: scale.green[9], dimmed: scale.green[9], hc: scale.green[9] }),
          foreground: themes({ light: scale.green[6], light_colorblind: scale.green[6], dark: scale.green[1], dark_colorblind: scale.green[1], dimmed: scale.green[1], hc: scale.green[1] }),
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: themes({ light: scale.orange[1], light_colorblind: scale.orange[1], dark: scale.orange[8], dark_colorblind: scale.orange[8], dimmed: scale.orange[8], hc: scale.orange[8] }),
          foreground: themes({ light: scale.orange[6], light_colorblind: scale.orange[6], dark: scale.orange[2], dark_colorblind: scale.orange[2], dimmed: scale.orange[2], hc: scale.orange[2] }),
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: themes({ light: scale.gray[1], light_colorblind: scale.gray[1], dark: scale.gray[8], dark_colorblind: scale.gray[8], dimmed: scale.gray[8], hc: scale.gray[8] }),
          background: themes({ light: scale.blue[6], light_colorblind: scale.blue[6], dark: scale.blue[2], dark_colorblind: scale.blue[2], dimmed: scale.blue[2], hc: scale.blue[2] }),
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: themes({ light: scale.purple[5], light_colorblind: scale.purple[5], dark: scale.purple[2], dark_colorblind: scale.purple[2], dimmed: scale.purple[2], hc: scale.purple[2] }),
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: themes({ light: scale.blue[6], light_colorblind: scale.blue[6], dark: scale.blue[2], dark_colorblind: scale.blue[2], dimmed: scale.blue[2], hc: scale.blue[2] }),
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: themes({ light: scale.blue[6], light_colorblind: scale.blue[6], dark: scale.blue[2], dark_colorblind: scale.blue[2], dimmed: scale.blue[2], hc: scale.blue[2] }),
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: themes({ light: scale.blue[6], light_colorblind: scale.blue[6], dark: scale.blue[2], dark_colorblind: scale.blue[2], dimmed: scale.blue[2], hc: scale.blue[2] }),
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
          foreground: themes({ light: scale.gray[6], light_colorblind: scale.gray[6], dark: scale.gray[3], dark_colorblind: scale.gray[3], dimmed: scale.gray[3], hc: scale.gray[3] }),
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: themes({ light: scale.red[7], light_colorblind: scale.red[7], dark: scale.red[2], dark_colorblind: scale.red[2], dimmed: scale.red[2], hc: scale.red[2] }),
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: themes({ light: scale.blue[8], light_colorblind: scale.blue[8], dark: scale.blue[1], dark_colorblind: scale.blue[1], dimmed: scale.blue[1], hc: scale.blue[1] }),
          fontStyle: "underline",
        },
      },
    ],
  };
}

module.exports = getTheme;
