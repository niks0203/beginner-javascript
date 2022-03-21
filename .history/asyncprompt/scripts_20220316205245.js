/* eslint-disable */
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
    document.body.appendChild(form);
    console.log(popup);
  });
}
