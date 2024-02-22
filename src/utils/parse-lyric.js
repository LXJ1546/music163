export function parseLyric(lyricString) {
  const lyrics = [];
  //分割字符串获得每句歌词
  const lines = lyricString.split("\n");
  const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
  // 对每句歌词解析成对象
  for (const line of lines) {
    const results = timeRegExp.exec(line);
    if (!results) continue;
    const time1 = Number(results[1]) * 60 * 1000;
    const time2 = Number(results[2]) * 1000;
    const time3 =
      results[3].length === 3 ? Number(results[3]) : Number(results[3]) * 10;
    const alltime = time1 + time2 + time3;

    const text = line.replace(timeRegExp, "");
    lyrics.push({ alltime, text });
  }
  return lyrics;
}
