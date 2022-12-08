type Pair = {
  num1: number;
  num2: number;
};

function cons(num1: number, num2: number): Pair {
  const pair = {
    num1,
    num2,
  };

  return pair;
}

function car(pair: Pair): number {
  return pair.num1;
}

function cdr(pair: Pair): number {
  return pair.num2;
}

export { cons, car, cdr };
