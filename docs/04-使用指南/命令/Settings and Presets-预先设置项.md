---
sidebar_position: 3
---

---


`Settings` 命令提供了常见选项的切换按钮，如模型版本、样式值、质量值和放大器版本。`Settings` 还有用于 `"/stealth"` 和 `"/public"` 命令的切换按钮。

---
![Image showing the interface of the Midjourney settings command](http://rsfd8mmff.sabkt.gdipper.com/midjourney/MJ_settings.jpg)

`1️⃣ MJ Version 1` `2️⃣ MJ Version 2` `3️⃣ MJ Version 3` `4️⃣ MJ Version 4` `5️⃣ MJ Version 5`

`🌈 Niji Mode` `🤖MJ Test` `📷 MJ Test Photo`

Sets the [Model Versions](https://docs.midjourney.com/models) used for jobs.  
  

`🔥 Half Quality` `🔥 Base Quality` `🔥 High Quality (2x cost)`

Sets the [Quality Parameter](https://docs.midjourney.com/quality) used for jobs.  
Half Quality = `--q .5`, Base Quality = `--q 1`, High Quality = `--q 2`.  
  

`🖌️ Style Low` `🖌️ Style Med` `🖌️ Style High` `🖌️ Style Very High`

Sets the [Stylize Parameter](https://docs.midjourney.com/stylize) used for jobs.  
Style Low = `--s 50`, Style Med = `--s 100`, Style High = `--s 250`, Style Very High = `--s 750`,  
  

`⏫ Regular Upscale` `⬆️ Light Upscale` `🔥 Beta Upscale`

Sets the [Upscacler](https://docs.midjourney.com/upscalers) used for jobs.  
  

`🧍‍♂️Public` `🕵️ Stealth`

`/public` 和 `/stealth` 命令可以切换 [公共模式 (Public Mode) 和隐形模式 (Stealth Mode)](https://docs.midjourney.com/stealth)。
  

`🎛️ Remix`

切换到 [Remix mode](https://docs.midjourney.com/docs/remix)  

  

`🐇 Fast` `🐢 Relax`

使用 `/fast` and `/relax` 命令切换[Fast and Relaxed modes](https://docs.midjourney.com/fast-relax).
  

Settings Note-备注

如果在提示的末尾添加参数将覆盖使用`/settings`所做的设置。

---

## Custom Preferences-自定义设置

使用`prefer`命令会创建自定义选项，会自动将常用的参数添加到提示的末尾。
`/prefer auto_dm` 完成的任务会自动转发到你的私信
`/prefer option` 创建或管理自定义选项.  
`/prefer option list` 展示你所有的自定义选项.  
`/prefer suffix` 可以每个提示的末尾添加一个指定后缀.

---

### Prefer Option-首选项


`/prefer option set <name> <value>`，创建自定义参数，使你能够快速地将多个参数添加到提示末尾。

![PreferOptionSet.png](http://rsfd8mmff.sabkt.gdipper.com/midjourney/PreferOptionSet.png)

例如：
`/prefer option set` `mine` `--hd --ar 7:4` 会创建一个名为"mine"的选项，对应的参数是 `--hd --ar 7:4`。
  

![PreferOptionSet_Used.jpg](http://rsfd8mmff.sabkt.gdipper.com/midjourney/PreferOptionSet_Used.jpg)


使用 `/imagine prompt vibrant California poppies --mine`，等同于 `/imagine prompt vibrant California poppies --hd --ar 7:4`。


如果你想删除对应的设定参数就将value字段置空
  

`/prefer option list`命令会列出所有使用`prefer option set`命令创建的选项。用户最多可以创建20个自定义选项。

![PreferOptionList.png](http://rsfd8mmff.sabkt.gdipper.com/midjourney/PreferOptionList.png)


要删除自定义选项，请使用 `/prefer option set` `<要删除的名称>` 并将值字段留空。

---

### Prefer Suffix-后缀

`/prefer suffix` 命令可以自动将指定后缀添加到所有提示之后。**在不传递值的情况下使用该命令将重置后缀。**

命令示例：`/prefer suffix` `--uplight --video`

只有可以与 [参数列表](https://docs.midjourney.com/parameter-list) 中的参数一起使用的选项可以用于 `/prefer suffix`，  
例如，`prefer suffix --no orange` 可以被接受，  
而 `prefer suffix orange::-1` 不能被接受。