import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import TopBanner from "./c-cpns/top-banner";
import { fetchBannerDataAction } from "./store/recommend";
const Recommend = () => {
  // 发起action
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <TopBanner />
      <h2>推荐</h2>
    </div>
  );
};
export default memo(Recommend);
