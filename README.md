# GitHub VSCode theme

![GitHub VSCode theme](https://user-images.githubusercontent.com/378023/77890406-5ee08280-72aa-11ea-9ce0-3ee7d59bbe41.png)

## Install

1. [Download](https://github.com/primer/github-vscode-theme/archive/master.zip) the theme
2. Unzip and move it into the `<user home>/.vscode/extensions` folder
3. Restart VSCode
4. Open `Code > Preferences > Color Theme` [`⌘k ⌘t`] and pick the "GitHub Light" theme

## Contribute

1. Clone and open this repo in VSCode
2. Press `F5` to open a new window with your extension loaded
3. Open `Code > Preferences > Color Theme` [`⌘k ⌘t`] and pick the "GitHub Light" theme
4. Make changes to the...
	- **UI**: Edit `[/themes/light.json](https://github.com/primer/github-vscode-theme/blob/master/themes/light.json)`. Take a look at the [Theme Color](https://code.visualstudio.com/api/references/theme-color) reference.
  - **syntax**: Edit `[/themes/syntax-light.json](https://github.com/primer/github-vscode-theme/blob/master/themes/syntax-light.json)`. To examine the syntax scopes, invoke the `Inspect TM Scopes` command from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) in the Extension Development Host window.
5. Commit your changes and open a PR.

Note:

- If possible use colors that [Primer's color system](https://primer.style/css/support/color-system).
- Changes to the theme files are automatically applied to the Extension Development Host window.

## Override this theme

You can also override this (or any other) theme. Please follow the guide in the [color theme](https://code.visualstudio.com/api/extension-guides/color-theme) documentation.
