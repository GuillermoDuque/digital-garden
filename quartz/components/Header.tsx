import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <header>
      {children.length > 0 ? children : null}
    </header>
  )
}
Header.css = `
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
}

`

export default (() => Header) satisfies QuartzComponentConstructor
