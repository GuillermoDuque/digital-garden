import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  const climbersPath = "/digital-garden/static/climbers.webp"

  return (
    <header>
      <img src={climbersPath} alt="Climbers" className="header-image" />
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

.header-image {
  width: 100%; /* Ajusta según necesidad */
  max-height: 250px; /* Evita imágenes demasiado grandes */
  object-fit: cover; /* Mantiene proporciones */
  display: block;
}
`

export default (() => Header) satisfies QuartzComponentConstructor
