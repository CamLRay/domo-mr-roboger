# Mr. Robogers' Computer

##### A website which showcases simple looping
#### By **Cameron Ray**

## Technologies Used

* _HMTL_
* _CSS_
* _JavaScript_
* _JQUERY_

## Description

Mr. Robogers' Computer is a simple web application that allows a user to enter a number and have it return a sting from zero to the number replacing numbers containing 1, 2, and 3 with special strings depending on which numbers the number contains. The user can enter their username into the computer, and any number containing three will include their name in the response. The user can also ask the computer for help for brief instructions and look at a menu for additional functionality.

## Setup/Installation Requirements

* Clone or download the repository

  ```sh
  $ git clone https://github.com/Sploob/domo-mr-roboger.git
  ```
* Open HTML index.html
* To alter the code, open the documents in an IDE or text document. If your IDE is setup with your terminal use the following command
  ```sh
  $ code .
  ```
* Any changes should incorporate properly formatted commits with regular history
* Website is live at [gh-pages](https://sploob.github.io/domo-mr-roboger/)


## Known Bugs
* No Known Bugs

## Mr. Roboger's Neighborhood Rules
1. Return a range of numbers from 0 to the users inputed number.

2. Numbers containing a 1 replace all digits with the string "Beep!"
 ie. 109 becomes "Beep!"

3. Numbers containing a 2 all digits are replaced with the string "Boop!"
 ie. 2099 becomes "Boop!"

4. Numbers that contain 3 all digits are replaced with the string "Won't you be my neighbor?"
 ie 305 becomes "Won't you be my neighbor?"

5.  If a number contains the number above it replace with the higher string ie 32 becomes "Won't you be my Neighbor?"

## Tests

### **Describe numberRange()**
```
Test: "It should return a range of numbers from 0 to the user's inputted number"
Code: numberRange("5");
Expected Output: [0, 1, 2, 3, 4, 5]
```

### **Describe mrRoboger()**
```
 Test:_ "From an array of numbers it should replace numbers containing 1 with 'Beep!'"
 Code: mrRoboger([0, 1, 2, 3, 4, 5, 15]);
 Expected Output: [0, "Beep!", 2, 3, 4, 5, "Beep!"]
```
```
Test: 'From an array of numbers it should replace numbers containing 2 with "Boop!" and numbers containing only 1 with "Beep!"'
Code: mrRoboger([0, 1, 2, 3, 4, 5, 12, 15]);
Expected Output: [0, "Beep!", "Boop!", 3, 4, 5, "Boop!", "Beep!"]
```
```
Test: 'From an array of numbers it should replace numbers containing 3 with "Won't you be my neighbor?" numbers with 2 & 1 "Boop!" and numbers containing only 1 with "Beep!"'
Code: mrRoboger([0, 1, 2, 3, 4, 5, 12, 15, 321]);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?, 4, 5, "Boop!", "Beep!", "Won't you be my neighbor?]
```
```
Test: 'If user inputs name concat the name to the end of the phrase "Won't you be my neighbor?"'
Code: mrRoboger([3], "Cameron");
Expected Output: ["Won't you be my neighbor, Cameron?"]
```