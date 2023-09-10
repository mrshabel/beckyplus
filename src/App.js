import React from 'react';
import './index.css';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
