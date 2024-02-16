import React, { memo } from "react";
import { AlbumItemWrapper } from "./style";
import { getImageSize } from "../../utils/format";
const NewAlbumItem = (props) => {
  const { itemData } = props;
  return (
    <AlbumItemWrapper>
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 100)} alt="" />
        <div className="cover sprite_cover"></div>
      </div>
      <div className="bottom">
        <p className="name">
          <a title={itemData.name} href="/#">
            {itemData.name}
          </a>
        </p>
        <p className="artist">
          <a title={itemData.artist.name} href="/#">
            {itemData.artist.name}
          </a>
        </p>
      </div>
    </AlbumItemWrapper>
  );
};
export default memo(NewAlbumItem);
