import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? <header>{children}</header> : null
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
}

header h1 {
  margin: 0;
  flex: auto;
}
`

export default ((children?: QuartzComponent[]) => {
  if (children) {
    const HeaderWithChildren: QuartzComponent = (props: QuartzComponentProps) => {
      return (
        <Header {...props}>
          {children.map((Child) => (
            <Child {...props} />
          ))}
        </Header>
      )
    }
    // Forward the CSS styles to the wrapped component
    HeaderWithChildren.css = Header.css
    return HeaderWithChildren
  }

  return Header
}) satisfies QuartzComponentConstructor
