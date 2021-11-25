const sampleArr1 = [1, 5, -3, -9, 8, 25, 14, 2, 8];

console.log(sampleArr1);

function biggestAndSmallest(arr) {
  arr.sort((a, b) => a > b);
  console.log(arr[0]);
  console.log(arr[arr.length - 1]);
}

biggestAndSmallest(sampleArr1);
