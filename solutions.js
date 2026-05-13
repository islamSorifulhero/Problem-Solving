// 1. Reverse Words in a Sentence
function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("Hello World"));

// 2. Find All Pairs With a Given Sum
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

// 3. Check if an Array is a Palindrome
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

// 4. Rotate a Matrix 90 Degrees Clockwise
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

// 5. Remove Duplicates From a String
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

// 6. Find the Longest Increasing Subsequence Length
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

// 7. Count the Number of Vowels
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

// 8. Find the Majority Element
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

// 9. Rotate a String by K Positions
function rotateString(str, k) {
    k = k % str.length;

    return str.slice(-k) + str.slice(0, -k);
}

console.log(rotateString("hello", 2));

// 10. Find Missing Elements in a Consecutive Sequence
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

// 11. Rotate an Array by K Positions
function rotateArray(arr, k) {
    k = k % arr.length;

    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

// 12. Find the Missing Number in an Array
function missingNumber(arr, n) {
    let expected = (n * (n + 1)) / 2;
    let actual = arr.reduce((sum, num) => sum + num, 0);

    return expected - actual;
}

console.log(missingNumber([1, 2, 4, 5], 5));

// 13. Merge Two Sorted Arrays
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

// 14. Longest Substring Without Repeating Characters
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

// 15. Check if Two Arrays are Equal
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

// 16. Move All Zeros to the End
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

// 17. Implement Custom map() Function
Array.prototype.myMap = function (callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

console.log([1, 2, 3].myMap(num => num * 2));

// 18. Find the Intersection of Two Arrays
function intersection(arr1, arr2) {
    let set2 = new Set(arr2);

    return arr1.filter(num => set2.has(num));
}

console.log(intersection([1, 2, 3], [2, 3, 4]));

// 19. Find the First Non-Repeating Character
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

// 20. Check if a Number is a Perfect Square
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