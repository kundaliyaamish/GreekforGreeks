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
    let s = readLine();
    let obj = new Solution();
    console.log(obj.minChar(s));

    console.log("~");
  }
}
// } Driver Code Ends

// User function Template for javascript
/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
  // Function to find minimum number of characters needed to make the string
  // palindrome.
  minChar(s) {
    // your code here
    let temp = s + "#" + s.split("").reverse().join("");
    let lps = new Array(temp.length).fill(0);
    let j = 0;
    for (let i = 1; i < temp.length; i++) {
      while (j > 0 && temp[i] !== temp[j]) {
        j = lps[j - 1];
      }
      if (temp[i] === temp[j]) {
        j++;
      }
      lps[i] = j;
    }
    let longestPalindrome = lps[temp.length - 1];
    return s.length - longestPalindrome;
  }
}
