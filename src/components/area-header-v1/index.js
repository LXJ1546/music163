import React, { memo } from "react";
import { HeaderV1Wrapper } from "./style";
import { Link } from "react-router-dom";

const AreaHeaderV1 = (props) => {
  const {title="默认标题",keywords=[],moreText="更多",moreLink='/discover/songs'}=props
  return (
    <HeaderV1Wrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <Link className="more" to={moreLink}>
          {moreText}
        </Link>
        <i className="sprite_02 icon"></i>
      </div>
    </HeaderV1Wrapper>
  );
};
export default memo(AreaHeaderV1);
