//{ Driver Code Starts

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

function printArray(res, n) {
  for (let i = 0; i < n; i++) {
    if (res[i] == -0) res[i] = 0;
  }
  console.log(res);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = 0;
    let arr = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    n = arr.length;
    let obj = new Solution();
    let res = obj.hIndex(arr);
    console.log(res);
    console.log("~");
  }
}

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[]} citations
 * @returns {number}
 */

class Solution {
  // Function to find hIndex
  hIndex(citations) {
    // code here
    citations.sort((a, b) => b - a);
    let h = 0;
    for (let i = 0; i < citations.length; i++) {
      if (citations[i] >= i + 1) {
        h = i + 1;
      } else {
        break;
      }
    }
    return h;
  }
}
