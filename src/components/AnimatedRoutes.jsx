import { Route, Routes, useLocation } from 'react-router-dom';
import HomeLayout from './HomeLayout';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Product from '../pages/Product';
import { AnimatePresence } from 'framer-motion';

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:slug" element={<Product />} />

          <Route path="*" element={<p>404 page</p>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
