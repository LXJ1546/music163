import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { formatMonthDay } from "@/utils/format";
import { RankingHeaderWrapper } from "./style";
import SongOperationBar from "@/components/song-operation-bar";
const RankingHeader = () => {
  const { rankingList, listIndex } = useSelector(
    (state) => ({
      rankingList: state.ranking.list,
      listIndex: state.ranking.listIndex,
    }),
    shallowEqual
  );
  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={rankingList[listIndex]?.coverImgUrl} alt="" />
        <span className="sprite_cover msk"></span>
      </div>
      <div className="info">
        <div className="title">{rankingList[listIndex]?.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>
            最近更新：{formatMonthDay(rankingList[listIndex]?.updateTime)}
          </div>
          <div className="update">
            {`(${rankingList[listIndex]?.updateFrequency})`}
          </div>
        </div>
        <SongOperationBar
          favorTitle={`(${rankingList[listIndex]?.subscribedCount})`}
        />
      </div>
    </RankingHeaderWrapper>
  );
};
export default memo(RankingHeader);
