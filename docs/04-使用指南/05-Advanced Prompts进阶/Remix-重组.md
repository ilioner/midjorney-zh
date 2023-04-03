---
sidebar_position: 3
---


#### Remix，可以在make variations的时候，修改关键词，来对图片输出进行调整，之后生成的结果会大量保留原图特征，并且根据新的修改来进行调整。

`Remix` 是个实验功能，可能随时会被删除

想开启Remix模式，可以在对话框中输入/settings，打开setting界面,在设置界面进行开关

* * *

使用过程
-----------


### Step 1

`line-art stack of pumpkins`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Remix_1.png)

**打开 Remix 模式.**

选择图片进行 Remix.

### Step 2

`Remix`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Remix2.png)

**选择 "Make Variations."**

在弹出框中添加或修改提示词

### 结果

`pile of cartoon owls`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Remix3.png)


使用新的提示和原始图像来生成一幅图像

### 不同程度的调整示例：

|Starting Image|Model Change|Subject Change|
|-|-|-|
|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Remix_StackPumpkins.jpg)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Remix_testp.jpg)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Remix_Balloons.jpg)|
|line-art stack of pumpkins|line-art stack of pumpkins --test|balloon-animal shaped stack of pumpkins"|
|Medium Change|
|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Remix_Fruit.jpg)|
|vibrant illustrated stack of fruit|


* * *

### 结合参数使用 Remix

You can add or remove [Parameters](https://docs.midjourney.com/parameter-list) while using Remix mode, but you must use valid parameter combinations. Changing `/imagine prompt` `illustrated stack of pumpkins --version 3 --stylize 10000` to `illustrated stack of pumpkins --version 4 --stylize 10000` will return an error because Midjourney Model Version 4 is incompatible with the Stylize parameter.

Only parameters that normally influence variations will work while using Remix:


在使用Remix模式时，可以添加或删除参数，但必须使用有效的参数组合。比如：将 `/imagine prompt illustrated stack of pumpkins --version 3 --stylize 10000 `更改为 `illustrated stack of pumpkins --version 4 --stylize 10000 `会返回错误，因为Midjourney Model Version 4与Stylize参数不兼容。

使用Remix与参数结合可用对比：

|                 | 初始生成 | 点击 Variations 后添加 Remix |
| --------------- | -------------------------- | ---------------------------- |
| Aspect Ratio*   | ✓                          | ✓                            |
| Chaos           | ✓                          |                              |
| Image Weight    | ✓                          |                              |
| No              | ✓                          | ✓                            |
| Quality         | ✓                          |                              |
| Seed            | ✓                          |                              |
| Same Seed       | ✓                          |                              |
| Stop            | ✓                          | ✓                            |
| Stylize         | ✓                          |                              |
| Tile            | ✓                          | ✓                            |
| Video           | ✓                          | ✓                            |

*   使用Remix改变宽高比将会将图像拉伸。并不会扩展画布，添加丢失的细节或修复错误。

* * *

如何激活Remix
---------------------

### 设置命令

输入 `/settings` 选择 `Remix`.  
`🎛️ Remix`

### 使用Prefer Remix命令

输入`/prefer remix`来切换Remix模式的开启和关闭。
![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_preferRemix.png)
