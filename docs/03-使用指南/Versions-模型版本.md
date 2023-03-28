---
sidebar_position: 1
---

#### Midjourney会定期发布新版本模型来提高效率、整体连贯性和质量。默认是最新的模型，你可以使用`--version`或`--v`参数或使用`/settings`命令选择模型版本来使用其他模型。不同的模型对不同类型的图像有优势。

`--version`  参数可以是 1, 2, 3, and 4.  
`--version` 可以缩写为 `--v`

* * *

当前模型
-------------

Midjourney V4模型是全新的代码库和全新的人工智能架构，由Midjourney设计并在新的Midjourney AI超级集群上进行训练。最新的Midjourney模型对生物、地点、物体等方面有更多的知识。该模型在捕捉细节方面表现更佳，并且能够处理涉及多个角色或物体的复杂提示。V4模型支持高级功能，如图像提示和多重提示。

模型具有非常高的连贯性，并且在处理[Image Prompts](https://docs.midjourney.com/image-prompts)方面表现出色。

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V4_Poppies.png)

Prompt（提示）: vibrant California poppies（鲜艳的加利福尼亚罂粟花。PS：英文的promt会更加精准）

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/high_contrast.png)

Prompt: high contrast surreal collage（高对比度的超现实拼贴画）

  

### V4 的各种风格 4a, 4b,  4c


Midjourney模型V4版本有三种略微不同的“风味”，对模型的风格调整略有不同。通过在V4提示末尾添加`--style 4a`、`--style 4b`或`--style 4c`来体验这些版本。

`--v 4 --style 4c` 目前是默认版本，无需在提示末尾添加。

 4a  与 4b

`--style 4a` 和 `--style 4b` 仅支持1:1、2:3和3:2的画面比例.  
`--style 4c` 支持1:2或2:1的画面比例。.

##### `--style 4a`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V4a.jpg)

vibrant California poppies --style 4a

##### `--style 4b`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V4b.jpg)

vibrant California poppies --style 4b

##### `--style 4c`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_4c.png)

vibrant California poppies --style 4c

##### `--style 4a`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V4a_fish.jpg)

school of fish --style 4a

##### `--style 4b`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V4b_fish.jpg)

school of fish --style 4b

##### `--style 4c`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_4c_fish.png)

school of fish --style 4c

* * *

之前的模型版本
---------------

你可以通过使用`--version`或`--v`参数，或者使用`/settings`命令并选择模型版本来访问早期的Midjourney模型。不同的模型在不同类型的图像上有出色表现。
prompt 举栗: `/imagine prompt` `vibrant California poppies --v 1`

##### `--version 3`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V3_Poppies.png)

default model: 07/22–11/22

_highly creative compositions_

_moderate coherency_

##### `--version 2`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V2_Poppies.png)

default model: 04/22–07/22

_creative, colorful, and painterly_

_low coherency_

##### `--version1`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V1_Poppies.png)

default model: 02/22–04/22

_very abstract and painterly_

_low coherency_

##### `--hd` (高清)

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_HD_Poppies.png)

early alternative model

_busy detailed and abstract_

_low coherency_

* * *

Niji 模型
----------

niji模型是Midjourney和[Spellbrush](https://spellbrush.com/) 共同开发的，旨在生成动漫和插画风格的图像。--niji模型拥有更丰富的动漫、动漫风格和动漫美学方面的能力，特别擅长处理动态和动作镜头以及以人物为主题的构图。

prompt 举例: `/imagine prompt` `vibrant California poppies --niji`

##### `--v 4`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_4c.png)

vibrant California poppies

##### `--niji`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Niji.jpg)

vibrant California poppies --niji

##### `--v 4`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_v4_peacock.jpg)

fancy peacock

##### `--niji`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Niji_Peacock.jpg)

fancy peacock --niji

  

 `--niji` 的说明


niji模型不支持[`--stylize` parameter](https://docs.midjourney.com/docs/stylize).参数，可以使用[`/settings` command](https://docs.midjourney.com/docs/settings-and-presets)命令并选择Style Med来重置所有`--niji`提示的默认样式设置。niji模型支持多提示或图像提示。

* * *

测试模型
-----------

非常抱歉，让我尝试重新润色一下这段翻译：

有时会发布新模型供社区测试和反馈，其中包括两个可用的测试模型：`--test`和`--testp`。这些模型可以与`--creative`参数一起使用，以获得更加多样化的构图效果。

prompt 举例: `/imagine prompt` `vibrant California poppies --testp --creative`

##### `--test`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_test_Poppies.png)

_A general-purpose artistic model with good coherency_

##### `--test` + `--creative`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_test_Creative_Poppies.png)

##### `--testp`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_testP_Poppies.png)

_A photo-realism model with good coherency_

##### `--testp` + `--creative`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_testP_Creative_Poppies.png)

 `--test` 和 `--testp` 的注意事项：

测试模型只支持 `--stylize` 值在 1250 到 5000 之间。
测试模型不支持多重提示或图像提示。
测试模型的最大长宽比为 3:2 或 2:3。
当长宽比为 1:1 时，测试模型只会生成两个初始网格图像。
当长宽比不是 1:1 时，测试模型只会生成一个初始网格图像。
提示语句开头的词汇可能比结尾的词汇更加重要。
* * *

如何选择模型
--------------------

### 使用版本或测试参数

在你的提示末尾添加 `--v 1`, `--v 2`, `--v 3`, `--v 4`, `--v 4 --style 4a`, `--v4 --style 4b` `--test`, `--testp`, `--test --creative`, `--testp --creative`或者`--niji` 

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Parameter-Version.gif)

  

### 使用设置命令

输入 `/settings` 从菜单中选择你倾向的版本.

`1️⃣ MJ Version 1` `2️⃣ MJ Version 2` `3️⃣ MJ Version 3` `4️⃣ MJ Version 4` `🌈 Niji Mode` `🤖MJ Test` `📷 MJ Test Photo`

**连贯性(Coherency)** 指的是文本提示和生成的图像之间的联系强度。高度的连贯性意味着图像的提示的文本更加准确。
