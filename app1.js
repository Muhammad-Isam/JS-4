// CHAPTER 21-25

// QUESTION 1

// var fName=prompt("Enter your first name: ")
// var lName=prompt("Enter your last name: ")
// var fullName;
// fullName=fName+" "+lName;
// alert("Welcome "+fullName);

// QUESTION 2

// var favMobile = prompt("Please enter your favourite mobile phone model: ");
// document.write(favMobile + "<br>" + "Length of string: " + favMobile.length);

// QUESTION 3

// var word = "Pakistani";
// for (var i = 0; i < word.length; i++) {
// if (word[i]=="n")
// {
//     document.write("String: Pakistani"+"<br>Index of 'n': "+i);
// }
// }

// QUESTION 4

// var string = "Hello World";
// var count, x;
// for (var i=0; i<string.length; i++)
// {
//     if (string[i]=="l")
//     {
//         count++;
//         x=i;
//     }
//     if (i==string.length-1)
//     {
//         document.write("String: "+string+"<br>");
//         document.write("Last index of 'l': "+x);
//     }
// }

// QUESTION 5

// var string = "Pakistani";
// var i=3;
// document.write("String: "+string+"<br>");
// document.write("Character at index 3: "+string[i]);

// QUESTION 6

// var fName=prompt("Enter your first name: ")
// var lName=prompt("Enter your last name: ")
// var fullName;
// fullName = fName.concat(" ", lName);
// alert("Welcome "+fullName);

// QUESTION 7

// var replace = "Islam";
// var h;
// var city = "Hyderabad";
// var nString = "";
// document.write("City: "+city+"<br>");
// for (var i=0; i<city.length; i++)
// {
//     if (i!="r")
//     {
//         h+=city[i];
//     }
//     if (i=="r")
//     {
//         h+=city[i];
//         break;
//     }
// }
// for (var i=0; i<5; i++)
// {
//     nString+=replace[i];
// }
// for (var i=5; i<city.length; i++)
// {
//     nString+=city[i];
// }
// document.write("After replacement: "+nString);

// QUESTION 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var nMessage = message.replace(/and/g,"&");
// document.write(nMessage);

// QUESTION 9

// var string = "472";

// document.write("Value: "+string+"<br>Type: "+typeof string+"<br>");
// string= Number(string);
// document.write("Value: "+string+"<br>Type: "+typeof string+"<br>");

// QUESTION 10

// var input = prompt("Enter an input: ");
// document.write("User input: "+input+"<br>");
// var nString = input.toUpperCase();
// document.write("Upper case: "+nString);

// QUESTION 11

// var input = prompt("Enter an input: ");
// document.write("User input: "+input+"<br>");
// var nString = input[0].toUpperCase();
// for (var i=1; i<input.length; i++)
// {
//     nString+=input[i];
// }
// document.write("Title case: "+nString);

// QUESTION 12

// var num = 33.36;
// var string = num.toString().replace(".", "");
// document.write("Number: "+num+"<br>");
// document.write("Result: "+string);

// QUESTION 13

// var username = prompt("Enter your username: ");
// for (var i=0; i<username.length; i++)
// {
//     if (username.charCodeAt(i)==33 || username.charCodeAt(i)==44 || username.charCodeAt(i)== 46 || username.charCodeAt(i)==64)
//     {
//         alert("Error! Please enter a valid username without special characters.");
//     }
// }

// QUESTION 14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Enter an item to search: ");
// search = search.toLowerCase();
// var found=0;
// for (var i=0; i<A.length; i++)
// {
//     if (search==A[i])
//     {
//         document.write(search+" is available at index "+i+" in our bakery.");
//     }
//     else {
//         found++;
//     }
//     if (found==A.length)
//     {
//         document.write("We are sorry. "+search+" is <b>not available</b> in our bakery.");
//     }
// }

// QUESTION 15

// var password = prompt("Enter a password: ");
// var alph = false, number = false;
// var found = 0;
// if (password[0] < 0 || password[0] >= 0) {
//     document.write("Error! Password cannot begin with a number." + "<br>Please enter a valid password.");
// }
// if (password.length < 7) {
//     document.write("Error! Password must be atleast 6 characters long!");
// }
// for (var i = 0; i < password.length; i++) {
//     found++;
//     if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
//         number = true;
//     } else if ((password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)) {
//         alph = true;
//     }
//     if (alph == true && number == true) {
//         document.write("Password accepted!");
//         break;
//     }
//     else if (found == password.length) {
//         if (alph == false || number == false) {
//             document.write("Error! Password must contain both alphabets and numbers!");
//         }
//     }
// }

// QUESTION 16

// var string = "University of Karachi";
// var splitString = string.split('');
// for (var i=0; i<splitString.length; i++)
// {
//     document.write(splitString[i]+"<br>");
// }

// QUESTION 17

// var input = prompt("Enter a string: ");
// document.write("User input: "+input+"<br>");
// document.write("Last character of input: "+input[input.length-1]);

// QUESTION 18

// var sentence = "The quick brown fox jumps over the lazy dog";
// var find=/the/gi;
// var occurrences=sentence.match(find);
// document.write("Text: "+sentence+"<br>"+"There are "+occurrences.length+" occurrence(s) of word 'the'");