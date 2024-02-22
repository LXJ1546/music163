import React, { memo } from "react";
import { TopRankingWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import { shallowEqual, useSelector } from "react-redux";
import TopRankingItem from "../top-ranking-item";
const TopRanking = () => {
  const { rankings=[] } = useSelector(
    (state) => ({
      rankings: state.recommend.rankings,
    }),
    shallowEqual
  );
  return (
    <TopRankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {rankings.map((item) => {
          return <TopRankingItem key={item.id} itemData={item} />;
        })}
      </div>
    </TopRankingWrapper>
  );
};
export default memo(TopRanking);
