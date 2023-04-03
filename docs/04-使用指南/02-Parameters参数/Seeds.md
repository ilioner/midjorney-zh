---
sidebar_position: 5
---

#### 每个图像的seed都是随机生成的，可以使用 `--seed` 或 `--sameseed` 参数进行指定。使用相同的seed和提示会生成结果相近的图像。


* `--seed` 接受0-4294967295的整数。
* `--seed` 的值只会影响初始图像网格。
* 在使用[模型版本](https://docs.midjourney.com/models)1、2、3、test和testp时，相同的 `--seed` 值会生成具有类似构图、颜色和细节的图像。
* 在使用[模型版本](https://docs.midjourney.com/models)4、5和niji时，相同的 `--seed` 值会产生几乎完全相同的图像。
* 种子数字不是静态的，不能在会话中依赖它们。

* * *

Seed 参数
--------------

如果没有指定seed，Midjourney都会使用不同的随机种子来生成图片，因此产生的图像会有很大的差异和多样性。

### 使用随机seed生成三次试试看:

例子: `/imagine prompt` `celadon owl pitcher`
||||
|-|-|-|
|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_SeedRandom13.png)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_SeedRandom1.png)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_SeedRandom2.png)|
### 指定seed生成两次试试看 `--seed 123`:

例子: `/imagine prompt` `celadon owl pitcher --seed 123`

|||
|-|-|
|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Seed-123_V4_.png)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Seed-123_V4_.png)|

* * *

Sameseed Parameter（v4 v5 用不上）
------------------


使用`--seed`参数将创建一个单一的随机seed，并应用在所有的初始图像上。当使用`--sameseed`参数时，初始网格中的所有图像都使用相同的seed，并且生成的图像非常相似。

`--sameseed`参数只接受0-4294967295之间的整数。
`--sameseed`参数仅适用于模型版本1、2、3、 `test`, 和 `testp`.



在哪里看seed值呢
-------------------------------

### 

对作业（Job）添加✉️信封图标来查找工作的seed。

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_JobID_EmojiReact.gif)

### 

要获取之前图像的seed，请[复制Job ID](https://docs.midjourney.com/docs/show-job)，结合该ID使用`/show <Job ID #>`命令来恢复作业。然后，可以对新生成的工作添加✉️信封表情符号来获取工作的种子号码。

* * *

如何修改seed值
--------------------------

### 

添加 `--seed <值>` or `--sameseed <值>` 在提示末尾.

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Seed_Gif.gif)

