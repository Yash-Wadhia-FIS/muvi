import { createSelector } from "reselect";
import { RootState } from "../rootReducer"; // Import your RootState type from your root reducer file

const selectorCartReducer = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectorCartReducer],
  (cart) => cart.items
);

export const selectCartAPIItems = createSelector(
  [selectorCartReducer],
  (cart) => cart.apiItems
);

export const selectRecommendationItems = createSelector(
  [selectorCartReducer],
  (cart) => {
    // Object.values(cart.recommendItems?.recommendations).reduce((acc: any, category) => acc.concat(category))
    const result = [];
    const input = cart.recommendItems?.recommendations;
    for (const category in input) {
      const items = input[category];
      for (const item of items) {
        // Create an object with 'item' and 'category' properties
        const newItem = { item, category };
        // Push the object to the result array
        result.push(newItem);
      }
    }
    return result;
  }
)

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems?.reduce((total, cartItem) => total + cartItem.quantity, 0) || 0
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems?.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.PRICE,
    0
  ) || 0
);

export const selectIsCartOpen = createSelector(
  [selectorCartReducer],
  (cart) => cart.isCartOpen
);

export const selectIsMenuOpen = createSelector(
  [selectorCartReducer],
  (cart) => cart.isMenuOpen
);
