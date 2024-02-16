import React, { memo } from "react";
import { HeaderV2Wrapper } from "./style";



const AreaHeaderV2 = (props) => {
    const {title="默认标题",moreText="",moreLink=""}=props
  return (
    <HeaderV2Wrapper>
        <h3 className="title">{title}</h3>
        {moreLink && moreText && <a href={moreLink}>{moreText}</a>}
    </HeaderV2Wrapper>
  );
};
export default memo(AreaHeaderV2);