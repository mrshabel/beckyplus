import { useEffect, createContext, useReducer, useContext } from 'react';
import { cartReducer } from '../utils/reducers';

const cartFromLocalStorage = JSON.parse(
  localStorage.getItem('becky.bag') || '[]'
);

const CartContext = createContext();
export default function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: cartFromLocalStorage,
  });

  useEffect(() => {
    localStorage.setItem('becky.bag', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
