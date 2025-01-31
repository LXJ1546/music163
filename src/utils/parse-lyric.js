export function parseLyric(lyricString) {
  const lyrics = [];
  //分割字符串获得每句歌词
  const lines = lyricString.split("\n");
  const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
  // 对每句歌词解析成对象
  for (const line of lines) {
    const results = timeRegExp.exec(line);
    // 返回数组，数组元素分别是匹配到的整个字符串，后面是三个括号的内容
    if (!results) continue;
    const time1 = Number(results[1]) * 60 * 1000;
    const time2 = Number(results[2]) * 1000;
    const time3 =
      results[3].length === 3 ? Number(results[3]) : Number(results[3]) * 10;
    const alltime = time1 + time2 + time3;
    // 将前面的时间文本替换成空字符串，就能获得歌词部分
    const text = line.replace(timeRegExp, "");
    lyrics.push({ alltime, text });
  }
  return lyrics;
}
