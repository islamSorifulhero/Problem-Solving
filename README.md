# Problem Solving

# Introduction

Problem solving is one of the most important skills in programming. A good developer is not the person who writes code the fastest, but the person who can analyze problems logically and build efficient solutions.

Programming problem solving involves:

* Understanding the problem
* Identifying inputs and outputs
* Considering constraints
* Thinking about edge cases
* Designing algorithms
* Implementing optimized solutions

This assignment demonstrates multiple common problem-solving techniques using JavaScript.

---

# 1. Reverse Words in a Sentence

## Problem

Reverse the order of words in a sentence while keeping the words unchanged.

### Example

```js
"Hello World" → "World Hello"
```

## Algorithm

1. Split the string into words
2. Reverse the array
3. Join the words again

## Solution

```js
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("Hello World"));
```

## Time Complexity

```txt
O(n)
```

---

# 2. Find All Pairs With a Given Sum

## Problem

Return all pairs whose sum equals the target.

## Solution

```js
function findPairs(arr, target) {
  const seen = new Set();
  const result = [];

  for (let num of arr) {
    let complement = target - num;

    if (seen.has(complement)) {
      result.push([complement, num]);
    }

    seen.add(num);
  }

  return result;
}

console.log(findPairs([1, 2, 3, 4, 5], 5));
```

## Time Complexity

```txt
O(n)
```

---

# 3. Check if an Array is a Palindrome

## Solution

```js
function isPalindrome(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome([1, 2, 3, 2, 1]));
```

## Time Complexity

```txt
O(n)
```

---

# 4. Rotate a Matrix 90 Degrees Clockwise

## Solution

```js
function rotateMatrix(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let row of matrix) {
    row.reverse();
  }

  return matrix;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(rotateMatrix(matrix));
```

## Time Complexity

```txt
O(n²)
```

---

# 5. Remove Duplicates From a String

## Solution

```js
function removeDuplicates(str) {
  let seen = new Set();
  let result = "";

  for (let char of str) {
    if (!seen.has(char)) {
      seen.add(char);
      result += char;
    }
  }

  return result;
}

console.log(removeDuplicates("programming"));
```

---

# 6. Find the Longest Increasing Subsequence Length

## Solution

```js
function lengthOfLIS(nums) {
  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
```

## Time Complexity

```txt
O(n²)
```

---

# 7. Count the Number of Vowels

## Solution

```js
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello World"));
```

---

# 8. Find the Majority Element

## Solution

```js
function majorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
```

---

# 9. Rotate a String by K Positions

## Solution

```js
function rotateString(str, k) {
  k = k % str.length;

  return str.slice(-k) + str.slice(0, -k);
}

console.log(rotateString("hello", 2));
```

---

# 10. Find Missing Elements in a Consecutive Sequence

## Solution

```js
function findMissing(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let missing = [];

  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      missing.push(i);
    }
  }

  return missing;
}

console.log(findMissing([1, 2, 4, 6]));
```

---

# 11. Rotate an Array by K Positions

## Solution

```js
function rotateArray(arr, k) {
  k = k % arr.length;

  return [...arr.slice(-k), ...arr.slice(0, -k)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
```

---

# 12. Find the Missing Number in an Array

## Solution

```js
function missingNumber(arr, n) {
  let expected = (n * (n + 1)) / 2;
  let actual = arr.reduce((sum, num) => sum + num, 0);

  return expected - actual;
}

console.log(missingNumber([1, 2, 4, 5], 5));
```

---

# 13. Merge Two Sorted Arrays

## Solution

```js
function mergeSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
```

---

# 14. Longest Substring Without Repeating Characters

## Solution

```js
function longestSubstring(str) {
  let set = new Set();
  let left = 0;
  let max = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);
    max = Math.max(max, right - left + 1);
  }

  return max;
}

console.log(longestSubstring("abcabcbb"));
```

---

# 15. Check if Two Arrays are Equal

## Solution

```js
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  arr1.sort();
  arr2.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(arraysEqual([1, 2, 3], [3, 2, 1]));
```

---

# 16. Move All Zeros to the End

## Solution

```js
function moveZeros(arr) {
  let result = [];
  let zeros = 0;

  for (let num of arr) {
    if (num === 0) {
      zeros++;
    } else {
      result.push(num);
    }
  }

  while (zeros > 0) {
    result.push(0);
    zeros--;
  }

  return result;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
```

---

# 17. Implement Custom map() Function

## Solution

```js
Array.prototype.myMap = function(callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

console.log([1, 2, 3].myMap(num => num * 2));
```

---

# 18. Find the Intersection of Two Arrays

## Solution

```js
function intersection(arr1, arr2) {
  let set2 = new Set(arr2);

  return arr1.filter(num => set2.has(num));
}

console.log(intersection([1, 2, 3], [2, 3, 4]));
```

---

# 19. Find the First Non-Repeating Character

## Solution

```js
function firstUniqueChar(str) {
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstUniqueChar("aabccdbe"));
```

---

# 20. Check if a Number is a Perfect Square

## Solution

```js
function isPerfectSquare(num) {
  if (num < 0) return false;

  let left = 0;
  let right = num;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === num) {
      return true;
    }

    if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

console.log(isPerfectSquare(25));
```

---

# Problem Solving Workflow

## Standard Steps

1. Understand the problem
2. Identify inputs and outputs
3. Understand constraints
4. Consider edge cases
5. Break the problem into smaller parts
6. Design an algorithm
7. Implement the solution
8. Test and optimize

---

# Importance of Constraints

Constraints help developers choose the correct algorithm.

Example:

```txt
array.length <= 100000
```

Large input sizes require optimized solutions.

---

# Common Edge Cases

```js
[]
[5]
[-1, -2, -3]
```

Edge cases help make programs robust and reliable.

---

# Big-O Time Complexity

| Complexity | Meaning                |
| ---------- | ---------------------- |
| O(1)       | Constant Time          |
| O(log n)   | Logarithmic Time       |
| O(n)       | Linear Time            |
| O(n log n) | Efficient Sorting      |
| O(n²)      | Nested Loop Complexity |

---

# Debugging Strategy

If the solution fails:

* Re-read the problem statement
* Test small inputs
* Print intermediate values
* Verify edge cases
* Trace the algorithm step-by-step

---

# Top Problem Solving Platforms

## LeetCode

Best for technical interview preparation.

## HackerRank

Best for beginners and skill certification.

## Codeforces

Best for competitive programming.

## Exercism

Best for mentored learning.#   P r o b l e m - S o l v i n g  
 