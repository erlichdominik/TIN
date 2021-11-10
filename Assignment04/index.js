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

const isPalindrome = (str) => {
  for (
    let start = 0, end = str.length - 1;
    start < str.length / 2;
    start++, end--
  ) {
    if (str[start] != str[end]) {
      return false;
    }
  }
  return true;
};

const alphabeticalOrderString = (str) => {
  return str.split("").sort().join("");
};

const longestWord = (str) => {
  let arr = str.split(" ");
  return arr.reduce((c, v) => (c.length > v.length ? c : v));
};

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const type = (obj) => typeof obj;

const secondLowestAndGreatestNumber = (arr) => {
  let uniqArr = [...new Set(arr)];
  uniqArr = uniqArr.sort();
  return {
    second_lowest: uniqArr[1],
    second_greatest: uniqArr[uniqArr.length - 2],
  };
};

const amountToCoins = (amount, coins) => {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      left = amount - coins[0];
      return [coins[0]].concat(amountToCoins(left, coins));
    } else {
      coins.shift();
      return amountToCoins(amount, coins);
    }
  }
};

const binarySearch = (ar, el, compare_fn) => {
  var m = 0;
  var n = ar.length - 1;
  while (m <= n) {
    var k = (n + m) >> 1;
    var cmp = compare_fn(el, ar[k]);
    if (cmp > 0) {
      m = k + 1;
    } else if (cmp < 0) {
      n = k - 1;
    } else {
      return k;
    }
  }
  return -m - 1;
};

const compare_number = (a, b) => a - b;

console.log("factorialIterative(5)");
console.log(factorialIterative(5));
console.log("factorialResursive(4)");
console.log(factorialResursive(4));
console.log("fibbonaciNumber(9)");
console.log(fibbonaciNumber(9));
console.log("isPalindrome(kajak)");
console.log(isPalindrome("kajak"));
console.log("isPalindrome(test)");
console.log(isPalindrome("test"));
console.log("alphabeticalOrderString(character)");
console.log(alphabeticalOrderString("character"));
console.log("longestWord(ala ma kota)");
console.log(longestWord("ala ma kota"));
console.log("isPrime(7)");
console.log(isPrime(7));
console.log("type(7)");
console.log(type(7));
console.log("secondLowestAndGreatestNumber([1,2,3,4,5,6,7])");
console.log(secondLowestAndGreatestNumber([1, 2, 3, 4, 5, 6, 7]));
console.log("amountToCoins(46, [25,10,5,2,1])");
console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
console.log("binarySearch()");
