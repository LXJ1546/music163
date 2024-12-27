import React, { memo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { message, Slider, Tooltip } from "antd";
import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PlayerBarWrapper,
} from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getImageSize } from "@/utils/format";
import { getSongPlayUrl } from "@/utils/handle-player";
import { formatTime } from "@/utils/format";
import {
  changeLyricIndexAction,
  changeMusicAction,
  changePlayModeAction,
} from "../store/player";

const AppPlayerBar = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setcurrentTime] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  // 音量控制，显示与隐藏状态
  const [isVisible, setIsVisible] = useState(false); // 初始状态为可见
  const { currentSong, lyrics, lyricIndex, playMode } = useSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode,
    }),
    shallowEqual
  );
  const modeText = ["循环", "随机", "单曲循环"];
  const visibilityStyle = { visibility: isVisible ? "visible" : "hidden" }; // 根据isVisible状态设置visibility属性
  const dispatch = useDispatch();
  /** 组件内的副作用操作 */
  useEffect(() => {
    audioRef.current.src = getSongPlayUrl(currentSong.id);
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        console.log("歌曲播放成功");
      })
      .catch((err) => {
        setIsPlaying(false);
        console.log("歌曲播放失败", err);
      });
    //获取歌曲总时间
    setDuration(currentSong.dt);
  }, [currentSong]);

  function handlePlayBtnClick() {
    isPlaying
      ? audioRef.current.pause()
      : audioRef.current.play().catch(() => setIsPlaying(false));
    setIsPlaying(!isPlaying);
  }

  /** 音乐播放进度处理 */
  function handleTimeUpdate() {
    // 获取当前播放时间
    const currentTime = audioRef.current.currentTime * 1000;
    // 计算当前歌曲进度
    if (!isSliding) {
      const progress = (currentTime / duration) * 100;
      setProgress(progress);
      setcurrentTime(currentTime);
    }

    // 根据当前时间匹配对应的歌词
    let index = lyrics.length - 1;
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i];
      if (lyric.alltime > currentTime) {
        index = i - 1;
        break;
      }
    }

    // 匹配上歌词的索引后保存index
    if (lyricIndex === index || index === -1) return;
    dispatch(changeLyricIndexAction(index));
    message.open({
      content: lyrics[index].text,
      key: "lyric",
      duration: 0,
    });
  }

  // 歌曲切换
  function handleChangeMusic(isNext = true) {
    dispatch(changeMusicAction(isNext));
  }

  // 歌曲播放结束后切换
  function handleTimeEnded() {
    if (playMode === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      handleChangeMusic(true);
    }
  }

  // 进度条点击
  function handleSliderChanged(value) {
    // 获取点击位置的时间
    const currentTime = (value / 100) * duration;
    // 设置当前播放的时间
    audioRef.current.currentTime = currentTime / 1000;
    setcurrentTime(currentTime);
    setProgress(value);
    setIsSliding(false);
  }

  // 音量键点击
  function handleVolumeClick() {
    setIsVisible(!isVisible);
  }

  // 音量键调整音量
  function handleVolumeChange(value) {
    audioRef.current.volume=value*0.01
  }

  // 播放模式切换
  function handleChangePlayMode() {
    let newMode = playMode + 1;
    if (newMode > 2) {
      newMode = 0;
    }
    dispatch(changePlayModeAction(newMode));
  }

  // 进度条拖拽
  function handleSliderChanging(value) {
    // 目前处于拖拽状态
    setIsSliding(true);
    // 设置进度条进度
    setProgress(value);
    // 获取拖拽位置的时间
    const currentTime = (value / 100) * duration;
    setcurrentTime(currentTime);
  }

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl $isPlaying={isPlaying}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => handleChangeMusic(false)}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => handleChangeMusic()}
          ></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/palyer">
            <img
              className="image"
              src={getImageSize(currentSong?.al?.picUrl, 34)}
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              {/* slider组件 */}
              <Slider
                value={progress}
                step={0.2}
                tooltip={{ formatter: null }}
                onAfterChange={handleSliderChanged}
                onChange={handleSliderChanging}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator $playMode={playMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <div
              className="volumeSlider sprite_playbar"
              style={visibilityStyle}
            >
              <Slider min={0} max={100} vertical={true} defaultValue={100} onChange={handleVolumeChange}/>
            </div>
            <button
              className="btn sprite_playbar volume"
              onClick={handleVolumeClick}
            ></button>
            <Tooltip title={modeText[playMode]} showArrow={false}>
              <button
                className="btn sprite_playbar mode"
                onClick={handleChangePlayMode}
              ></button>
            </Tooltip>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleTimeEnded}
      />
    </PlayerBarWrapper>
  );
};
export default memo(AppPlayerBar);
