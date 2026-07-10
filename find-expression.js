function findExpression(num) {
  const result = findSeq(1, num, '1');
  return result;
}

function findSeq(current, target, expr) {
  if (current === target) return expr;
  if (current > target) return undefined;

  const mulResult = findSeq(current * 2, target, expr + ' ' + mul2);
  if (mulResult !== undefined) return mulResult;

  const addResult = findSeq(current + 4, target, expr + ' ' + add4);
  if (addResult !== undefined) return addResult;

  return undefined;
}