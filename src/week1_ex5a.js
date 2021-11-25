const arr = [1,5,-3,-9,8,25,14,2,8]
console.log(arr)

function findNum(arr, n){
  let i = 0
  while (i < arr.length){
    if (arr.[i] === n){
      return true
      break
    }
    i++
  }
  return false
}

console.log(findNum(arr, 5))