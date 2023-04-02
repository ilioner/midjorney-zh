

#### The `--aspect` or `--ar` parameter changes the aspect ratio of the generated image. An aspect ratio is the width-to-height ratio of an image. It is typically expressed as two numbers separated by a colon, such as 7:4 or 4:3.

A square image has equal width and height, described as a 1:1 aspect ratio. The image could be 1000px × 1000px, or 1500px × 1500px, and the aspect ratio would still be 1:1. A computer screen might have a ratio of 16:10. The width is 1.6 times longer than the height. So the image could be 1600px × 1000px, 4000px × 2000px, 320px x 200px, etc.

The default aspect ratio is 1:1.  
`--aspect` must use whole numbers. Use 139:100 instead of 1.39:1.  
The aspect ratio impacts the shape and composition of a generated image.  
Some aspect ratios may be slightly changed when upscaling.

* * *

### Max Aspect Ratios

Different [Midjourney Version Models](https://docs.midjourney.com/models) have different maximum aspect ratios.

<table><thead><tr><th></th><th>Version 5</th><th>Version 4c (default)</th><th>Version 4a or 4b</th><th>Version 3</th><th>Test / Testp</th><th>niji</th></tr></thead><tbody><tr><td>Ratios</td><td>any*</td><td>1:2 to 2:1</td><td>Only: 1:1, 2:3 or 3:2</td><td>5:2 to2:5</td><td>3:2 to 2:3</td><td>1:2 to 2:1</td></tr></tbody></table>

The `--ar` parameter will accept any aspect ratio from 1:1 (square) up to the maximum aspect ratio for each model. However, final outputs may be slightly modified during image generation or upscaling. Example: prompts using `--ar 16:9` (1.78) create images with a `7:4` (1.75) aspect ratio.

* Aspect ratios greater than 2:1 are experimental and may produce unpredicatble results.

![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_AspectRatioChart.png)

prompt example: `imagine/ prompt` `vibrant california poppies --ar 5:4`

### Common Midjourney Aspect Ratios

`--aspect 1:1` Default aspect ratio.  
`--aspect 5:4` Common frame and print ratio.  
`--aspect 3:2` Common in print photography.  
`--aspect 7:4` Close to HD TV screens and smartphone screens.

* * *

How to Change the Aspect Ratio
------------------------------

### Use Aspect Ratio Parameters

Add `--aspect <value>:<value>`, or `--ar <value>:<value>` to the end of your prompt.  
![](https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Parameter_Aspect.gif)

Was this article helpful?