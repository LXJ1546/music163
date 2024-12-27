import hyRequest from "@/service";
export function getRanking() {
  return hyRequest.get({
    url: "/toplist/detail",
  });
}
// 获取榜单详细数据
export function getRankingList(id) {
  return hyRequest.get({
    url: "/toplist/detail",
    params: {
      id,
    },
  });
}
