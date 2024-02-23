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

    .item {
      display: flex;
      width: 100px;
      flex-direction: column;
      flex: 1;
      align-items: center;
      margin-left: 30px;

      .link {
        background-image: url(${require("@/assets/img/foot_enter_new2.png")});
        background-size: 220px 220px;
        display: block;
        width: 45px;
        height: 45px;
        cursor: pointer;
      }

      .link:nth-child(1) {
        background-position: -170px -5px;
        :hover {
          background-position: -5px -115px;
        }
      }

      .link:nth-child(2) {
        background-position: -5px -170px;
        :hover {
          background-position: -60px -170px;
        }
      }

      :nth-child(3).link {
        background-position: -5px -60px;
        :hover {
          background-position: -60px -5px;
        }
      }

      :nth-child(4).link {
        background-image: url(${require("@/assets/img/xStudio.png")});
        background-size: 45px;
        :hover {
          background-image: url(${require("@/assets/img/xStudioHover.png")});
          background-size: 45px;
        }
      }

      :nth-child(5).link {
        background-position: -60px -60px;
        :hover {
          background-position: -115px -5px;
        }
      }
      :nth-child(6).link {
        background-position: -115px -115px;
        :hover {
          background-position: -5px -5px;
        }
      }

      :nth-child(7).link {
        background-image: url(${require("@/assets/img/cloudSong.png")});
        background-size: 45px;
        :hover {
          background-image: url(${require("@/assets/img/cloudSongHover.png")});
          background-size: 45px;
        }
      }

      :nth-child(8).link {
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
