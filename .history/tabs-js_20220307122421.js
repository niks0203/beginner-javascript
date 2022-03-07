/* eslint-disable */ 
console.log('This works');
/** eslint-disable */
const panels = document.querySelectorAll('.panel-box');
const tabBtns = document.querySelectorAll('.tab-btn');


panels.forEach(function(element,index){

if(index != 0){
    element.style.display = "none";
}

});

tabBtns.forEach(function(element,index){
    element.addEventListener('click',handleClickFunction);
})
function handleClickFunction(event){
    console.log(event.currentTarget);
    const panelId = event.currentTarget.dataset;
    console.log(panelId);

}