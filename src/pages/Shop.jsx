import ProductsHeader from '../components/ProductsHeader';
import ProductList from '../components/ProductsList';
import { motion } from 'framer-motion';

export default function Shop() {
  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <ProductsHeader />
      <ProductList />
    </motion.div>
  );
}
