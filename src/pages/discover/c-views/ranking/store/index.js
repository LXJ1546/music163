import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRanking, getRankingList } from "../service/index";

// 创建异步thunk action函数
export const fetchTopRankingDataAction = createAsyncThunk(
  "ranking/rankingdata",
  (_, { dispatch }) => {
    getRanking().then((res) => {
      dispatch(changeRankingAction(res));
    });
  }
);
// 创建异步thunk action函数，用于获取和更新拿到的排行榜详细数据(Header和List部分)
export const fetchPlayListDataAction = createAsyncThunk(
  "ranking/plyalist",
  (id, { dispatch }) => {
    getRankingList(id).then((res) => {
      dispatch(changePlayListAction(res));
    });
  }
);
const rankingSlice = createSlice({
  name: "ranking",
  initialState: {
    list: [],
    playList: {},
    listIndex: 0,
  },
  reducers: {
    changeRankingAction(state, { payload }) {
      state.list = payload.list;
    },
    changePlayListAction(state, { payload }) {
      state.playList = payload.playlist;
    },
    changeListIndexAction(state, { payload }) {
      state.listIndex = payload;
    },
  },
});
export const {
  changeRankingAction,
  changePlayListAction,
  changeListIndexAction,
} = rankingSlice.actions;
export default rankingSlice.reducer;
