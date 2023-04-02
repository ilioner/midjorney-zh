

#### The `--quality` or `--q` parameter changes how much time is spent generating an image. Higher-quality settings take longer to process and produce more details. Higher values also mean more GPU minutes are used per job. The quality setting does not impact resolution.

The default `--quality` value is 1. Higher values use more of your subscription's GPU minutes.  
`--quality` accepts the values: .25, .5, and 1 for the default model. Larger values will be rounded down to 1.  
`--quality` only influences the initial image generation.  
`--quality` works with [Model Versions](https://docs.midjourney.com/models) 1, 2, 3, 4, 5 and niji.

* * *

Quality Settings
----------------

Higher `--quality` settings aren't always better. Sometimes a lower `--quality` settings can produce better results—depending on the image you're trying to create. Lower `--quality` settings might be best for a gestural abstract look. Higher `--quality` values may improve the look of architectural images that benefit from many details. Choose the setting that best matches the kind of image you're hoping to create.

Prompt example: `/imagine prompt` `woodcut birch forest --q .25`

### Version 4

##### `--quality .25`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Quality_025.jpg)

`-`

quickest results, least detailed results

_4× faster and ¼ the GPU minutes._

##### `--quality .5`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Quality_05.jpg)

`🔥 Half Quality`

Less detailed results

_2× faster and ½ the GPU minutes._

##### `--quality 1`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Quality_1.jpg)

`🔥 Base Quality`

The default setting

_Well balanced between detail and speed_

### Version 5

##### `--quality .25`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_Quality_025.jpg)

`-`

quickest results, least detailed results

_4× faster and ¼ the GPU minutes._

##### `--quality .5`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_Quality_05.jpg)

`🔥 Half Quality`

less detailed results

_2× faster and ½ the GPU minutes._

##### `--quality 1`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_Quality_1.jpg)

`🔥 Base Quality`

the default setting

_Well balanced between detail and speed_

* * *

### Version Quality Compatibility

<table><thead><tr><th>Model Version</th><th>Quality .25</th><th>Quality .5</th><th>Quality 1</th><th>Quality 2</th></tr></thead><tbody><tr><td>Version 5</td><td>✓</td><td>✓</td><td>✓</td><td>-</td></tr><tr><td><strong>Version 4</strong></td><td>✓</td><td>✓</td><td>✓</td><td>-</td></tr><tr><td>Version 3</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>Version 2</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>Version 1</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>niji</td><td>✓</td><td>✓</td><td>✓</td><td>-</td></tr></tbody></table>

* * *

How to Use the Quality Parameter
--------------------------------

### Use the `--quality` or `--q` Parameter

Add `--quality <value>` or `--q <value>` to the end of your prompt.

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Parameter_Quality.gif)

  

### Use the Settings Command

Type `/settings` and select your preferred `quality` value from the menu.

`🔥 Half Quality` `🔥 Base Quality` `🔥 High Quality (2x cost)`

The Midjourney Bot processes jobs on high-end GPUs. Each minute that it takes to complete a job is a **GPU minute**. You have a limited amount of GPU minutes when in **Fast Mode**. Because image generations may be processed on multiple GPUs simultaneously, GPU minutes are not directly connected to the time you wait for an image to generate.

Was this article helpful?