import { shoesArr } from "../../data";
import {
  ADD_SHOES,
  CHANGE_QUANTITY,
  REMOVE_SHOES,
  VIEW_SHOES,
} from "../constant/shoes";
let initialState = {
  shoesArr: shoesArr,
  detail: {},
  cart: [],
};
export let shoesReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_SHOES: {
      state.detail = action.payload;
      return { ...state };
    }
    case ADD_SHOES: {
      let newCart = [...state.cart];
      let index = newCart.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (index !== -1) {
        newCart[index].quantity += 1;
      } else {
        let newShoes = { ...action.payload, quantity: 1 };
        newCart.push(newShoes);
      }
      state.cart = newCart;
      return { ...state };
    }
    case REMOVE_SHOES: {
      const alteredCart = state.cart.filter((ele) => ele.id !== action.payload);
      state.cart = alteredCart;
      return { ...state };
    }
    case CHANGE_QUANTITY: {
      const modifiedCart = [...state.cart];
      let index = modifiedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        modifiedCart[index].quantity =
          modifiedCart[index].quantity + action.payload.number || 1;
        // 0 || 1 = 1, falsy (0, null, NaN, "", false, undefined ==> false) vs truthy
      }
      state.cart = modifiedCart;
      return { ...state };
    }
    default:
      return state;
  }
};
