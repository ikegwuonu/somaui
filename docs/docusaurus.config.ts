import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "SomaUI",
  tagline:
    "A ShadcnUI version of SomaUI. Designed to provide you with a simple and intuitive set of UI components that are easy to use, customize and integrate into your React application.",
  favicon: "img/soma-favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ikegwuonu", // Usually your GitHub org/user name.
  projectName: "somaui", // Usually your repo name.

  onBrokenLinks: "throw",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",

          routeBasePath: "docs",
        },

        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          blogTitle: "SomaUI Blogs",
          blogDescription: "Read blog posts about SomaUI updates from team.",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/soma-logo.jpg",
    fonts: {
      myFont: ["Outfit", "sans-serif"],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "SomaUI",
      logo: {
        alt: "SomaUI Logo",
        src: "img/soma-favicon.ico",
      },
      items: [
        {
          to: "docs/guide/getting-started",
          position: "left",
          label: "Documentation",
        },
        {
          to: "docs/guide/components",
          position: "left",
          label: "Components",
        },
        {
          to: "/blog",
          position: "left",
          label: "Blog",
        },
        {
          href: "https://github.com/rizzui/rizzui",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub",
        },
        {
          type: "dropdown",
          label: "v-2.0.0",
          position: "right",
          items: [
            {
              label: "v-1.0.0",
              href: "https://legacy-docs.rizzui.com/docs/guide/getting-started", // Replace with your actual URL
            },
            {
              label: "v-0.8.7",
              href: "https://legacy-docs.rizzui.com/docs/0.8.7/guide/getting-started", // Replace with your actual URL
            },
          ],
        },
      ],
    },
    // footer: {
    //   style: "dark",
    //   links: [
    //     {
    //       title: "Docs",
    //       items: [
    //         {
    //           label: "Tutorial",
    //           to: "/docs/intro",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Community",
    //       items: [
    //         {
    //           label: "Stack Overflow",
    //           href: "https://stackoverflow.com/questions/tagged/docusaurus",
    //         },
    //         {
    //           label: "Discord",
    //           href: "https://discordapp.com/invite/docusaurus",
    //         },
    //         {
    //           label: "X",
    //           href: "https://x.com/docusaurus",
    //         },
    //       ],
    //     },
    //     {
    //       title: "More",
    //       items: [
    //         {
    //           label: "Blog",
    //           to: "/blog",
    //         },
    //         {
    //           label: "GitHub",
    //           href: "https://github.com/facebook/docusaurus",
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} SomaUI, Inc. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
