
#### Midjourney routinely releases new model versions to improve efficiency, coherency, and quality. The latest model is the default, but other models can be used using the `--version` or `--v` parameter or by using the `/settings` command and selecting a model version. Different models excel at different types of images.

`--version` accepts the values 1, 2, 3, 4, and 5.  
`--version` can be abbreviated `--v`

* * *

Newest Model
------------

The Midjourney V5 model is the newest and most advanced model, released on March 15th, 2023. To use this model, add the `--v 5` parameter to the end of a prompt, or use the `/settings` command and select `5️⃣ MJ Version 5`

This model has very high Coherency, excels at interpreting natural language prompts, is higher resolution, and supports advanced features like repeating patterns with [`--tile`](https://docs.midjourney.com/docs/tile)

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_VibrantCaliforniaPoppies.png)

Prompt: vibrant California poppies --v 5

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_HighContrastCollage.png)

Prompt: high contrast surreal collage --v 5

  

* * *

Current Model
-------------

The Midjourney V4 model is an entirely new codebase and brand-new AI architecture designed by Midjourney and trained on the new Midjourney AI supercluster. The latest Midjourney model has more knowledge of creatures, places, objects, and more. It's much better at getting small details right and can handle complex prompts with multiple characters or objects. The Version 4 model supports advanced functionality like image prompting and multi-prompts.

This model has very high Coherency and excels with [Image Prompts](https://docs.midjourney.com/image-prompts).

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V4_Poppies.png)

Prompt: vibrant California poppies

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/high_contrast.png)

Prompt: high contrast surreal collage

  

### Version 4 Styles 4a, 4b, and 4c

Midjourney Model Version 4 has three slightly different "flavors" with slight tweaks to the stylistic tuning of the model. Experiment with these versions by adding `--style 4a`, `--style 4b`, or `--style 4c` to the end of a V4 prompt.

`--v 4 --style 4c` is the current default and does not need to be added to the end of a prompt.

Note on Style 4a and 4b

`--style 4a` and `--style 4b` only support 1:1, 2:3, and 3:2 aspect ratios.  
`--style 4c` support aspect ratios up to 1:2 or 2:1.

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

Previous Models
---------------

You can access earlier midjourney models by using the `--version` or `--v` parameter or by using the `/settings` command and selecting a model version. Different models excel at different types of images.

prompt example: `/imagine prompt` `vibrant California poppies --v 1`

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

##### `--version 1`

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V1_Poppies.png)

default model: 02/22–04/22

_very abstract and painterly_

_low coherency_

##### `--hd` (high definition)

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_HD_Poppies.png)

early alternative model

_busy detailed and abstract_

_low coherency_

* * *

Niji Model
----------

The `niji` model is a collaboration between Midjourney and [Spellbrush](https://spellbrush.com/) tuned to produce anime and illustrative styles. The `--niji` model has vastly more knowledge of anime, anime styles, and anime aesthetics. It's excellent at dynamic and action shots and character-focused compositions in general.

prompt example: `/imagine prompt` `vibrant California poppies --niji`

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

  

Notes on the `--niji` model

Niji does not support the [`--stylize` parameter](https://docs.midjourney.com/docs/stylize). Use the [`/settings` command](https://docs.midjourney.com/docs/settings-and-presets) and select `Style Med` to reset to the default style setting for all `--niji` prompts.  
Niji supports multi-prompts or image-prompts.

* * *

Test Models
-----------

Occasionally new models are released temporarily for community testing and feedback. There are currently two available test models: `--test` and `--testp`, which can be combined with the `--creative` parameter for more varied compositions.

prompt example: `/imagine prompt` `vibrant California poppies --testp --creative`

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

Notes on current test models `--test` and `--testp`

Test models only support `--stylize` values between 1250–5000.  
Test models do not support multi-prompts or image-prompts  
Test models have a maximum aspect ratio of 3:2 or 2:3.  
Test models only generate two initial grid images when the aspect ratio is 1:1.  
Test models only generate one initial grid image when the aspect ratio is not 1:1.  
Words near the front of the prompt may matter more than words near the back.

* * *

How to Switch Models
--------------------

### Use the Version or Test Parameter

Add `--v 1`, `--v 2`, `--v 3`, `--v 4`, `--v 4 --style 4a`, `--v4 --style 4b` `--test`, `--testp`, `--test --creative`, `--testp --creative` or `--niji` to the end of your prompt.

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Parameter-Version.gif)

  

### Use the Settings Command

Type `/settings` and select your preferred version from the menu.

`1️⃣ MJ Version 1` `2️⃣ MJ Version 2` `3️⃣ MJ Version 3` `4️⃣ MJ Version 4` `🌈 Niji Mode` `🤖MJ Test` `📷 MJ Test Photo`

**Coherency** is the strength of the connection between the text prompt and the resulting image. A high degree of coherency means that the image will be an accurate representation of the prompt text.

**Coherency** is the strength of the connection between the text prompt and the resulting image. A high degree of coherency means that the image will be an accurate representation of the prompt text.

Was this article helpful?