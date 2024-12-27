import styled from "styled-components";

export const TopRankingWrapper = styled.div`
  padding: 25px 0;
  .header {
    padding: 12px 12px 10px 15px;
    font-size: 14px;
    color: #000;
    font-family: simsun;
    font-weight: bold;
  }
  .item {
    display: flex;
    height: 62px;
    padding-left: 20px;
    cursor: pointer;
    align-items: center;
    &:hover,
    &.active {
      background-color: #e6e6e6;
    }
    img {
      width: 40px;
      height: 40px;
    }
    .info {
      margin-left: 10px;
      .name {
        color: #000;
        width: 150px;
        height: 16px;
        overflow: hidden;
      }
      .update {
        margin-top: 5px;
        color: #999;
      }
    }
  }
`;
