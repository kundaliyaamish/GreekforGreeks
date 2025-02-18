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
    let res = obj.countFreq(arr, x);
    console.log(res);
    console.log("~");
  }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

class Solution {
  // Function to count the occurrences of x in the array.
  countFreq(arr, target) {
    // your code here
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }

    for (let key in obj) {
      if (key == target) {
        return obj[key];
      }
    }
    return 0;
  }
}
