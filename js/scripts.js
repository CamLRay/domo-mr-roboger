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

 function typingEffect(text, speed) {
  let passage;
   for (let i = 0; i <= text.length; i++) {
    $("#song").text("Mr. Roboger: ");
     setTimeout(function() {
      passage = text.slice(0,i);
      $("#song").html("Mr. Roboger: " + passage + "")
     }, i * speed);
   }
 }

 $(document).ready(function() {

  $("#user-input").submit(function(event) {
    event.preventDefault();



    let userNum = $("#number").val().trim();
    let userName = $("#name").val().trim();
    let numArray;
    let song;
    let speed;
    if (parseInt(userNum) < 50) {
      speed = 20;
    } else if (parseInt(userNum) >= 50 && parseInt(userNum) < 100) {
      speed = 10;
    } else {
      speed = 0;
    }

    if (userNum === "") {
      $("#song").text("");
    } else if (userNum[0] === "!" && parseInt(userNum.slice(1))) {
      numArray = numberRange(parseInt(userNum.slice(1)));
      song = mrRoboger(numArray, userName).reverse().join(" ");
      typingEffect(song, speed);
    } else if (userNum[0] === "?" && parseInt(userNum.slice(1))) {
      numArray = numberRange(parseInt(userNum.slice(1)));
      song = mrRoboger(numArray, userName)[parseInt(userNum.slice(1))];
      $("#song").text("Mr. Roboger: " + song);
    } else if (isNaN(userNum)) {
      typingEffect("Mr. Roboger: Error! Beep! Boop! Please enter a number neighbor. Example: 25");
    } else {
      numArray = numberRange(parseInt(userNum));
      song = mrRoboger(numArray, userName).join(" ");
      typingEffect(song, speed);
    }
  });

  $("#legend-button").click(function() {
    $("#legend").toggleClass("hidden");
  });
 });