/*
Write a program to prompt the user for a password. The password should meet all
these requirements:
● The password must be at least 8 characters long.
● The password must contain at least one uppercase letter.
● The password must contain at least one number.
● If the password does not meet all the requirements, the program should
keep asking the user for a new password until they provide a valid one.
Your application should:
● Use readlineSync.question() to prompt a user for input.
● Prompt a user to enter a password.
● Loop through the password to ensure that it meets the password
requirements, using the appropriate iteration statement(s) to do so. Make
sure you consider how iteration affects top-to-bottom execution of your code
and when a while or do-while loop would be more appropriate.
● Return one of the following statements:
○ If the password meets the requirements, a statement to let the user
know they have been successful
○ If the password does NOT meet the requirements, a statement to let
the user know their password does not meet the requirements
*/

const readline = require('readline-sync');

// Declare variables without assignments prior to the start of the do-while loop
let password;
let passwordHasNumber;
let passwordHasUpperCase;
let passwordLength;

do {
    password = readline.question("Please enter your password: "); // Question to prompt user for password input
    passwordLength = password.length;
    passwordHasNumber = false;
    passwordHasUpperCase = false;

    for (let i = 0; i < passwordLength; i++) { // for loop to loop through the password, logging each character as it goes through the length of the string
        let char = password[i]; // each character in the password is logged
        if (char >= '0' && char <= '9') { // if statement to check for a number in the logged characters from the for loop
            passwordHasNumber = true; // passwordHasNumber is true IF a number is present in 'password'
        }
        if (char >= 'A' && char <= 'Z') { // if statement to check for an uppercase letter in the logged characters from the for loop
            passwordHasUpperCase = true; // passwordHasUpperCase is true IF an uppercase letter is present in 'password'
        }
    }
} while (passwordLength < 8 || !passwordHasNumber || !passwordHasUpperCase); // Continue looping until all requirements are met

console.log("You have successfully logged in."); // If the password requirements are met, you exit the loop and this statement prints to the console