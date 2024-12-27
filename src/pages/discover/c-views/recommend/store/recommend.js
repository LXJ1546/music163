import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getArtistList,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail,
} from "../service/recommend";

// export const fetchBannerDataAction = createAsyncThunk(
//   "banners",
//   async (arg, { dispatch }) => {
//     const res = await getBanners();
//     dispatch(changeBannersAction(res.banners));
//   }
// );

// export const fetchHotRecommendAction = createAsyncThunk(
//   "hotRecommend",
//   async (arg, { dispatch }) => {
//     const res = await getHotRecommend(8);
//     dispatch(changeHotRecommendsAction(res.result));
//   }
// );

// export const fetchNewAlbumAction = createAsyncThunk(
//   "newAlbum",
//   async (arg, { dispatch }) => {
//     const res = await getNewAlbum();
//     dispatch(changeNewAlbumsAction(res.albums));
//   }
// );
export const fetchRecommendDataAction = createAsyncThunk(
  "fetchdata",
  (_, { dispatch }) => {
    getBanners().then((res) => {
      dispatch(changeBannersAction(res.banners));
    });
    getHotRecommend(8).then((res) => {
      dispatch(changeHotRecommendsAction(res.result));
    });
    getNewAlbum().then((res) => {
      dispatch(changeNewAlbumsAction(res.albums));
    });
    getArtistList(5).then((res) => {
      dispatch(changeSettleSingersAction(res.artists));
    });
  }
);
const rankingIds = [19723756, 3779629, 2884035];
export const fetchRakingDataAction = createAsyncThunk(
  "rankingData",
  (_, { dispatch }) => {
    // for (const id of rankingIds) {
    //   getPlaylistDetail(id).then((res) => {
    //     switch(id){
    //       case 19723756:
    //         console.log('飙升榜的数据',res);
    //         break
    //       case 3779629:
    //         console.log('新歌榜的数据',res);
    //         break
    //       case 2884035:
    //         console.log('原创榜的数据',res);
    //         break
    //       default:
    //         console.log("")
    //     }

    //     console.log(res);
    //   });
    // }
    const promises = [];
    for (const id of rankingIds) {
      promises.push(getPlaylistDetail(id));
    }
    // filter先判断是否有值
    Promise.all(promises).then((res) => {
      const playlists = res
        .filter((item) => item.playlist)
        .map((item) => item.playlist);
      dispatch(changeRankingAction(playlists));
    });
  }
);

const recommendSlice = createSlice({
  name: "recommend",
  initialState: {
    banners: [],
    hotRecommends: [],
    newAlbums: [],
    rankings: [],
    settleSingers: [],
  },
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    },
    changeHotRecommendsAction(state, { payload }) {
      state.hotRecommends = payload;
    },
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload;
    },
    changeRankingAction(state, { payload }) {
      state.rankings = payload;
    },
    changeSettleSingersAction(state, { payload }) {
      // 返回一个新的状态对象，确保不修改原始状态中的引用
      return {
        ...state,
        settleSingers: payload,
      };
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchBannerDataAction.pending, () => {
  //         console.log("pending");
  //       })
  //       .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //         state.banners = payload;
  //       })
  //       .addCase(fetchBannerDataAction.rejected, () => {
  //         console.log("rejected");
  //       });
  //   },
});
export const {
  changeBannersAction,
  changeHotRecommendsAction,
  changeNewAlbumsAction,
  changeRankingAction,
  changeSettleSingersAction,
} = recommendSlice.actions;
export default recommendSlice.reducer;
