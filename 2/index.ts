function sumAllExceptIndex(arr: number[]): number[] {
  let finalArray = [];

  for (let i = 0; i < arr.length; i++) {
    let tmpArray: number[] = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const value = tmpArray.reduce((a, b) => a * b);

    finalArray.push(value);
  }

  return finalArray;
}
export { sumAllExceptIndex };
