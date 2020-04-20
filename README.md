# GitHub VS Code theme

![GitHub VS Code theme](https://user-images.githubusercontent.com/378023/78366757-ef48fb00-75fb-11ea-8d00-a8e61dbb9115.png)

## Install

1. Go to [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme)
2. Click on the "Install" button

## Contribute

1. Clone and open this [repo](https://github.com/primer/github-vscode-theme) in VS Code
2. Press `F5` to open a new window with your extension loaded
3. Open `Code > Preferences > Color Theme` [`⌘k ⌘t`] and pick the "GitHub Light" theme
4. Make changes...
    - **UI**: For all changes to the "outer UI", like (status bar, file navigation etc.), edit [`/themes/light.json`](https://github.com/primer/github-vscode-theme/blob/master/themes/light.json). Take a look at the [Theme Color](https://code.visualstudio.com/api/references/theme-color) reference.
    - **Syntax**: For changes to the "code highlighting", edit [`/themes/syntax-light.json`](https://github.com/primer/github-vscode-theme/blob/master/themes/syntax-light.json). To examine the syntax scopes, invoke the [`Developer: Inspect Editor Tokens and Scopes`](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#scope-inspector) command from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) in the Extension Development Host window.
5. Commit your changes and open a PR.

Note:

- If possible use colors from [Primer's color system](https://primer.style/css/support/color-system).
- Changes to the theme files are automatically applied to the Extension Development Host window, so no reloading should be necessary.

## Override this theme

To quickly test something, you can also override this (or any other) theme in your personal config file. Please follow the guide in the [color theme](https://code.visualstudio.com/api/extension-guides/color-theme) documentation.
