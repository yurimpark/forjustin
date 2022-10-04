import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let wish = createSlice({
  name: "wish",
  initialState: [
    {
      id: 0,
      title: "The Umbrella Academy 3",
      role: "Ben Hargreeves",
      released: 2022,
      count: 0,
    },
    {
      id: 1,
      title: "The Umbrella Academy 2",
      role: "Ben Hargreeves",
      released: 2020,
      count: 0,
    },
  ],
  reducers: {
    addCount(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id == action.payload;
      });
      state[번호].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { addCount, addItem } = wish.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    wish: wish.reducer,
  },
});
