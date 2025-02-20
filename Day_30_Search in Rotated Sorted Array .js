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
    // let n = parseInt(readLine());
    let A = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let key = parseInt(readLine());
    let obj = new Solution();
    let res = obj.search(A, key);
    console.log(res);
    console.log("~");
  }
}

// } Driver Code Ends

// User function Template for javascript

/**

 * @param {number[]} arr
 * @param {number} key
 * @return {number}
 */

class Solution {
  search(arr, key) {
    // code here
    let index = -1;
    let i = 0;

    while (i < arr.length) {
      if (arr[i] === key) {
        index = i;
        break;
      }
      i++;
    }
    return index;
  }
}
