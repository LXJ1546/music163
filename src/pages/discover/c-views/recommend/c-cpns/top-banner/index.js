import React, { memo, useRef, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from "./style";
import { Carousel } from "antd";
import classNames from "classnames";

const TopBanner = () => {
  // 获取轮播图图片的index
  const [currentIndex, setCurrentIndex] = useState(0);
  const { banners } = useSelector(
    (state) => ({
      banners: state.recommend.banners,
    }),
    shallowEqual
  );
  const bannerRef = useRef(null);
  function handlePrevClick() {
    bannerRef.current?.prev();
  }
  function handleNextClick() {
    bannerRef.current?.next();
  }
  function handleAfterChange(current) {
    setCurrentIndex(current);
  }
  let bgImageUrl = banners[currentIndex]?.imageUrl;
  if (bgImageUrl) {
    bgImageUrl = bgImageUrl + "?imageView&blur=40x20";
  }
  return (
    <BannerWrapper
      style={{ background: `url('${bgImageUrl}') center center / 6000px` }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            effect="fade"
            dots={false}
            autoplaySpeed={3000}
            afterChange={handleAfterChange}
            ref={bannerRef}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  ></img>
                </div>
              );
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames("item", {
                      active: index === currentIndex,
                    })}
                  ></span>
                </li>
              );
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
};
export default memo(TopBanner);
