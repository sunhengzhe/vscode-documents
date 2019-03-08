# 重构 / Refactoring

[源代码重构](https://en.wikipedia.org/wiki/Code_refactoring) 可以通过调整你的代码来提高项目的质量和可维护性，同时不影响代码的运行时行为。Visual Studio Code 支持一些重构操作（重构）比如 [提取方法](https://refactoring.com/catalog/extractMethod.html) 和 [提取变量](https://refactoring.com/catalog/extractVariable.html)，在编辑器内提高你的代码库质量。

![refactoring hero image](https://code.visualstudio.com/assets/docs/editor/refactoring/refactoring-hero.png)

比如说，避免重复代码（一个维护的头疼问题）的一个常用重构手法是 [提取方法](https://refactoring.com/catalog/extractMethod.html) 重构，选择你想重用的代码然后将它们抽到一个共享方法中去。

重构功能是由一种语言服务（language service）提供的，VS Code 已经通过 [TypeScript](https://www.typescriptlang.org/) 语言服务内置支持了对 TypeScript 和 JavaScript 重构的支持。对其他编程语言的支持需要通过 VS Code 的 [扩展](https://code.visualstudio.com/docs/editor/extension-gallery) 提供，这些扩展贡献了对应的语言服务。不同语言的重构 UI 和命令都是相同的，在本次讨论中，我们将使用 TypeScript 的语言服务来展示对重构的支持。

## 代码动作 = 快速修复和重构 / Code Actions = Quick Fixes and refactorings

在 VS Code 中，代码动作可以提供重构和对检测到的问题（使用绿色波浪线高亮）进行快速修复。当鼠标处在波浪线上或选中了一段文本时，如果有可用的代码动作，会在源代码旁边展示一个灯泡。点击代码动作灯泡或使用 **快速修复** 命令 `⌘.` 将展示快速修复和重构的内容。

如果你仅仅需要看到重构内容而不包含快速修复，你可以使用 **重构** 命令（`⌃⇧R`）。

> 注：如果你希望在你编辑器内不显示代码动作灯泡，你可以通过 `editor.lightbulb.enable` [设置](https://code.visualstudio.com/docs/getstarted/settings) 禁用灯泡。但你依然可以通过 **快速修复** 命令和 `⌘.` 快捷键打开快速修复。

## 重构动作 / Refactoring actions

### 提取方法 / Extract Method

选中你想提取的代码然后点击灯泡或按下（`⌘.`）可以查看可供使用的重构动作。代码片段可以被提取到一个新方法或其他各种不同作用域内的函数中去。在提取的重构过程中会出现提示框，需要你输入一个有意义的名字。

### 提取变量 / Extract Variable

TypeScript 语言服务提供 **提取常量** 的重构，可以为当前选中的表达式创建一个新的局部变量：

![Extract local](https://code.visualstudio.com/assets/docs/editor/refactoring/ts-extract-local.gif?)

当在类里面重构时，你也可以将一个值提取为一个新的属性。

## 重命名符号 / Rename symbol

重命名是一个对源代码重构的常见操作，VS Code 有一个单独的 **重命名符号** 命令（`F2`）。有一些语言支持跨文件重命名符号。按下 `F2` 然后输入想要的新名字并按下 `回车键`。该符号用到的所有地方将被跨文件重命名。

![Rename](https://code.visualstudio.com/assets/docs/editor/refactoring/rename.png)

## 代码动作的键绑定 / Keybindings for Code Actions

`editor.action.codeAction` 命令让你可以为特定代码动作配置键绑定。例如下面的键绑定可以打开或关闭 **提取方法** 的重构代码动作：

```json
{
  "key": "ctrl+shift+r ctrl+e",
  "command": "editor.action.codeAction",
  "args": {
    "kind": "refactor.extract.function"
  }
}
```

代码动作类型（Code Action kinds）是扩展通过增强的 `CodeActionProvided` API 指定的。类型是有层次的，所以 `"kind": "refactor"` 将展示所有重构代码动作，而 `"kind": "refactor.extract.function"` 将只展示提取方法的重构。

使用上面的键绑定，如果只有一个 "refactor.extract.function" 代码动作是可用的，它将被自动应用。如果有多个 **提取方法** 代码动作是可用的，我们将弹出上下文菜单以选择它们：

![Select Code Action context menu](https://code.visualstudio.com/assets/docs/editor/refactoring/code-action-context-menu.png)

你也可以通过 `apply` 参数控制代码动作如何/何时自动应用：

```json
{
  "key": "ctrl+shift+r ctrl+e",
  "command": "editor.action.codeAction",
  "args": {
    "kind": "refactor.extract.function",
    "apply": "first"
  }
}
```

`"apply"` 参数的合法取值有：

- `"first"` - 总是自动应用第一个可用的代码动作。
- `"ifSingle"` - 默认。只有一个代码动作可用时自动应用。否则，展示上下文菜单。
- `"never"` - 总是展示代码动作上下文菜单，即使只有一个代码动作是可用的。

当一个代码动作键绑定使用 `"preferred": true` 配置，只有首选快速修复和重构项会被展示。首选的快速修复指能解决潜在错误的，首选的重构项是指重构项中最常用的。例如，`refactor.extract.constant` 可能会有多个重构项，分别提取到文件的不同作用域内，`refactor.extract.constant` 的首选重构项是提取为局部变量。

下面这个键绑定使用 `"preferred": true` 来创建一个重构项，它总是尝试把选中代码提取到局部作用域的常量中：

```json
{
  "key": "shift+ctrl+e",
  "command": "editor.action.codeAction",
  "args": {
    "kind": "refactor.extract.constant",
    "preferred": true,
    "apply": "ifsingle"
  }
}
```

## 支持重构项的扩展 / Extensions with refactorings

你可以到 VS Code 市场去寻找支持重构项的扩展。你也可以在扩展视图（`⇧⌘X`）的搜索框中输入 `'refactor'`。然后你就能通过下载量或评分来查看哪些扩展是受欢迎的。

- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [Language Support for java](https://marketplace.visualstudio.com/items?itemName=redhat.java)
- [PHP IntelliSense](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-intellisense)
- [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)

> **提示**：上面列出的扩展是动态查询的。点击上面的扩展地址查看描述信息，重新审视并决定那个扩展是你最需要的。

## 下一步 / Next steps

- Intro Video - Code Editing - Watch an introductory video on code editing features.
- Code Navigation - VS Code lets you move quickly through your source code.
- [调试](../debugging/README.md) - 学习使用 VS Code 进行调试

## 常见问题 / Common questions

### 为什么当我的代码有错误时我一个灯泡也看不到？

灯泡（代码动作）只在你的鼠标悬停到显示有错误的文本上时才显示。悬停到文本上将展示错误描述，但你需要移动鼠标或选中文本才能看到快速修复和重构的灯泡。
