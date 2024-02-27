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
    playSongList: [
      {
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
