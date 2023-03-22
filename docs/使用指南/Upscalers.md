---
sidebar_position: 2
---

#### Midjourney开始时会为每个作业生成一个低分辨率选项的图像网格。您可以在任何网格图像上使用Midjourney的升频功能来增加图像的尺寸并添加更多细节。这里提供了多种模型升级选项供您选择。

 每个图像网格下方`U1` `U2` `U3` `U4` 的按钮用于对所选图像进行升级。

### Midjourney Dimensions and Sizes

_所有的尺寸都是基于正方形 1:1 的宽高比。._

| 模型版本  | Starting Grid Size | V4 Default Upscaler | Detail Upscale | Light Upscale | Beta Upscale | Anime Upscale | Max Upscale** |
|----------------|--------------------|---------------------|----------------|---------------|--------------|---------------|---------------|
| 默认<br/>Version 4 | 512 x 512 | 1024 x 1024 * | 1024 x 1024 | 1024 x 1024 | 2048 x 2048 | 1024 x 1024 | - |
| hd | 512 x 512 | - | 1536 x 1536* | 1536 x 1536 | 2048 x 2048 | - | 1024 x 1024 |
| v1–v3 | 256 x 256 | - | 1024 x 1024* | 1024 x 1024 | 1024 x 1024 | 1024 x 1024 | 1664 x 1664 |
| niji | 512 x 512 | 1024 x 1024 | 1024 x 1024 | 1024 x 1024 | 2048 x 2048 | 1024 x 1024 | - |
| test / testp | 512 x 512 | - | - | - | 2048 x 2048 | 1024 x 1024* | - |

`*` = 每个 Midjourney 版本模型的默认Upscalers.  
`**` Max Upscale is an older resource-intensive upscaler and is only available when users are in Fast Mode.

* * *

Regular (Default) Upscaler-常规升频器
--------------------------

最新的默认升频器可以在处理平滑或精细化细节的同时增加图像大小。一些小的元素可能会在生成网格图像和完成的升频操作之间发生变化。


##### prompt: `adorable rubber duck medieval knight`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_Regular.png)

##### prompt: `sand cathedral`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_Regular2.png)

* * *

Light Upscaler
--------------

The Light Upscaler creates a 1024px x 1024px image and adds a moderate amount of details and textures. The Light Uspscaler is useful for faces and smooth surfaces when using older [Midjourney Model Versions](https://docs.midjourney.com/model-versions).

Use the `--uplight` parameter to change the behavior of the `U1` `U2` `U3` `U4` upscale buttons to use the Light Upscaler.

Light Upscaler 可以创建一个 1024px x 1024px 的图像，并添加适量的细节和纹理。使用旧版 [Midjourney Model Versions](https://docs.midjourney.com/model-versions) 处理面部和光滑表面时，可以使用 Light Uspscaler。

使用 Light Upscaler时可以需要 `--uplight` 参数来改变 `U1`、`U2`、`U3`、`U4` 放大按钮的行为

##### prompt: `adorable rubber duck medieval knight`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_light.png)

##### prompt: `sand cathedral`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_Light2.png)

* * *

Detailed Upscaler-细节升频
-----------------

Detail Upscaler会创建一个1024px x 1024px的图像，并向图像添加许多额外的细节。

使用细节升频器放大的图像可以再次使用`Upscale to Max` 按钮进行放大，以获得1664px x 1664px的最终分辨率。只有在快速模式下才能使用`Upscale to Max` 功能。

Detail Upscaler是Midjourney模型版本`V1`、`V2`、`V3`和`hd`的默认设置。

##### prompt: `adorable rubber duck medieval knight`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_Detailed.png)

##### prompt: `sand cathedral`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_Detailed2.png)

* * *

Beta Upscaler
-------------


Beta Upscaler 可以创建一个 2048px X 2048px 的图像，而不会添加太多额外的细节。 Beta Uspcaler 对于人脸和光滑表面非常有用。

使用 Beta Upscaler用 `--upbeta` 参数来更改 `U1`、`U2`、`U3`、`U4` 的行为。

##### prompt: `adorable rubber duck medieval knight`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_beta.png)

##### prompt: `sand cathedral`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_Beta2.png)

* * *

Anime Upscaler
--------------

The Anime Upscaler is the default upscaler for the [`--niji` model](https://docs.midjourney.com/models). It upscales images to 1024px x 1024px and is optimized to work well with illustrated and anime styles.

Use the `--upanime` parameter to change the behavior of the `U1` `U2` `U3` `U4` upscale buttons to use the Anime Upscaler.

### Anime Upscaler-动漫升频器

--------------

动漫升频器是[`--niji`模型](https://docs.midjourney.com/models)的默认升频器。它将图像升频到1024px x 1024px，经过优化，可以很好地处理图像的插画和动漫风格。

使用 Anime Upscaler 需要`--upanime`参数来更改`U1`、`U2`、`U3`、`U4`升频按钮的行为。

##### prompt: `adorable rubber duck medieval knight`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_beta.png)

##### prompt: `sand cathedral`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_Beta2.png)

* * *

Remaster
--------

Remaster is an additional option for previously upscaled images made with the `V1`, `V2`, or `V3` [Model Versions](https://docs.midjourney.com/model-versions). Remaster will upscale an image again using the `--test` and `--creative` parameters blending the composition of the original image and the coherency of the newer `--test` model.

Remaster any previously upscaled job by clicking the `🆕 Remaster` button found beneth the original upscale.

To Remaster very old jobs, use the [`/show` command](https://docs.midjourney.com/v1/docs/show-job) to refresh that job in Discord.


Remaster是早期使用`V1`、`V2`或`V3`[模型版本](https://docs.midjourney.com/model-versions)进行升频的图像的附加选项。 Remaster将使用`--test`和`--creative`参数升级图像，混合原始图像的构成和新的`--test`模型的连贯性。

通过单击原始升级下方找到的 `🆕 Remaster `按钮来重新制作任何以前已经过升级处理的工作。

要重新制作非常之前的作业，请使用[`/show`](https://docs.midjourney.com/v1/docs/show-job)命令在Discord中刷新该工作。"

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_RemasterEx.png)

左：使用默认升频器进行图像升频。右：Remaster生成的图像。

Remaster说明

* 仅适用于宽高比为2:3或3:2的[纵横比](https://docs.midjourney.com/docs/aspect-ratios)的图像。

* 在[多提示](https://docs.midjourney.com/docs/multi-prompts)下结果不一致。

* 不支持[图片提示](https://docs.midjourney.com/v1/docs/image-prompts)。

* * *


### 如何切换升频器

-----------------------

### 使用设置命令

`⏫ Regular Upscale` `⬆️ Light Upscale` `🔥 Beta Upscale`

输入 `/settings` 并从菜单中选择您喜欢的升频器。

### 使用升频参数

在提示符末尾添加 `--uplight`, `--upbeta` 或者 `--upanime`.

### 使用重新升级按钮

`⏫ Regular Upscale` `⬆️ Light Upscale` `🔥 Beta Upscale`

在您将图像进行了升频后，您会看到一排按钮位于图像下方，让您可以使用不同的采样模型重新进行升频。

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_Interface.png)


图像生成有两种模式，**Fast Mode快速模式**和**Relax Mode轻松模式**。 快速模式试图立即为您提供GPU进行处理。 它是最高优先级的处理层，会消耗您订阅的每月GPU使用时间。 **轻松模式**根据您已经使用系统的量将您的生成排队在其他人后面。 **轻松模式**等待时间是可变的，通常范围从1到10分钟。

默认情况下，您的图像将使用快速模式生成。 如果您拥有标准或专业版订阅，则可以切换到Relax Mode。

