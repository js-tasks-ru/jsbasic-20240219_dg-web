function getMinMax(str) {
  let toCompare = [], res = {}

  str.split(' ').forEach(el => {
    (!isNaN(el)) ? toCompare.push(el) : null
  });

  console.log('to compare = ' + toCompare)

  let max = toCompare.reduce((max, current) => {
    return (Number(current) >= Number(max)) ? max = current : max
  } , 0)

  let min = toCompare.reduce((min, current) => {
    return (Number(current) <= Number(min)) ? min = current : min
  } , 0)

  res.min = min
  res.max = max

  return res
}
