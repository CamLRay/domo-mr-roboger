function numberRange(input) {
  let number = parseInt(input);
  let numbers = [];
  for (let i = 0; i <= number; i++) {
    numbers.push(i);
  }
  return numbers;
}
console.log(numberRange("5"));