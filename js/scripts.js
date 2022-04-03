// Business Logic
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

//  UI Logic

  function typingEffect(text, speed) {
  let passage;
   for (let i = 0; i <= text.length; i++) {
     setTimeout(function() {
      passage = text.slice(0,i);
      $("#song").html(passage)
     }, i * speed);
   }
 }

  function onLoad() {
    $("#song").text("");
    $("#song").removeClass("center");
    $("#user-input").removeClass("hidden",5000);
    $("#number").focus();
  }

  function roboTrolley() {
    $(".trolley").removeClass("hidden").animate({left: '780px'},8000,"linear").queue(function(){
      $(".trolley").addClass("hidden").animate({left: '0'}).dequeue();
    });
  }

 $(document).ready(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    let userNum = $("#number").val().trim().replaceAll('"',"");
    let userName = $("#name").val().trim();
    let numArray;
    let song;
    let speed;
    if (parseInt(userNum) < 10) {
      speed = 50;
    } else if (parseInt(userNum) < 50) {
      speed = 20;
    } else if (parseInt(userNum) >= 50 && parseInt(userNum) < 100) {
      speed = 10;
    } else {
      speed = 0;
    }

    if (userNum === "") {
      $("#song").text("");
      $(".trolley").addClass("hidden");
    } else if (userNum[0] === "!" && parseInt(userNum.slice(1))) {
      numArray = numberRange(parseInt(userNum.slice(1)));
      song = mrRoboger(numArray, userName).reverse().join(" ");
      typingEffect(song, speed);
    } else if (userNum[0] === "?" && parseInt(userNum.slice(1))) {
      numArray = numberRange(parseInt(userNum.slice(1)));
      song = mrRoboger(numArray, userName)[parseInt(userNum.slice(1))];
      typingEffect(song, speed);
    } else if (userNum.toLowerCase() === "help" || userNum.toLowerCase() === "hlp") {
      typingEffect('Type a Hindu-Arabic number to make me sing. Type "menu" for a list of commands.', 20);
    } else if (userNum.toLowerCase() === "menu" || userNum.toLowerCase() === "commands") {
      typingEffect('</p><p>!: Type an exclamation point "!" before the number to reverse the song.</p> <p>?: Type a question mark "?" before the number to see the song at that number.</p><p>Set your user to have me include your name in the song.</p><p>trolley: Type "trolley" to say hi to the neighborhood trolley.</p><p> hello: Type hello to say hi to Mr. Robogers.');
    } else if (userNum.toLowerCase() === "trolley") {
      typingEffect("Mr. Robogers: Hello Mr. RoboTrolley.", 50);
      roboTrolley();
    } else if (userNum.toLowerCase() === "hello") {
      typingEffect("Mr. Robogers: Hello " + userName, 50);
    } else if (isNaN(userNum)) {
      typingEffect("Mr. Robogers: Error neighbor! Beep! Boop! Please enter a number. Example: 25");
    } else {
      numArray = numberRange(parseInt(userNum));
      song = mrRoboger(numArray, userName).join(" ");
      typingEffect("Mr. Robogers sings: "+ song, speed);
    }
  });

  typingEffect("Hello there neighbor...", 70);
  setTimeout(onLoad, 3500); 
 });