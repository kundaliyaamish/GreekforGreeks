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

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    if (arr[i] == -0) arr[i] = 0;
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let s = readLine();
    let obj = new Solution();
    let res = obj.myAtoi(s);
    console.log(res);

    console.log("~");
  }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} s
 * @return {number}
 */

class Solution {
  myAtoi(s) {
    s = s.trim();
    if (!s) return 0;

    let sign = 1;

    if (s[0] === "-") {
      sign = -1;
      s = s.slice(1);
    }

    let result = 0;

    for (const char of s) {
      if (!/\d/.test(char)) break;

      result = result * 10 + (char.charCodeAt(0) - "0".charCodeAt(0));
    }

    if (result !== 0) {
      result *= sign;
    }
    result = Math.max(Math.min(result, 2 ** 31 - 1), -(2 ** 31));

    return result;
  }
}
