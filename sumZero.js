function sumZero(arr) {
  for (let keys in arr) {
    for (let key in arr) {
      //            console.log(arr[keys],arr[key + 1])
      if (key == keys) {
        continue;
      } else {
        if (arr[keys] + arr[key] == 0) {
          return [arr[keys], arr[key]];
        }
      }
    }
  }
}

// performance.now()
sumZero([1, 2, 3, 4, -1, 0, 1, 0]);
// performance.now()
