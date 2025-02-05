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
    let input_line = readLine().split(" ");
    let s = input_line[0];
    let obj = new Solution();
    let ans = obj.nonRepeatingChar(s);
    if (ans == "$") ans = "-1";
    console.log(ans);

    console.log("~");
  }
}
// } Driver Code Ends

// User function Template for javascript
/**
 * @param {string} s
 * @returns {string}
 */
class Solution {
  // Function to find the first non-repeating character in a string.
  nonRepeatingChar(s) {
    // code here
    let frequency = {};
    for (let i of s) {
      frequency[i] = (frequency[i] | 0) + 1;
    }
    for (let i of s) {
      if (frequency[i] === 1) {
        return i;
      }
    }
    return "$";
  }
}
