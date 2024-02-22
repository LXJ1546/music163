export function formatCount(count) {
  if (count > 100000) {
    return Math.floor(count / 10000) + "万";
  } else {
    return count;
  }
}

export function getImageSize(imageUrl, width, height = width) {
  return imageUrl + `?param=${width}y${height}}`;
}

export function formatTime(time) {
  // 转为秒
  const timeSeconds = time / 1000;
  // 获取分钟和秒钟
  const minute = Math.floor(timeSeconds / 60);
  const seconds = Math.floor(timeSeconds) % 60;
  // 格式化时间
  const formatMinute = String(minute).padStart(2, "0");
  const formatSeconds = String(seconds).padStart(2, "0");
  return `${formatMinute}:${formatSeconds}`;
}
