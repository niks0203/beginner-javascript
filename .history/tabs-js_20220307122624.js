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
    console.dir(event.currentTarget);
    const panelId = event.currentTarget.getAttribute('panelid');
    console.log(panelId);

}