function countUnique(arr) {
  let arr1 = [];
  for (let key in arr) {
    if (!arr1.includes(arr[key])) {
      arr1.push(arr[key]);
    }
  }
  return arr1.length;
}
