import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "मेरो अंतराल || by Aashutosh Dhungana",
    pageTitleSuffix: " | Aashutosh's Garden",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "localhost:8080",
    ignorePatterns: ["private", "templates", ".obsidian"],
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
          light: "#F5F4F0", // warm off-white page bg
          lightgray: "#e2e1e1", // card / sidebar surface
          gray: "#ada9a2", // borders, dividers
          darkgray: "#6B6B6B", // muted / secondary text
          dark: "#1C1C1C", // primary body text
          secondary: "#A27B5C", // accent — same as dark mode
          tertiary: "#8A7265", // subtle icons, placeholders
          highlight: "rgba(162, 123, 92, 0.12)",
          textHighlight: "#A27B5C55",
        },
        darkMode: {
          light: "#2C3639", // deepest bg (was #161618)
          lightgray: "#3F4E4F", // surface / sidebar (was #393639)
          gray: "#8a7265", // mid-tone dividers (was #646464)
          darkgray: "#DCD7C9", // secondary text (was #d4d4d4)
          dark: "#DCD7C9", // primary text (was #ebebec)
          secondary: "#A27B5C", // accent / links (was #7b97aa)
          tertiary: "#3F4E4F", // subtle surface alt (was #84a59d)
          highlight: "rgba(162, 123, 92, 0.15)", // warm sand glow
          textHighlight: "rgba(44, 54, 57, 0.60)", // forest-toned mark
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
