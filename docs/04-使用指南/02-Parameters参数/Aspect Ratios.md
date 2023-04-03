---
sidebar_position: 2
---
#### `--aspect`或`--ar`参数会改变生成图像的宽高比例。通常用两个数字加冒号分隔表示，例如7:4或4:3。


系统默认宽高比是 1:1.  

`--aspect`需要使用整数,比如：使用139：100代替1.39：1。宽高比例会影响生成图像的形状和构图。在进行升频操作时，有时候宽高比例可能会略微改变。

* * *

### 最大宽高比

不同的模型版本 [Midjourney Version Models](https://docs.midjourney.com/models) 会有不同的宽高比例范围.

|         | Version 5 | Version 4c (default) | Version 4a or 4b    | Version 3          | Test / Testp | niji           |
|---------|-----------|----------------------|---------------------|--------------------|--------------|----------------|
| 比例  | 任意*      | 1:2 to 2:1            | 只接受: 1:1, 2:3 or 3:2 | 5:2 to 2:5         | 3:2 to 2:3   | 1:2 to 2:1     |


`--ar` 参数接受从1:1（正方形）到每个模型的最大宽高比之间的任何宽高比。但是在图像生成或放大过程中，最终输出可能会略微修改。例如：使用`--ar 16：9`（1.78）的提示会创建宽高比为`7：4`（1.75）的图像。

* 宽高比大于2：1的宽高比是测试性的比例的，可能会产生不可预测的结果。

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_AspectRatioChart.png)

例子: `imagine/ prompt` `vibrant california poppies --ar 5:4`

### 常见的宽高比

`--aspect 1:1` 默认宽高比。  
`--aspect 5:4` 常见的画框和打印比例。  
`--aspect 3:2` 印刷摄影中常见的宽高比。  
`--aspect 7:4` 接近高清电视屏幕和智能手机屏幕的宽高比。

* * *

如何改变宽高比例
------------------------------

### 使用教程

添加 `--aspect <value>:<value>`, 或者 `--ar <value>:<value>` 到你的提示尾部.  
![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Parameter_Aspect.gif)
