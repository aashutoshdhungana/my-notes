import { classNames } from "../util/lang"
import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageImage({ displayClass, fileData, cfg }: QuartzComponentProps) {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "page-image")}>
      <img
        src={`${baseDir}/static/icon.png`}
        alt="Page Image"
        style="width:50%; display:block; margin: 0;"
      />
    </div>
  )
}

export default (() => PageImage) satisfies QuartzComponentConstructor
