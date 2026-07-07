const arrToSet = (arr) => new Set(arr);

const arrToStr = (arr) => arr.join('');

const setToArr = (set) => [...set];

const setToStr = (set) => [...set].join('');

const strToArr = (str) => str.split('');

const strToSet = (str) => new Set(str.split(''));

const mapToObj = (map) => Object.fromEntries(map);

const objToArr = (obj) => Object.values(obj);

const objToMap = (obj) => new Map(Object.entries(obj));

const arrToObj = (arr) => Object.assign({}, arr);

const strToObj = (str) => Object.assign({}, str.split(''));

const superTypeOf = (arg) => {
  if (arg === null) return 'null';
  if (arg === undefined) return 'undefined';
  if (arg instanceof Map) return 'Map';
  if (arg instanceof Set) return 'Set';
  if (Array.isArray(arg)) return 'Array';

  const type = typeof arg;
  if (type === 'object' || type === 'function') {
    const tag = Object.prototype.toString.call(arg).slice(8, -1);
    return tag === 'Object' ? 'Object' : tag;
  }

  return type[0].toUpperCase() + type.slice(1);
};