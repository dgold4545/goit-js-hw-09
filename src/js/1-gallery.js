import { images } from '../markup/images';
import { createMarkup } from '../markup/createMarkup';
import { galleryRefs } from '../markup/galleryRefs';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

galleryRefs.galleryList.insertAdjacentHTML('afterbegin', createMarkup(images));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captions: true,
});
