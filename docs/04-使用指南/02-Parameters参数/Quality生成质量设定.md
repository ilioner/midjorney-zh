---
sidebar_position: 4
---

#### `--quality`或`-q`参数可以改变生成图像所花费的时间。更高质量的设置需要更长的处理时间并产生更多的细节。更高的值也意味着每个作业会消耗更多的GPU计算时间。质量改变不影响分辨率。（言下之意，值越高越烧钱）


`--quality`默认值为1。更高的值会消耗更多GPU计算时间。  
`--quality`默认模型的参数接受以下值：.25、.5和1。   
`--quality`只影响初始图像生成。  
`--quality`适用[模型版本](https://docs.midjourney.com/models)1、2、3、4、5和niji。

* * *

Quality 设置
----------------


`--quality`不一定值越高越好，有时候低`--quality`的值反而会效果更好，高`--quality`有时会改变一些内容和细节。

例子: `/imagine prompt` `woodcut birch forest --q .25`
木刻 白桦林

### Version 4

|`--quality .25`|`--quality .5`|`--quality 1`|
|-|-|-|
|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Quality_025.jpg)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Quality_05.jpg)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Quality_1.jpg)|
|-|`🔥 Half Quality`|`🔥 Base Quality`|
|快，细节较少|细节较少|默认设定|
|_4倍的速度提升和 ¼ 的GPU 时间消耗._|_2倍速 and ½  GPU 时间消耗._|_很好的权衡了速度与细节_|



### Version 5

|`--quality .25`|`--quality .5`|`--quality 1`|
|-|-|-|
|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_Quality_025.jpg)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_Quality_05.jpg)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_Quality_1.jpg)|
|-|`🔥 Half Quality`|`🔥 Base Quality`|
|快，细节较少|细节较少|默认设定|
|_4倍的速度提升和 ¼ 的GPU 时间消耗._|_2倍速 and ½  GPU 时间消耗._|_很好的权衡了速度与细节_|


### 版本差异

| Model Version | Quality .25 | Quality .5 | Quality 1 | Quality 2 |
| --- | --- | --- | --- | --- |
| Version 5 | ✓ | ✓ | ✓ | - |
| **Version 4** | ✓ | ✓ | ✓ | - |
| Version 3 | ✓ | ✓ | ✓ | ✓ |
| Version 2 | ✓ | ✓ | ✓ | ✓ |
| Version 1 | ✓ | ✓ | ✓ | ✓ |
| niji | ✓ | ✓ | ✓ | - |

* * *

如何使用
--------------------------------

###  `--quality` 或 `--q` 

添加 `--quality <value>` 或者 `--q <value>`到提示词结尾。

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Parameter_Quality.gif)

  

### 

你也可以在 `/settings` 中设置你的默认 `quality` 值.

`🔥 Half Quality` `🔥 Base Quality` `🔥 High Quality (2x cost)`

值越高，你的账户烧钱越快。