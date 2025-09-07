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

function isCorrectLength(password) {
    if (!password) {
        throw new Error("Password cannot be blank. Please enter a valid password.");
    } else if (password.length < 8) {
        throw new Error("Password must contain 8 or more characters.");
    }
    return true;
}

function containsUpperCase(password) {
    for (let char in password) {
        if (password[char] >= 'A' && password[char] <= 'Z') {
            return true;
        } else {
            throw new Error("Password must contain at least 1 uppercase letter.");
        }
    }
}

let password;

try {
    do {
        password = readline.question("Please enter your password: ");

    } while (!isCorrectLength(password) || !containsUpperCase(password));

    console.log("You've successfully logged in!");

} catch (error) {
    console.log(error.message);
}


