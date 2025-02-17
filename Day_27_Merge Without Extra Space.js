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

  while (t-- > 0) {
    // Read the array of integers
    let a = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let b = readLine()
      .split(" ")
      .map((x) => parseInt(x));

    // Create an instance of the Solution class
    let obj = new Solution();

    // Call the missingNumber method and print the result
    obj.mergeArrays(a, b);
    console.log(a.join(" "));
    console.log(b.join(" "));

    console.log("~");
  }
}
// } Driver Code Ends

class Solution {
  mergeArrays(a, b) {
    // code here
    let sortedArray = [...a, ...b].sort((x, y) => x - y);

    for (let i = 0; i < a.length; i++) {
      a[i] = sortedArray[i];
    }

    for (let i = 0; i < b.length; i++) {
      b[i] = sortedArray[a.length + i];
    }
  }
}
