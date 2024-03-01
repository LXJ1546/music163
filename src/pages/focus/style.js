import styled from "styled-components";

export const FocusWrapper = styled.div`
  .content {
    display: flex;
    justify-content: center;
    width: 980px;
    min-height: 700px;
    height: 700px;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    padding-top: 70px;

    .bgImage {
      width: 902px;
      height: 414px;
      background-position: 0 0px;

      .btn {
        display: block;
        width: 157px;
        height: 48px;
        margin: 260px 0 0 535px;
        background-position: 0 9999px;
        text-indent: -9999px;
        cursor: pointer;

        &:hover {
          background-position: 0 -430px;
        }
      }
    }
  }
`;
