// CHAPTER 17-20

// QUESTION 1 & 2

// var arr = [[]];
// arr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]];
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i]+"<br>");
// }

// QUESTION 3

// for (var i=1; i<=10; i++)
// {
//     document.write(i+"<br>")
// }

// QUESTION 4

// var t=+prompt("Enter a number to show it's multiplication table: ");
// var l=+prompt ("Enter length of the multiplication table: ");
// document.write("Multiplication table of "+t);
// document.write("<br>Length "+l+"<br><br>");
// for (var i=1; i<=l; i++)
// {
//     document.write(t+" X "+i+" = "+(t*i)+"<br>");
// }

// QUESTION 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }
// document.write("<br>");
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

// QUESTION 6

// var c1 = "Counting: ";
// for (var i = 1; i <= 15; i++) {
//     c1 += i;
//     if (i < 15) {
//         c1 += ", ";
//     }
// }
// document.write(c1 + "<br>");

// var c2 = "Reverse counting: ";
// for (var i = 10; i >= 1; i--) {
//     c2 += i;
//     if (i > 1) {
//         c2 += ", ";
//     }
// }
// document.write(c2 + "<br>");

// var even = "Even: ";
// for (var i = 0; i <= 20; i = i + 2) {
//     even += i;
//     if (i < 20) {
//         even += ", ";
//     }
// }
// document.write(even + "<br>");

// var odd = "Odd: ";
// for (var i = 1; i <= 19; i += 2) {
//     odd += i;
//     if (i < 20) {
//         odd += ", ";
//     }
// }
// document.write(odd + "<br>");

// var series = "Series: ";
// for (var i = 2; i <= 20; i += 2) {
//     series += i + "k";
//     if (i < 20) {
//         series += ", ";
//     }
// }
// document.write(series);

// QUESTION 7

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var found=0;
// var B = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// for (var i=0; i<A.length;i++)
// {
//     if (B==A[i])
//     {
//         document.write(B+" is available at index "+i+" in our bakery.");
//         break;
//     }
//     else{
//         found++;
//     }
//     if (found==A.length-1)
//     {
//         document.write("We are sorry. "+B+" is <b>not available</b> in our bakery.");
//     }
// }

// QUESTION 8

// var A = [24, 53, 78, 91, 12];
// var large=A[0];

// for (var i = 0; i < A.length; i++) {
// if (large<A[i])
// {
//     large=A[i];
// }
// }
// document.write("Array items: "+A);
// document.write("<br>The largest number is "+large);

// QUESTION 9

// var A = [24, 53, 78, 91, 12];
// var small=A[0];

// for (var i = 0; i < A.length; i++) {
// if (small>A[i])
// {
//     small=A[i];
// }
// }
// document.write("Array items: "+A);
// document.write("<br>The smallest number is "+small);

// QUESTION 10

// for (var i = 5; i<=100; i=i+5)
// {
//     document.write(i+", ");
// }
