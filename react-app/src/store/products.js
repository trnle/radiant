const LOAD_PRODUCTS = 'products/GET_PRODUCTS';
const LOAD_ONE_PRODUCT = 'products/LOAD_ONE_PRODUCT';

const loadProducts = products => ({
  type: LOAD_PRODUCTS,
  products
})

const loadOneProduct = product => ({
  type: LOAD_ONE_PRODUCT,
  product
})

export const getProducts = () => async dispatch => {
  const res = await fetch('/api/products/');
  const data = await res.json();

  if (res.ok) dispatch(loadProducts(data));
}

export const getOneProduct = id => async dispatch => {
  const res = await fetch(`/api/products/${id}`);
  const data = await res.json();

  if (res.ok) dispatch(loadOneProduct(data));
}

const initialState = { allProducts: {}, oneProduct: {} }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state, allProducts: action.products }
    case LOAD_ONE_PRODUCT:
      return { oneProduct: action.product };
    default:
      return state
  }
}