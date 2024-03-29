import styled from "styled-components";

export const MineWrapper = styled.div`
  .content {
    display: flex;
    justify-content: center;
    width: 980px;
    min-height: 700px;
    height: 700px;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    padding-top: 104px;

    .bgImage {
      width: 807px;
      height: 268px;
      background-position: 0 0px;

      .btn {
        display: block;
        width: 167px;
        height: 45px;
        margin: 202px 0 0 482px;
        background-position: 0 9999px;
        text-indent: -9999px;
        cursor: pointer;

        &:hover {
          background-position: 0 -278px;
        }
      }
    }
  }
`;
