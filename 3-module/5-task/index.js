function getMinMax(str) {
  let toCompare = [], res = {}

  str.split(' ').forEach(el => {
    (!isNaN(el)) ? toCompare.push(Number(el)) : null;
  });

  let max = toCompare.reduce((max, current) => {
    return (current >= max) ? max = current : max
  } , 0)

  let min = toCompare.reduce((min, current) => {
    return (current <= min) ? min = current : min
  } , 0)

  res.min = min
  res.max = max

  return res
}
