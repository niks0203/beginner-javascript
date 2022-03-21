function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No gallery found');
  }
  // console.log(gallery);
  const images = Array.from(gallery.querySelectorAll('img'));
  // console.log(images);
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  console.log(nextButton);

  function showImg(element) {
    console.log(element);
    modal.querySelector('img').src = element.src;
    modal.querySelector('h2').textContent = element.title;
    modal.querySelector('figcaption p').textContent =
      element.dataset.description;
  }
  /* eslint-disable */ 




  images.forEach(function(image){
        image.addEventListener('click',showImg);
  })
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
