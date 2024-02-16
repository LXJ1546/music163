import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import TopBanner from "./c-cpns/top-banner";
import {
  fetchRakingDataAction,
  fetchRecommendDataAction,
} from "./store/recommend";
import { RecommendWrapper } from "./style";
import { RecommendSection } from "./style";
import { RecommendLeft } from "./style";
import { RecommendRight } from "./style";
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";
import TopRanking from "./c-cpns/top-ranking";
import UserLogin from "./c-cpns/user-login";
import SettleSinger from "./c-cpns/settle-singer";
import HotAnchor from "./c-cpns/hot-anchor";
const Recommend = () => {
  // 发起action
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecommendDataAction());
    dispatch(fetchRakingDataAction());
    // eslint-disable-next-line
  }, []);
  return (
    <RecommendWrapper>
      <TopBanner />
      <RecommendSection className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin/>
          <SettleSinger/>
          <HotAnchor/>
        </RecommendRight>
      </RecommendSection>
    </RecommendWrapper>
  );
};
export default memo(Recommend);
