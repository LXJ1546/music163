import React, { memo, useEffect, useState } from "react";
import { TopRankingWrapper } from "./style";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getImageSize } from "@/utils/format";
import { fetchPlayListDataAction, changeListIndexAction } from "../../store";
const TopRanking = () => {
  const [currentIndex, setCurrrentIndex] = useState(0);
  const { rankingList } = useSelector(
    (state) => ({
      rankingList: state.ranking.list,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  // 点击事件，用于切换榜单的详情数据
  const handleItemClick = (index) => {
    setCurrrentIndex(index);
    dispatch(changeListIndexAction(index));
  };
  useEffect(() => {
    if (rankingList && rankingList[currentIndex]) {
      const id = rankingList[currentIndex].id;
      dispatch(fetchPlayListDataAction(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, rankingList]);
  return (
    <TopRankingWrapper>
      {rankingList.map((item, index) => {
        let header;
        // 当索引为0和4时才会有标题，只显示两个标题
        if (index === 0 || index === 4) {
          header = (
            <h2 className="header">
              {index === 0 ? "云音乐特色榜" : "全球媒体榜"}
            </h2>
          );
        }
        return (
          <div key={item.id}>
            {header}
            <div className="item" onClick={() => handleItemClick(index)}>
              <img src={getImageSize(item.coverImgUrl, 40)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="update">{item.updateFrequency}</div>
              </div>
            </div>
          </div>
        );
      })}
    </TopRankingWrapper>
  );
};
export default memo(TopRanking);
