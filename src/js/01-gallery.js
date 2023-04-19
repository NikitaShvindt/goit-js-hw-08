import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = galleryItems.map(({preview, original, description}) => 
        `<li class="gallery__item"><a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a></li>`).join("");

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });


console.log(galleryItems);

