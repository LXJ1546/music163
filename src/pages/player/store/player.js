import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSongDetail, getSongLyric } from "../sevice/player";
import { parseLyric } from "../../../utils/parse-lyric";

export const fetchCurrentSongAction = createAsyncThunk(
  "currentSong",
  (id, { dispatch }) => {
    // 获取歌曲信息
    getSongDetail(id).then((res) => {
      if (!res.songs.length) return;
      const song = res.songs[0];
      // 将song放到currentSong当中
      dispatch(changeCurrentSongAction(song));
    });
    // 获取歌词数据
    getSongLyric(id).then((res) => {
      const lyricString = res.lrc.lyric;
      // 解析歌词成对象
      const lyrics = parseLyric(lyricString);
      dispatch(changeLyricsAction(lyrics));
    });
  }
);

const playerSlice = createSlice({
  name: "player",
  initialState: {
    currentSong: {
      name: "寂寞沙洲冷",
      id: 189688,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 6652,
          name: "周传雄",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "600902000005651425",
      fee: 8,
      v: 653,
      crbt: null,
      cf: "",
      al: {
        id: 19174,
        name: "星空下的传说",
        picUrl:
          "https://p2.music.126.net/V8Bf0_UZ5I5wEGdJlir1Sw==/109951168622939011.jpg",
        tns: [],
        pic_str: "109951168622939011",
        pic: 109951168622939000,
      },
      dt: 277385,
      h: {
        br: 320000,
        fid: 0,
        size: 11097905,
        vd: -44870,
        sr: 44100,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6658760,
        vd: -42253,
        sr: 44100,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4439188,
        vd: -40573,
        sr: 44100,
      },
      sq: {
        br: 1619203,
        fid: 0,
        size: 56142966,
        vd: -44922,
        sr: 44100,
      },
      hr: null,
      a: null,
      cd: "1",
      no: 3,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 17179877376,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 653,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 5307845,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 7001,
      publishTime: 1117555200000,
    },
    lyrics: [],
    lyricIndex: -1,
  },
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload;
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload;
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload;
    },
  },
});

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
} = playerSlice.actions;
export default playerSlice.reducer;
