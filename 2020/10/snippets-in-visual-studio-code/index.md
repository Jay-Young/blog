# VS Code 文档：代码片段


代码片段是可以方便用户重复使用的代码模板，例如一些通用的循环或条件语句。在 `Visual Studio Code` 中，代码片段可以在 `IntelliSense`（智能提示）中出现，也可以在命令面板（`Ctrl + Shift + P`）中通过 `Insert Snippet`（插入片段）调用。打开“启用 Tab 补全”设置选项，在输入 `trigger text` 的时候按下 `Tab` 即可自动插入。[^1]

<!--more-->

代码片段语法遵循 [TextMate snippet syntax](https://manual.macromates.com/en/snippets)，但不支持 `interpolated shell code` 和 `\u` 用法。

{{< image src="/images/hugo/Snippets-in-Visual-Studio-Code/ajax-snippet.gif" alt="ajax-snippet" caption="ajax-snippet" title="ajax-snippet" width=100% >}}

## 内置代码片段

VS Code 已经为一些常用语言，例如 `JavaScript`, `TypeScript`, `Markdown` 和 `PHP`, 内置了大量常用代码片段。

{{< image src="/images/hugo/Snippets-in-Visual-Studio-Code/builtin-javascript-snippets.webp" alt="builtin-javascript-snippets" caption="builtin-javascript-snippets" title="builtin-javascript-snippets" width=100% >}}

在命令面板中输入 `Insert Snippet` 可以查看支持当前文件的所有代码片段，包括用户自定义片段和已安装扩展内置的片段。

## 扩展内置片段

许多 VS Code 扩展内置一些代码片段，下面是一些支持内置代码片段的热门扩展。

{{< friend name="Python" url="https://marketplace.visualstudio.com/items?itemName=ms-python.python" logo="https://ms-python.gallerycdn.vsassets.io/extensions/ms-python/python/2020.10.332292344/1603910638466/Microsoft.VisualStudio.Services.Icons.Default" word="Linting, Debugging (multi-threaded, remote), Intellisense, Jupyter Notebooks, code formatting, refactoring, unit tests, snippets, and more." >}}

{{< friend name="C/C++" url="https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools" logo="https://ms-vscode.gallerycdn.vsassets.io/extensions/ms-vscode/cpptools/1.0.1/1600733911958/Microsoft.VisualStudio.Services.Icons.Default" word="C/C++ IntelliSense, debugging, and code browsing." >}}

{{< friend name="C#" url="https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp" logo="https://ms-dotnettools.gallerycdn.vsassets.io/extensions/ms-dotnettools/csharp/1.23.4/1603122188432/Microsoft.VisualStudio.Services.Icons.Default" word="C# for Visual Studio Code (powered by OmniSharp)." >}}

{{< friend name="Language Support for Java(TM) by Red Hat" url="https://marketplace.visualstudio.com/items?itemName=redhat.java" logo="https://redhat.gallerycdn.vsassets.io/extensions/redhat/java/0.69.0/1602769200556/Microsoft.VisualStudio.Services.Icons.Default" word="Java Linting, Intellisense, formatting, refactoring, Maven/Gradle support and more..." >}}

{{< admonition tip "提示" false >}}
点击上面扩展可以阅读更多详细描述内容。
{{< /admonition >}}

## 创建用户自定义片段

用户可以轻松自定义片段，通过选择文件 → 首选项 → 用户片段，然后选择为此片段关联的语言或者设置为全局片段。

{{< image src="/images/hugo/Snippets-in-Visual-Studio-Code/snippet-dropdown.webp" alt="snippet-dropdown" caption="snippet-dropdown" title="snippet-dropdown" width=100% >}}

代码片段文件以 JSON 文件定义，支持 C-style 注释，不限制代码片段数量上限。

下面是一段 JavaScript 的 `for` 循环片段示例：

```json
// in file 'Code/User/snippets/javascript.json'
{
 "For Loop": {
  "prefix": ["for", "for-const"],
  "body": ["for (const ${2:element} of ${1:array}) {", "\t$0", "}"],
  "description": "A for loop."
 }
}
```

- `For Loop` 定义片段的名字，用户如果没有定义 `description`，那么名字将会代替 0 在智能提示中显示。
- `prefix` 定义显示在智能提示中的一个或多个触发关键词。`prefix` 支持模糊匹配，例如，`fx` 可以匹配 `for-const`。
- `body` 定义插入片段的具体内容。
- `description` 定义智能提示中的描述（可选）。

此外，`body` 标签中有 3 个占位字符：`${1:array}`, `${2:element}`, 和 `$0`。通过 `Tab` 切换到需要编辑的占位符位置。`${2:element}` 中的 `element` 是占位符的默认内容。占位符遍历从 `1` 开始升序。`0` 是可选的保留占位字符序号，它的顺序永远是最后，当 `Tab` 切换完毕的时候，表示光标所处的位置。

{{< image src="/images/hugo/Snippets-in-Visual-Studio-Code/cursor-position.gif" alt="cursor-position" caption="cursor-position" title="cursor-position" width=100% >}}

未完待续 🔜

[^1]: [Snippets in Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

