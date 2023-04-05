---
sidebar_position: 2
---

使用`::`作为分隔符来将两个或更多的单独概念分别考虑。这种分离提示的方式可以分配相对重要性给提示的不同部分。例如，如果输入“我想知道在哪里可以找到好吃的巧克力::你有什么建议吗？”，Midjourney会将这两个概念分开考虑。

Multi-Prompt 基础
-------------------


将双冒号`::`添加到提示中可以告诉Midjourney将每个部分单独考虑。例如，在以下提示`hot dog`中，所有单词都被视为一个整体，Midjourney会生成美味热狗的图像。但是如果将提示分成两个部分，`hot :: dog`，则机器人会将这两个概念单独考虑，创造一个热乎的狗。

在多重提示中不需要在双冒号`::`之间加空格，并且此功能适用于模型版本1、2、3、4和niji。同时，任何参数仍应添加到提示的末尾。


|`hot dog`|`hot:: dog`|
|-|-|
|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Multi_hotdog.jpg)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Multi_hot-dog.jpg)
|_Hot dog_ is considered as a single thought.|_Hot_ and _dog_ Hot and dog are considered separate thoughts|



|`cup cake illustration`|`cup:: cake illustration`|`cup:: cake:: illustration`|
|-|-|-|
|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Multi_cupCakeIllustration.jpg)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Multi_cup-cakeIllustration.jpg)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Multi_cup-cake-illustration.jpg)|
|_Cup cake illustration_ 一个插画整体.|_Cup_ 与 _cake illustration_ 分离.|_Cup_, _cake_, and _illustration_ 都分离.



Prompt 权重
--------------

When a double colon `::` is used to separate a prompt into different parts, you can add a number immediately after the double colon to assign the relative importance to that part of the prompt.

In the example below, the prompt `hot:: dog` produced a dog that is hot. Changing the prompt to `hot::2 dog` makes the word **hot** twice as important as the word dog, producing an image of a dog that is _very hot!_

[Model Versions] `1`, `2`, `3` only accept whole numbers as weights  
[Model Versions] `4` can accept decimal places for weights  
Non-specified weights default to 1.


当使用双冒号`::`将一个提示分成不同的部分时，可以在双冒号后面立即添加一个数字，用以指定该提示部分的相对权重。

以下是一个例子：如果提示为 `hot:: dog`，则会产生一张被热气笼罩的狗的图片。但若更改为 `hot::2 dog`，这意味着单词`hot`比单词`dog`重要度高出两倍，因此将生成一张热冒火的狗。

需要注意的是，在版本1、2、3中只接受整数作为权值；而版本4则能够接受权值的小数位数。未指定权值的情况下默认为1。

|`hot:: dog`|`hot::2 dog`|
|-|-|
|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Multi_hot-dog.jpg)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Multi_hot2-dog.jpg)|
|_Hot_ and _dog_ are considered as separate thoughts|_Hot_ is twice as important as _Dog_|


**Weights are normalized:**  
* `hot:: dog` 等同于`hot::1 dog`, `hot:: dog::1`,`hot::2 dog::2`, `hot::100 dog::100`, etc.  
* `cup::2 cake` 等同于 `cup::4 cake::2`, `cup::100 cake::50` etc.  
* `cup:: cake:: illustration` 等同于 `cup::1 cake::1 illustration::1`, `cup::1 cake:: illustration::`, `cup::2 cake::2 illustration::2` etc.

### 负数权值可用于提示中，以删除或排除不需要的元素。

但需要注意，所有权值的比必须是正数，否则无法正确处理这个提示。

|`vibrant tulip fields`|`vibrant tulip fields:: red::-.5`|
|-|-|
|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Multi_Tulips.jpg)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Multi_Tulips_NoRed.jpg)|
|彩色郁金香.|_Tulip fields are less likely to contain the color red._红色郁金香出现的概率降低|




`tulips:: red::-.5` 等同于 `tulips::2 red::-1`, `tulips::200 red::-100`, etc.

###  `--no` 参数

在多重提示中使用了参数 `--no` 来排除某些选项，它的效果与将相应的选项加权为 `-0.5` 时是一致的。例如，`vibrant tulip fields:: red::-.5` 和 `vibrant tulip fields --no red` 是一样的。
