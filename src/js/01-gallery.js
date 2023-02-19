// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// add simpleLightBox import
import SimpleLightbox from "simplelightbox";

// add simpleLightBox styles import
import "simplelightbox/dist/simple-lightbox.min.css";

// gallary link
const galleryRef = document.querySelector('.gallery');

// create murkup
function createGalleryMurkup(images) {
    return images.map(img => 
        `<a class="gallery__item" href="${img.original}">
        <img class="gallery__image" 
            src="${img.preview}" 
            alt="${img.description}" />
      </a>`)
  .join('');
};

// add murkup
galleryRef.insertAdjacentHTML('beforeend', createGalleryMurkup(galleryItems));

// add properties
var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });







