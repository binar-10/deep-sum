function deepSum (arr) {
  // Code disini
  
  const total = arr.reduce((accumulator,currentValue) => {
    // if currentValue still array, then callback deepSum with currentValue
    // but if that's not array,then add currentValue to accumulator (recursive)
    return accumulator + (Array.isArray(currentValue) ? deepSum(currentValue) : currentValue);
  },0);
  return total;
}

//TEST CASE
console.log(deepSum([
  [
    [4,5,6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156

console.log(deepSum([])); // No number