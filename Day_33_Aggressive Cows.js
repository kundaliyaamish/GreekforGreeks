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

function printList(res, n) {
  let s = "";
  for (let i = 0; i < n; i++) {
    s += res[i];
    s += " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let input_ar1 = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let n = input_ar1.length;
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = input_ar1[i];
    }
    let x = parseInt(readLine());
    let obj = new Solution();
    let res = obj.aggressiveCows(arr, x);
    console.log(res);
    console.log("~");
  }
} // } Driver Code Ends
// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[]} stalls
 * @param {number} k
 * @returns {number}
 */

class Solution {
  // Function to solve the problem.
  aggressiveCows(stalls, k) {
    // your code here
    let n = stalls.length;
    stalls.sort((a, b) => a - b);
    let low = 1;
    let high = stalls[n - 1] - stalls[0];
    let ans = -1;
    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);
      let dist = this.func(mid, k, stalls);
      if (dist) {
        ans = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return ans;
  }

  func(dist, k, stalls) {
    let count = 1;
    let lastPlaced = stalls[0];
    for (let i = 1; i < stalls.length; i++) {
      if (stalls[i] - lastPlaced >= dist) {
        count++;
        lastPlaced = stalls[i];
      }
      if (count === k) {
        return true;
      }
    }
    return false;
  }
}
