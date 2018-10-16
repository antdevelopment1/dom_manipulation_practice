// What is the DOM
// DOM is the interface between your JavaScript and Html and Css
// console.dir(document) in the tools list all the properties inside the document
// Document object model is the root node where everything lives inside of
// THESE ELEMENTS ARE JAVASCRIPT OBJECTS ONCE TARGETED NOT HTML ELEMENTS


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

// In this instance we only get the first match even though we have more than one element with the same class bolded
// Query Selector can also retrieve a tag name and it also only returns the very first one
var newerTag = document.querySelector('.bolded');
console.log(newerTag);

var h1Tag = document.querySelector('h1');
console.log(h1Tag);

var liTag = document.querySelector('#highlight');
console.log(liTag);


// All anchor tags that have a class special that are nested inside of an li is totally valid
// This line of code doesn't exsist in our html to be referenced anywhere but make a mental note that this is valid
// This will return null
// var li = document.querySelector("li a.special");

// Note: You can still use querySelectorAll even if there is only one li element to choose from. 

// Targets all li elements
var lis = document.querySelectorAll('li');

// Logs the value of all the li's
console.log(lis);