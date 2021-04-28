const chroma = require("chroma-js");
const { getColors } = require("./colors");

// Choosing colors
// There are two ways to define what color is used:

// 1. Color scale from primer/primitives.
//    e.g. "textLink.foreground": themes({ light: scale.blue[5], dark: scale.blue[2], dimmed: scale.blue[3] }),
// 2. Hex value: All themes will use this scale. Only use for exceptions
//    e.g. "textLink.foreground": "#fff",

function getTheme({ theme, name }) {
  // Usage: themes({ light: "lightblue", dark: "darkblue", dimmed: "royalblue" })
  const themes = (options) => options[theme];
  // Usage: color.text.primary
  const color = getColors(theme);
  // Usage: scale.blue[6]
  const scale = color.scale;

  return {
    name: name,
    colors: {
      focusBorder          : color.state.focus.border,
      foreground           : color.text.primary,
      descriptionForeground: color.text.tertiary,
      errorForeground      : color.text.danger,

      "textLink.foreground"      : color.text.link,
      "textLink.activeForeground": color.text.link,
      "textBlockQuote.background": color.bg.canvasInset,
      "textBlockQuote.border"    : color.markdown.blockquoteBorder,
      "textCodeBlock.background" : chroma(color.markdown.codeBg).hex(),
      "textPreformat.foreground" : color.text.secondary,
      "textSeparator.foreground" : color.border.secondary,

      "button.background"     : color.btn.primary.bg,
      "button.foreground"     : color.btn.primary.text,
      "button.hoverBackground": color.btn.primary.hoverBg,
      
      "button.secondaryBackground"     : color.btn.activeBg,
      "button.secondaryForeground"     : color.btn.text,
      "button.secondaryHoverBackground": color.btn.hoverBg,

      "checkbox.background": color.bg.tertiary,
      "checkbox.border"    : color.border.primary,

      "dropdown.background"    : color.bg.overlay,
      "dropdown.border"        : color.border.primary,
      "dropdown.foreground"    : color.text.primary,
      "dropdown.listBackground": color.bg.overlay,

      "input.background"           : color.input.bg,
      "input.border"               : color.input.border,
      "input.foreground"           : color.text.primary,
      "input.placeholderForeground": color.text.placeholder,

      "badge.foreground": themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
      "badge.background": themes({ light: scale.blue[1], dark: scale.blue[7], dimmed: scale.blue[7] }),

      "progressBar.background": themes({ light: scale.blue[4], dark: scale.blue[5], dimmed: scale.blue[5] }),

      "titleBar.activeForeground"  : color.text.secondary,
      "titleBar.activeBackground"  : color.bg.canvas,
      "titleBar.inactiveForeground": color.text.tertiary,
      "titleBar.inactiveBackground": color.bg.canvasInset,
      "titleBar.border"            : color.border.primary,

      "activityBar.foreground"        : color.text.primary,
      "activityBar.inactiveForeground": color.text.tertiary,
      "activityBar.background"        : color.bg.canvas,
      "activityBarBadge.foreground"   : scale.white,
      "activityBarBadge.background"   : themes({ light: scale.blue[4], dark: scale.blue[5], dimmed: scale.blue[5] }),
      "activityBar.activeBorder"      : color.underlinenav.borderActive,
      "activityBar.border"            : color.border.primary,

      "sideBar.foreground"             : color.text.primary,
      "sideBar.background"             : color.bg.canvasInset,
      "sideBar.border"                 : color.border.primary,
      "sideBarTitle.foreground"        : color.text.primary,
      "sideBarSectionHeader.foreground": color.text.primary,
      "sideBarSectionHeader.background": color.bg.canvasInset,
      "sideBarSectionHeader.border"    : color.border.primary,

      "list.hoverForeground"            : color.text.primary,
      "list.inactiveSelectionForeground": color.text.primary,
      "list.activeSelectionForeground"  : color.text.primary,
      "list.hoverBackground"            : themes({ light: "#ebf0f4", dark: scale.gray[8], dimmed: scale.gray[8] }),
      "list.inactiveSelectionBackground": themes({ light: "#e8eaed", dark: scale.gray[8], dimmed: scale.gray[8] }),
      "list.activeSelectionBackground"  : themes({ light: "#e2e5e9", dark: scale.gray[7], dimmed: scale.gray[7] }),
      "list.focusForeground"            : themes({ light: scale.blue[9], dark: scale.gray[0], dimmed: scale.gray[0] }),
      "list.focusBackground"            : themes({ light: "#cce5ff", dark: scale.gray[7], dimmed: scale.gray[7] }),
      "list.inactiveFocusBackground"    : themes({ light: scale.blue[1], dark: scale.gray[8], dimmed: scale.gray[8] }),
      "list.highlightForeground"        : themes({ light: scale.blue[5], dark: scale.blue[4], dimmed: scale.blue[4] }),

      "tree.indentGuidesStroke": color.border.secondary,

      "notificationCenterHeader.foreground": themes({ light: scale.gray[5], dark: scale.gray[4], dimmed: scale.gray[4] }),
      "notificationCenterHeader.background": themes({ light: scale.gray[2], dark: scale.gray[9], dimmed: scale.gray[9] }),
      "notifications.foreground"           : color.text.secondary,
      "notifications.background"           : themes({ light: scale.gray[0], dark: scale.gray[8], dimmed: scale.gray[8] }),
      "notifications.border"               : color.border.primary,
      "notificationsErrorIcon.foreground"  : themes({ light: scale.red[5], dark: scale.red[4], dimmed: scale.red[4] }),
      "notificationsWarningIcon.foreground": themes({ light: scale.orange[6], dark: scale.orange[3], dimmed: scale.orange[3] }),
      "notificationsInfoIcon.foreground"   : themes({ light: scale.blue[6], dark: scale.blue[3], dimmed: scale.blue[3] }),

      "pickerGroup.border"    : themes({ light: scale.gray[2], dark: scale.gray[7], dimmed: scale.gray[7] }),
      "pickerGroup.foreground": color.text.secondary,
      "quickInput.background" : themes({ light: scale.gray[0], dark: scale.gray[9], dimmed: scale.gray[9] }),
      "quickInput.foreground" : color.text.primary,

      "statusBar.foreground"             : color.text.secondary,
      "statusBar.background"             : color.bg.canvas,
      "statusBar.border"                 : color.border.primary,
      "statusBar.noFolderBackground"     : color.bg.canvas,
      "statusBar.debuggingBackground"    : color.bg.dangerInverse,
      "statusBar.debuggingForeground"    : scale.white,
      "statusBarItem.prominentBackground": color.bg.tertiary,

      "editorGroupHeader.tabsBackground": color.bg.canvasInset,
      "editorGroupHeader.tabsBorder"    : color.border.primary,
      "editorGroup.border"              : color.border.primary,

      "tab.activeForeground"        : color.text.primary,
      "tab.inactiveForeground"      : color.text.tertiary,
      "tab.inactiveBackground"      : color.bg.canvasInset,
      "tab.activeBackground"        : color.bg.canvas,
      "tab.hoverBackground"         : color.bg.canvas,
      "tab.unfocusedHoverBackground": color.state.hover.secondaryBg,
      "tab.border"                  : color.border.primary,
      "tab.unfocusedActiveBorderTop": color.border.primary,
      "tab.activeBorder"            : color.bg.canvas,
      "tab.unfocusedActiveBorder"   : color.bg.canvas,
      "tab.activeBorderTop"         : color.underlinenav.borderActive,

      "breadcrumb.foreground"               : color.text.tertiary,
      "breadcrumb.focusForeground"          : color.text.primary,
      "breadcrumb.activeSelectionForeground": color.text.secondary,
      "breadcrumbPicker.background"         : color.bg.overlay,

      "editor.foreground"                 : color.text.primary,
      "editor.background"                 : color.bg.canvas,
      "editorWidget.background"           : color.bg.overlay,
      "editor.foldBackground"             : chroma(scale.gray[4]).alpha(0.1).hex(), // needs opacity
      "editor.lineHighlightBackground"    : color.codemirror.activelineBg,
      "editorLineNumber.foreground"       : color.codemirror.linenumberText,
      "editorLineNumber.activeForeground" : color.text.primary,
      "editorIndentGuide.background"      : color.border.secondary,
      "editorIndentGuide.activeBackground": color.border.primary,
      "editorWhitespace.foreground"       : themes({ light: scale.gray[3], dark: scale.gray[5], dimmed: scale.gray[5] }),
      "editorCursor.foreground"           : themes({ light: scale.blue[7], dark: scale.blue[2], dimmed: scale.blue[2] }),

      "editor.findMatchBackground"          : themes({ light: scale.yellow[4], dark: "#ffd33d44", dimmed: "#ffd33d44" }),
      "editor.findMatchHighlightBackground" : themes({ light: "#ffdf5d66", dark: "#ffd33d22", dimmed: "#ffd33d22" }),
      "editor.linkedEditingBackground"      : themes({ light: "#0366d611", dark: "#3392FF22", dimmed: "#3392FF22" }),
      "editor.inactiveSelectionBackground"  : themes({ light: "#0366d611", dark: "#3392FF22", dimmed: "#3392FF22" }),
      "editor.selectionBackground"          : themes({ light: "#0366d625", dark: "#3392FF44", dimmed: "#3392FF44" }),
      "editor.selectionHighlightBackground" : themes({ light: "#34d05840", dark: "#17E5E633", dimmed: "#17E5E633" }),
      "editor.selectionHighlightBorder"     : themes({ light: "#34d05800", dark: "#17E5E600", dimmed: "#17E5E600" }),
      "editor.wordHighlightBackground"      : themes({ light: "#34d05800", dark: "#17E5E600", dimmed: "#17E5E600" }),
      "editor.wordHighlightStrongBackground": themes({ light: "#34d05800", dark: "#17E5E600", dimmed: "#17E5E600" }),
      "editor.wordHighlightBorder"          : themes({ light: "#24943e99", dark: "#17E5E699", dimmed: "#17E5E699" }),
      "editor.wordHighlightStrongBorder"    : themes({ light: "#24943e50", dark: "#17E5E666", dimmed: "#17E5E666" }),
      "editorBracketMatch.background"       : themes({ light: "#34d05840", dark: "#17E5E650", dimmed: "#17E5E650" }),
      "editorBracketMatch.border"           : themes({ light: "#34d05800", dark: "#17E5E600", dimmed: "#17E5E600" }),

      "editorGutter.modifiedBackground": color.diff.change.border,
      "editorGutter.addedBackground"   : color.diff.addition.border,
      "editorGutter.deletedBackground" : color.diff.deletion.border,

      "diffEditor.insertedTextBackground": themes({ light: chroma(scale.green[3]).alpha(0.2).hex(), dark: chroma(color.diff.addition.bg).hex(), dimmed: chroma(color.diff.addition.bg).hex() }),
      "diffEditor.removedTextBackground" : themes({ light: chroma(scale.red[3]  ).alpha(0.15).hex(), dark: chroma(color.diff.deletion.bg).hex(), dimmed: chroma(color.diff.deletion.bg).hex() }),

      "scrollbar.shadow"                : themes({ light: "#6a737d33", dark: "#0008", dimmed: "#0008" }),
      "scrollbarSlider.background"      : themes({ light: "#959da533", dark: "#484F5833", dimmed: "#484F5833" }),
      "scrollbarSlider.hoverBackground" : themes({ light: "#959da544", dark: "#484F5844", dimmed: "#484F5844" }),
      "scrollbarSlider.activeBackground": themes({ light: "#959da588", dark: "#484F5888", dimmed: "#484F5888" }),
      "editorOverviewRuler.border"      : themes({ light: scale.white, dark: scale.black, dimmed: scale.black }),

      "panel.background"             : color.bg.canvasInset,
      "panel.border"                 : color.border.primary,
      "panelTitle.activeBorder"      : color.underlinenav.borderActive,
      "panelTitle.activeForeground"  : color.text.primary,
      "panelTitle.inactiveForeground": color.text.tertiary,
      "panelInput.border"            : color.border.primary,

      "terminal.foreground": color.text.secondary,
      'terminal.ansiBlack': color.ansi.black,
      'terminal.ansiRed': color.ansi.red,
      'terminal.ansiGreen': color.ansi.green,
      'terminal.ansiYellow': color.ansi.yellow,
      'terminal.ansiBlue': color.ansi.blue,
      'terminal.ansiMagenta': color.ansi.magenta,
      'terminal.ansiCyan': color.ansi.cyan,
      'terminal.ansiWhite': color.ansi.white,
      'terminal.ansiBrightBlack': color.ansi.blackBright,
      'terminal.ansiBrightRed': color.ansi.redBright,
      'terminal.ansiBrightGreen': color.ansi.greenBright,
      'terminal.ansiBrightYellow': color.ansi.yellowBright,
      'terminal.ansiBrightBlue': color.ansi.blueBright,
      'terminal.ansiBrightMagenta': color.ansi.magentaBright,
      'terminal.ansiBrightCyan': color.ansi.cyanBright,
      'terminal.ansiBrightWhite': color.ansi.whiteBright,

      "gitDecoration.addedResourceForeground"      : color.diff.addition.text,
      "gitDecoration.modifiedResourceForeground"   : color.diff.change.text,
      "gitDecoration.deletedResourceForeground"    : color.diff.deletion.text,
      "gitDecoration.untrackedResourceForeground"  : color.diff.addition.text,
      "gitDecoration.ignoredResourceForeground"    : themes({ light: scale.gray[4], dark: color.text.disabled, dimmed: color.text.disabled }),
      "gitDecoration.conflictingResourceForeground": color.text.warning,
      "gitDecoration.submoduleResourceForeground"  : color.text.secondary,

      "debugToolBar.background"                    : color.bg.overlay,
      "editor.stackFrameHighlightBackground"       : themes({ light: "#ffd33d33", dark: "#D2992225", dimmed: "#C6902625" }), // needs opacity (yellow)
      "editor.focusedStackFrameHighlightBackground": themes({ light: "#28a74525", dark: "#3FB95025", dimmed: "#2b6a3033" }), // needs opacity (green)

      "peekViewEditor.matchHighlightBackground": themes({ dark: "#ffd33d33", dimmed: "#ffd33d33" }),
      "peekViewResult.matchHighlightBackground": themes({ dark: "#ffd33d33", dimmed: "#ffd33d33" }),
      "peekViewEditor.background"              : themes({ dark: "#0d111788", dimmed: "#0d111788" }),
      "peekViewResult.background"              : themes({ dark: scale.gray[9], dimmed: scale.gray[9] }),

      "settings.headerForeground"        : color.text.secondary,
      "settings.modifiedItemIndicator"   : color.diff.change.border,
      "welcomePage.buttonBackground"     : color.btn.bg,
      "welcomePage.buttonHoverBackground": color.btn.hoverBg,
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: themes({ light: scale.gray[5], dark: scale.gray[3], dimmed: scale.gray[3] }),
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
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: [
          "entity.name",
          "meta.export.default",
          "meta.definition.variable"
        ],
        settings: {
          foreground: themes({ light: scale.orange[6], dark: scale.orange[2], dimmed: scale.orange[2] }),
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
          foreground: color.text.primary,
        },
      },
      {
        "scope": "entity.name.function",
        "settings": {
          foreground: themes({ light: scale.purple[5], dark: scale.purple[2], dimmed: scale.purple[2] }),
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "support.class.component"
        ],
        settings: {
          foreground: themes({ light: scale.green[6], dark: scale.green[1], dimmed: scale.green[1] }),
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: themes({ light: scale.red[5], dark: scale.red[3], dimmed: scale.red[3] }),
        },
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          foreground: themes({ light: scale.red[5], dark: scale.red[3], dimmed: scale.red[3] }),
        },
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
        ],
        settings: {
          foreground: color.text.primary,
        },
      },
      {
        scope: [
          "string",
          "punctuation.definition.string",
          "string punctuation.section.embedded source",
        ],
        settings: {
          foreground: themes({ light: scale.blue[8], dark: scale.blue[1], dimmed: scale.blue[1] }),
        },
      },
      {
        scope: "support",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: themes({ light: scale.orange[6], dark: scale.orange[2], dimmed: scale.orange[2] }),
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: color.text.primary,
        },
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: themes({ light: scale.red[7], dark: scale.red[2], dimmed: scale.red[2] }),
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: themes({ light: scale.red[7], dark: scale.red[2], dimmed: scale.red[2] }),
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: themes({ light: scale.red[7], dark: scale.red[2], dimmed: scale.red[2] }),
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: themes({ light: scale.red[7], dark: scale.red[2], dimmed: scale.red[2] }),
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: themes({ light: scale.red[5], dark: scale.red[3], dimmed: scale.red[3] }),
          foreground: themes({ light: scale.gray[0], dark: scale.gray[9], dimmed: scale.gray[9] }),
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: themes({ light: scale.red[7], dark: scale.red[2], dimmed: scale.red[2] }),
        },
      },
      {
        scope: "string source",
        settings: {
          foreground: color.text.primary,
        },
      },
      {
        scope: "string variable",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: themes({ light: scale.blue[8], dark: scale.blue[1], dimmed: scale.blue[1] }),
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
          foreground: themes({ light: scale.blue[8], dark: scale.blue[1], dimmed: scale.blue[1] }),
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: themes({ light: scale.green[6], dark: scale.green[1], dimmed: scale.green[1] }),
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: themes({ light: scale.orange[6], dark: scale.orange[2], dimmed: scale.orange[2] }),
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: themes({ light: scale.green[6], dark: scale.green[1], dimmed: scale.green[1] }),
        },
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: color.text.primary,
        },
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: color.text.primary,
        },
      },
      {
        scope: "markup.raw",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: themes({ light: scale.red[0], dark: scale.red[9], dimmed: scale.red[9] }),
          foreground: themes({ light: scale.red[7], dark: scale.red[2], dimmed: scale.red[2] }),
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: themes({ light: scale.green[0], dark: scale.green[9], dimmed: scale.green[9] }),
          foreground: themes({ light: scale.green[6], dark: scale.green[1], dimmed: scale.green[1] }),
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: themes({ light: scale.orange[1], dark: scale.orange[8], dimmed: scale.orange[8] }),
          foreground: themes({ light: scale.orange[6], dark: scale.orange[2], dimmed: scale.orange[2] }),
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: themes({ light: scale.gray[1], dark: scale.gray[8], dimmed: scale.gray[8] }),
          background: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: themes({ light: scale.purple[5], dark: scale.purple[2], dimmed: scale.purple[2] }),
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
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
          foreground: themes({ light: scale.gray[6], dark: scale.gray[3], dimmed: scale.gray[3] }),
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: themes({ light: scale.red[7], dark: scale.red[2], dimmed: scale.red[2] }),
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: themes({ light: scale.blue[8], dark: scale.blue[1], dimmed: scale.blue[1] }),
          fontStyle: "underline",
        },
      },
    ],
  };
}

module.exports = getTheme;
