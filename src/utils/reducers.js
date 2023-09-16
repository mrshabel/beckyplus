export function cartReducer(state, action) {
  switch (action.type) {
    case 'cart/add':
      console.log('added');
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case 'cart/update':
      return {
        ...state,
        cart: state.cart.map(product =>
          product.id === action.payload.id
            ? { ...product, quantity: action.payload.quantity }
            : product
        ),
      };

    case 'cart/delete':
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload),
      };
    case 'cart/clear':
      return { ...state, cart: [] };

    default:
      return state;
  }
}
