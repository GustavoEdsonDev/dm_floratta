import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Catalog from './components/Catalog'
import ProductCard from './components/ProductCard'
import ProductDetail from './components/ProductDetail'
import { products } from './data/products'

const CatalogPage = () => {
  return (
    <Catalog>
      {products.map((product, i) => (
        <ProductCard
          key={product.id}
          id={product.id}
          src={product.src}
          title={product.title}
          delay={i * 0.2}
        />
      ))}
    </Catalog>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
