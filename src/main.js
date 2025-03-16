import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/styles.css'

const form = document.querySelector('#search-form');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = e.target.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topLeft',
    });
    return;
  }

  clearGallery();
  loader.classList.remove('hidden');

  try {
    const data = await fetchImages(query);
    loader.classList.add('hidden');

    if (data.hits.length === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topLeft',
      });
      return;
    }

    renderImages(data.hits);

    lightbox.refresh();
  } catch (error) {
    loader.classList.add('hidden');
    iziToast.error({
      message: 'An error occurred. Please try again.',
      position: 'topLeft',
    });
    console.error(error);
  }

  form.reset();
});
