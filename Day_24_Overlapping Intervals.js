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
    let n = parseInt(readLine().trim());
    let arr = new Array(n);

    for (let i = 0; i < n; i++) {
      let temp = readLine()
        .split(" ")
        .map((x) => parseInt(x));
      arr[i] = [temp[0], temp[1]];
    }
    let obj = new Solution();
    let res = obj.mergeOverlap(arr);
    let s = "";
    for (let i = 0; i < res.length; i++) {
      for (let j = 0; j < res[i].length; j++) {
        s += res[i][j] + " ";
      }
    }
    console.log(s);
  }
}
// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[][]} arr
 * @returns {number[][]}
 */

class Solution {
  // Function to Merge overlapping arr.
  mergeOverlap(arr) {
    // your code here
    let ans = [];
    arr.sort((a, b) => a[0] - b[0]);
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      if (ans.length === 0 || ans[ans.length - 1][1] < arr[i][0]) {
        ans.push(arr[i]);
      } else
        ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], arr[i][1]);
    }
    return ans;
  }
}
