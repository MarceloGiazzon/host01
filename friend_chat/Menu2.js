// Define a variable to store the total price
var totalPrice = 0;

// Define a function to add an item to the order list
function addToOrder(name, price) {

// Create a list item element
var li = document.createElement("li");

// Set the text content of the list item to show the name and price of the item
li.textContent = name + ": $" + price.toFixed(2);

// Append the list item to the order list element
document.getElementById("order-list").appendChild(li);

// Add the price of the item to the total price
totalPrice += price;

// Update the text content of the total price element to show the new total price
document.getElementById("total-price").textContent = "$" + totalPrice.toFixed(2);

}