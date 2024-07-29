import { themes as prismThemes } from "prism-react-renderer";
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import "dotenv/config";

const config: Config = {
    title: "Dao Finance",
    tagline:
        "DAO Finance is a simple, open-source framework. It was popularized due to its minimum viable DAO design and the advent of rage-quit.",
    favicon: "https://raw.githubusercontent.com/awwea/daofinance/main/assets/favicon-32x32.png",
    url: "https://docs.daofinance.me",
    baseUrl: "/",
    projectName: "dfi",
    organizationName: "DFI",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },
    plugins: [
        [
            "@docusaurus/plugin-ideal-image",
            {
                quality: 70,
                max: 1030, // max resized image"s size.
                min: 640, // min resized image"s size. if original is lower, use that size.
                steps: 2, // the max number of images generated between min and max (inclusive)
                disableInDev: false,
            },
        ],
    ],
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    routeBasePath: "/",
                    sidebarPath: "./sidebars.ts",
                    editUrl: "https://github.com/awwea/daofinance/tree/main/",
                },
                blog: {
                    showReadingTime: true,
                    editUrl: "https://github.com/awwea/daofinance/tree/main/docs/",
                },
                theme: {
                    customCss: ["./src/css/custom.css"],
                },
                sitemap: {
                    lastmod: "date",
                    changefreq: "weekly",
                    priority: 0.5,
                    ignorePatterns: ["/tags/**"],
                    filename: "sitemap.xml",
                    createSitemapItems: async (params) => {
                        const { defaultCreateSitemapItems, ...rest } = params;
                        const items = await defaultCreateSitemapItems(rest);
                        return items.filter((item) => !item.url.includes("/page/"));
                    },
                },
            } satisfies Preset.Options,
        ],
    ],
    themeConfig: {
        colorMode: {
            defaultMode: "dark",
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        announcementBar: {
            id: "support_us",
            content: "We are looking to revamp our docs, please be patient.",
            backgroundColor: "#fafbfc",
            textColor: "#091E42",
            isCloseable: true,
        },
        image: "https://raw.githubusercontent.com/awwea/daofinance/main/assets/symbol.png",
        metadata: [
            { name: "keywords", content: "dao, dex, swap" },
            { name: "twitter:card", content: "summary_large_image" },
        ],
        navbar: {
            title: "DFI",
            logo: {
                alt: "DFI",
                src: "https://raw.githubusercontent.com/awwea/daofinance/main/assets/symbol.png",
            },
            items: [
                {
                    to: "/blog",
                    label: "Blog",
                    position: "left",
                },
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "Docs",
                },
                {
                    href: "https://explorer.daofinance.me",
                    position: "right",
                    label: "Chain",
                },
                {
                    href: "https://app.daofinance.me",
                    position: "right",
                    label: "App",
                },
                {
                    href: "https://github.com/awwea/daofinance",
                    position: "right",
                    label: "GitHub",
                },
            ],
        },
        footer: {
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Introduction",
                            to: "/intro",
                        },
                        {
                            label: "Whitepaper",
                            to: "/whitepaper",
                        },
                        {
                            label: "Blueprint",
                            to: "/blueprint",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Stack Overflow",
                            href: "https://stackoverflow.com/questions/tagged/daofinance",
                        },
                        {
                            label: "Telegram",
                            href: "https://web.telegram.org/@daofinance",
                        },
                        {
                            label: "Twitter",
                            href: "https://twitter.com/daofinance",
                        },
                    ],
                },
                {
                    title: "Resources",
                    items: [
                        {
                            label: "Blog",
                            to: "/blog",
                        },
                        {
                            label: "Explorer",
                            to: "https://explorer.daofinance.me",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/facebook/daofinance",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} by Dao Finance. All rights reserved.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};
export default config;
