/*
Find pair with given sum in the array
Input: [8, 7, 2, 5, 3, 1]
sum = 10

output: [[8, 2], [7, 3]]
*/

/* 
  Approach - 1
  time complexity: O(n^2)
*/
const findPairApproachOne = (arr, sum) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
};

/* 
  Approach - 2
  time complexity: O(n)
*/
const findPairApproachTwo = (arr, sum) => {
  const result = [];
  const map = arr.reduce((a, b) => {
    a[b] = b;
    return a;
  }, {});
  for (let num in map) {
    if (map.hasOwnProperty[sum - num]) {
      result.push([num, sum - num]);
    }
  }
  return result;
};
