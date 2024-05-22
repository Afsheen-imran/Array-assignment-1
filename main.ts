//    Assignment of Array # 1
//    Date: 22/5/24
//   Name: Afsheen

/*Question 1: Create an array named fruits that contains the following string elements:
 "apple", "banana", "mango", "orange".*/

import { log } from "console";

let fruits: string[] = ["apple", "banana", "mango", "Orange"];
console.log("Array of fruits:", fruits);

/*Question 2: Declare an array named numbers that can contain only number elements and initialize 
 it with the values 10, 20, 30, and 40.*/

let numbers: number[] = [10, 20, 30, 40];
console.log("Array of Numbers:", numbers);

/*Question 3: Access the third element of the fruits array and assign it to a variable named thirdFruit.*/

let thirdFruit = fruits[2];
console.log("Accessing the third element of the fruits array:", thirdFruit);

/*Question 4: Change the second element of the numbers array to 25.*/

let changeNumber = (numbers[1] = 25);
console.log("Changing second element of the numbers array:", changeNumber);

/*Question 5: Add the element "grape" to the end of the fruits array using the method.*/

fruits.push("grape");
console.log("Adding grape to the end of fruits array:", fruits);

/*Question 6: Remove the last element from the fruits array using the method and assign
  it to a variable named lastFruit.*/

let lastFruit = fruits.pop();
console.log("Removing the last element from the fruit array:", lastFruit);

/*Question 7: Remove the first element from the fruits array using the method and assign it
   to a variable named firstFruit.*/

let firstFruit = fruits.shift();
console.log("Removing the frist element from the fruits array;", firstFruit);

/*Question 8: Add the element "kiwi" to the beginning of the fruits array using the method.*/

fruits.unshift("kiwi");
console.log("Adding kiwi to the beginning of the fruits array:", fruits);

/*Question 9: Remove 2 elements from the fruits array starting from index 1 using the method.*/

fruits.splice(1, 2);
console.log("Removing 2 elements from the fruits array:", fruits);

/*Question 10: Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.*/

fruits.splice(2, 0, "Pineapple", "Pear");
console.log("Inserting elements at index 2", fruits);

/*Question 11: Create a new array named citrusFruits that contains the first two elements of the
  fruits array using the method.*/

let citrusFruits: string[] = fruits.slice(0, 2);
console.log("Citrus Fruits:", citrusFruits);

/*Question 12: Create a new array named lastTwoFruits that contains the last two elements
   of the fruits array using the method.*/

let lastTwoFruits: string[] = fruits.slice(-2);
console.log("last two elements of the fruits array:", lastTwoFruits);
