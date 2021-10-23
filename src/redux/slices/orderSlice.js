import { createSlice } from "@reduxjs/toolkit";
import ORDERS from "../../shared/orders.js";

const initialState = {
  items: [],
  selectedFoods: [],
  errMess: null,
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrders: (state, action) => {
      state.items = action.payload;
    },
    addOrder: (state, action) => {
      state.items.push(action.payload);
    },
    selectFoods: (state, action) => {
      state.selectedFoods.push(action.payload);
    },
  },
});

export const { getOrders, addOrder, selectFoods } = orderSlice.actions;
export default orderSlice.reducer;

export const selectAllOreders = (state) => state.orders.items;

export const fetchOrders = () => (dispatch) => {
  setTimeout(() => {
    dispatch(getOrders(ORDERS));
  }, 1000);
};
