// Create an empty object to store the menu structure
const menu = {};

// Define a recursive function that can add a file path to the menu object
function addToMenu(path, obj) {
  // Split the path by the slash character
  const parts = path.split("/");
  // Get the first part of the path
  const first = parts.shift();
  // Check if the first part is already a key in the object
  if (!obj[first]) {
    // If not, create an empty object for it
    obj[first] = {};
  }
  // Check if there are more parts left in the path
  if (parts.length > 0) {
    // If yes, call the function recursively with the remaining parts and the sub-object
    addToMenu(parts.join("/"), obj[first]);
  } else {
    // Assign an empty string to the obj[first] property
    obj[first] = "";
  }
}

// Loop over the array of file paths and add each one to the menu object
for (let link of jsonLinks) {
  addToMenu(link, menu);
}

// Define a function that can create a single ul element from the menu object
function createMenuElement(obj) {
  // Create a ul element to store the list items
  let ul = document.createElement("ul");
  // Loop over the keys of the object
  for (let key in obj) {
    // Check if the key is an empty string (this means it's a file name)
    if (key === "") {
      // If yes, create a li element with a link to the file and append it to the ul element
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.href = obj[key];
      a.textContent = obj[key];
      li.appendChild(a);
      ul.appendChild(li);
    } else {
      // If not, create a li element with a text for the folder name and append it to the ul element
      let li = document.createElement("li");
      li.textContent = key;
      // Check if the sub-object is not empty
      if (Object.keys(obj[key]).length > 0) {
        // If yes, call the function recursively with the sub-object and store the returned ul element
        let subElement = createMenuElement(obj[key]);
        // Append the sub-element to the li element
        li.appendChild(subElement);
      }
      // Append the li element to the ul element
      ul.appendChild(li);
    }
  }
  // Return the ul element
  return ul;
}

// Create a single ul element for the menu and append it to a div element with id of "menu"
const menuElement = createMenuElement(menu);
const menuDiv = document.createElement("div");
menuDiv.id = "menu";
// Append the menu element to the div element
menuDiv.appendChild(menuElement);
document.body.appendChild(menuDiv);

// Add an event listener to each list item that has a sublevel
const items = document.querySelectorAll("#menu li");
for (let item of items) {
  if (item.querySelector("ul")) {
    item.addEventListener("click", function(e) {
      // Prevent the default behavior of the link
      e.preventDefault();
      // Toggle the class of "open" on the item
      this.classList.toggle("open");
    });
  }
}