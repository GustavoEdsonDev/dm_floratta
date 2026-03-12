import type { ReactNode } from 'react'

interface CatalogProps {
  children: ReactNode
}

const Catalog = ({ children }: CatalogProps) => {
  return (
    <div className="catalog-container">
      <h1>D&M Floratta</h1>
      <div className="image-grid">
        {children}
      </div>
    </div>
  )
}

export default Catalog
