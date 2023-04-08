import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
// import subStyles from '../components/styles.module.css';
import useTypewriter from "react-typewriter-hook"
import topthree from "@site/static/img/topthree.svg"

const FeatureList = [
  {
    idx:0,
    title: '中文指南',
    Svg: require('@site/static/img/topone.svg').default,
    description: (
      <>
        MidJourney中文全手册，从0开始不再难。
      </>
    ),
  },
  {
    idx:1,
    title: '关键字手册',
    Svg: require('@site/static/img/toptwo.svg').default,
    description: (
      <>
        关键字数据字典，持续扩大中....
      </>
    ),
  },
  {
    idx:2,
    title: '关于',
    Svg: require('@site/static/img/topthree.svg').default,
    description: (
      <>
        点进来一起来玩啊。
      </>
    ),
  },
];

function Feature({Svg, title, description,idx}) {
  
  return (
    <div className={clsx('col col--4')}   onClick ={clickAction.bind(this,idx)}>
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

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const talk = useTypewriter('AI，Midjourney，Prompt');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3102972291766814"
     crossorigin="anonymous"></script>
      <div className="container" >
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{talk}</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

function clickAction(idx) {
  var url
  if(idx == 0){
    url = document.URL + "docs/入门教程/快速开始/Midjourney";
  }
  if(idx == 1){
    url = document.URL + "docs/关键字/关键字公式";
  }
  if(idx == 2){
    url = document.URL + "docs/关于Midjourney-zh";
  }
  
  window.open(encodeURI(url)) //此处的url是全路径
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title},教程，学习，文档，入门`}
      description="midjourney中文教程 <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
              {/* {FeatureList.map((props, idx) => (
                // <Feature key={idx} {...props} />
                <div className={clsx('col col--4')}>
                <div className="text--center">
                  <Svg className={styles.featureSvg} role="img" />
                </div>
                <div className="text--center padding-horiz--md">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
              ))} */}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
