function getTheme({ colors, name }) {
  return {
    name: name,
    colors: {
      focusBorder: colors.blue[4],
      foreground: colors.gray[7],
      descriptionForeground: colors.gray[5],
      errorForeground: colors.red[6],
      "textLink.foreground": colors.blue[5],
      "textLink.activeForeground": colors.blue[6],
      "textBlockQuote.background": colors.gray[0],
      "textBlockQuote.border": colors.gray[2],
      "textCodeBlock.background": colors.gray[1],
      "textPreformat.foreground": colors.gray[6],
      "textSeparator.foreground": colors.gray[3],
      "button.background": "#159739",
      "button.foreground": colors.white,
      "button.hoverBackground": "#138934",
      "checkbox.border": colors.gray[3],
      "dropdown.background": colors.gray[0],
      "dropdown.listBackground": colors.white,
      "dropdown.border": colors.gray[2],
      "dropdown.foreground": colors.gray[9],
      "input.background": colors.gray[0],
      "input.border": colors.gray[2],
      "input.foreground": colors.gray[9],
      "input.placeholderForeground": colors.gray[4],
      "badge.foreground": colors.blue[6],
      "badge.background": colors.blue[1],
      "progressBar.background": colors.blue[4],
      "titleBar.activeForeground": colors.gray[9],
      "titleBar.activeBackground": colors.white,
      "titleBar.inactiveForeground": colors.gray[5],
      "titleBar.inactiveBackground": colors.gray[1],
      "titleBar.border": colors.gray[2],
      "activityBar.foreground": colors.gray[9],
      "activityBar.inactiveForeground": colors.gray[4],
      "activityBar.background": colors.white,
      "activityBarBadge.foreground": colors.white,
      "activityBarBadge.background": colors.blue[4],
      "activityBar.activeBorder": "#f9826c",
      "activityBar.border": colors.gray[2],
      "sideBar.foreground": colors.gray[7],
      "sideBar.background": colors.gray[1],
      "sideBar.border": colors.gray[2],
      "sideBarTitle.foreground": colors.gray[9],
      "sideBarSectionHeader.foreground": colors.gray[9],
      "sideBarSectionHeader.background": colors.gray[1],
      "sideBarSectionHeader.border": colors.gray[2],
      "list.hoverForeground": colors.gray[9],
      "list.inactiveSelectionForeground": colors.gray[9],
      "list.activeSelectionForeground": colors.gray[9],
      "list.hoverBackground": "#ebf0f4",
      "list.inactiveSelectionBackground": "#e8eaed",
      "list.activeSelectionBackground": "#e2e5e9",
      "tree.indentGuidesStroke": colors.gray[2],
      "notificationCenterHeader.background": colors.gray[0],
      "pickerGroup.border": colors.gray[2],
      "pickerGroup.foreground": colors.gray[9],
      "quickInput.background": colors.gray[0],
      "quickInput.foreground": colors.gray[9],
      "statusBar.foreground": colors.gray[6],
      "statusBar.background": colors.white,
      "statusBar.border": colors.gray[2],
      "editorGroupHeader.tabsBackground": colors.gray[1],
      "editorGroupHeader.tabsBorder": colors.gray[2],
      "editorGroup.border": colors.gray[2],
      "tab.activeForeground": colors.gray[9],
      "tab.inactiveForeground": colors.gray[5],
      "tab.inactiveBackground": colors.gray[1],
      "tab.activeBackground": colors.white,
      "tab.hoverBackground": colors.white,
      "tab.unfocusedHoverBackground": colors.white,
      "tab.border": colors.gray[2],
      "tab.unfocusedActiveBorderTop": colors.gray[2],
      "tab.activeBorder": colors.white,
      "tab.unfocusedActiveBorder": colors.white,
      "tab.activeBorderTop": "#f9826c",
      "breadcrumb.foreground": colors.gray[5],
      "breadcrumb.focusForeground": colors.gray[9],
      "breadcrumb.activeSelectionForeground": colors.gray[6],
      "breadcrumbPicker.background": colors.gray[0],
      "editor.foreground": colors.gray[9],
      "editor.background": colors.white,
      "editor.foldBackground": colors.gray[0],
      "editor.lineHighlightBackground": colors.gray[1],
      "editorLineNumber.foreground": "#1b1f234d",
      "editorLineNumber.activeForeground": colors.gray[9],
      "editorIndentGuide.background": "#eff2f6",
      "editorIndentGuide.activeBackground": "#d7dbe0",
      "editorWhitespace.foreground": colors.gray[3],
      "editorCursor.foreground": colors.blue[7],
      "editor.inactiveSelectionBackground": "#0366d611",
      "editor.selectionBackground": "#0366d625",
      "editor.wordHighlightBackground": "#0366d622",
      "editor.findMatchBackground": colors.yellow[4],
      "editor.findMatchHighlightBackground": "#ffdf5d66",
      "editorBracketMatch.background": colors.blue[2],
      "editorBracketMatch.border": colors.blue[2],
      "editorGutter.modifiedBackground": colors.blue[4],
      "editorGutter.addedBackground": colors.green[5],
      "editorGutter.deletedBackground": colors.red[5],
      "diffEditor.insertedTextBackground": "#34d05822",
      "diffEditor.removedTextBackground": "#d73a4922",
      "scrollbar.shadow": "#6a737d33",
      "scrollbarSlider.background": "#959da533",
      "scrollbarSlider.hoverBackground": "#959da544",
      "scrollbarSlider.activeBackground": "#959da588",
      "editorOverviewRuler.border": colors.white,
      "panel.background": colors.gray[1],
      "panel.border": colors.gray[2],
      "panelTitle.activeBorder": "#f9826c",
      "panelTitle.activeForeground": colors.gray[9],
      "panelTitle.inactiveForeground": colors.gray[5],
      "panelInput.border": colors.gray[2],
      "terminal.foreground": colors.gray[6],
      "gitDecoration.addedResourceForeground": colors.green[5],
      "gitDecoration.modifiedResourceForeground": colors.blue[6],
      "gitDecoration.deletedResourceForeground": colors.red[5],
      "gitDecoration.untrackedResourceForeground": colors.green[5],
      "gitDecoration.ignoredResourceForeground": colors.gray[4],
      "gitDecoration.conflictingResourceForeground": colors.orange[6],
      "gitDecoration.submoduleResourceForeground": colors.gray[4],
      "debugToolBar.background": colors.white,
      "editor.stackFrameHighlightBackground": colors.yellow[1],
      "editor.focusedStackFrameHighlightBackground": colors.yellow[2],
      "settings.headerForeground": colors.gray[9],
      "settings.modifiedItemIndicator": colors.blue[4],
      "welcomePage.buttonBackground": colors.gray[1],
      "welcomePage.buttonHoverBackground": colors.gray[2],
    },
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: colors.gray[5],
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
          foreground: colors.blue[6],
        },
      },
      {
        scope: ["entity", "entity.name"],
        settings: {
          foreground: colors.purple[5],
        },
      },
      {
        scope: "variable.parameter.function",
        settings: {
          foreground: colors.gray[9],
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: colors.green[6],
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: colors.red[5],
        },
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          foreground: colors.red[5],
        },
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
        ],
        settings: {
          foreground: colors.gray[9],
        },
      },
      {
        scope: [
          "string",
          "punctuation.definition.string",
          "string punctuation.section.embedded source",
        ],
        settings: {
          foreground: colors.blue[8],
        },
      },
      {
        scope: "support",
        settings: {
          foreground: colors.blue[6],
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: colors.blue[6],
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: colors.orange[6],
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: colors.gray[9],
        },
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: colors.red[7],
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: colors.red[7],
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: colors.red[7],
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: colors.red[7],
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: colors.red[5],
          foreground: colors.gray[0],
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: colors.red[7],
        },
      },
      {
        scope: "string source",
        settings: {
          foreground: colors.gray[9],
        },
      },
      {
        scope: "string variable",
        settings: {
          foreground: colors.blue[6],
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: colors.blue[8],
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
          foreground: colors.blue[8],
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: colors.green[6],
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: colors.blue[6],
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: colors.blue[6],
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: colors.blue[6],
        },
      },
      {
        scope: "markup.list",
        settings: {
          foreground: colors.yellow[9],
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: colors.blue[6],
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: colors.green[6],
        },
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: colors.gray[9],
        },
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: colors.gray[9],
        },
      },
      {
        scope: "markup.raw",
        settings: {
          foreground: colors.blue[6],
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: colors.red[0],
          foreground: colors.red[7],
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: colors.green[0],
          foreground: colors.green[6],
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: colors.orange[1],
          foreground: colors.orange[6],
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: colors.gray[1],
          background: colors.blue[6],
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: colors.purple[5],
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: colors.blue[6],
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: colors.blue[6],
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: colors.blue[6],
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
          foreground: colors.gray[6],
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: colors.red[7],
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: colors.blue[8],
          fontStyle: "underline",
        },
      },
    ],
  };
}

module.exports = getTheme;
