# 调试 / Debugging

> 翻译自 [官方文档](https://code.visualstudio.com/docs/editor/debugging)

Visual Studio Code 的一个主要特点就是它对调试的强大支持。VS Code 的内置调试器有助于加速你的编辑-编译-调试的循环。

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

## 启动配置项 / Launch configurations

要在 VS Code 中调试一个简单的应用，按下 `F5`，VS Code 就会尝试调试你当前打开的文件。

不过，对于大多数调试场景来说，创建一个启动配置项文件会更有用，因为它允许你去配置和保存关于调试的设置细节。VS Code 将调试配置信息存放在你工作区（项目根目录）下的 `.vscode` 文件夹下的 `launch.json` 文件中，或者配置在你的 [用户设置](https://code.visualstudio.com/docs/editor/debugging#_global-launch-configuration) 或 [工作区设置](https://code.visualstudio.com/docs/editor/multi-root-workspaces#_workspace-launch-configurations) 中。

要想创建一个 `launch.json` 文件，在 VS Code 中打开你的项目文件夹（**File > Open Folder**），然后在调试视图的顶部栏中点击代表配置的齿轮图标。

![launch configuration](https://code.visualstudio.com/assets/docs/editor/debugging/launch-configuration.png)

VS Code 将尝试自动检测你的调试环境，但如果失败，你需要手动选择它：

![debug environment selector](https://code.visualstudio.com/assets/docs/editor/debugging/debug-environments.png)

下面是为调试 Node.js 生成的启动配置项：

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${file}"
        }
    ]
}
```

如果你返回文件管理器视图（`⇧⌘E`），你会看到 VS Code 已经在你的工作区创建了 `.vscode` 文件夹并往里面添加了 `launch.json` 文件。

![launch.json in Explorer](https://code.visualstudio.com/assets/docs/editor/debugging/launch-json-in-explorer.png)

> **注**：在 VS Code 中你甚至可以在没有打开任何文件夹的情况下调试一个简单的应用，但这也就不能管理启动配置项或是启动高级的调试功能。如果你没有打开任何文件夹，VS Code 的状态栏会显示为紫色。（译者注：这个场景指的是在 VS Code 中仅仅打开文件而没有打开文件夹，状态栏位于 VS Code 的底部）

注意，不同的调试器的可用启动配置项属性是不一样的。针对某一种调试器，你可以使用智能提示建议（`⌃Space`）来查看什么属性是被支持的。鼠标滑动到属性上也能看到帮助信息。

千万不要假设一个在某个调试器中能工作的属性在其他调试器上一定也能工作。如果你在你的启动配置项中看到绿色的波浪线，鼠标滑到它们上面查看问题所在，并在启动调试会话前修复它们。

![launch.json IntelliSense](https://code.visualstudio.com/assets/docs/editor/debugging/launch-json-intellisense.png)

检查所有自动生成的值并确保它们是适用于你的项目和调试环境的。

### Launch 与 Attach 配置 / Launch versus attach configurations

在 VS Code 里有两种内心的调试模式，**启动**（Launch）和 **挂载**（Attach），它们分别用来处理两种不同的工作流程以及被不同的开发者使用。根据你的工作流，了解哪种类型的配置是适用于你的项目可能会令人困惑。

如果你有浏览器开发者工具的背景，你可能不会习惯说 “从你的工具启动”，因为你的浏览器实例早就启动了。当你打开开发者工具，你仅仅只是将开发者工具 **挂载** 到你打开的浏览器标签页中。另一方面，如果你有服务端或者桌面应用程序背景，让你的编辑器为你 **启动** 你的进程就十分正常，并且你的编辑器将自动把它的调试器挂载到新启动的进程中去。

解释 **启动** 和 **挂载** 不同的最好办法是可以把 **启动** 配置项理解为一种在 VS Code 挂载你的应用 **之前** 以调试模式启动它的方法，而 **挂载** 配置项是一种让 VS Code 的调试器去连接一个 **已经** 运行的应用或进程的方法。

VS Code 的调试器一般支持在调试模式下启动一个程序，或在调试模式下去挂载一个已经运行的程序。根据请求（`启动` 或 `挂载`）的不同，必选项的属性也是不同的，VS Code 的 `launch.json` 文件的校验和建议会提供帮助。

### 添加一个配置项 / Add a new configuration

要想给一个已经存在的 `launch.json` 文件添加一个新的配置项，使用以下方法之一：

- 如果你的鼠标位于 configurations 数组内，使用智能提示。
- 点击 **Add Configuration** 按钮以在数组的开始调用片段智能提示。
- 在 Debug 菜单内选择 **Add Configuration**。

![launch json suggestions](https://code.visualstudio.com/assets/docs/editor/debugging/add-config.gif)

VS Code 还支持混合的启动配置项以在同一时间启动多个配置项；详情请阅读 [这一节](#混合启动配置项--compound-launch-configurations)。

为了启动一个调试会话，首先在调试视图中使用 **配置项下拉框** 选择名为 **Launch Program** 的配置。当你设置好你的启动配置项后，使用 `F5` 启动你的调试会话。

另外一种方法是你可以通过 **命令面板**（`⇧⌘P`）来启动你的配置项，通过筛选 **Debug: Select and Start Debugging** 或输入 `'debug '`，然后选择你想要调试的配置项。

As soon as a debugging session starts, the DEBUG CONSOLE panel is displayed and shows debugging output, and the Status Bar changes color (orange for default color themes):

调试会话启动的同时，**DEBUG CONSOLE** 就会出现并显示调试输出，而且状态栏会改变颜色（默认颜色主题中为橘色）：

![debug session](https://code.visualstudio.com/assets/docs/editor/debugging/debug-session.png)

此外，状态栏中展示的 **调试状态** 用来显示有效的调试配置项。通过点击调试状态，用户可以改变有效配置项并且无需打开调试视图来开始调试。

![Debug status](https://code.visualstudio.com/assets/docs/editor/debugging/debug-status.png)

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

除了调试程序，VS Code 还支持 **运行** 程序。使用 `⌃F5` 触发 `Debug: Start Without Debugging` 动作，并使用当前选择的启动配置项。`运行` 模式支持许多启动配置项的属性。程序运行时，VS Code 会维护一个调试会话，点击 `停止` 按钮将终止程序。

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

在调试视图的 **VARIABLES** 区域中或鼠标移动到编辑器内变量的位置可以查看变量的值。变量的值和表达式的求值是相对于 **CALL STACK** 区域内选择的堆栈的。

![Debug Variables](https://code.visualstudio.com/assets/docs/editor/debugging/variables.png)

在变量上点击右键，可以通过 **Set Value** 动作修改变量的值。

在调试视图中的 **WATCH** 区域中，也能对变量和表达式进行求值和监听。

![Debug Watch](https://code.visualstudio.com/assets/docs/editor/debugging/watch.png)

## Launch.json 属性 / Launch.json attributes

在 `launch.json` 文件中有很多属性用来支持不同的调试程序和调试场景。当指定了 `type` 属性对应的值后，如上所述，你可以使用智能提示（`^Space`）来查看可以使用的属性列表。

![launch json suggestions](https://code.visualstudio.com/assets/docs/editor/debugging/launch-json-suggestions.png)

下列属性是所有启动配置项的必选项：

- `type` - 该启动配置项的调试器类型。所有已经安装的调试扩展都会采用一个 `type`：举例来说，内置的 Node 调试器使用 `node`，PHP 和 GO 的扩展分别使用 `php` 和 `go`。

- `request` - 该启动配置项的请求类型。目前支持 `launch` 和 `attach`。

- `name` - 在 Debug 启动配置项下拉框中展示的方便阅读的名字。

下面是一些在所有启动配置项中都可以使用的可选属性：

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

- `stopOnEntry` - 当程序启动后立即中止。（译者注：即如同在文件的第一行打断点）

- `console` - 使用哪一种控制台，例如 `internalConsole`, `integratedTerminal`, 或 `externalTerminal`。

## 变量替换 / Variable substitution

VS Code makes commonly used paths and other values available as variables and supports variable substitution inside strings in launch.json. This means that you do not have to use absolute paths in debug configurations. For example, ${workspaceFolder} gives the root path of a workspace folder, ${file} the file open in the active editor, and ${env:Name} the environment variable 'Name'. You can see a full list of predefined variables in the Variables Reference or by invoking IntelliSense inside the launch.json string attributes.

VS Code 提供一些常用路径和其他值可以作为变量使用，并支持在 `launch.json` 文件中的字符串中使用变量替换。这意味着在调试配置中你不需要使用绝对路径。例如，`${workspaceFolder}` 返回工作区目录的根路径，`${file}` 返回当前编辑器打开的文件， `${env:Name}` 代表环境变量中的 `Name` 值。通过在 `launch.json` 中的字符串属性上使用智能提示，你可以查看 [变量参考](https://code.visualstudio.com/docs/editor/variables-reference) 中列出的所有预定义的变量。

```json
{
    "type": "node",
    "request": "launch",
    "name": "Launch Program",
    "program": "${workspaceFolder}/app.js",
    "cwd": "${workspaceFolder}",
    "args": [ "${env:USERNAME}" ]
}
```

（译者注：以上会将环境变量中的 USERNAME 值作为命令的第一个参数传递。）

## 平台特定属性 / Platform-specific properties

`Launch.json` 支持根据调试的操作系统不同定义不同的值（比如给程序传递的参数）。要完成这个，在 `launch.json` 文件中放入一个平台特定字面量并在字面量内指定相应的属性。

下面是针对 Windows 传递不同的 `"args"` 到程序中的例子：

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/node_modules/gulp/bin/gulpfile.js",
            "args": ["myFolder/path/app.js"],
            "windows": {
                "args": ["myFolder\\path\\app.js"]
            }
        }
    ]
}
```

Windows 系统的合法属性为 `"windows"`，Linux 系统为 `"linux"`，macOS 系统为 `"osx"`。在操作系统特定作用域内声明的属性将覆盖全局作用域定义的属性。

下面的例子在除了 macOS 系统上调试时 *在入口处中止*。

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/node_modules/gulp/bin/gulpfile.js",
            "stopOnEntry": true,
            "osx": {
                "stopOnEntry": false
            }
        }
    ]
}
```

## 全局启动配置项 / Global launch configuration

VS Code supports adding a "launch" object inside your User settings. This "launch" configuration will then be shared across your workspaces. For example:

VS Code 支持在你的 [用户设置](https://code.visualstudio.com/docs/getstarted/settings) 中加入一个 `"launch"` 对象。这个 `"launch"` 配置将在你的所有工作区中共享。如：

```json
"launch": {
    "version": "0.2.0",
    "configurations": [{
        "type": "node",
        "request": "launch",
        "name": "Launch Program",
        "program": "${file}"
    }]
}
```

> **提示**: 如果某一个工作区包含 `"launch.json"` 文件，全局启动配置项会被忽略。

## Advanced breakpoint topics

## Debug Console REPL

## Multi-target debugging

### 混合启动配置项 / Compound launch configurations

## Remote debugging

## Next steps

## Common questions
