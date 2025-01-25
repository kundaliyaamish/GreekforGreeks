//{ Driver Code Starts
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
    .map((string) => string.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let nums = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let solution = new Solution();
    let ans = solution.findMajority(nums);
    if (ans.length === 0) {
      console.log("[]");
    } else {
      console.log(ans.join(" "));
    }
  }
}
// } Driver Code Ends

class Solution {
  // Function to find the majority elements in the array
  findMajority(arr) {
    // Your code goes here
    const freqMap = new Map();
    const result = [];
    const majority = arr.length / 3;

    for (let num of arr) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    for (let [key, value] of freqMap.entries()) {
      if (value > majority) {
        result.push(key);
      }
    }

    return result.sort((a, b) => a - b);
  }
}
