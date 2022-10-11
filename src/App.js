import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const myValueSlice = createSlice({
  name: "myValue",
  initialState: 150,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    }
  }
});

export const { increment, decrement } = myValueSlice.actions;

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    }
  }
});

export const { add, remove } = itemsSlice.actions;

console.log(myValueSlice);

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    items: itemsSlice.reducer
  }
});
