const args = process.argv.slice(2);
console.log(args);


const timer = function() {
  
  let inputArray = args;
  
  let hasNegative = inputArray.some(num => num < 0);
  if ((inputArray.length === 0) && (hasNegative)) {
    return;
  }
  
  inputArray.sort((a,b) => {
    return a - b;
  });
  console.log("sorted:", inputArray);
// looping the array
  for (let x = 0; x < inputArray.length; x ++) {
    console.log(inputArray[x])
    console.log([x])
    setTimeout(() => {
      process.stdout.write('\x07');
    }, inputArray[x] * 1000)
  }

}

timer();