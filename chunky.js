function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    const subArr = [];
    for (let j = i; j < i + size && j < arr.length; j++) {
      subArr.push(arr[j]);
    }
    result.push(subArr);
  }
  return result;
}