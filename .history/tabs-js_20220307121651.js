/* eslint-disable */ 
console.log('This works');
/** eslint-disable */
const panels = document.querySelectorAll('.panel-box');
const tabBtns = document.querySelectorAll('.tab-btn');


panels.forEach(function(element,index){
console.log(element.id);
if(index != 0){
    element.style.display = "none";
}

});
