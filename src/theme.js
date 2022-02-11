const chroma = require("chroma-js");
const { getColors } = require("./colors");

// Choosing colors from primer/primitives
// There are multiple ways to define what color is used:

// 1. Global variable
//    e.g. "textLink.foreground": color.fg.default,
// 2. Color scale
//    e.g. "textLink.foreground": scale.blue[5],
// 3. Per theme. Useful when a certain theme needs an exception
//    e.g. "textLink.foreground": themes({ light: scale.blue[5], light_high_contrast: scale.blue[5], light_colorblind: scale.blue[5], dark: scale.blue[2], dark_high_contrast: scale.blue[3], dark_colorblind: scale.blue[2], dark_dimmed: scale.blue[3] }),

function getTheme({ theme, name }) {

  const themes = (options) => options[theme]; // Usage: themes({ light: "lightblue", light_high_contrast: "lightblue", light_colorblind: "lightblue", dark: "darkblue", dark_high_contrast: "darkblue", dark_colorblind: "darkblue", dark_dimmed: "royalblue" })
  const rawColors = getColors(theme)
  const color = changeColorToHexAlphas(rawColors)
  const scale = color.scale; // Usage: scale.blue[6]

  const onlyDark = (color) => {
    return themes({ dark: color, dark_high_contrast: color, dark_colorblind: color, dark_dimmed: color })
  }

  const onlyDarkHighContrast = (color) => {
    return themes({ dark_high_contrast: color })
  }

  const lightDark = (light, dark) => {
    return themes({ light: light, light_high_contrast: light, light_colorblind: light, dark: dark, dark_high_contrast: dark, dark_colorblind: dark, dark_dimmed: dark })
  }

  const alpha = (color, alpha) => {
    return chroma(color).alpha(alpha).hex()
  }

  return {
    name: name,
    colors: {
      focusBorder          : color.accent.emphasis,
      foreground           : color.fg.default,
      descriptionForeground: color.fg.muted,
      errorForeground      : color.danger.fg,

      "textLink.foreground"      : color.accent.fg,
      "textLink.activeForeground": color.accent.fg,
      "textBlockQuote.background": color.canvas.inset,
      "textBlockQuote.border"    : color.border.default,
      "textCodeBlock.background" : color.neutral.muted,
      "textPreformat.foreground" : color.fg.muted,
      "textSeparator.foreground" : color.border.muted,

      "button.background"     : color.btn.primary.bg,
      "button.foreground"     : color.btn.primary.text,
      "button.hoverBackground": color.btn.primary.hoverBg,

      "button.secondaryBackground"     : color.btn.activeBg,
      "button.secondaryForeground"     : color.btn.text,
      "button.secondaryHoverBackground": color.btn.hoverBg,

      "checkbox.background": color.canvas.subtle,
      "checkbox.border"    : color.border.default,

      "dropdown.background"    : color.canvas.overlay,
      "dropdown.border"        : color.border.default,
      "dropdown.foreground"    : color.fg.default,
      "dropdown.listBackground": color.canvas.overlay,

      "input.background"           : color.canvas.default,
      "input.border"               : color.border.default,
      "input.foreground"           : color.fg.default,
      "input.placeholderForeground": color.fg.subtle,

      "badge.foreground": color.fg.onEmphasis,
      "badge.background": color.accent.emphasis,

      "progressBar.background": color.accent.emphasis,

      "titleBar.activeForeground"  : color.fg.muted,
      "titleBar.activeBackground"  : color.canvas.default,
      "titleBar.inactiveForeground": color.fg.muted,
      "titleBar.inactiveBackground": color.canvas.inset,
      "titleBar.border"            : color.border.default,

      "activityBar.foreground"        : color.fg.default,
      "activityBar.inactiveForeground": color.fg.muted,
      "activityBar.background"        : color.canvas.default,
      "activityBarBadge.foreground"   : color.fg.onEmphasis,
      "activityBarBadge.background"   : color.accent.emphasis,
      "activityBar.activeBorder"      : color.primer.border.active,
      "activityBar.border"            : color.border.default,

      "sideBar.foreground"             : color.fg.default,
      "sideBar.background"             : color.canvas.inset,
      "sideBar.border"                 : color.border.default,
      "sideBarTitle.foreground"        : color.fg.default,
      "sideBarSectionHeader.foreground": color.fg.default,
      "sideBarSectionHeader.background": color.canvas.inset,
      "sideBarSectionHeader.border"    : color.border.default,

      "list.hoverForeground"            : color.fg.default,
      "list.inactiveSelectionForeground": color.fg.default,
      "list.activeSelectionForeground"  : color.fg.default,
      "list.hoverBackground"            : color.neutral.subtle,
      "list.inactiveSelectionBackground": color.neutral.muted,
      "list.activeSelectionBackground"  : color.neutral.muted,
      "list.focusForeground"            : color.fg.default,
      "list.focusBackground"            : color.accent.subtle,
      "list.inactiveFocusBackground"    : color.accent.subtle,
      "list.highlightForeground"        : color.accent.fg,

      "tree.indentGuidesStroke": color.border.muted,

      "notificationCenterHeader.foreground": color.fg.muted,
      "notificationCenterHeader.background": color.canvas.subtle,
      "notifications.foreground"           : color.fg.default,
      "notifications.background"           : color.canvas.overlay,
      "notifications.border"               : color.border.default,
      "notificationsErrorIcon.foreground"  : color.danger.fg,
      "notificationsWarningIcon.foreground": color.attention.fg,
      "notificationsInfoIcon.foreground"   : color.accent.fg,

      "pickerGroup.border"    : color.border.default,
      "pickerGroup.foreground": color.fg.muted,
      "quickInput.background" : color.canvas.overlay,
      "quickInput.foreground" : color.fg.default,

      "statusBar.foreground"             : color.fg.muted,
      "statusBar.background"             : color.canvas.default,
      "statusBar.border"                 : color.border.default,
      "statusBar.noFolderBackground"     : color.canvas.default,
      "statusBar.debuggingBackground"    : color.danger.emphasis,
      "statusBar.debuggingForeground"    : color.fg.onEmphasis,
      "statusBarItem.prominentBackground": color.canvas.subtle,

      "editorGroupHeader.tabsBackground": color.canvas.inset,
      "editorGroupHeader.tabsBorder"    : color.border.default,
      "editorGroup.border"              : color.border.default,

      "tab.activeForeground"        : color.fg.default,
      "tab.inactiveForeground"      : color.fg.muted,
      "tab.inactiveBackground"      : color.canvas.inset,
      "tab.activeBackground"        : color.canvas.default,
      "tab.hoverBackground"         : color.canvas.default,
      "tab.unfocusedHoverBackground": color.neutral.subtle,
      "tab.border"                  : color.border.default,
      "tab.unfocusedActiveBorderTop": color.border.default,
      "tab.activeBorder"            : color.canvas.default,
      "tab.unfocusedActiveBorder"   : color.canvas.default,
      "tab.activeBorderTop"         : color.primer.border.active,

      "breadcrumb.foreground"               : color.fg.muted,
      "breadcrumb.focusForeground"          : color.fg.default,
      "breadcrumb.activeSelectionForeground": color.fg.muted,
      "breadcrumbPicker.background"         : color.canvas.overlay,

      "editor.foreground"                 : color.fg.default,
      "editor.background"                 : color.canvas.default,
      "editorWidget.background"           : color.canvas.overlay,
      "editor.foldBackground"             : alpha(color.neutral.emphasis, 0.1),
      "editor.lineHighlightBackground"    : color.codemirror.activelineBg,
      "editor.lineHighlightBorder"        : onlyDarkHighContrast(color.accent.fg),
      "editorLineNumber.foreground"       : color.codemirror.linenumberText,
      "editorLineNumber.activeForeground" : color.fg.default,
      "editorIndentGuide.background"      : color.border.muted,
      "editorIndentGuide.activeBackground": color.border.default,
      "editorWhitespace.foreground"       : color.fg.subtle,
      "editorCursor.foreground"           : color.accent.fg,

      "editor.findMatchBackground"            : color.attention.emphasis,
      "editor.findMatchHighlightBackground"   : alpha(scale.yellow[1], 0.5),
      "editor.linkedEditingBackground"        : alpha(color.accent.fg, 0.07),
      "editor.inactiveSelectionBackground"    : alpha(color.accent.fg, 0.07),
      "editor.selectionBackground"            : alpha(color.accent.fg, 0.2),
      "editor.selectionHighlightBackground"   : alpha(scale.green[3], 0.25),
      "editor.wordHighlightBackground"        : alpha(color.neutral.subtle, 0.5),
      "editor.wordHighlightBorder"            : alpha(color.neutral.muted, 0.6),
      "editor.wordHighlightStrongBackground"  : alpha(color.neutral.muted, 0.3),
      "editor.wordHighlightStrongBorder"      : alpha(color.neutral.muted, 0.6),
      "editorBracketMatch.background"         : alpha(scale.green[3], 0.25),
      "editorBracketMatch.border"             : alpha(scale.green[3], 0.6),

      "editorGutter.modifiedBackground": color.attention.muted,
      "editorGutter.addedBackground"   : color.success.muted,
      "editorGutter.deletedBackground" : color.danger.muted,

      "diffEditor.insertedTextBackground": color.success.subtle,
      "diffEditor.removedTextBackground" : color.danger.subtle,

      "scrollbar.shadow"                  : alpha(scale.gray[5], 0.2),
      "scrollbarSlider.background"        : alpha(scale.gray[4], 0.2),
      "scrollbarSlider.hoverBackground"   : alpha(scale.gray[4], 0.27),
      "scrollbarSlider.activeBackground"  : alpha(scale.gray[4], 0.53),
      "editorOverviewRuler.border"        : lightDark(scale.white, scale.black),

      "panel.background"               : color.canvas.inset,
      "panel.border"                   : color.border.default,
      "panelTitle.activeBorder"        : color.primer.border.active,
      "panelTitle.activeForeground"    : color.fg.default,
      "panelTitle.inactiveForeground"  : color.fg.muted,
      "panelInput.border"              : color.border.default,

      "terminal.foreground": color.fg.muted,
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

      "gitDecoration.addedResourceForeground"      : color.success.fg,
      "gitDecoration.modifiedResourceForeground"   : color.attention.fg,
      "gitDecoration.deletedResourceForeground"    : color.danger.fg,
      "gitDecoration.untrackedResourceForeground"  : color.success.fg,
      "gitDecoration.ignoredResourceForeground"    : color.fg.subtle,
      "gitDecoration.conflictingResourceForeground": color.severe.fg,
      "gitDecoration.submoduleResourceForeground"  : color.fg.muted,

      "debugToolBar.background"                    : color.canvas.overlay,
      "editor.stackFrameHighlightBackground"       : color.attention.muted,
      "editor.focusedStackFrameHighlightBackground": color.success.muted,

      "peekViewEditor.matchHighlightBackground": onlyDark(color.attention.muted),
      "peekViewResult.matchHighlightBackground": onlyDark(color.attention.muted),
      "peekViewEditor.background"              : onlyDark(color.neutral.subtle),
      "peekViewResult.background"              : onlyDark(scale.gray[9]),

      "settings.headerForeground"        : color.fg.muted,
      "settings.modifiedItemIndicator"   : color.attention.muted,
      "welcomePage.buttonBackground"     : color.btn.bg,
      "welcomePage.buttonHoverBackground": color.btn.hoverBg,
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: lightDark(scale.gray[5], scale.gray[3])
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
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: [
          "entity.name",
          "meta.export.default",
          "meta.definition.variable"
        ],
        settings: {
          foreground: lightDark(scale.orange[6], scale.orange[2])
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
          foreground: color.fg.default,
        },
      },
      {
        "scope": "entity.name.function",
        "settings": {
          foreground: lightDark(scale.purple[5], scale.purple[2])
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "support.class.component"
        ],
        settings: {
          foreground: lightDark(scale.green[6], scale.green[1])
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: lightDark(scale.red[5], scale.red[3])
        },
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          foreground: lightDark(scale.red[5], scale.red[3])
        },
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
        ],
        settings: {
          foreground: color.fg.default,
        },
      },
      {
        scope: [
          "string",
          "punctuation.definition.string",
          "string punctuation.section.embedded source",
        ],
        settings: {
          foreground: lightDark(scale.blue[8], scale.blue[1])
        },
      },
      {
        scope: "support",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: lightDark(scale.orange[6], scale.orange[2])
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: color.fg.default,
        },
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: lightDark(scale.red[7], scale.red[2])
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: lightDark(scale.red[7], scale.red[2])
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: lightDark(scale.red[7], scale.red[2])
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: lightDark(scale.red[7], scale.red[2])
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: lightDark(scale.red[5], scale.red[3]),
          foreground: lightDark(scale.gray[0], scale.gray[0]),
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: lightDark(scale.red[7], scale.red[2])
        },
      },
      {
        scope: "string source",
        settings: {
          foreground: color.fg.default,
        },
      },
      {
        scope: "string variable",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: lightDark(scale.blue[8], scale.blue[1])
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
          foreground: lightDark(scale.blue[8], scale.blue[1])
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: lightDark(scale.green[6], scale.green[1])
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: lightDark(scale.orange[6], scale.orange[2])
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: lightDark(scale.green[6], scale.green[1])
        },
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: color.fg.default,
        },
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: color.fg.default,
        },
      },
      {
        scope: "markup.raw",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: lightDark(scale.red[0], scale.red[9]),
          foreground: lightDark(scale.red[7], scale.red[2])
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: lightDark(scale.green[0], scale.green[9]),
          foreground: lightDark(scale.green[6], scale.green[1])
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: lightDark(scale.orange[1], scale.orange[8]),
          foreground: lightDark(scale.orange[6], scale.orange[2])
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: lightDark(scale.gray[1], scale.gray[8]),
          background: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: lightDark(scale.purple[5], scale.purple[2]),
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: lightDark(scale.blue[6], scale.blue[2])
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
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
          foreground: lightDark(scale.gray[6], scale.gray[3])
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: lightDark(scale.red[7], scale.red[2])
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: lightDark(scale.blue[8], scale.blue[1]),
          fontStyle: "underline",
        },
      },
    ],
  };
}

// Convert to hex
// VS Code doesn't support other formats like hsl, rgba etc.

function changeColorToHexAlphas(obj) {
  if (typeof obj === 'object') {
    for (var keys in obj) {
      if (typeof obj[keys] === 'object') {
        changeColorToHexAlphas(obj[keys])
      } else {
        let keyValue = obj[keys]
        if(chroma.valid(keyValue)){
          obj[keys] = chroma(keyValue).hex();
        }
      }
    }
  }
  return obj;
}


module.exports = getTheme;
