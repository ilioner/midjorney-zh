---
sidebar_position: 1
---

#### “Prompt”是指提供给Midjourney Bot解读来生成图像的短文本短语。Midjourney Bot将提示中的单词和短语分解成更小的部分，我们称之为tokens，它可以与训练数据进行比较，然后生成图像。精心设计过的提示可以帮助你生成独特且惊艳的图像

类型构成
---------

### 基本 Prompts

一个基本的提示可以只是一个单词、短语或表情符号。

![](../../../assets/doc/Midjourney_Prompts/MJ_Prompt_basic.png)

### 高级 Prompts


更高级的Prompts可以包括一个或多个 [图片URL](https://docs.midjourney.com/image-prompts)，[多个文本短语](https://docs.midjourney.com/multi-prompts)，以及一个或多个 [参数](https://docs.midjourney.com/parameter-list)。

![](../../../assets/doc/Midjourney_Prompts/MJ_20Prompt.png)

`Image Prompts` 

Image URLs（多个图片地址）始终位于prompt的最前面，以影响完成结果的风格和内容。

[查看更多 Image Prompts说明](https://docs.midjourney.com/image-prompts)

`Prompt Text` 提示文字

希望生成的图像的文本描述。请参阅下面的提示信息和技巧。精心编写的提示可以帮助其生成惊艳的图像。

`Parameters` 参数

参数可以改变生成图片的方式，包括调整纵横比、模型、升频等等。参数需要放在提示语的末尾。

[Read more about Parameters](https://docs.midjourney.com/parameter-list)

* * *

Prompting 注意项
---------------

### Prompt 长度


提示可以非常简单。一个单词（甚至是一个表情符号！）就可以生成一张图片。过短的提示会大量依赖 Midjourney 的默认样式，因此更多描述性的提示会产生更独特的效果。然而，过于冗长的提示并不是最好的。所以请集中在你想要表达的主要概念上。

### 语法

Midjourney Bot 无法像人类一样理解语法、句子结构或词语。多数情况下，词语的选择也非常重要。更具体的同义词在许多情况下表现更佳。例如，可以用 gigantic、enormous 或 immense 替换 big。尽可能减少用词量。用词越少，每个单词的影响力就越强。使用逗号、方括号和连字符来帮助组织你的想法，注意，Midjourney Bot 无法可靠地解释这些符号。Midjourney Bot 不考虑大小写。

Midjourney [Model Version](https://docs.midjourney.com/models) 4稍微比其他模型更擅长解释传统的句子结构。

### 聚焦在你的需求上

描述您想要的内容而不是您不想要的内容。如果您要求‘没有蛋糕’的聚会，则您的图像很可能会包含蛋糕。如果您想确保某个对象不在最终图像中，请尝试使用 [`--no` parameter](https://docs.midjourney.com/multi-prompts) 进行高级提示。

细节的重要性

任何未提及的内容可能会让你感到惊讶。你的想法可以尽可能具体或模糊，但任何遗漏的内容都将随机化。含糊其辞是获得多样性的好方法，但你可能得不到你想要的特定细节。

**尽可能清楚地描述与您相关的任何上下文或细节。参考以下内容：**


* Subject: person, animal, character, location, object, etc. 
	(主题：人物、动物、角色、位置、物体等。)

* Medium: photo, painting, illustration, sculpture, doodle, tapestry, etc.
	(媒介：照片、绘画、插图、雕塑、涂鸦、挂毯等。)

* Environment: indoors, outdoors, on the moon, in Narnia, underwater, the Emerald City, etc. 
	(环境：室内、户外、月球、纳尼亚、水下、翡翠城等。)

* Lighting: soft, ambient, overcast, neon, studio lights, etc. 
	(光照：柔和、环境光、阴天、霓虹灯、工作室的灯光等。)

* Color: vibrant, muted, bright, monochromatic, colorful, black and white, pastel, etc.
	(颜色：充满活力的、柔和的、明亮的、单色的、多彩的、黑白的、粉彩的等。)

* Mood: Sedate, calm, raucous, energetic, etc. 
	(情绪氛围：平静的、镇定的、喧闹的、充满活力的等。)

* Composition: Portrait, headshot, closeup, birds-eye view, etc.
	(构图：肖像、特写、近景、鸟瞰等。)

### 使用集合名词

复数词会有很多随机因素。尝试使用具体数字。 "三只猫" 比 "猫" 更具体。集合名词也是一种选择，“一群鸟”而不是“鸟”。