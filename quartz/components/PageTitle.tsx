import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const titleSplits: string[] = []
  title.split("||").forEach((part, index) => {
    titleSplits[index] = part.trim()
  })
  const baseDir = pathToRoot(fileData.slug!)
  const pg_title = titleSplits[0]
  const pg_subtitle = titleSplits[1] ? titleSplits[1] : ""
  const pg_title_first = titleSplits[0].split(" ")[0]
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="title-first">
        {pg_title_first}
      </a>
      <a href={baseDir} class="title-full">
        {pg_title}
      </a>
      {pg_subtitle && <span class="title-subtext"> {pg_subtitle}</span>}
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
