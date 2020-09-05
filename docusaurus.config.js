module.exports = {
  title: 'E-Webbiz',
  tagline: 'ข้อกำหนดและเงื่อนไขของการใช้ระบบ eWebbiz',
  url: 'https://ewebbiz.net',
  baseUrl: '/policy/',
  onBrokenLinks: 'throw',
  favicon: '/img/logo-tranparant.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'ewebbiz-policy', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'E-Webbiz',
      logo: {
        alt: 'My Site Logo',
        src: '/img/logo-tranparant.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'นโยบาย',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `${new Date().getFullYear()} Powered by Intelligent Automation Research Center | Contact by email : iarc.psu@gmail.com  Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
