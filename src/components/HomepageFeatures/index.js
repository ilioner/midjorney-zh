import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '通过文字生成图片的AI',
    Svg: require('@site/static/img/topone.svg').default,
    description: (
      <>
        MidJourney使用深度学习技术来分析文本提示中的情感、场景和概念，并根据这些信息生成相应的图像。
      </>
    ),
  },
  {
    title: 'Prompts',
    Svg: require('@site/static/img/toptwo.svg').default,
    description: (
      <>
Midjourney Bot将提示中的单词和短语分解成更小的部分来生成图像。精心设计过的提示可以帮助你生成独特且惊艳的图像。
      </>
    ),
  },
  {
    title: '真正的AI创作',
    Svg: require('@site/static/img/topthree.svg').default,
    description: (
      <>
        MidJourney可以为许多用途提供视觉辅助，例如网站设计、广告、社交媒体营销、出版等。
      </>
    ),
  },
];


function Feature({Svg, title, description,idx}) {
  
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
