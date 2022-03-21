function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No gallery found');
  }
  // console.log(gallery);
  const images = Array.from(gallery.querySelectorAll('img'));
  console.log(images);
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
