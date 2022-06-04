let arr = [1, 1, 1, 1, 1, 1, 1, 1]
function linearSum(arr) {
  let array = []
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    array.push(sum)
  }
  return array
}
console.log(linearSum(arr))
