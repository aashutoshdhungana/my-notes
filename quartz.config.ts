import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "ScratchPad || My Personal Note Garden",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "google",
      tagId: "G-0XHTP7MGYB",
    },
    locale: "en-US",
    baseUrl: "aashutoshdhungana.com.np",
    ignorePatterns: ["private", "templates", ".obsidian", "Projects"],
    defaultDateType: "modified",
    theme: {
      cdnCaching: true,
      fontOrigin: "googleFonts",
      typography: {
        header: "JetBrains Mono",
        body: "JetBrains Mono",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#eff1f5", // base (Latte)
          lightgray: "#ccd0da", // surface0
          gray: "#9ca0b0", // overlay0
          darkgray: "#4c4f69", // text
          dark: "#4c4f69", // text
          secondary: "#1e66f5", // blue
          tertiary: "#8839ef", // mauve
          highlight: "rgba(30,102,245,0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#1e1e2e", // base (Mocha)
          lightgray: "#313244", // surface0
          gray: "#6c7086", // overlay0
          darkgray: "#cdd6f4", // text
          dark: "#cdd6f4", // text
          secondary: "#89b4fa", // blue
          tertiary: "#cba6f7", // mauve
          highlight: "rgba(137,180,250,0.15)",
          textHighlight: "#f9e2af88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
