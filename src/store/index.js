import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counter";
import recommendReducer from "../pages/discover/c-views/recommend/store/recommend";
import playerReducer from "../pages/player/store/player";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer,
    player: playerReducer,
  },
});
export default store;
