console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Hot Dogs", "Spaghetti", "Pizza", "Steak", "Lobster", "Biscuits and Gravy"];



// 2. Loop through the list and print: "One of my favorite foods is ______."
// Loop through array using a for loop
for (let i = 0; i < favoriteFoods.length; i++){
  console.log("One of my favorite foods is " + favoriteFoods[i] + ".");
}




// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
for (let i = 0; i < favoriteFoods.length; i++){
  console.log("My #" + (i + 1) + " favorite food is " + favoriteFoods[i]);
}




// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."
function printFoodRecommendation(foodName){
  // Reference foodName and concatenate its value with the strings to print
  console.log("Have you ever tried " + foodName + "?");
  console.log("I always recommend " + foodName + " to friends.");
  console.log("Trust me -" + foodName + " is delicious.");
}



// 4b. Call the function at least 3 times
printFoodRecommendation("hamburger steak");
printFoodRecommendation(favoriteFoods[3]);
printFoodRecommendation("shrimp");



// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.
// Loop through friendFavorites using a for loop
for (let i = 0; i < friendFavorites.length; i++){
  // Condition to check whether each food name contains "a"
  if (friendFavorites[i].includes("a")){
    // Prints the current food name only if the above condition evaluates to true
    console.log(friendFavorites[i]);
  }
}


// 6. Store the result in an array called foodsWithA. Print out the array.
// Declare and create an empty array
let foodsWithA = [];

// Iterate through friendFavorites using a for loop
for (i = 0; i <  friendFavorites.length; i++){
  // Condition to check if the current food name includes "a"
  if (friendFavorites[i].includes("a")){
    // push the current food name into foodsWithA only if the food name includes "a"
    foodsWithA.push(friendFavorites[i]);
  }
}
// Print foodsWithA
console.log(foodsWithA);





// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
// Declare empty array, longFoodNames
let longFoodNames = [];
// Iterate through friendFavorites
for (let i = 0; i < friendFavorites.length; i++){
  // Condition to check if food name is longer than 6 characters
  if (friendFavorites[i].length > 6){
    // Push the current food name into longFoodNames only if it is longer than 6 characters
    longFoodNames.push(friendFavorites[i]);
  }
}


// 8. Create another array shortFoodNames for foods 6 characters or shorter.
// Declare shortFoodNames and assign it as an empty array
let shortFoodNames = [];
// Iterate through friendFavorites
for (let i = 0; i < friendFavorites.length; i++){
  // Condition to see if a food name is shorter than 6 characters
  if (friendFavorites[i].length < 6){
    // Push current food name into shortFoodNames if it is shorter than 6 characters
    shortFoodNames.push(friendFavorites[i]);
  }
}


// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
console.log(longFoodNames);
console.log(shortFoodNames);

if (longFoodNames.length > shortFoodNames.length){
  console.log("There are more long-named foods.");
} else if (shortFoodNames.length > longFoodNames.length) {
  console.log("There are more short-named foods.");
} else {
  console.log("There are just as many short-named food as there are long-named foods");
}


// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
let longestFoodName = "";
for (let i = 0; i < friendFavorites.length; i++){
  if (friendFavorites[i].length > longestFoodName.length){
    longestFoodName = friendFavorites[i];
  }
}
console.log("The longest food name in the list is " + longestFoodName 
  + " with " + longestFoodName.length + " characters.");
