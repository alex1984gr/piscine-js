function sums(num) {
  const result = [];
  
  function findPartitions(remaining, start, current) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }
    for (let i = start; i <= remaining; i++) {
      current.push(i);
      findPartitions(remaining - i, i, current);
      current.pop();
    }
  }
  
  findPartitions(num, 1, []);
  return result;
}