import { Divider } from '@chakra-ui/react';
import Hero from '../components/Hero';
import Popular from '../components/Popular';
import Featured from '../components/Featured';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <Popular />
      <Divider className="my-8" />
      <Featured />
    </motion.div>
  );
}
