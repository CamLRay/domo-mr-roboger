function numberRange(input) {
  let number = parseInt(input);
  let numbers = [];
  for (let i = 0; i <= number; i++) {
    numbers.push(i);
  }
  return numbers;
}

 function mrRoboger(array, name) {
  let songArray = array.map(function(number) {
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
  return songArray;
 }


 $(document).ready(function() {

  $("#user-input").submit(function(event) {
    event.preventDefault();
    let userNum = $("#number").val().trim();
    let userName = $("#name").val().trim();
    let numArray;
    let song;
    if (userNum === "") {
      $("#song").text("");
    } else if (isNaN(parseInt(userNum.slice(1)))) {
      $("#song").text("Mr. Roboger Says: Error please enter a number. Example: 17");
    } else if (userNum[0] === "!") {
      numArray = numberRange(parseInt(userNum.slice(1)));
      song = mrRoboger(numArray, userName).reverse().join(" ");
      $("#song").text("Mr. Roboger Sings: " + song);
    } else if (userNum[0] === "?") {
      numArray = numberRange(parseInt(userNum.slice(1)));
      song = mrRoboger(numArray, userName)[parseInt(userNum.slice(1))];
      $("#song").text("Mr. Roboger Sings: " + song);
    } else {
      numArray = numberRange(parseInt(userNum));
      song = mrRoboger(numArray, userName).join(" ");
      $("#song").text("Mr. Roboger Sings: " + song);
    }
  });

  $("#legend-button").click(function() {
    $("#legend").toggleClass("hidden");
  });
 });