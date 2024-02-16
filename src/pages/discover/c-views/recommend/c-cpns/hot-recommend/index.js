import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { HotWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import SongMenuItem from "@/components/song-menu-item";

const HotRecommend = () => {
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends,
    }),
    shallowEqual
  );
  return (
    <HotWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return (
            <SongMenuItem key={item.id} itemData={item}/>
          );
        })}
      </div>
    </HotWrapper>
  );
};
export default memo(HotRecommend);
