import ProductDetail from '../components/ProductDetail';
import { motion } from 'framer-motion';

export default function Product() {
  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <ProductDetail />
    </motion.div>
  );
}
