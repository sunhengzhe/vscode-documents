# 重构 / Refactoring

[源代码重构](https://en.wikipedia.org/wiki/Code_refactoring) 可以通过调整你的代码来提高项目的质量和可维护性，同时不影响代码的运行时行为。Visual Studio Code 支持一些重构操作（重构）比如 [提取方法](https://refactoring.com/catalog/extractMethod.html) 和 [提取变量](https://refactoring.com/catalog/extractVariable.html)，在编辑器内提高你的代码库质量。

![refactoring hero image](https://code.visualstudio.com/assets/docs/editor/refactoring/refactoring-hero.png)

比如说，避免重复代码（一个维护的头疼问题）的一个常用重构手法是 [提取方法][https://refactoring.com/catalog/extractMethod.html] 重构，选择你想重用的代码然后将它们抽到一个共享方法中去。

重构功能是由一种语言服务（language service）提供的，VS Code 已经通过 [TypeScript](https://www.typescriptlang.org/) 语言服务内置支持了对 TypeScript 和 JavaScript 重构的支持。对其他编程语言的支持需要通过 VS Code 的 [扩展](https://code.visualstudio.com/docs/editor/extension-gallery) 提供，这些扩展贡献了对应的语言服务。不同语言的重构 UI 和命令都是相同的，在本次讨论中，我们将使用 TypeScript 的语言服务来展示对重构的支持。
