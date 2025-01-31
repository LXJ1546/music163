import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSongDetail, getSongLyric } from "../sevice/player";
import { parseLyric } from "../../../utils/parse-lyric";

export const fetchCurrentSongAction = createAsyncThunk(
  "currentSong",
  (id, { dispatch, getState }) => {
    // 准备播放歌曲时需要判断列表中是否已经存在该歌曲的信息
    const playSongList = getState().player.playSongList;
    const findIndex = playSongList.findIndex((item) => item.id === id);
    if (findIndex === -1) {
      // 获取歌曲信息
      getSongDetail(id).then((res) => {
        if (!res.songs.length) return;
        const song = res.songs[0];
        const newPlaySongList = [...playSongList];
        newPlaySongList.push(song);
        // 将song放到currentSong当中
        dispatch(changeCurrentSongAction(song));
        dispatch(changePlaySongListAction(newPlaySongList));
        dispatch(changePlaySongIndexAction(newPlaySongList.length - 1));
      });
    } else {
      const song = playSongList[findIndex];
      dispatch(changeCurrentSongAction(song));
      dispatch(changePlaySongIndexAction(findIndex));
    }

    // 获取歌词数据
    getSongLyric(id).then((res) => {
      const lyricString = res.lrc.lyric;
      // 解析歌词成对象
      const lyrics = parseLyric(lyricString);
      dispatch(changeLyricsAction(lyrics));
    });
  }
);

export const changeMusicAction = createAsyncThunk(
  "changeMusic",
  (isNext, { dispatch, getState }) => {
    // 获取新歌曲索引
    // 先拿到模式和当前歌曲的索引，根据模式计算下一首歌曲的索引
    const playMode = getState().player.playMode;
    const songIndex = getState().player.playSongIndex;
    const songList = getState().player.playSongList;
    let newIndex = songIndex;
    if (playMode === 1) {
      // 随机播放模式
      newIndex = Math.floor(Math.random() * songList.length);
    } else {
      newIndex = isNext ? songIndex + 1 : songIndex - 1;
      if (newIndex > songList.length - 1) {
        newIndex = 0;
      }
      if (newIndex < 0) {
        newIndex = songList.length - 1;
      }
    }
    const song = songList[newIndex];
    dispatch(changeCurrentSongAction(song));
    dispatch(changePlaySongIndexAction(newIndex));
    // 获取歌词数据
    getSongLyric(song.id).then((res) => {
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
    currentSong: {},
    playSongList: [
      {
        name: "Promise",
        id: 18861490,
        pst: 0,
        t: 0,
        ar: [
          {
            id: 15871,
            name: "山岡晃",
            tns: [],
            alias: [],
          },
        ],
        alia: ["PS2游戏《寂静岭2》玛利亚结局片尾曲"],
        pop: 100,
        st: 0,
        rt: "",
        fee: 0,
        v: 36,
        crbt: null,
        cf: "",
        al: {
          id: 1727601,
          name: "SILENT HILL 2 ORIGINAL SOUNDTRACKS",
          picUrl:
            "https://p2.music.126.net/QbadLxlMMmb4iStV4JnKLA==/6664139976590904.jpg",
          tns: [],
          pic: 6664139976590904,
        },
        dt: 279973,
        h: {
          br: 320000,
          fid: 0,
          size: 11201349,
          vd: -48783,
          sr: 44100,
        },
        m: {
          br: 192000,
          fid: 0,
          size: 6720826,
          vd: -46233,
          sr: 44100,
        },
        l: {
          br: 128000,
          fid: 0,
          size: 4480565,
          vd: -44620,
          sr: 44100,
        },
        sq: {
          br: 903069,
          fid: 0,
          size: 31604419,
          vd: -48776,
          sr: 44100,
        },
        hr: null,
        a: null,
        cd: "1",
        no: 30,
        rtUrl: null,
        ftype: 0,
        rtUrls: [],
        djId: 0,
        copyright: 2,
        s_id: 0,
        mark: 17180000256,
        originCoverType: 1,
        originSongSimpleData: null,
        tagPicList: null,
        resourceState: true,
        version: 36,
        songJumpInfo: null,
        entertainmentTags: null,
        awardTags: null,
        displayTags: null,
        single: 0,
        noCopyrightRcmd: null,
        mv: 5307811,
        rtype: 0,
        rurl: null,
        mst: 9,
        cp: 476012,
        publishTime: 1002038400000,
      },
      {
        name: "阆中之恋",
        id: 28830388,
        pst: 0,
        t: 0,
        ar: [
          {
            id: 10371,
            name: "姚贝娜",
            tns: [],
            alias: [],
          },
          {
            id: 4942,
            name: "沙宝亮",
            tns: [],
            alias: [],
          },
        ],
        alia: ["音乐电影《美在中国》系列之《阆中之恋》主题曲"],
        pop: 95,
        st: 0,
        rt: null,
        fee: 0,
        v: 51,
        crbt: null,
        cf: "",
        al: {
          id: 2901134,
          name: "阆中之恋",
          picUrl:
            "https://p1.music.126.net/n7KNGHEatl9KWWERXNHWXw==/5951656441558997.jpg",
          tns: [],
          pic: 5951656441558997,
        },
        dt: 277028,
        h: {
          br: 320000,
          fid: 0,
          size: 11082231,
          vd: -50191,
          sr: 44100,
        },
        m: {
          br: 192000,
          fid: 0,
          size: 6649356,
          vd: -47576,
          sr: 44100,
        },
        l: {
          br: 128000,
          fid: 0,
          size: 4432919,
          vd: -45888,
          sr: 44100,
        },
        sq: null,
        hr: null,
        a: null,
        cd: "1",
        no: 1,
        rtUrl: null,
        ftype: 0,
        rtUrls: [],
        djId: 0,
        copyright: 2,
        s_id: 0,
        mark: 0,
        originCoverType: 1,
        originSongSimpleData: null,
        tagPicList: null,
        resourceState: true,
        version: 51,
        songJumpInfo: null,
        entertainmentTags: null,
        awardTags: null,
        single: 0,
        noCopyrightRcmd: null,
        mv: 0,
        rtype: 0,
        rurl: null,
        mst: 9,
        cp: 0,
        publishTime: 1356969600000,
      },
    ],
    playSongIndex: -1,
    playMode: 0,
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
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload;
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload;
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload;
    },
  },
});

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlaySongIndexAction,
  changePlaySongListAction,
  changePlayModeAction,
} = playerSlice.actions;
export default playerSlice.reducer;
