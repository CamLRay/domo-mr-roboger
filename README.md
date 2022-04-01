Mr. Roboger's Neighborhood Rules


1. Numbers containing a 1 replace all digits with the string "Beep!"
 ie. 109 becomes "Beep!"

 2. numbers containing a 2 all digits are replaced with the string "Boop!"
 ie. 2099 becomes "Boop!"

 3. numbers that contain 3 all digits are replaced with the string "Won't you be my neighbor?"
 ie 305 becomes "Won't you be my neighbor?"

4.  if a number contains the number above it replace with the higher string ie 32 becomes "Won't you be my Neighbor?"

5. return a range of numbers from 0 to the users inputed number.


Describe numberRange()

Test: "It should return a range of numbers from 0 to the user's inputted number"
Code: numberRange("5");
Expected Output: [0, 1, 2, 3, 4, 5]

Describe mrRoboger()

Test: "From an array of numbers it should replace numbers containing 1 with 'Beep!'"
Code: mrRoboger([0, 1, 2, 3, 4, 5, 15]);
Expected Output: [0, "Beep!", 2, 3, 4, 5, "Beep!"]

Test: 'From an array of numbers it should replace numbers containing 2 with "Boop!" and numbers containing only 1 with "Beep!"'
Code: mrRoboger([0, 1, 2, 3, 4, 5, 12, 15]);
Expected Output: [0, "Beep!", "Boop!", 3, 4, 5, "Boop!", "Beep!"]

Test: 'From an array of numbers it should replace numbers containing 3 with "Won't you be my neighbor?" numbers with 2 & 1 "Boop!" and numbers containing only 1 with "Beep!"'
Code: mrRoboger([0, 1, 2, 3, 4, 5, 12, 15, 321]);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?, 4, 5, "Boop!", "Beep!", "Won't you be my neighbor?]

Test: 'If user inputs name concat the name to the end of the phrase "Won't you be my neighbor?"'
Code: mrRoboger([3], "Cameron");
Expected Output: ["Won't you be my neighbor, Cameron?"]
