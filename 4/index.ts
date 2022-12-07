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

export default findLowestPositive;
