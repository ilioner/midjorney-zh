// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Midjourney中文指南',
  tagline: 'AI，Midjourney，Prompt',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://midjourney-zh.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-87KFMSNEF4',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Midjourney中文指南',
        logo: {
          alt: 'Midjourney中文指南',
          // src: 'img/logo.svg',
          
          src: 'img/micon.png',
        },
        items: [
          
          {
            type: 'doc',
            docId: '入门教程/快速开始/Midjourney', 
            label: '入门教程', 
            position: 'left',
            to: '/docs/入门教程/快速开始/Midjourney',
          },
          {
            position: 'left',
            type: "doc",
            label: "关键字手册",
            docId: "关键字/艺术家风格",
            to: '/docs/关键字/艺术家风格',
          },{
            type: 'doc',
            docId: '关于 Midjourney-zh', 
            label: '关于', 
            position: 'left',
            to: '/docs/01-关于 Midjourney-zh',
          },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Midjourney',
                to: '/docs/入门教程/快速开始/Midjourney',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: '关于',
          //       to: '/about',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Midjourney中文指南, Inc.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: darkCodeTheme,
        // darkTheme: darkCodeTheme,
      },
      metadata: [{name: 'keywords', content: 'Midjourney,Midjourney学习,Prompt,AI,中文社区,midjourney-zh,midjourney中文教程,prompt,chatgpt-zh,chatgpt,MJ绘画,AI绘画,AI艺术,AI插画,插画,AI,ai,gpt,chatgpt,DALL·E 2,Midjourney,Stable Diffusion,midjourney中文,midjourney入门教程,midjourney中文网,midjourney,midjourney文档,midjourney,midjourney中文指南,midjourney指南,midjourney汉化,midjourney小白教程,midjourney共享账号'}],
    }),

};

module.exports = config;
