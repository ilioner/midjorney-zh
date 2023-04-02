

#### This Midjourney Bot has been trained to produce images that favor artistic color, composition, and forms. The `--stylize` or `--s` parameter influences how strongly this training is applied. Low stylization values produce images that closely match the prompt but are less artistic. High stylization values create images that are very artistic but less connected to the prompt.

`--stylize`'s default value is 100 and accepts integer values 0–1000 when using the default [V4 model].

Different [Midjourney Version Models](https://docs.midjourney.com/models) have different stylize ranges.

<table><thead><tr><th></th><th>Version 5</th><th>Version 4</th><th>Version 3</th><th>Test / Testp</th><th>niji</th></tr></thead><tbody><tr><td>Stylize default</td><td>100</td><td>100</td><td>2500</td><td>2500</td><td>NA</td></tr><tr><td>Stylize Range</td><td>0–1000</td><td>0–1000</td><td>625–60000</td><td>1250–5000</td><td>NA</td></tr></tbody></table>

* * *

Common Stylize Settings
-----------------------

### Midjourney Model V4

prompt example: `/imagine prompt` `illustrated figs --s 100`

##### `--stylize 50`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Stylize_0.jpg)

`🖌️ Style Low`

##### `--stylize 100` (default)

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Stylize_100.jpg)

`🖌️ Style Med`

##### `--stylize 250`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Stylize_250.jpg)

`🖌️ Style High`

##### `--stylize 750`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Stylize_750.jpg)

`🖌️ Style Very High`

* * *

### Midjourney Model V5

prompt example: `/imagine prompt` `colorful risograph of a fig --s 100`

##### `--stylize 0`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_Stylize_0.jpg)

##### `--stylize 50`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_Stylize_50.jpg)

##### `--stylize 100` (default)

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_Stylize_100.jpg)

##### `--stylize 250`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_Stylize_250.jpg)

##### `--stylize 750`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_Stylize_750.jpg)

##### `--stylize 1000`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_Stylize_1000.jpg)

* * *

How to Switch Stylization Values
--------------------------------

### Use the Stylize Parameter

Add `--stylize <value>` or `--s <value>` to the end of your prompt.

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Parameter_Style.gif)

  

### Use the Settings Command

Type `/settings` and select your preferred stylize value from the menu.

`🖌️ Style Low` `🖌️ Style Med` `🖌️ Style High` `🖌️ Style Very High`

Was this article helpful?