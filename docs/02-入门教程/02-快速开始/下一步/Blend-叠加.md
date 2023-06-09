---
sidebar_position: 3
---

#### `/blend` 命令允许您快速上传2-5张图片，通过对每张图片的概念和美学分析，将它们合并成一个新的图像。

`/blend` 与`/imagine` 结合多个 [image prompts](https://docs.midjourney.com/image-prompts)使用方式相同，但界面经过优化，方便在移动设备上使用。  
`/blend` 最多可以叠加5张图片。如果需要在一个提示中使用更多的图片，请使用 `/imagine`指令结合 [image prompts](https://docs.midjourney.com/image-prompts) 。  
`/blend` 无法与文本提示一起使用。如果需要使用文本和图片提示，请使用`/imagine`搭配 [image prompts](https://docs.midjourney.com/image-prompts) 。

* * *

`/blend` 可选项
----------------

在输入 `/blend` 命令后，您将通过提示上传两张照片。从硬盘拖放图像或在使用移动设备时从照片库添加图像。要添加更多图像，请选择 `optional/options` 字段并选择 `image3`、`image4` 或 `image5`。相对于其他命令，`/blend` 命令启动可能需要更长时间，因为 Midjourney Bot 必须在上传图片后处理指令。

图像叠加默认 [1:1 宽高比](https://docs.midjourney.com/v1/docs/aspect-ratios)，您可以使用可选的 `dimensions` 字段选择方形（1:1）、肖像（2:3）或横向（3:2）的长宽比。。

与任何其他 `/imagine` 命令一样， `/blend` 指令的末尾可以添加[自定义后缀](https://docs.midjourney.com/v1/docs/settings-and-presets)。指定在 `/blend `命令中的宽高比会覆盖自定义后缀中的宽高比。

![](../../../assets/doc/Midjourney_Blend_Command/MJ_Blend_Interface.png)


叠加提示

为了获得最佳处理效果，请上传与您期望的结果相同的图像宽高比。

* * *

使用 `/blend`的实例
-------------------

![](../../../assets/doc/Midjourney_Blend_Command/MJ_Blend.gif)
