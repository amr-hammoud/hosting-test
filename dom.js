
// ----- DOM Manipulation ----- //
// The DOM (Document Object Model) is a representation of the HTML document as a tree structure.
// The DOM allows us to manipulate the HTML document using JavaScript.

// ---- Selecting Elements ----- //
// There are several ways to select elements in the DOM:
// 1. getElementById: selects an element by its id
// 2. getElementsByClassName: selects elements by their class name
// 3. getElementsByTagName: selects elements by their tag name
// 4. querySelector: selects the first element that matches a CSS selector
// 5. querySelectorAll: selects all elements that match a CSS selector
// and more...

// getting elements by id
const title = document.getElementById("title");

// getting elements by class name
const items = document.querySelectorAll(".item");
// console.log(items);


// ----- Updating Elements ----- //
// update the text of the items to be their index + 1
for (let i = 0; i < items.length; i++) {
	items[i].innerText = i + 1;
}

// update the text of the title to be "Hello World"
// never use innerHTML to update the text of an element, use innerText instead because innerHTML is a security risk
title.innerHTML = `<span style="color: blue;">Hello All</span>`;
title.innerText = "Hello All";


// ----- Adding Elements ----- //
// add a new item to the list with the text "5"
const list = document.getElementById("list"); // get the list element
const newLi = document.createElement("li"); // create a new li element
newLi.innerText = 5; // set the text of the new li element to be 5
list.appendChild(newLi); // add the new li element to the list



// add a new image to the body with the src "./images/folders.png" and alt "folders"
// and the class "custom-size" and "underline"
const image = document.createElement("img"); // create a new image element

image.setAttribute("src", "./images/folders.png"); // set the src of the image to be "./images/folders.png"
image.setAttribute("alt", "folders"); // set the alt of the image to be "folders"
image.className = "underline"; // set the class of the image to be "underline"
image.classList.remove("underline"); // remove the class "underline" from the image
image.classList.add("custom-size"); // add the class "custom-size" to the image

document.body.appendChild(image); // add the image to the body


// ----- Removing elements ----- //
document.body.removeChild(title); // remove the title from the body


// ----- Adding Event Listeners ----- //
// Event listeners are used to listen for events on elements in the DOM.
// For example, we can listen for a click event on a button and execute a function when the button is clicked.

// add a click event listener to the button with the id "click"
const button = document.getElementById("click");

// when the button is clicked, log "Clicked" to the console
button.addEventListener("click", function () {
	console.log("Clicked");
});

// add a mouseover event listener to the button with the id "click"
// when the mouse is above the button, log "Mouse above button" to the console
button.addEventListener("mouseover", function () {
	console.log("Mouse above button");
});

// add a click event listener to the title
// when the title is clicked, change the color of the title to blue
title.addEventListener("click", function () {
	title.style.color = "blue";
});
