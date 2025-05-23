import { CartItem } from "../types/cartType";

export const sumCartItemMrpPrice = (cartItems: CartItem[]) => {
     return cartItems.reduce((acc, item) => acc + item.mrpPrice * item.quantity, 0);
};

export const sumCartItemSellingPrice = (cartItem: CartItem[]) => {
     return cartItem.reduce((acc, item) => acc + item.sellingPrice * item.quantity, 0);
};
