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
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let arr = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    obj.nextPermutation(arr);
    printArray(arr, arr.length);
  }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {Number[]} arr
 */

class Solution {
  nextPermutation(arr) {
    // code here
    const n = arr.length;

    let i = n - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
      i--;
    }

    if (i >= 0) {
      let j = n - 1;
      while (arr[j] <= arr[i]) {
        j--;
      }
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    this.reverseArray(arr, i + 1, n - 1);
    return arr;
  }
  reverseArray(arr, start, end) {
    let reversedPart = arr.slice(start, end + 1).reverse();
    for (let k = start; k <= end; k++) {
      arr[k] = reversedPart[k - start];
    }
  }
}
