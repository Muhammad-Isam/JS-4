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
