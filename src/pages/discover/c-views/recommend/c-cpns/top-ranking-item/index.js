import React, { memo } from "react";
import { RankingItemWrapper } from "./style";
import { getImageSize } from "@/utils/format";
import { useDispatch } from "react-redux";
import { fetchCurrentSongAction } from "../../../../../player/store/player";

const TopRankingItem = (props) => {
  const { itemData } = props;
  //tracks不一定有值
  const { tracks = [] } = itemData;
  const dispatch = useDispatch();
  function handlePlayClick(id) {
    dispatch(fetchCurrentSongAction(id));
  }

  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getImageSize(itemData.coverImgUrl, 80)} alt="" />
          <a className="cover sprite_cover" href="/#" title={itemData.name}></a>
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <button className="sprite_02 btn play"></button>
          <button className="sprite_02 btn favor"></button>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div className="item" key={index}>
              <div className="index">{index + 1}</div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="operator">
                  <button
                    className="btn sprite_02 play"
                    onClick={() => handlePlayClick(item.id)}
                  ></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="#/discover/ranking" alt="">
          查看全部&gt;
        </a>
      </div>
    </RankingItemWrapper>
  );
};
export default memo(TopRankingItem);
