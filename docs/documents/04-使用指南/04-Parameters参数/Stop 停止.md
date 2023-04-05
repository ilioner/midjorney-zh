---
sidebar_position: 6
---

#### 使用`--stop`参数在生成过程中途结束Job。较早停止Job可能会创建模糊度更高，详细度更低的结果。
>`--stop`接受值：10-100。
默认的`--stop`值为100。
在放大操作时不能使用`--stop`参数。

* * *

Stop 对比
---------------

prompt example: `/imagine prompt` `splatter art painting of acorns --stop 90`

|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Stop_10.png)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Stop_20.png)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Stop_30.png)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Stop_40.png)
|-|-|-|-|
|--stop 10|--stop 20|--stop 30|--stop 40|
|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Stop_50.png)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Stop_60.png)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Stop_70.png)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Stop_80.png)
|--stop 50|--stop 60|--stop 70|--stop 80|
|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Stop_90.png)|![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_stop_100.png)|
|--stop 90|--stop 100|


* * *


### 如何使用 `--stop` 

添加 `--stop <值>` 在提示末尾.

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Parameter_Stop.gif)
