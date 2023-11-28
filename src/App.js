import React from 'react';
import './index.css';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import ScrollTop from './components/ScrollTop';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <BrowserRouter>
      {/* <ScrollTop /> */}

      <ChakraProvider theme={theme}>
        <CartContextProvider>
          <AnimatedRoutes />
        </CartContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
