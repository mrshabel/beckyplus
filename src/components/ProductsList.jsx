import { Box } from '@chakra-ui/react';
import { data } from '../data/data';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

export default function ProductList() {
  return (
    <main className="mt-5 grid gap-5 place-items-center grid-cols-2 md:grid-cols-4">
      {data.map((product, index) => (
        <Box
          key={index}
          as={motion.div}
          initial={{ opacity: 0, filter: 'blur(2px)' }}
          animate={{ opacity: 1, filter: 'blur(0)' }}
          transition="0.2s linear"
        >
          <ProductCard
            image={product.image}
            title={product.name}
            price={product.price}
            slug={product.slug}
            height="350px"
          />
        </Box>
      ))}
    </main>
  );
}
