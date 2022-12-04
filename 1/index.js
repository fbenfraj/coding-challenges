const array = [10, 15, 3, 7];
const k = 17;

function checkSum(arr, k) {
  let check = false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        console.log(`Found: ${arr[i]} + ${arr[j]} = ${k}`)
        check = true;
      }
    }
  }

  return check;
}

const check = checkSum(array, k);
console.log(check);
