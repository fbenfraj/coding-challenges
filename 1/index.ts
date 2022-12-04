const array: number[] = [10, 15, 3, 7];
const k: number = 17;

function checkSumEqualTarget(arr: number[], k: number) {
  let check = false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        console.log(`Found: ${arr[i]} + ${arr[j]} = ${k}`);
        check = true;
      }
    }
  }

  return check;
}

const result = checkSumEqualTarget(array, k);
console.log(result);

export { checkSumEqualTarget };
