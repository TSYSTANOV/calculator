import { configureStore } from "@reduxjs/toolkit";
import PlaygroundSlice from "./slices/PlaygroundSlice";

export const store = configureStore({
  reducer: {
    play: PlaygroundSlice,
  },
});
