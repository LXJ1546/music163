import styled from "styled-components";

export const RankingListWrapper = styled.div`
  padding: 0 30px 40px 40px;
  .bar {
    height: 33px;
    border-bottom: 2px solid #c20c0c;
    h3 {
      font-size: 20px;
      line-height: 28px;
      float: left;
    }
    span {
      float: left;
      margin: 9px 0 10px 20px;
      color: #666;
    }
    .play {
      margin-top: 5px;
      float: right;
      color: #666;
    }
  }
  .list {
    width: 100%;
    border: 1px solid #d9d9d9;
    th {
      background: url(${require("@/assets/img/table.png")}) no-repeat 0 9999px;
      height: 38px;
      background-color: #f7f7f7;
      background-position: 0 0;
      background-repeat: repeat-x;
      vertical-align: top;
      text-align: left;
      font-weight: normal;
      color: #666;
    }
    .w1 {
      width: 77px;
    }
    .wp {
      height: 38px;
      line-height: 18px;
      padding: 8px 10px;
      background: url(${require("@/assets/img/table.png")}) no-repeat 0 9999px;
      background-position: 0 -56px;
    }
    td {
      padding: 6px 10px;
      line-height: 18px;
      text-align: left;
    }
    .num {
      float: left;
      width: 25px;
      height: 18px;
      margin-left: 0;
      text-align: center;
      color: #999;
    }
    .rk {
      float: right;
      width: 25px;
      height: 17px;
      text-align: center;
      display: block;
      background: url(${require("@/assets/img/icon.png")}) no-repeat 0 9999px;
      background-position: -67px -283px;
    }
    .tt {
      float: left;
      width: 100%;
      .ply {
        margin-right: 8px;
        float: left;
        width: 17px;
        height: 17px;
        cursor: pointer;
        background: url(${require("@/assets/img/table.png")}) no-repeat 0 9999px;
        background-position: 0 -103px;
      }
      .ttc {
        height: 18px;
        margin-right: 20px;
        color: #333;
      }
    }
    .time{
      width: 80px;
    }
    .ar {
      width: 150px;
      zoom: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;
