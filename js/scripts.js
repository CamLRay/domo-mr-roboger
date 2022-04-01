function numberRange(input) {
  let number = parseInt(input);
  let numbers = [];
  for (let i = 0; i <= number; i++) {
    numbers.push(i);
  }
  return numbers;
}

 function mrRoboger(array, name) {
  let song = array.map(function(number) {
    if (number.toString().includes(3) && name !== "" && name !== undefined) {
      return "Won't you be my neighbor, " + name + "?"
    } else if (number.toString().includes(3)){
      return "Won't you be my neighbor?"
    } else if(number.toString().includes(2)) {
      return "Boop!";
    } else if (number.toString().includes(1)) {
      return "Beep!";
    } else {
      return number;
    }
  });
  return song;
 }



console.log(mrRoboger(numberRange("15"), "Cam"));