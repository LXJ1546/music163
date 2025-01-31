import React, { memo } from "react";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";
import headerTitles from "@/assets/data/header_titles.json";
import { NavLink,useLocation } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default memo(function AppHeader() {
  const location = useLocation();
  // 为了让父级路由的active也能生效
  const isDiscoverActive = location.pathname.startsWith('/discover'); // 判断当前路径是否以 '/discover' 开头
  // 组件的展示逻辑
  function showItem(item) {
    if (item.type === "path") {
      return (
        <NavLink to={item.link} className={item.title==='发现音乐'&&isDiscoverActive ? 'active' : ''}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      );
    }
  }
  return (
    <div>
      <HeaderWrapper>
        <div className="content wrap-v1">
          <HeaderLeft>
            <a className="logo sprite_01" href="/#">
              网易云音乐
            </a>
            <div className="title-list">
              {headerTitles.map((item) => {
                return (
                  <div className="item" key={item.title}>
                    {showItem(item)}
                  </div>
                );
              })}
            </div>
          </HeaderLeft>
          <HeaderRight>
            <Input
              className="search"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            />
            {/* <span className="center">创作者中心</span> */}
            <a
              className="center"
              href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter"
              rel="noreferrer"
              target="_blank"
            >
              创作者中心
            </a>
            <span className="login">登录</span>
          </HeaderRight>
        </div>
        <div className="divider"></div>
      </HeaderWrapper>
    </div>
  );
});
