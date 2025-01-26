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
    let arr = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let n = arr.length;
    let obj = new Solution();
    let res = obj.maximumProfit(arr);
    console.log(res);
    console.log("~");
  }
}
// } Driver Code Ends

class Solution {
  /**
    * @param number[] prices

    * @returns number
    */
  maximumProfit(prices) {
    // code here
    if (!prices || prices.length < 2) {
      return 0;
    }
    let res = 0;
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
        res += prices[i] - prices[i - 1];
      }
    }
    return res;
  }
}
