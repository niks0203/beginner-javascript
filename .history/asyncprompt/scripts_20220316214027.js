/* eslint-disable */
function wait(ms = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve,ms);
    });  
}
async function destroyPopup(popup){
    popup.classList.remove('open');
    await wait(1000);
popup.remove();
 //completely remove it
 popup =null;

}
function ask(options) {
  return new Promise(async function(resolve) {
    // create a popup with all fields
   
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML('afterbegin',`
    <fieldset>
    <label>${options.title}  </label>
    <input type="text" name="input"></input>
    <button type="submit">Submit</button> 
    </fieldset>
    `);
    // check if cancel button is needed
    if(options.cancel){
        const skipButton = document.createElement('button');
        skipButton.type = 'button';
        skipButton.textContent = 'Cancel';
        popup.firstElementChild.appendChild(skipButton);
        //listen to click on that cancel button

    }
    
    // listen to submit on inputs
    popup.addEventListener('submit',function(e){
        e.preventDefault();
         console.log(e.target.input);
         resolve(e.target.input.value);
         destroyPopup(popup);
    },{once:true});
    // when someone clicks on submit, resolve the input
    //insert popup to DOM
    document.body.appendChild(popup);
    await wait(50);
    popup.classList.add('open');
    console.log(popup);
  });
}

const buttons = document.querySelectorAll('[data-question]');