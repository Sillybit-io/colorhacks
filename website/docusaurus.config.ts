import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import packageJson from '../package.json';

const config: Config = {
  title: packageJson.name,
  tagline: packageJson.description,
  favicon: 'img/favicon.ico',

  url: 'https://sillybit-io.github.io',
  baseUrl: '/colorhacks/',

  organizationName: 'sillybit-io',
  projectName: packageJson.subname,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      'docusaurus-plugin-typedoc',

      // Options
      {
        entryPoints: ['../src/index.ts'],
        tsconfig: '../tsconfig.json',
        readme: 'none',
        indexFormat: 'table',
        sidebar: { pretty: true },
        textContentMappings: {
          'title.indexPage': 'API',
          'title.memberPage': '{name}',
        },
        parametersFormat: 'table',
        enumMembersFormat: 'table',
        useCodeBlocks: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/sillybit-io/colorhacks/tree/main/website',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: packageJson.name,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        {
          href: `${packageJson.homepage}/releases`,
          position: 'left',
          label: 'Release Notes',
        },
        {
          href: packageJson.homepage,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} ${packageJson.author.name}, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
