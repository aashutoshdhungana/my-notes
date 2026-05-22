import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      Email: "mailto:dhunganaaashutosh@gmail.com",
      GitHub: "https://github.com/aashutoshdhungana",
      LinkedIn: "https://www.linkedin.com/in/aashutosh-dhungana-4759511a1",
      Upwork: "https://www.upwork.com/freelancers/~011146614c401546e6",
      RSS: "/index.xml",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.MobileOnly(Component.Graph()),
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search({}),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      folderDefaultState: "open",
      folderClickBehavior: "collapse",
    }),
  ],
  right: [
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.Backlinks()),
  ],
  afterBody: [
    Component.MobileOnly(Component.Backlinks()),
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "aashutoshdhungana/my-notes",
        repoId: "R_kgDOShw9oA",
        category: "Announcements",
        categoryId: "DIC_kwDOShw9oM4C9cEo",
        mapping: "pathname",
        strict: false,
        reactionsEnabled: true,
        inputPosition: "top",
        lang: "en",
        themeUrl: "https://raw.githack.com/aashutoshdhungana/my-notes/main/quartz/static/giscus",
        darkTheme: "dark",
        lightTheme: "light",
      },
    }),
    Component.RecentNotes({ title: "Recent Updates", limit: 5, showTags: false }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),

    Component.Explorer({
      folderDefaultState: "open",
      folderClickBehavior: "collapse",
    }),
  ],
  right: [],
  afterBody: [],
}
