import React, { memo, useEffect } from "react";
import { RankingLeft, RankingRight, RankingWrapper } from "./style";
import { useDispatch } from "react-redux";
import TopRanking from "./c-cpns/top-ranking";
import RankingHeader from "./c-cpns/ranking-header";
import RankingList from "./c-cpns/ranking-list";
import {fetchTopRankingDataAction} from "./store/index"
const Ranking = () => {
  // 发起action
  const dispatch = useDispatch();
  useEffect(() => {
    // 拿到数据
    dispatch(fetchTopRankingDataAction());
    // eslint-disable-next-line
  }, []);
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <TopRanking />
      </RankingLeft>
      <RankingRight>
        <RankingHeader />
        <RankingList />
        right
      </RankingRight>
    </RankingWrapper>
  );
};
export default memo(Ranking);
