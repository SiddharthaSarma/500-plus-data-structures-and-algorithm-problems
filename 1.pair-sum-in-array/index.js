/*
Find pair with given sum in the array
Input: [8, 7, 2, 5, 3, 1]
sum = 10

output: [[0, 2], [1. 4]]
*/

// Approach - 1

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
