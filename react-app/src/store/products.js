const LOAD_PRODUCTS = 'products/GET_PRODUCTS';

const loadProducts = products => ({
  type: LOAD_PRODUCTS,
  products
})

export const getProducts = () => async dispatch => {
  const res = await fetch('/api/products/');
  const data = await res.json();

  if (res.ok) dispatch(loadProducts(data));
}

// const initialState = {productInfo: null}
const initialState = {}

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // case LOAD_PRODUCTS:
    //   return {productInfo: action.products}
    case LOAD_PRODUCTS:
      newState = {}
      action.products.forEach((product) => {
        newState[product.id] = product
      })
      return { ...newState, ...state }
    default:
      return state
  }
}