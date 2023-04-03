---
sidebar_position: 1
---


#### 给prompt添加参数可以改变图像生成的方式。例如图像的纵横比[Aspect Ratios](https://docs.midjourney.com/aspect-ratios)、模型版本之间切换 [Model Versions](https://docs.midjourney.com/models)、改变升频器[Upscaler](https://docs.midjourney.com/upscalers)等等。

参数需要夹在prompt的末尾，并且可以添加多个不同的参数

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Parameters_example.png)

又时候在苹果设备上会把(--) 转换成 (—).不要担心，MJ可以识别!

* * *

基础参数
----------------

### [Aspect Ratios](https://docs.midjourney.com/aspect-ratios)

`--aspect`,或 `--ar` 改变生成图像的纵横比

### [Chaos](https://docs.midjourney.com/chaos)

`--chaos <number 0–100>` 改变生成结果的差异性。较高的值会产生更意外的生成结果.

### [No](https://docs.midjourney.com/multi-prompts)

`--no` 过滤负面提示, `--no plants` 会尝试从图像中去除植物.

### [Quality](https://docs.midjourney.com/quality)

`--quality <.25, .5, 1, or 2>`, or `--q <.25, .5, 1, or 2>` 生成图片需要花费的时间
--quality值为 1。较高的值会使用更多订阅的GPU 时间。
--quality接受以下值：默认模型的 .25、.5 和 1。较大的值将向下舍入为 1。
--quality仅影响初始图片生成。
--quality适用于模型版本1、2、3、4、5 和 niji。.

### [Seed](https://docs.midjourney.com/seeds)

`--seed <integer between 0–4294967295>` Midjourney生成图片的这种随机性是伪随机。你可以理解为随机算法是一个方程式，你输入不同的值，最后得出的结果就是不同的。而如果前后两次输入的这个起始值是一样的，那么最后得出的结果其实就是一样的。那么使用同样的seed值，那最后生成的图像就应该是差不多的.

### [Stop](https://docs.midjourney.com/stop)

`--stop <integer between 10–100>` 使用--stop参数在作业进行过程中结束作业。

### [Style](https://docs.midjourney.com/models)

`--style <4a, 4b or 4c>` 在V4 [Model Version](https://docs.midjourney.com/docs/models) 中切换不同的模型

### [Stylize](https://docs.midjourney.com/stylize)

`--stylize <number>`,或者 `--s <number>` 使用 stylize 参数可以让 Midjourney 生成更加具有艺术色彩、构图和形式的图像。低风格化值生成的图像与提示密切相关，但艺术性较差；高风格化值产生的图像非常有艺术性，但与提示的关联性也较少，AI 会有更多的空间自由发挥。

### [Uplight](https://docs.midjourney.com/upscalers)

`--uplight` 轻型升频器进行细节处理。图像更细致更平滑.

### [Upbeta](https://docs.midjourney.com/upscalers)

`--upbeta` 在选择“U”按钮时使用beta升频器。结果更接近原始图像。升频后的图像细节添加显著减少。

### Default Values (Model Version 4)


|        | Aspect Ratio | Chaos | Quality | Seed                      | Stop     | Style | Stylize |
|--------|--------------|-------|---------|--------------------------|----------|-------|---------|
| Default Value | 1:1 | 0   | 1       | Random             | 100      | 4c    | 100     |
| Range         | 1:2–2:1  | 0–100 | .25 .5 or 1 | whole numbers 0–4294967295 | 10–100 | 4a, 4b, or 4c | 0–1000 |



### Default Values (Model Version 5)

|        | Aspect Ratio | Chaos    | Quality       | Seed                         | Stop      | Stylize |
|--------|--------------|----------|---------------|------------------------------|-----------|---------|
| Default Value   | -            | 0        | .25, .5, or 1 | Random                   | 100         | 100     |
| Range                    | any        | 0–100  | .25, .5, or 1 | whole numbers 0–4294967295 | 10–100   | 0–1000 |


*   大于2：1的宽高比还在实验中，可能会产生无法预期的结果.

模型版本参数
------------------------


Midjourney会定期发布新的模型版本来提高效率、连贯性和质量。不同的模型在处理不同类型的图像时会表现出色。

### [Niji](https://docs.midjourney.com/models)

`--niji` 动漫风格的图像的模型.

### [High Definition](https://docs.midjourney.com/models)

`--hd` 如果您使用 `--hd` 参数，将使用一种早期的替代模型，该模型会生成更大但不太连贯的图像。这种算法可能适用于抽象和景观图像。请注意，这种模型生成的图像可能不太真实、细节化，因此在采用这个参数前，您应该考虑需要哪种类型的图像。同时，我们也建议您先检查一下文档中每种模型的特点和能力，并仔细选择最适合自己需求的模型。

### [Test](https://docs.midjourney.com/models)

`--test` 使用测试模型.

### [Testp](https://docs.midjourney.com/models)

`--testp` 如果您需要生成比较逼真、专业的摄影图片，请使用Midjourney特殊的针对摄影图像训练的模型。这种模型通过对大量专业摄影作品的学习和训练，可以更好地呈现出真实的光线和色彩。您可以在Midjourney的模型文档中找到有关该模型的更多信息。.

### [Version](https://docs.midjourney.com/models)

`--version <1, 2, 3, 4, or 5>` or `--v <1, 2, 3, 4, or 5>` 改变模型，现在的默认模型是v4.

升频器参数
-------------------

Midjourney在生成每个作业的低分辨率图像网格后，会使用Midjourney的uptscaler将其放大并添加更多细节。对于放大过程，可以使用多种不同的Upscale模型。这些模型利用深度学习技术，以最小化失真和保持质量为目标进行放大处理。您可以通过在命令中使用 `--upscale` 参数来指定要使用的 Upscale 模型。我们建议您根据具体任务和需要选择适当的模型。

### [Uplight](https://docs.midjourney.com/upscalers)

`--uplight` `light`轻量级 Upscaler，其结果更接近原始网格图像。这种轻量级模型的放大效果会更加平滑，细节会相对较少。

### [Upbeta](https://docs.midjourney.com/upscalers)

`--upbeta` 当您选择Upscale模型时，还可以尝试使用另一种名为“beta”的轻量级Upscaler。使用这种模型时，放大后的图像会更接近原始网格图像，但添加的细节数量会更少。.

### [Upanime](https://docs.midjourney.com/upscalers)

尝试使用一种特定于 `--niji` Midjourney模型的专门的Upscaler。这个Upscaler已经过训练，可以更好地与`--niji` Midjourney模型配合使用，以产生更高质量的图像。您可以通过在命令中使用 `--upscale` 参数并指定此特殊Upscaler的名称来选择该模型。请记住，Upscaler的选择应该根据任务需求和图像类型进行调整。

其他参数
----------------



### [Video](https://docs.midjourney.com/video)


`--video` 参数仅适用于保存图像生成过程的视频，而不是对单个图像进行上采样。

如果您想要保存单个图像生成的视频，请在命令中添加 `--save-video` 参数。此项操作与 `--video` 类似，但会在生成完整图像时保存一个视频文件。然后，您可以使用 ✉️ 来向您的直接消息发送视频

* * *

兼容性
-------------

### 模型版本 & 参数兼容

|                  | Affects initial generation | Affects variations + remix | Version 5 | Version 4          | Version 3              | Test / Testp | Niji |
|------------------|------------------------------|-----------------------------|-----------|--------------------|------------------------|--------------|------|
| Max Aspect Ratio | ✓                            | ✓                           | any       | 1:2 or 2:1         | 5:2 or 2:5            | 3:2 or 2:3   | 1:2 or 2:1 |
| Chaos            | ✓                            |                             | ✓         | ✓                  | ✓                      | ✓            | ✓    |
| Image Weight     | ✓                            |                             | .5–2      |       | any<br/>default=.25     | ✓            |      |
| No               | ✓                            | ✓                           | ✓         | ✓                  | ✓                      | ✓            | ✓    |
| Quality          | ✓                            |                             | ✓         | ✓                  | ✓                      |              | ✓    |
| Seed             | ✓                            |                             | ✓         | ✓                  | ✓                      | ✓            | ✓    |
| Sameseed         | ✓                            |                             |           |                    | ✓                      |              |      |
| Stop             | ✓                            | ✓                           | ✓         | ✓                  | ✓                      | ✓            | ✓    |
| Style            |                              |                             |           | 4a and 4b         |                        |              |      |
| Stylize          | ✓                            |                             | 0–1000    | 0–1000<br/>default=100 | 625–60000<br/>default=2500 | 1250–5000<br/>default=2500 |      |
| Tile             | ✓                            | ✓                           | ✓         |                    | ✓                      |              |      |
| Video            | ✓                            |                             |           |                    | ✓                      |              |      |
| Number of Grid Images | -                        | -                           | 4         | 4                  | 4                      | 2 (1 when aspect ratio≠1:1) |      |

这是一个表格，列出了各个参数对初次生成和图像变异的影响，以及版本和可选范围等信息。具体各参数含义如下：

- Max Aspect Ratio：图像的最大宽高比，可以设置为任意值。
- Chaos：图像噪声程度的强度，取值范围在 0 到 100 之间。
- Image Weight：图像的权重，用于调整图像的大小和重复次数。
- No：控制渲染器是否包含噪点。
- Quality：渲染质量，越高越清晰，可选范围为 0.25、 0.5 或 1。
- Seed：随机种子，可以是 0 到 4294967295 之间的整数。
- Sameseed：控制生成后的图像是否与原始图像使用相同的种子随机生成。
- Stop：控制图像生成的迭代次数。
- Style：图像的风格化类型。
- Stylize：调整图像风格化的强度，取值范围在 0 到 1000 之间。
- Tile：用于控制图像是否平铺。
- Video：控制渲染器是否生成 GIF 动态图。
- Number of Grid Images：用于控制网格图片的数量。

* * *

### 下面都是废弃参数

--width and --w (replaced with --aspect)  
--height and --h (replaced with --aspect)  
--fast (replaced with --quality)  
--vibe (now known as V1)  
--hq  
--newclip  
--nostretch  
--old  
--beta
