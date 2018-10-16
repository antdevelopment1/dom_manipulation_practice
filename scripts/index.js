// What is the DOM
// DOM is the interface between your JavaScript and Html and Css
// console.dir(document) in the tools list all the properties inside the document
// Document object model is the root node where everything lives inside of\


// 5 Main Methods Covered In This Exercise
// document.getElementById()
// document.getElementByClassName()
// document.getElementByTagName()
// document.querySelector()
// document.querySelectorAll()

// ===============================================
//         Older Ways To Select Elements
// ===============================================
// Gets the list item by targeting the id highlight
var tag = document.getElementById("highlight");

// Logs the value saved inside of tag
console.log(tag);

// Logs the properties associated with tag
console.dir(tag);

// Gets the list item by targeting the id highlight
var idTag = document.getElementsByClassName('bolded');

// Logs the value saved inside idTag
console.log(idTag);

// Logs the properties associated with idTag
console.dir(idTag);

// Gets the list item by targeting the tag name li
var tagName = document.getElementsByTagName('li');

// Logs the value saved inside tagName
console.log(tagName);

// Logs the properties associated with TagName
console.dir(tagName);


// ===============================================
//         Newer Ways To Select Elements
// ===============================================

 