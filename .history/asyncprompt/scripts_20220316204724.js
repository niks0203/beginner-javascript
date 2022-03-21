/* eslint-disable */
function ask(options) {
  return new Promise((resolve) => {
    // create a popup with all fields
   
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML('afterbegin',`
    <fieldset>
    <label>${options.label}  </label>
    </fieldset>
    `)
    // check if cancel button is needed
    // listen to submit on inputs
    // when someone clicks on submit, resolve the input
    console.log(popup);
  });
}
