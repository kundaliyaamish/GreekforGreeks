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

  let i = 0;
  for (; i < t; i++) {
    let arr = readLine()
      .split(" ")
      .map((x) => parseInt(x)); // Read and split input into an array
    let obj = new Solution();
    let ans = obj.circularSubarraySum(arr);
    if (ans == -0) ans = 0;
    console.log(ans);
  }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {[number[]} arr
 * @returns {number}
 */
class Solution {
  // Function to find maximum circular subarray sum.
  circularSubarraySum(arr) {
    // code here
    let a = 0;
    let r = 0;
    let cmax = 0;
    let max = arr[0];
    let min = arr[0];
    let cmin = 0;
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
      a = a + arr[i];
      cmax = Math.max(cmax + arr[i], arr[i]);
      max = Math.max(max, cmax);
      cmin = Math.min(cmin + arr[i], arr[i]);
      min = Math.min(min, cmin);
    }
    r = a - min;
    if (a == min) {
      return max;
    }

    return Math.max(r, max);
  }
}
