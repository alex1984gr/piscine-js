const hashCode = str =>
  (
    [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
  ).toString(36);

const blockChain = (data, prev = { index: 0, hash: '0' }) => {
  const index = prev.index + 1;
  const block = {
    index,
    hash: hashCode(`${index}${prev.hash}${JSON.stringify(data)}`),
    data,
    prev,
    chain(nextData) {
      return blockChain(nextData, block);
    },
  };

  return block;
};

module.exports = { blockChain };
