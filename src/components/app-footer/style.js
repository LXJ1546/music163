import styled from "styled-components";

export const AppFooterWrapper = styled.div`
  position: relative;
  height: 325px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;

  .content {
    align-items: center;
  }

  .top {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 33px;
    margin-right: 80px;

    .item {
      width: 45px;
      margin-left: 80px;
      text-align: center;
      color: #666;

      .link {
        background-image: url(${require("@/assets/img/foot_enter_new2.png")});
        background-size: 220px 220px;
        display: block;
        width: 45px;
        height: 45px;
        cursor: pointer;
      }

      .index-0 {
        background-position: -170px -5px;
        :hover {
          background-position: -5px -115px;
        }
      }

      .index-1 {
        background-position: -5px -170px;
        :hover {
          background-position: -60px -170px;
        }
      }

      .index-2 {
        background-position: -5px -60px;
        :hover {
          background-position: -60px -5px;
        }
      }

      .index-3 {
        background-image: url(${require("@/assets/img/xStudio.png")});
        background-size: 45px;
        :hover {
          background-image: url(${require("@/assets/img/xStudioHover.png")});
          background-size: 45px;
        }
      }

      .index-4 {
        background-position: -60px -60px;
        :hover {
          background-position: -115px -5px;
        }
      }

      .index-5 {
        background-position: -115px -115px;
        :hover {
          background-position: -5px -5px;
        }
      }

      .index-6 {
        background-image: url(${require("@/assets/img/cloudSong.png")});
        background-size: 45px;
        :hover {
          background-image: url(${require("@/assets/img/cloudSongHover.png")});
          background-size: 45px;
        }
      }

      .index-7 {
        background-position: -170px -60px;
        :hover {
          background-position: -115px -60px;
        }
      }

      .title {
        display: inline-block;
        width: 100px;
        margin-top: 10px;
        margin-left: -27.5px;
        font-weight: 400;
        font-size: 12px;
        text-align: center;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;
