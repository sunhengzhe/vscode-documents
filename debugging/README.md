# Debugging

> 翻译自 [官方文档](https://code.visualstudio.com/docs/editor/debugging)

Visual Studio Code 的一个主要特点就是它对调试的支持。VS Code 的内置调试器有助于加速你的编辑-编译-调试的循环。

![Debugging diagram](https://code.visualstudio.com/assets/docs/editor/debugging/debugging_hero.png)

## Debugger extensions

VS Code 已经内置了对 [Node.js](https://nodejs.org/) 运行时调试的支持，并且可以调试 JavaScript，TypeScript 和其他任何能转换为 JavaScript 的语言。

如果要调试其他的语言和运行时（包括 [PHP](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug), [Ruby](https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby), [Go](https://marketplace.visualstudio.com/items?itemName=ms-vscode.Go), [C#](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp), [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python), [C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools), [Powershell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell) 和 [其他](https://marketplace.visualstudio.com/search?term=debug&target=VSCode&category=Debuggers&sortBy=Relevance)），可以在我们的 VS Code [商店]() 搜索 `Debuggers` [扩展](https://code.visualstudio.com/docs/editor/extension-gallery)，或点击顶层菜单 Debug 中的 **Install Additional Debuggers**。

下面是几个包含对调试支持的流行扩展：

- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
- [C#](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp)
- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

> 提示：上面列出的扩展是动态查询的。点击上面的扩展地址查看描述信息，重新检查并决定那个扩展是你最需要的。

## Start debugging

## Debug view

## Debug menu

## Launch configurations

## Debug actions

## Breakpoints

## Logpoints

## Data inspection

## Launch.json 属性

在 `launch.json` 文件中有很多属性用来支持不同的调试程序和调试场景。当指定了 `type` 属性对应的值后，如上所述，你可以使用智能提示（`^Space`）来查看可以使用的属性列表。

![launch json suggestions](https://code.visualstudio.com/assets/docs/editor/debugging/launch-json-suggestions.png)

下列属性是所有启动配置的必选项：

- `type` - 该启动配置的调试器类型。所有已经安装的调试扩展都会采用一个 `type`：举例来说，内置的 Node 调试器使用 `node`，PHP 和 GO 的扩展分别使用 `php` 和 `go`。

- `request` - 该启动配置的请求类型。目前支持 `launch` 和 `attach`。

- `name` - 在 Debug 启动配置下拉框中展示的方便阅读的名字。

下面是一些在所有启动配置中都可以使用的可选属性：

- `preLaunchTask` - 如果要在调试会话开始前启动一个任务，将该属性设置为在 [tasks.json](https://code.visualstudio.com/docs/editor/tasks)(位于工作区的 `.vscode` 文件夹中) 中指明过的任务的 name。

- `postDebugTask` - 如果要在调试会话的最后启动一个任务，将该属性设置为在 [tasks.json](https://code.visualstudio.com/docs/editor/tasks)(位于工作区的 `.vscode` 文件夹中) 中指明过的任务的 name。

- `internalConsoleOptions` - 这个属性控制 Debug Console 面板在调试会话中是否可见。

- `debugServer` - **仅供 debug 扩展的作者使用**：这个属性允许你连接一个指定端口而不是启动调试适配器。

- 许多调试器还支持一些以下属性：

- `program` - 启动调试器时执行的可执行文件或文件。

- `args` - 将作为参数列表传入到调试程序中。

- `env` - 环境变量（`null` 可以用来“取消定义”一个变量）

- `cwd` - 寻找依赖和其他文件的工作区目录。

- `port` - 需要连接到的运行进程的端口。

- `stopOnEntry` - 当程序启动后立即中断。

- `console` - 使用哪一种控制台，例如 `internalConsole`, `integratedTerminal`, 或 `externalTerminal`。

## Variable substitution

## Platform-specific properties

## Global launch configuration

## Advanced breakpoint topics

## Debug Console REPL

## Multi-target debugging

## Remote debugging

## Next steps

## Common questions
