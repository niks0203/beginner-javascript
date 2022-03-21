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
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
