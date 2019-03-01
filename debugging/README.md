# Debugging

> 翻译自 [官方文档](https://code.visualstudio.com/docs/editor/debugging)

vscode 的一个主要特点就是它对调试的支持。vscode 的内置调试器有助于加速你的编辑-编译-调试的循环。

*One of the key features of Visual Studio Code is its great debugging support. VS Code's built-in debugger helps accelerate your edit, compile and debug loop.*

![Debugging diagram](https://code.visualstudio.com/assets/docs/editor/debugging/debugging_hero.png)

## Debugger extensions

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

*There are many launch.json attributes to help support different debuggers and debugging scenarios. As mentioned above, you can use IntelliSense (⌃Space) to see the list of available attributes once you have specified a value for the type attribute.*

![launch json suggestions](https://code.visualstudio.com/assets/docs/editor/debugging/launch-json-suggestions.png)

下列属性是所有启动配置的必选项：

*The following attributes are mandatory for every launch configuration:*

- `type` - 该启动配置的调试器类型。所有已经安装的调试扩展都会采用一个 `type`：举例来说，内置的 Node 调试器使用 `node`，PHP 和 GO 的扩展分别使用 `php` 和 `go`。

- *type - the type of debugger to use for this launch configuration. Every installed debug extension introduces a type: node for the built-in Node debugger, for example, or php and go for the PHP and Go extensions.*

- `request` - 该启动配置的请求类型。目前支持 `launch` 和 `attach`。

- *request - the request type of this launch configuration. Currently, launch and attach are supported.*

- `name` - 在 Debug 启动配置下拉框中展示的方便阅读的名字。

- *name - the reader-friendly name to appear in the Debug launch configuration drop-down.*

下面是一些在所有启动配置中都可以使用的可选属性：

*Here are some optional attributes available to all launch configurations:*

- `preLaunchTask` - 如果要在调试会话开始前启动一个任务，将该属性设置为在 [tasks.json](https://code.visualstudio.com/docs/editor/tasks)(位于工作区的 `.vscode` 文件夹中) 中指明过的任务的 name。

- *preLaunchTask - to launch a task before the start of a debug session, set this attribute to the name of a task specified in tasks.json (in the workspace's .vscode folder).*

- `postDebugTask` - 如果要在每次调试会话结束后启动一个任务，将该属性设置为在 [tasks.json](https://code.visualstudio.com/docs/editor/tasks)(位于工作区的 `.vscode` 文件夹中) 中指明过的任务的 name。

- *postDebugTask - to launch a task at the very end of a debug session, set this attribute to the name of a task specified in tasks.json (in the workspace's .vscode folder).*

- `internalConsoleOptions` - 这个属性控制 Debug Console 面板在调试会话中是否可见。

- *internalConsoleOptions - this attribute controls the visibility of the Debug Console panel during a debugging session.*

- `debugServer` - **仅供 debug 扩展的作者使用**：这个属性允许你连接一个指定端口而不是启动调试适配器。

- *debugServer - for debug extension authors only: this attribute allows you to connect to a specified port instead of launching the debug adapter.*

- 许多调试器还支持一些以下属性：

- *Many debuggers support some of the following attributes:*

- `program` - 启动调试器时执行的可执行文件或文件。

- *program - executable or file to run when launching the debugger*

- `args` - 将作为参数列表传入到调试程序中。

*args - arguments passed to the program to debug*

- `env` - 环境变量（`null` 可以用来“取消定义”一个变量）

- *env - environment variables (the value null can be used to "undefine" a variable)*

- `cwd` - 寻找依赖和其他文件的工作区目录。

- *cwd - current working directory for finding dependencies and other files*

- `port` - 需要连接到的运行进程的端口。

- *port - port when attaching to a running process*

- `stopOnEntry` - 当程序启动后立即中断。

- *stopOnEntry - break immediately when the program launches*

- `console` - 使用哪一种控制台，例如 `internalConsole`, `integratedTerminal`, 或 `externalTerminal`。

- *console - what kind of console to use, for example, internalConsole, integratedTerminal, or externalTerminal*

## Variable substitution

## Platform-specific properties

## Global launch configuration

## Advanced breakpoint topics

## Debug Console REPL

## Multi-target debugging

## Remote debugging

## Next steps

## Common questions
