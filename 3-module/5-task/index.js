let getMinMax = str => {
  let arr = str.split(' ').filter(item => +item);
  let max = Math.max.apply(Math, arr);
  let min = Math.min.apply(Math, arr);

  const result = {
    min : min,
    max : max
  }
  
  return result;
}
