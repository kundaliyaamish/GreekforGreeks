//{ Driver Code Starts
// Initial Template for javascript
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    const arr = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let ans = obj.maxSubarraySum(arr);
    if (ans == -0) ans = 0;
    console.log(ans);
  }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
  // Function to find the sum of contiguous subarray with maximum sum.
  maxSubarraySum(arr) {
    // code here
    let max = -Infinity,
      sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (sum > max) {
        max = sum;
      }
      if (sum < 0) {
        sum = 0;
      }
    }
    return max;
  }
}
