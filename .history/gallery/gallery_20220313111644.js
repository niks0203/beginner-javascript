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
    modal.dataset.addClass('.open');
}

  function showImg(element) {
    console.log(element.src);
    modal.querySelector('img').src = element.src;
    modal.querySelector('h2').textContent = element.title;
    modal.querySelector('figcaption p').textContent = element.dataset.description;
    currentElement = element;
    showModal();
  }
  




  images.forEach(function(image){
        image.addEventListener('click',function(e){
            showImg(e.currentTarget);
        });
  })
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
