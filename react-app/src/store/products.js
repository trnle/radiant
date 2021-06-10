const LOAD_PRODUCTS = 'products/GET_PRODUCTS';
const LOAD_ONE_PRODUCT = 'products/LOAD_ONE_PRODUCT';
const CREATE_PRODUCT = 'products/ADD_PRODUCT';
const UPDATE_PRODUCT = 'products/UPDATE_PRODUCT';
const DELETE_PRODUCT = 'products/DELETE_PRODUCT';

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

const updateProduct = product => ({
  type: UPDATE_PRODUCT,
  product
})

const deleteProduct = product => ({
  type: DELETE_PRODUCT,
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

export const createOneProduct = productData => async dispatch => {
  const { productName, brandName, skincareStep, target, checkAM, checkPM, description, directions, precautions, ingredients, productImg, userId } = productData
  const res = await fetch('/api/products/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      product_name: productName,
      brand_name: brandName,
      skincare_step: skincareStep,
      target,
      am_use: checkAM,
      pm_use: checkPM,
      description,
      directions,
      precautions,
      ingredients,
      img_url: productImg,
      user_id: userId
    }),
  });
  const product = await res.json();

  if (res.ok) dispatch(createProduct(product));
  return product
}

export const updateOneProduct = productData => async dispatch => {
  const { productName, brandName, skincareStep, target, checkAM, checkPM, description, directions, precautions, ingredients, productImg, userId, productId } = productData
  const res = await fetch(`/api/products/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      product_name: productName,
      brand_name: brandName,
      skincare_step: skincareStep,
      target,
      am_use: checkAM,
      pm_use: checkPM,
      description,
      directions,
      precautions,
      ingredients,
      img_url: productImg,
      user_id: userId
    }),
  });
  const product = await res.json();
  if (!res.ok) throw res;

  dispatch(updateProduct(product));
  dispatch(getOneProduct(productId));

  return product
}

export const deleteOneProduct = productId => async dispatch => {
  const res = await fetch(`/api/products/${productId}`, {
    method: 'DELETE',
  })
  
  if (!res.ok) throw res;
  dispatch(deleteProduct(productId))
}

const initialState = { allProducts: {}, oneProduct: {}, newProduct: {} }

export default function reducer(state = initialState, action) {
  let newState = {}
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state, allProducts: action.products }
    case LOAD_ONE_PRODUCT:
      return { ...state, oneProduct: action.product }
    case CREATE_PRODUCT:
      return { ...state, newProduct: action.product }
    case UPDATE_PRODUCT:
      newState = { ...state, [action.product.id]: action.product }
      return newState
    case DELETE_PRODUCT:
      newState = { ...state }
      delete newState[action.product]
      return newState
    default:
      return state
  }
}