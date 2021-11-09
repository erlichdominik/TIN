// a
const factorialIterative = (number) => {
  let output = 1;
  for (let i = 1; i <= number; i++) {
    output *= i;
  }
  return output;
};

const factorialResursive = (number) => {
  if (number <= 1) {
    return 1;
  }
  return number * factorialResursive(number - 1);
};

const fibbonaciNumber = (number) => {
  if (number <= 1) {
    return number;
  }

  return fibbonaciNumber(number - 1) + fibbonaciNumber(number - 2);
};

console.log("factorialIterative(5)");
console.log(factorialIterative(5));
console.log("========");
console.log("factorialResursive(4)");
console.log(factorialResursive(4));
console.log("fibbonaciNumber(9)");
console.log(fibbonaciNumber(9));
