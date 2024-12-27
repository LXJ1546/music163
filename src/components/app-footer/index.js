import React, { memo } from "react";
import { AppFooterWrapper } from "./style";
import { footerLinks, footerImages } from "@/assets/data/local_data";

const AppFooter = () => {
  return (
    <AppFooterWrapper>
      <div className="content wrap-v2">
        <div className="top">
          {footerImages.map((item, index) => {
            const uniqueClassName = `link index-${index}`;
            return (
              <div className="item" key={item.title}>
                <a
                  className={uniqueClassName}
                  href={item.link}
                  rel="noreferrer"
                  target="_blank"
                  title={item.title}
                ></a>
                <span className="title">{item.title}</span>
              </div>
            );
          })}
        </div>
        <div className="bottom">
          <div className="link">
            {footerLinks.map((item, index) => {
              if (index !== footerLinks.length - 1) {
                return (
                  <div key={index}>
                    <a className="item" href={item.link}>
                      {item.title}
                    </a>
                    <span className="line">|</span>
                  </div>
                );
              } else {
                return (
                  <div key={index}>
                    <a className="item" href={item.link}>
                      {item.title}
                    </a>
                  </div>
                );
              }
            })}
          </div>
          <p className="right">
            <a
              className="sep"
              href="https://jubao.163.com/"
              rel="noreferrer"
              target="_blank"
            >
              廉正举报
            </a>
            <span className="text">
              不良信息举报邮箱: 51jubao@service.netease.com
            </span>
            <span>客服热线：95163298</span>
          </p>
          <p className="right">
            <span className="text">
              互联网宗教信息服务许可证：浙（2022）0000120
            </span>
            <span className="text">增值电信业务经营许可证：浙B2-20150198</span>
            <a
              className="sep"
              href="https://beian.miit.gov.cn/#/Integrated/index"
              rel="noreferrer"
              target="_blank"
            >
              粤B2-20090191-18 工业和信息化部备案管理系统网站
            </a>
          </p>
          <p className="right">
            <span className="text">网易公司版权所有©1997-2024</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a
              className="alink"
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
              rel="noreferrer"
              target="_blank"
            >
              <span className="police-logo"></span>
              <span className="police-text">浙公网安备 33010802013307号</span>
            </a>
          </p>
        </div>
      </div>
    </AppFooterWrapper>
  );
};
export default memo(AppFooter);
