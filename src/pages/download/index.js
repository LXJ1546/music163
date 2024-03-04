import React, { memo } from "react";
import { DownloadWrapper, BottomWrapper, TopWrapper } from "./style";

const Download = () => {
  return (
    <DownloadWrapper>
      <div className="code">
        <img
          src="//p1.music.126.net/wCRnpjXHpGRiq1c1uCkIFQ==/109951164246717547.png"
          alt="移动端下载"
        />
        <p>扫描二维码下载</p>
      </div>
      <TopWrapper>
        <div className="bgDownload">
          <div className="top">
            <div className="content">
              <div className="left">
                <div className="text">在电脑上听</div>
                <img
                  className="image"
                  src="//p1.music.126.net/PGNd0EAtUgA7iRCWXPnUuA==/109951164207162781.png?param=800x0"
                  alt=""
                />
                <div className="tip">
                  <i className="mac"></i>
                  <i className="windows"></i>
                </div>
                <div className="btn">下载电脑端</div>
              </div>
              <div className="right">
                <div className="text">在手机上听</div>
                <img
                  className="image"
                  src="//p1.music.126.net/sLtya87wVHWn-HWJ33oN4g==/109951164207180884.png?param=450x0"
                  alt=""
                />
                <div className="tip">
                  <i className="appstore"></i>
                  <i className="android"></i>
                </div>
                <div className="btn">
                  <i className="icon_code"></i>
                  下载手机端
                </div>
              </div>
              <div className="other-systems">
                <i className="arrow"></i>
                其他操作系统客户端
              </div>
            </div>
          </div>
        </div>
      </TopWrapper>
      <BottomWrapper>
        <div className="bottom1">
          <div className="content">
            <div className="describe">
              <h3>千万曲库 首首CD音质</h3>
              <p>
                囊括百万无损SQ音乐，你在用手机听歌时，
                <br />
                也能感受到纤毫毕现的CD音质，更能免费离线收听
              </p>
            </div>
            <div className="picture"></div>
          </div>
        </div>
        <div className="bottom2">
          <div className="content">
            <div className="picture"></div>
            <div className="describe">
              <h3>千位明星 亲自推荐音乐</h3>
              <p>
                韩红，戴佩妮等<em>千位明星已入驻</em>，亲自创建私房歌单，录制独
                <br />
                家DJ节目，推荐他们心中的好音乐
              </p>
            </div>
          </div>
        </div>
        <div className="bottom3">
          <div className="content">
            <div className="describe">
              <h3>社交关系 发现全新音乐</h3>
              <p>
                你可以<em>关注明星</em>、DJ和好友，通过浏览他们的动态、收藏和
                <br />
                分享，发现更多全新好音乐
              </p>
            </div>
            <div className="picture"></div>
          </div>
        </div>
        <div className="bottom4">
          <div className="content">
            <div className="picture"></div>
            <div className="describe">
              <h3>手机电脑 歌单实时同步</h3>
              <p>
                只要一个帐号，你就可以同步在手机、电脑上创建、收藏
                <br />
                的歌单，<em>随时随地畅享好音乐</em>
              </p>
            </div>
          </div>
        </div>
        <div className="bottom5">
          <div className="content">
            <div className="describe">
              <h3>听歌识曲 助你疯狂猜歌</h3>
              <p>
                歌曲很动听却不知道歌名，歌名在嘴边却想不起来……
                <br />用<em>听歌识曲</em>功能，几秒钟就知道歌名
              </p>
            </div>
            <div className="picture"></div>
          </div>
        </div>
      </BottomWrapper>
    </DownloadWrapper>
  );
};
export default memo(Download);
