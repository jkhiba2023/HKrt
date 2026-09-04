const initialState = {
  cartCount: null,
  cartItem: [],
}

function cartReducer(state = initialState, action) {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cartCount: state.cartCount + 1,
      cartItem: addToCart(state.cartItem, action.payload)
    }
  }

  return state;
}

function addToCart(arr, productDetails) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === productDetails.id) {
      arr[i].qty++;
      return arr;
    }

  }

  arr.push(productDetails)
  return arr;

}

export default cartReducer;