const { resolve4 } = require('dns');

/* eslint-disable */
function wait(ms=0){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve;
        },ms);
    })
}
function ask(options) {
  return new Promise(function(resolve) {
    // create a popup with all fields
   
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML('afterbegin',`
    <fieldset>
    <label>${options.title}  </label>
    </fieldset>
    `);
    // check if cancel button is needed
    if(options.cancel){
        const skipButton = document.createElement('button');
        skipButton.type = 'button';
        skipButton.textContent = 'Cancel';
        //listen to click on that cancel button

    }
    // listen to submit on inputs
    // when someone clicks on submit, resolve the input
    //insert popup to DOM
    document.body.appendChild(popup);
    console.log(popup);
  });
}
