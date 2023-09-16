import React from 'react';
import './index.css';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="shop/:slug" element={<Product />} />

              <Route path="*" element={<p>404 page</p>} />
            </Route>
          </Routes>
        </CartContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
