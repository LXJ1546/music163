import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { RankingListWrapper } from "./style";
import { formatTime } from "@/utils/format";

const RankingList = () => {
  const { playList } = useSelector(
    (state) => ({
      playList: state.ranking.playList,
    }),
    shallowEqual
  );
  return (
    <RankingListWrapper>
      <div className="bar">
        <h3>歌曲列表</h3>
        <span>{`${playList?.trackCount}首`}</span>
        <div className="play">
          播放：
          <strong
            style={{ color: "#c20c0c" }}
          >{`${playList?.playCount}次`}</strong>
        </div>
      </div>
      <div>
        <table className="list">
          <thead>
            <tr>
              <th className="w1"></th>
              <th>
                <div className="wp">标题</div>
              </th>
              <th>
                <div className="wp">时长</div>
              </th>
              <th>
                <div className="wp">歌手</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {playList.tracks?.map((item, index) => {
              return (
                <tr
                  key={item.id}
                  style={{ backgroundColor: index % 2 === 0 ? "#f1f1f1" : "" }}
                >
                  <td>
                    <span className="num">{index + 1}</span>
                    <span className="rk"></span>
                  </td>
                  <td>
                    <div className="tt">
                      <sapn className="ply"></sapn>
                      <sapn className="ttc">{item.name}</sapn>
                    </div>
                  </td>
                  <td>
                    <div className="time">
                      <sapn>{formatTime(item.dt)}</sapn>
                    </div>
                  </td>
                  <td>
                    <div className="ar">
                      <sapn>
                        {item.ar.reduce((acc, val, index, array) => {
                          return index === array.length - 1
                            ? acc + val.name
                            : acc + val.name + "/";
                        }, "")}
                      </sapn>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  );
};
export default memo(RankingList);
