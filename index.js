function hasTargetSum(array, target) {
  for (let i=0; i< array.length; i++){
    // / n steps (depending on the length of the input array)
    let complement = target - array[i]
    for(let j=i + 1; j < array.length; j++){
       // n * n steps (nested loop!)
      if (array[j] === complement) return true;
    }
  }
  // if we reach the end of the array, return false - 1 step
  return false;
}

// O(n) runtime
function findSock(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}

// O(1) runtime
function findSock(object) {
  if (object.sock) return "sock";
}

function hasTargetSum(array, target) {
  // create an object to keep track of all the numbers we've seen
  const seenNumbers = {}; // 1 step
  // iterate over the array of numbers
  for (const number of array) { // n steps
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - number;
    // check if any of the keys in our object is the complement to the current number
    // if so, return true
    if (seenNumbers[complement]) return true; // n steps
    // save the current number as the key on our object so we can check it later against other numbers
    seenNumbers[number] = true; // n steps
  }
  // if we reach the end of the array, return false
  return false; // 1 step
}

// Set objects are collections of values.
function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
   time complexity: O(n * n) or O(n²) (quadratic)
   space complexity: amount of memory needed grows linearly with the size of the input array. We don't need to create any additional data structures to store information. 
   So we end up with O(n).

   Obj
   time: O(3n + 2) =>  O(n) 
   space: O(n) 

   Set
   Time complexity: O(n)
   Space complexity: O(n)
*/

/* 
  Add your pseudocode here:
  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  iterate over the remaining numbers in the array
    check if any of the remaining numbers is the complement
      if so, return true
if we reach the end of the array, return false

OR create new object
create an object to keep track of all the numbers we've seen
iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  check if any of the keys in our object is the complement to the current number
    if so, return true
  save the current number as the key on our object so we can check it later against other numbers
if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
