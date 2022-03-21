function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No gallery found');
  }
  /* eslint-disable */
  // console.log(gallery);
  const images = Array.from(gallery.querySelectorAll('img'));
  
  // console.log(images);
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentElement;
  console.log(nextButton);

function showModal(){
    console.info('Opening Modal...');
    if(modal.matches('.open')){
        console.info('Modal already open');
        return;
    }
    modal.classList.add('open');
    nextButton.addEventListener('click',showNextImage);
}
function closeModal(){
    modal.classList.remove('open');
}
function showNextImage(){
    showImg(currentElement.nexElementSibling || gallery.firstElement);
}

  function showImg(element) {
    console.log(element.src);
    modal.querySelector('img').src = element.src;
    modal.querySelector('h2').textContent = element.title;
    modal.querySelector('figcaption p').textContent = element.dataset.description;
    currentElement = element;
    showModal();
  }
  

function handleClickOutside(e){
    if(e.currentTarget === e.Target){
        return;
    }
    closeModal();
}


  images.forEach(function(image){
        image.addEventListener('click',function(e){
            showImg(e.currentTarget);
        });
  })
  modal.addEventListener('click',handleClickOutside);
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
