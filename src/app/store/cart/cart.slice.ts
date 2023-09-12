import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBucketItems, fetchRecommendationItems } from "../actions/assetAction";

interface CartItem {
  ID: number,
  index: number,
  NAME: string,
  url: string,
  PRICE: number,
  quantity: number,
}


interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
  isMenuOpen: boolean;
  apiItems: any;
  recommendItems: any;
  error: any;
}

const initialState: CartState = {
  items: [],
  isCartOpen: false,
  isMenuOpen: false,
  apiItems: [],
  recommendItems: [],
  error: ''
};

const addItemsToCart = (cartItems: CartItem[], productToAdd: CartItem): CartItem[] => {
  const existingCartItems = cartItems.find(
    (cartItem) =>
      cartItem.ID === productToAdd.ID
  );

  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      {
        // console.log('cartItems', cartItem.quantity, productToAdd);
        return cartItem.ID === productToAdd.ID
        ? { ...cartItem, quantity: cartItem.quantity + productToAdd.quantity }
        : cartItem
      }
    );
  }
  return [...cartItems, { ...productToAdd }];
};

const removeItemsFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) =>
      cartItem.ID === cartItemToRemove.ID
  );
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) =>
        cartItem.ID !== cartItemToRemove.ID
    );
  }
  return cartItems.map((cartItem) =>
    cartItem.ID === cartItemToRemove.ID
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems: CartItem[], clearCartItem: CartItem): CartItem[] =>
  cartItems.filter(
    (cartItem) =>
      cartItem.ID !== clearCartItem.ID
  );

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ cart: CartItem[]; product: CartItem }>) => {
      const { cart, product } = action.payload;
      state.items = addItemsToCart(cart, product);
    },
    removeFromCart: (state, action: PayloadAction<{ cart: CartItem[]; product: CartItem }>) => {
      const { cart, product } = action.payload;
      state.items = removeItemsFromCart(cart, product);
    },
    clearItemFromCart: (state, action: PayloadAction<{ cart: CartItem[]; product: CartItem }>) => {
      const { cart, product } = action.payload;
      state.items = clearCartItem(cart, product);
    },
    setIsCartOpen: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload;
      state.isMenuOpen = false;
    },
    setIsMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
      state.isCartOpen = false;
    },
  },
  extraReducers: builder => {
    builder
    .addCase(fetchBucketItems.fulfilled, (state, action) => {
      state.apiItems = action.payload;
    })
    .addCase(fetchBucketItems.rejected, (state, action) => {
      state.error = action.payload
    })
    .addCase(fetchRecommendationItems.fulfilled, (state, action) => {
      state.recommendItems = action.payload
    })
  }
});

export const {
  addToCart,
  removeFromCart,
  clearItemFromCart,
  setIsCartOpen,
  setIsMenuOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
