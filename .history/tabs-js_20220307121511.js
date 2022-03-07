/* eslint-disable */ 
console.log('This works');
/** eslint-disable */
const panels = document.querySelectorAll('.panel-box');
const tabBtns = document.querySelectorAll('.tab-btn');


panels.forEach(function(element){
console.log(element.id);
element.style.display = "none";
});
