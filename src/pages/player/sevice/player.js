import hyRequest from "@/service";

export function getSongDetail(ids) {
  return hyRequest.get({
    url: "/song/detail",
    params: {
      ids,
    },
  });
}

export function getSongLyric(id) {
  return hyRequest.get({
    url: "/lyric",
    params: {
      id,
    },
  });
}
