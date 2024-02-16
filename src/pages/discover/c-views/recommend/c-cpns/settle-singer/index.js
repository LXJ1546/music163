import React, { memo } from "react";
import { SettleSingerWrapper } from "./style";
import AreaHeaderV2 from "@/components/area-header-v2";
import { useSelector } from "react-redux";
import { getImageSize } from "@/utils/format";

const SettleSinger = () => {
  const { settleSingers } = useSelector((state) => ({
    settleSingers: state.recommend.settleSingers,
  }));
  return (
    <SettleSingerWrapper>
      <AreaHeaderV2
        title="入驻歌手"
        moreText="查看全部&gt;"
        moreLink="#/discover/artist"
      />
      <div className="artists">
        {settleSingers.map((item) => {
          return (
            <a href="#/discover/artist" className="item" key={item.id}>
              <img src={getImageSize(item.picUrl, 62)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="alia">{item.alias.join(" ")}</div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="apply-for">
        <a href="#/">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  );
};
export default memo(SettleSinger);
