import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "आशुतोषको संग्रह||Aashutosh's Collection",
    pageTitleSuffix: " | Aashutosh's Collection",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "google",
      tagId: "G-0XHTP7MGYB",
    },
    locale: "en-US",
    baseUrl: "notes.aashutoshdhungana.com.np",
    ignorePatterns: ["private", "templates", ".obsidian", "Projects"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FAF9F5", // Creamy linen page bg
          lightgray: "#F0EFEA", // Soft warm stone card / sidebar
          gray: "#D1CFC7", // Subtle natural borders
          darkgray: "#5E6258", // Mossy secondary text
          dark: "#1C1E1A", // Forest charcoal primary text
          secondary: "#4A6B53", // Heritage sage green accent
          tertiary: "#8A8F83", // Subtle icons, placeholders
          highlight: "rgba(74, 107, 83, 0.10)",
          textHighlight: "#4A6B5333",
        },
        darkMode: {
          light: "#1A1C18", // Dark moss bg
          lightgray: "#232621", // Elevated surface / sidebar
          gray: "#3A3E36", // Earthy mid-tone dividers
          darkgray: "#C5C7C1", // Sage-tinted secondary text
          dark: "#E4E3DE", // Crisp linen primary text
          secondary: "#81A784", // Soft sage accent / links
          tertiary: "#868d7c", // Subtle surface alt
          highlight: "rgba(129, 167, 132, 0.15)",
          textHighlight: "rgba(26, 28, 24, 0.60)",
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
