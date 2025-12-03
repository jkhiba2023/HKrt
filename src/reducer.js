const initialState = {
  cartQuantity: null,
  cartProducts: []
}

export function storeReducer(state = initialState, action) {
  if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      cartQuantity: state.cartQuantity + 1,
      cartProducts: [...state.cartProducts, action.payload]
    }

  } else {
    return state
  }
}