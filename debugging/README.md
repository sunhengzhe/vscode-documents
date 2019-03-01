# 调试 / Debugging

> 翻译自 [官方文档](https://code.visualstudio.com/docs/editor/debugging)

Visual Studio Code 的一个主要特点就是它对调试的支持。VS Code 的内置调试器有助于加速你的编辑-编译-调试的循环。

![Debugging diagram](https://code.visualstudio.com/assets/docs/editor/debugging/debugging_hero.png)

## 调试器扩展 / Debugger extensions

VS Code 已经内置了对 [Node.js](https://nodejs.org/) 运行时调试的支持，并且可以调试 JavaScript，TypeScript 和其他任何能转换为 JavaScript 的语言。

如果要调试其他的语言和运行时（包括 [PHP](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug), [Ruby](https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby), [Go](https://marketplace.visualstudio.com/items?itemName=ms-vscode.Go), [C#](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp), [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python), [C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools), [Powershell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell) 和 [其他](https://marketplace.visualstudio.com/search?term=debug&target=VSCode&category=Debuggers&sortBy=Relevance)），可以在我们的 VS Code [商店]() 搜索 `Debuggers` [扩展](https://code.visualstudio.com/docs/editor/extension-gallery)，或点击顶级菜单 Debug 中的 **Install Additional Debuggers**。

下面是几个包含对调试支持的流行扩展：

- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
- [C#](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp)
- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

> **提示**：上面列出的扩展是动态查询的。点击上面的扩展地址查看描述信息，重新审视并决定那个扩展是你最需要的。

## 开始调试 / Start debugging

接下来的文档基于内置的 [Node.js](https://nodejs.org/) 调试器，但大部分概念和特性也同样适用于其他调试器。

阅读关于调试的内容之前，先创建一个 Node.js 的例子是有帮助的。你可以跟随 [Node.js 攻略](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial) 去安装 Node.js 并创建一个 "Hello World" 的 JavaScript 应用（`app.js`）。当你有了一个全部建立好的简单应用后，这个页面会带你了解 VS Code 的调试特性。

## 调试视图 / Debug view

要打开调试视图，我们需要点击 VS Code 侧边 **活动栏** 中的 Debug 图标。你也可以使用键盘快捷键 `⇧⌘D`。

![Debug icon](https://code.visualstudio.com/assets/docs/editor/debugging/debugicon.png)

调试视图展示了所有与调试有关的信息，并且有一个包含调试命令和配置设置的顶部栏。

## 调试菜单 / Debug menu

Debug 顶级菜单里包含最常见的调试命令：

![Debug menu](https://code.visualstudio.com/assets/docs/editor/debugging/debug-menu.png)

## Launch configurations

## 调试动作 / Debug actions

当一个调试会话启动后，**调试工具栏** 会出现在编辑器的顶部。

![Debug Actions](https://code.visualstudio.com/assets/docs/editor/debugging/toolbar.png)

- 继续 / 暂停 `F5`
- 单步执行 Step Over `F10`
- 单步进入 Step Into `F11`
- 跳出 Step Out `⇧F11`
- 重新开始 Restart `⇧⌘F5`
- 停止 Stop `⇧F5`

> **提示**：使用 `debug.toolBarLocation` 设置可以控制调试工具栏的位置。它可以被设置为默认的 `floating`，固定在调试视图中（`docked`）或隐藏（`hidden`）。一个设置为 `floating` 的调试工具栏可以被水平拖拽或向下移到编辑区域。

### 运行模式 / Run mode

除了调试程序，VS Code 还支持 **运行** 程序。使用 `⌃F5` 触发 `Debug: Start Without Debugging` 动作，并使用当前选择的启动配置。`运行` 模式支持许多启动配置的属性。程序运行时，VS Code 会维护一个调试会话，点击 `停止` 按钮将终止程序。

> **提示**：**运行** 动作是始终可用的，但并非所有调试器扩展支持 '运行'。在本例子中，'运行' 和 '调试' 是等价的。

## 断点 / Breakpoints

点击 **编辑器的边缘** 可以打开或关闭断点。在调试视图的 **BREAKPOINTS** 区域中可以完成较小粒度的断点控制（启动/禁用/再次应用）。

- 在编辑器的边缘，断点正常情况下显示为红色实心的圆。
- 禁用的断点为灰色实心的圆。
- 当调试会话启动时，不能被注册的断点会改变为灰色空心的圆。当调试会话运行时源代码被修改，但实时编辑（live-edit）功能没有开启时也会可能会出现同样的状况。

**再次应用所有断点** 命令（The Reapply All）将所有断点设置为它们的初始位置。如果你的调试环境为 "lazy" 并且 "误置" 断点在还没有被执行的源代码上时将会很有帮助。

![Breakpoints](https://code.visualstudio.com/assets/docs/editor/debugging/breakpoints.png)

## 日志断点 / Logpoints

日志断点是断点的一个变种，但日志断点不会 “中断” 调试器，而是在控制台中打出一条信息。在不能暂停或停止的生产环境中调试时，可以注入日志的日志断点非常有用。

日志断点使用一个“菱形”图标表示。日志信息纯文本，但可以包含被花括号包裹的求值表达式（`{}`）。

![Logpoints](https://code.visualstudio.com/assets/docs/editor/debugging/log-points.gif)

和普通的断点一样，日志断点可以被启用或禁用，也能使用条件语句或执行次数控制。

> **注**：日志断点目前只被 VS Code 的内置 Node.js 调试器支持，但也能其他调试扩展支持。比如 [Python 的扩展](https://code.visualstudio.com/docs/python/python-tutorial) 已经支持日志断点。

## 检查数据 / Data inspection

Variables can be inspected in the VARIABLES section of the Debug view or by hovering over their source in the editor. Variable values and expression evaluation are relative to the selected stack frame in the CALL STACK section.

在调试视图的 **VARIABLES** 区域中或鼠标移动到编辑器内变量的位置可以查看变量的值。变量的值和表达式的求值是相对于 **CALL STACK** 区域内选择的堆栈的。

![Debug Variables](https://code.visualstudio.com/assets/docs/editor/debugging/variables.png)

在变量上点击右键，可以通过 **Set Value** 动作修改变量的值。

在调试视图中的 **WATCH** 区域中，也能对变量和表达式进行求值和监听。

![Debug Watch](https://code.visualstudio.com/assets/docs/editor/debugging/watch.png)

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

许多调试器还支持以下属性：

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
