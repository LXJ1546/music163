import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { formatMonthDay } from "@/utils/format";
import { RankingHeaderWrapper } from "./style";
import SongOperationBar from "@/components/song-operation-bar";
const RankingHeader = () => {
  const { rankingPlayList } = useSelector(
    (state) => ({
      rankingPlayList: state.ranking.playList,
    }),
    shallowEqual
  );
  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={rankingPlayList.coverImgUrl} alt="" />
        <span className="sprite_cover msk"></span>
      </div>
      <div className="info">
        <div className="title">{rankingPlayList.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(rankingPlayList.updateTime)}</div>
          <div className="update">(刚刚更新)</div>
        </div>
        <SongOperationBar
          favorTitle={`(${rankingPlayList.subscribedCount})`}
          shareTitle={`(${rankingPlayList.shareCount})`}
          downloadTitle="下载"
          commentTitle={`(${rankingPlayList.commentCount})`}
        />
      </div>
    </RankingHeaderWrapper>
  );
};
export default memo(RankingHeader);
