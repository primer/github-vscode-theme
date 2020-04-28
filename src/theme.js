const { getVariant } = require("./process");
const { getColors } = require("./primer");

function getTheme({ style, name }) {
  // Usage: `auto('pink')`
  const auto = (hex) => getVariant(hex, style);

  // Usage: `pick({ light: "lightblue", dark: "darkblue" })`
  const pick = (options) => options[style];

  const primer = getColors(style);
  return {
    name: name,
    colors: {
      focusBorder: primer.blue[4],
      foreground: primer.gray[7],
      descriptionForeground: primer.gray[5],
      errorForeground: primer.red[6],

      "textLink.foreground": primer.blue[5],
      "textLink.activeForeground": primer.blue[6],
      "textBlockQuote.background": primer.gray[0],
      "textBlockQuote.border": primer.gray[2],
      "textCodeBlock.background": primer.gray[1],
      "textPreformat.foreground": primer.gray[6],
      "textSeparator.foreground": primer.gray[3],

      "button.background": auto("#159739"),
      "button.foreground": primer.white,
      "button.hoverBackground": auto("#138934"),

      "checkbox.border": primer.gray[3],

      "dropdown.background": primer.gray[0],
      "dropdown.listBackground": primer.white,
      "dropdown.border": primer.gray[2],
      "dropdown.foreground": primer.gray[9],

      "input.background": primer.gray[0],
      "input.border": primer.gray[2],
      "input.foreground": primer.gray[9],
      "input.placeholderForeground": primer.gray[4],

      "badge.foreground": primer.blue[6],
      "badge.background": primer.blue[1],

      "progressBar.background": primer.blue[4],

      "titleBar.activeForeground": primer.gray[9],
      "titleBar.activeBackground": primer.white,
      "titleBar.inactiveForeground": primer.gray[5],
      "titleBar.inactiveBackground": primer.gray[1],
      "titleBar.border": pick({ light: primer.gray[2], dark: primer.white }),

      "activityBar.foreground": primer.gray[9],
      "activityBar.inactiveForeground": primer.gray[4],
      "activityBar.background": pick({ light: primer.white, dark: primer.gray[0] }),
      "activityBarBadge.foreground": primer.white,
      "activityBarBadge.background": primer.blue[4],
      "activityBar.activeBorder": "#f9826c",
      "activityBar.border": pick({ light: primer.gray[2], dark: primer.white }),

      "sideBar.foreground": primer.gray[7],
      "sideBar.background": pick({ light: primer.gray[1], dark: "#1f2428" }),
      "sideBar.border": pick({ light: primer.gray[2], dark: primer.white }),
      "sideBarTitle.foreground": primer.gray[9],
      "sideBarSectionHeader.foreground": primer.gray[9],
      "sideBarSectionHeader.background": pick({ light: primer.gray[1], dark: primer.gray[0] }),
      "sideBarSectionHeader.border": pick({ light: primer.gray[2], dark: primer.white }),

      "list.hoverForeground": primer.gray[9],
      "list.inactiveSelectionForeground": primer.gray[9],
      "list.activeSelectionForeground": primer.gray[9],
      "list.hoverBackground": auto("#ebf0f4"),
      "list.inactiveSelectionBackground": auto("#e8eaed"),
      "list.activeSelectionBackground": auto("#e2e5e9"),

      "tree.indentGuidesStroke": pick({ light: primer.gray[2], dark: primer.gray[1] }),
      "notificationCenterHeader.background": primer.gray[0],
      "pickerGroup.border": primer.gray[2],
      "pickerGroup.foreground": primer.gray[9],
      "quickInput.background": primer.gray[0],
      "quickInput.foreground": primer.gray[9],

      "statusBar.foreground": primer.gray[6],
      "statusBar.background": pick({ light: primer.white, dark: primer.gray[0] }),
      "statusBar.border": pick({ light: primer.gray[2], dark: primer.white }),
      "statusBar.noFolderBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "statusBar.debuggingBackground": auto("#f9826c"),
      "statusBar.debuggingForeground": primer.white,

      "editorGroupHeader.tabsBackground": pick({ light: primer.gray[1], dark: "#1f2428" }),
      "editorGroupHeader.tabsBorder": pick({ light: primer.gray[2], dark: primer.white }),
      "editorGroup.border": pick({ light: primer.gray[2], dark: primer.white }),

      "tab.activeForeground": primer.gray[9],
      "tab.inactiveForeground": primer.gray[5],
      "tab.inactiveBackground": pick({ light: primer.gray[1], dark: "#1f2428" }),
      "tab.activeBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.hoverBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.unfocusedHoverBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.border": pick({ light: primer.gray[2], dark: primer.white }),
      "tab.unfocusedActiveBorderTop": pick({ light: primer.gray[2], dark: primer.white }),
      "tab.activeBorder": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.unfocusedActiveBorder": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.activeBorderTop": "#f9826c",

      "breadcrumb.foreground": primer.gray[5],
      "breadcrumb.focusForeground": primer.gray[9],
      "breadcrumb.activeSelectionForeground": primer.gray[6],
      "breadcrumbPicker.background": primer.gray[0],

      "editor.foreground": primer.gray[9],
      "editor.background": pick({ light: primer.white, dark: primer.gray[0] }),
      "editor.foldBackground": primer.gray[0],
      "editor.lineHighlightBackground": primer.gray[1],
      "editorLineNumber.foreground": auto("#1b1f234d"),
      "editorLineNumber.activeForeground": primer.gray[9],
      "editorIndentGuide.background": auto("#eff2f6"),
      "editorIndentGuide.activeBackground": auto("#d7dbe0"),
      "editorWhitespace.foreground": primer.gray[3],
      "editorCursor.foreground": primer.blue[7],
      "editor.inactiveSelectionBackground": auto("#0366d611"),
      "editor.selectionBackground": auto("#0366d625"),
      "editor.wordHighlightBackground": auto("#0366d622"),
      "editor.findMatchBackground": primer.yellow[4],
      "editor.findMatchHighlightBackground": auto("#ffdf5d66"),
      "editorBracketMatch.background": primer.blue[2],
      "editorBracketMatch.border": primer.blue[2],
      "editorGutter.modifiedBackground": primer.blue[4],
      "editorGutter.addedBackground": primer.green[5],
      "editorGutter.deletedBackground": primer.red[5],

      "diffEditor.insertedTextBackground": "#34d05822",
      "diffEditor.removedTextBackground": auto("#d73a4922"),

      "scrollbar.shadow": auto("#6a737d33"),
      "scrollbarSlider.background": auto("#959da533"),
      "scrollbarSlider.hoverBackground": auto("#959da544"),
      "scrollbarSlider.activeBackground": auto("#959da588"),

      "editorOverviewRuler.border": primer.white,

      "panel.background": pick({ light: primer.gray[1], dark: "#1f2428" }),
      "panel.border": pick({ light: primer.gray[2], dark: primer.white }),
      "panelTitle.activeBorder": "#f9826c",
      "panelTitle.activeForeground": primer.gray[9],
      "panelTitle.inactiveForeground": primer.gray[5],
      "panelInput.border": pick({ light: primer.gray[2], dark: primer.gray[1] }),

      "terminal.foreground": primer.gray[6],

      "gitDecoration.addedResourceForeground": primer.green[5],
      "gitDecoration.modifiedResourceForeground": primer.blue[6],
      "gitDecoration.deletedResourceForeground": primer.red[5],
      "gitDecoration.untrackedResourceForeground": primer.green[5],
      "gitDecoration.ignoredResourceForeground": primer.gray[4],
      "gitDecoration.conflictingResourceForeground": primer.orange[6],
      "gitDecoration.submoduleResourceForeground": primer.gray[4],

      "debugToolBar.background": primer.white,
      "editor.stackFrameHighlightBackground": primer.yellow[1],
      "editor.focusedStackFrameHighlightBackground": primer.yellow[2],
      "settings.headerForeground": primer.gray[9],
      "settings.modifiedItemIndicator": primer.blue[4],
      "welcomePage.buttonBackground": primer.gray[1],
      "welcomePage.buttonHoverBackground": primer.gray[2],
    },
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: primer.gray[5],
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
          foreground: primer.blue[6],
        },
      },
      {
        scope: ["entity", "entity.name"],
        settings: {
          foreground: primer.purple[5],
        },
      },
      {
        scope: "variable.parameter.function",
        settings: {
          foreground: primer.gray[9],
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: primer.green[6],
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: primer.red[5],
        },
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          foreground: primer.red[5],
        },
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
        ],
        settings: {
          foreground: primer.gray[9],
        },
      },
      {
        scope: [
          "string",
          "punctuation.definition.string",
          "string punctuation.section.embedded source",
        ],
        settings: {
          foreground: primer.blue[8],
        },
      },
      {
        scope: "support",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: primer.orange[6],
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: primer.gray[9],
        },
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: primer.red[5],
          foreground: primer.gray[0],
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: "string source",
        settings: {
          foreground: primer.gray[9],
        },
      },
      {
        scope: "string variable",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: primer.blue[8],
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
          foreground: primer.blue[8],
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: primer.green[6],
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "markup.list",
        settings: {
          foreground: primer.yellow[9],
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: primer.blue[6],
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: primer.green[6],
        },
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: primer.gray[9],
        },
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: primer.gray[9],
        },
      },
      {
        scope: "markup.raw",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: primer.red[0],
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: primer.green[0],
          foreground: primer.green[6],
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: primer.orange[1],
          foreground: primer.orange[6],
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: primer.gray[1],
          background: primer.blue[6],
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: primer.purple[5],
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: primer.blue[6],
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
          foreground: primer.gray[6],
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: primer.blue[8],
          fontStyle: "underline",
        },
      },
    ],
  };
}

module.exports = getTheme;
