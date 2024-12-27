import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counter";
import recommendReducer from "../pages/discover/c-views/recommend/store/recommend";
import playerReducer from "../pages/player/store/player";
import rankingReducer from "../pages/discover/c-views/ranking/store/index";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer,
    player: playerReducer,
    ranking: rankingReducer,
  },
});
export default store;
