/**
 * 数组根据key value转对象方法
 * [{key: 'key1', value: 'value1'}] => { key1: value1 }
 * @param arr
 * @param key
 * @param value
 * @returns
 */
export const formatterArrToObj = (arr, key, value) => {
  return arr.reduce((result, item) => {
    result[item[key]] = item[value];
    return result;
  }, {});
};
