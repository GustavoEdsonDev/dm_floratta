import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface ProductCardProps {
  id: number
  src: string
  title: string
  delay: number
}

const ProductCard = ({ id, src, title, delay }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={src} alt={title} />
        <h2>{title}</h2>
      </motion.div>
    </Link>
  )
}

export default ProductCard
