function checkSumEqualTarget(arr: number[], k: number) {
  let check = false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        check = true;
      }
    }
  }

  return check;
}

export { checkSumEqualTarget };
