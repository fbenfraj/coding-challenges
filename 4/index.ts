const testArray1 = [3, 4, -1, 1];
const testArray2 = [1, 2, 0];

function findLowestPositive(arr: number[]): number {
  const positives = arr.filter((n) => n > 0);
  const noDuplicates = [...new Set(positives)];
  const sorted = noDuplicates.sort((a, b) => a - b);

  for (let i: number = 0; i < sorted.length; i++) {
    if (sorted[i] !== i + 1) {
      return i + 1;
    }
  }
  return sorted.length + 1;
}

const result1: number = findLowestPositive(testArray1);
const result2: number = findLowestPositive(testArray2);

console.log(result1);
console.log(result2);
