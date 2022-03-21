function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No gallery found');
  }
  console.log(gallery);
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
