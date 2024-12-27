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

export function formatDate(time, fmt) {
  const date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  const o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
  };
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}

export function formatMonthDay(time) {
  return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss");
}
