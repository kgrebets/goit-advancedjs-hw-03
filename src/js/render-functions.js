export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      image => `
    <a class="gallery-item" href="${image.largeImageURL}">
      <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
      <div class="info">
        <p>Likes ${image.likes}</p>
        <p>Views ${image.views}</p>
        <p>Comments ${image.comments}</p>
        <p>Downloads ${image.downloads}</p>
      </div>
    </a>
  `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
