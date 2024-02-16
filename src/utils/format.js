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
