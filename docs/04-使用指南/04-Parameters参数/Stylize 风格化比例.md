---
sidebar_position: 7
---

#### `--stylize`或`--s`参数会影响风格化的强度。低的风格化值会产生与提示非常相近但不太艺术的图像。高风格化值则会创建非常艺术但与提示联系较少的图像。

`--stylize`的默认值为100，在使用默认的[V4模型]时接受0-1000的整数值。

 [Midjourney Version Models](https://docs.midjourney.com/models) 对比

|                 | Version 5 | Version 4 | Version 3  | Test / Testp | niji |
|-----------------|-----------|-----------|------------|--------------|------|
| Stylize default | 100       | 100       | 2500       | 2500         | NA   |
| Stylize Range   | 0–1000    | 0–1000    | 625–60000  | 1250–5000    | NA   |

* * *

 Stylize 设置
-----------------------

### Midjourney Model V4

例子: `/imagine prompt` `illustrated figs --s 100`

无花果 插画

|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Stylize_0.jpg)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Stylize_100.jpg)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Stylize_250.jpg)|
|-|-|-|
|`--stylize 50`|`--stylize 100默认`|`--stylize 250`|
|`🖌️ Style Low`|`🖌️ Style Med`|`🖌️ Style High`|
|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Stylize_750.jpg)|
|`--stylize 750`|
|`🖌️ Style Very High`|


* * *

### Midjourney Model V5

例子: `/imagine prompt` `colorful risograph of a fig --s 100`

|`--stylize 0`|`--stylize 50`|`--stylize 100`|
|-|-|-|
|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_Stylize_0.jpg)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_Stylize_50.jpg)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_Stylize_100.jpg)|
|`--stylize 250`|`--stylize 750`|`--stylize 1000`|
|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_Stylize_250.jpg)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_Stylize_750.jpg)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_Stylize_1000.jpg)|
* * *



### 怎么用

 `--stylize <value>` 或者 `--s <value>` 添加在提示尾部

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Parameter_Style.gif)

