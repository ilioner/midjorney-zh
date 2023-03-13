
#### Midjourney starts by generating a grid of low-resolution image options for each Job. You can use a Midjourney upscaler on any grid image to increase the size and add additional details. There are multiple upscale models available for upscaling an image.

The `U1` `U2` `U3` `U4` buttons under each image grid are used to upscale the selected image.

### Midjourney Dimensions and Sizes

_All sizes are for square 1:1 aspect ratios._

| Model Version  | Starting Grid Size | V4 Default Upscaler | Detail Upscale | Light Upscale | Beta Upscale | Anime Upscale | Max Upscale** |
|----------------|--------------------|---------------------|----------------|---------------|--------------|---------------|---------------|
| Default Model<br>Version 4 | 512 x 512 | 1024 x 1024 * | 1024 x 1024 | 1024 x 1024 | 2048 x 2048 | 1024 x 1024 | - |
| hd | 512 x 512 | - | 1536 x 1536* | 1536 x 1536 | 2048 x 2048 | - | 1024 x 1024 |
| v1–v3 | 256 x 256 | - | 1024 x 1024* | 1024 x 1024 | 1024 x 1024 | 1024 x 1024 | 1664 x 1664 |
| niji | 512 x 512 | 1024 x 1024 | 1024 x 1024 | 1024 x 1024 | 2048 x 2048 | 1024 x 1024 | - |
| test / testp | 512 x 512 | - | - | - | 2048 x 2048 | 1024 x 1024* | - |

`*` = the default upscaler for each Midjourney Version Model.  
`**` Max Upscale is an older resource-intensive upscaler and is only available when users are in Fast Mode.

* * *

Regular (Default) Upscaler
--------------------------

The latest default upscaler increases image size while smoothing or refining details. Some small elements may change between the initial grid image and the finished upscale.

##### prompt: `adorable rubber duck medieval knight`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_Regular.png)

##### prompt: `sand cathedral`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_Regular2.png)

* * *

Light Upscaler
--------------

The Light Upscaler creates a 1024px x 1024px image and adds a moderate amount of details and textures. The Light Uspscaler is useful for faces and smooth surfaces when using older [Midjourney Model Versions](https://docs.midjourney.com/model-versions).

Use the `--uplight` parameter to change the behavior of the `U1` `U2` `U3` `U4` upscale buttons to use the Light Upscaler.

##### prompt: `adorable rubber duck medieval knight`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_light.png)

##### prompt: `sand cathedral`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_Light2.png)

* * *

Detailed Upscaler
-----------------

The Detail Upscaler, creates a 1024px x 1024px image and adds many additional fine details to the image.

Images that have been upscaled with the detailed upscaler can be upscaled again using the `Upscale to Max` button for a final resolution of 1664px x 1664px. `Upscale to Max` is only available when in Fast mode.

The Detailed upscaler is the default for Midjourney Model Versions `V1`, `V2`, `V3`, and `hd`

##### prompt: `adorable rubber duck medieval knight`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_Detailed.png)

##### prompt: `sand cathedral`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_Detailed2.png)

* * *

Beta Upscaler
-------------

The Beta Upscaler creates a 2048px x 2048px image without adding many additional details. The Beta Uspcaler is useful for faces and smooth surfaces.

Use the `--upbeta` parameter to change the behavior of the `U1` `U2` `U3` `U4` upscale buttons to use the Beta Upscaler.

##### prompt: `adorable rubber duck medieval knight`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_beta.png)

##### prompt: `sand cathedral`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_Beta2.png)

* * *

Anime Upscaler
--------------

The Anime Upscaler is the default upscaler for the [`--niji` model](https://docs.midjourney.com/models). It upscales images to 1024px x 1024px and is optimized to work well with illustrated and anime styles.

Use the `--upanime` parameter to change the behavior of the `U1` `U2` `U3` `U4` upscale buttons to use the Anime Upscaler.

##### prompt: `adorable rubber duck medieval knight`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_beta.png)

##### prompt: `sand cathedral`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_Beta2.png)

* * *

Remaster
--------

Remaster is an additional option for previously upscaled images made with the `V1`, `V2`, or `V3` [Model Versions](https://docs.midjourney.com/model-versions). Remaster will upscale an image again using the `--test` and `--creative` parameters blending the composition of the original image and the coherency of the newer `--test` model.

Remaster any previously upscaled job by clicking the `🆕 Remaster` button found beneth the original upscale.

To Remaster very old jobs, use the [`/show` command](https://docs.midjourney.com/v1/docs/show-job) to refresh that job in Discord.

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_RemasterEx.png)

Left: Image upscaled with default upscaler. Right: Remastered Image.

Remaster Notes

*   Only works on [Aspect Ratio](https://docs.midjourney.com/docs/aspect-ratios) up to 2:3 or 3:2
*   Inconsistent results with [Multi Prompts](https://docs.midjourney.com/docs/multi-prompts)
*   Does not work with [Image Prompts](https://docs.midjourney.com/v1/docs/image-prompts).

* * *

How to Switch Upscalers
-----------------------

### Use the Settings Command

`⏫ Regular Upscale` `⬆️ Light Upscale` `🔥 Beta Upscale`

Type `/settings` and select your preferred upscaler from the menu.

### Use an Upscaler Parameter

Add `--uplight`, `--upbeta` or `--upanime` to the end of your prompt.

### Use an Upscale Redo Button

`⏫ Regular Upscale` `⬆️ Light Upscale` `🔥 Beta Upscale`

After you upscale an image you will see a row of buttons underneath the image that let you redo the upscale using a different upscaler model.

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Upscaler_Interface.png)

There are two modes for image generation, **Fast Mode** and **Relax Mode**. Fast Mode tries to give you a GPU instantly. It's the highest-priority processing tier and uses your subscription's monthly GPU time. **Relax Mode** queues your generation behind others based on how much you've used the system. **Relax Mode** wait times are variable and usually range from 1–10 minutes.

By default, your images will be generated using **Fast** mode. You can switch to **Relax** if you have a Standard or Pro subscription.

Was this article helpful?