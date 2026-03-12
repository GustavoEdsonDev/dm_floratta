import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products } from '../data/products'
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  
  const product = products.find(p => p.id === parseInt(id || '0'))

  if (!product) {
    return (
      <div className="detail-container">
        <p>Produto não encontrado</p>
        <button onClick={() => navigate('/')}>Voltar</button>
      </div>
    )
  }

  return (
    <div className="detail-container">
      <motion.button
        className="back-button"
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Voltar
      </motion.button>

      <motion.div
        className="detail-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="detail-image-wrapper">
          <motion.img
            src={product.src}
            alt={product.title}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="detail-info">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {product.title}
          </motion.h1>

          <motion.p
            className="description"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {product.description}
          </motion.p>

          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => window.open('https://wa.me/c/553181077170', '_blank')}
          >
            Solicitar via WhatsApp
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default ProductDetail
