import React, { memo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Slider } from "antd";
import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PlayerBarWrapper,
} from "./style";
import { shallowEqual, useSelector } from "react-redux";
import { getImageSize } from "@/utils/format";
import { getSongPlayUrl } from "@/utils/handle-player";
import { formatTime } from "@/utils/format";

const AppPlayerBar = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setcurrentTime] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.player.currentSong,
    }),
    shallowEqual
  );

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
        <BarControl isPlaying={isPlaying}>
          <button className="btn sprite_playbar prev"></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button className="btn sprite_playbar next"></button>
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
        <BarOperator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
    </PlayerBarWrapper>
  );
};
export default memo(AppPlayerBar);
