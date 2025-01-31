import styled from "styled-components";

export const DownloadWrapper = styled.div`
  .code {
    position: fixed;
    z-index: 10;
    top: 395px;
    right: 25px;
    padding: 16px 18px 9px;
    background: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    color: #333;
    font-size: 12px;
    text-align: center;

    img {
      width: 100px;
      height: 100px;
      border: 0;
    }

    p {
      margin-top: 10px;
    }
  }
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #222;
  background-size: cover;
  font-family: PingFangSC-Regular;

  .top {
    position: relative;
    width: 1100px;

    .content {
      width: 1100px;
      padding: 112px 0;
      display: flex;
      flex-direction: row;

      .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 556px;
        height: 100%;

        .text {
          margin-bottom: 33px;
          width: 100%;
          text-align: center;
          font-size: 22px;
          opacity: 0.8;
          color: #ffffff;
        }

        .image {
          width: 557px;
          height: 328px;
        }

        .tip {
          width: 100%;
          height: 32px;
          display: flex;
          justify-content: center;
          margin: 26px auto;
          font-size: 16px;
          color: #eee;
          text-align: center;

          .mac {
            width: 154px;
            height: 44px;
            margin-right: 33px;
            background: url(${require("@/assets/img/icon_mac.png")}) no-repeat;
            background-size: contain;
          }

          .windows {
            width: 140px;
            height: 44px;
            margin-left: 5px;
            background: url(${require("@/assets/img/windows.png")}) no-repeat;
            background-size: contain;
          }
        }

        .btn {
          width: 300px;
          height: 65px;
          border-radius: 65px;
          background-color: #fff;
          color: #d10000;
          font-size: 22px;
          line-height: 65px;
          text-align: center;
          cursor: pointer;
          box-sizing: content-box;

          &:hover {
            opacity: 0.7;
          }
        }
      }

      .right {
        position: relative;
        margin-left: 220px;
        width: 300px;
        height: 100%;
        text-align: center;

        .text {
          margin-bottom: 33px;
          width: 100%;
          text-align: center;
          font-size: 22px;
          opacity: 0.8;
          color: #ffffff;
        }

        .image {
          width: 299px;
          height: 331px;
        }

        .tip {
          width: 100%;
          height: 32px;
          display: flex;
          justify-content: center;
          margin: 26px auto;
          font-size: 16px;
          color: #eee;
          text-align: center;

          .appstore {
            width: 120px;
            height: 44px;
            margin-right: 33px;
            background: url(${require("@/assets/img/icon_iphone.png")})
              no-repeat;
            background-size: contain;
          }

          .android {
            width: 120px;
            height: 44px;
            margin-left: 5px;
            background: url(${require("@/assets/img/android.png")}) no-repeat;
            background-size: contain;
          }
        }

        .btn {
          width: 300px;
          height: 65px;
          margin: 0 auto;
          border-radius: 65px;
          background-color: #fff;
          color: #d10000;
          font-size: 22px;
          line-height: 65px;
          text-align: center;
          cursor: pointer;
          box-sizing: content-box;

          &:hover {
            opacity: 0.7;
          }

          .icon_code {
            display: inline-block;
            width: 21px;
            height: 21px;
            margin-right: 3px;
            background: url(${require("@/assets/img/icon_code.png")}) no-repeat;
            background-size: contain;
            vertical-align: -3px;
          }
        }
      }

      .other-systems {
        position: absolute;
        line-height: 60px;
        height: 60px;
        top: 0;
        right: 0;
        font-size: 14px;
        color: #fff;
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }

        .arrow {
          float: left;
          width: 20px;
          height: 20px;
          margin-top: 20px;
          margin-right: 6px;
          background: url(${require("@/assets/img/other.png")}) no-repeat;
          background-size: contain;
          vertical-align: text-bottom;
        }
      }
    }
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .bottom1 {
    background: #fff;
    height: 437px;
    border-bottom: 1px solid #e3e3e3;
    display: flex;
    justify-content: center;

    .content {
      width: 982px;
      padding-top: 120px;

      .describe {
        float: left;
        margin-left: 30px;

        h3 {
          font-size: 40px;
          font-weight: normal;
          padding: 45px 0 5px 0;
        }

        p {
          font-size: 16px;
          color: #666;
          line-height: 24px;
        }
      }

      .picture {
        float: right;
        margin-right: 57px;
        width: 408px;
        height: 190px;
        background: url(${require("@/assets/img/1.jpg")}) no-repeat;
      }
    }
  }

  .bottom2 {
    background: #f8f8f8;
    height: 437px;
    border-bottom: 1px solid #e3e3e3;
    display: flex;
    justify-content: center;

    .content {
      width: 982px;
      padding-top: 106px;

      .picture {
        float: left;
        margin-left: 30px;
        width: 447px;
        height: 269px;
        background: url(${require("@/assets/img/2.jpg")}) no-repeat;
      }

      .describe {
        float: right;

        h3 {
          font-size: 40px;
          font-weight: normal;
          padding: 45px 0 5px 0;
        }

        p {
          font-size: 16px;
          color: #666;
          line-height: 24px;

          em {
            color: #cc0000;
            font-style: normal;
          }
        }
      }
    }
  }

  .bottom3 {
    background: #fff;
    height: 437px;
    border-bottom: 1px solid #e3e3e3;
    display: flex;
    justify-content: center;

    .content {
      width: 982px;
      padding-top: 72px;

      .describe {
        float: left;
        margin-left: 30px;

        h3 {
          font-size: 40px;
          font-weight: normal;
          padding: 45px 0 5px 0;
        }

        p {
          font-size: 16px;
          color: #666;
          line-height: 24px;

          em {
            color: #cc0000;
            font-style: normal;
          }
        }
      }

      .picture {
        float: right;
        width: 463px;
        height: 289px;
        background: url(${require("@/assets/img/3.jpg")}) no-repeat;
      }
    }
  }

  .bottom4 {
    background: #f8f8f8;
    height: 437px;
    border-bottom: 1px solid #e3e3e3;
    display: flex;
    justify-content: center;

    .content {
      width: 982px;
      padding-top: 95px;

      .picture {
        float: left;
        margin-left: 30px;
        width: 434px;
        height: 246px;
        background: url(${require("@/assets/img/4.jpg")}) no-repeat;
      }

      .describe {
        float: right;

        h3 {
          font-size: 40px;
          font-weight: normal;
          padding: 45px 0 5px 0;
        }

        p {
          font-size: 16px;
          color: #666;
          line-height: 24px;

          em {
            color: #cc0000;
            font-style: normal;
          }
        }
      }
    }
  }

  .bottom5 {
    background: #fff;
    height: 437px;
    border-bottom: 1px solid #e3e3e3;
    display: flex;
    justify-content: center;

    .content {
      width: 982px;
      padding-top: 53px;

      .describe {
        float: left;
        margin-left: 30px;

        h3 {
          font-size: 40px;
          font-weight: normal;
          padding: 45px 0 5px 0;
          margin-top: 96px;
        }

        p {
          font-size: 16px;
          color: #666;
          line-height: 24px;

          em {
            color: #cc0000;
            font-style: normal;
          }
        }
      }

      .picture {
        float: right;
        width: 359px;
        height: 355px;
        background: url(${require("@/assets/img/5.jpg")}) no-repeat;
      }
    }
  }
`;
