import React, { memo } from "react";
import { HotAnchorWrapper } from "./style";
import AreaHeaderV2 from "@/components/area-header-v2";
import { hotRadios } from "@/assets/data/local_data";

const HotAnchor = () => {
  return (
    <HotAnchorWrapper>
      <AreaHeaderV2 title="热门主播" />
      <div className="anchors">
        {hotRadios.map((item) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="#/" className="image">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position">{item.position}</div>
              </div>
            </div>
          );
        })}
      </div>
    </HotAnchorWrapper>
  );
};
export default memo(HotAnchor);
