function sums(num) {
  if (num <= 0) return [];
  const result = [];
  
  function findPartitions(remaining, start, current) {
    if (remaining === 0) {
      if (current.length > 1) {
        result.push([...current]);
      }
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
