const LOAD_PRODUCTS = 'products/GET_PRODUCTS';
const LOAD_ONE_PRODUCT = 'products/LOAD_ONE_PRODUCT';
const CREATE_PRODUCT = 'products/ADD_PRODUCT';

const loadProducts = products => ({
  type: LOAD_PRODUCTS,
  products
})

const loadProduct = product => ({
  type: LOAD_ONE_PRODUCT,
  product
})

const createProduct = product => ({
  type: CREATE_PRODUCT,
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

  if (res.ok) dispatch(loadProduct(data));
}

export const createOneProduct = data => async dispatch => {
  const res = await fetch('/api/products/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data
    }),
  });
  const data = await res.json();

  if (res.ok) dispatch(createProduct(data));
}

const initialState = { allProducts: {}, oneProduct: {}, newProduct: {} }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state, allProducts: action.products }
    case LOAD_ONE_PRODUCT:
      return { oneProduct: action.product };
    case CREATE_PRODUCT:
      return { ...state, newProduct: action.product}
    default:
      return state
  }
}