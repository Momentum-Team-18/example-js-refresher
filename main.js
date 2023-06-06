console.log("hi 💮")

// what inputs does this function need?
// what output does the function return?

function greet() {
  return "Hello World"
}

function echo (something) {
  // use the input in the body of the function
  return something
}

function sum (nums) {
  // add nums in an array together
  let total = 0
  // take one num at a time and each time update the current total 
  for (let num of nums){
    // add each number to the total
    // make that number the new total
      // total = num + total
      total += num
  }
  return total
}

const sumArrowFn = (nums) => {
  let total = 0
  for (let num of nums){
      total += num
  }
  return total
}

// console.log('Calling the echo function:')
// console.log(echo([1, 2, 3, 4]))

console.log(sum([1, 2, 3, 4]))


