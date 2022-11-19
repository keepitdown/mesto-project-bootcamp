import {initialCards} from './data.js';
import {imageGallery, imageViewerWindow, imageViewerImage, imageViewerCaption} from './constants.js';
import {openPopup, enableCloseWithKbrd} from './utils.js';

//-----------------Card buttons and functionality-----------------------

//Like button functionality

function toggleLike(likeBtn) {
  likeBtn.classList.toggle('image-card__like-btn_active');
}

//Delete button functionality

function removeFromDOM(event) {
  event.target.remove();
}

function removeImageCard(removeBtn) {
  const parentCard = removeBtn.closest('.image-card');
  parentCard.classList.add('image-card_deleted');
  parentCard.addEventListener('transitionend', removeFromDOM, {once: true});
}

//Open image-viwer

function changeImageInsideViewer(cardInfo) {
  imageViewerImage.src = cardInfo.link;
  imageViewerImage.alt = cardInfo.name;
  imageViewerCaption.textContent = cardInfo.name;

}

function openImageViewer(cardInfo) {
  changeImageInsideViewer(cardInfo);
  openPopup(imageViewerWindow);
  enableCloseWithKbrd();
}

//------------------------------Image-card creation-----------------------------------------

const cardTemplate = document.querySelector('#image-card-template');

function createNewCard(cardInfo) {
  const newCard = cardTemplate.content.querySelector('.image-card').cloneNode(true);
  const cardImage = newCard.querySelector('.image-card__image');
  newCard.querySelector('.image-card__title').textContent = cardInfo.name;
  cardImage.alt = cardInfo.name;
  cardImage.src = cardInfo.link;
  newCard.querySelector('.image-card__like-btn').addEventListener('click', (e) => toggleLike(e.target));
  newCard.querySelector('.image-card__remove-card-btn').addEventListener('click', (e) => removeImageCard(e.target));
  cardImage.addEventListener('click', () => openImageViewer(cardInfo));
  return(newCard)
}

//-----------------------Populate gallery function-------------------------------------------

function populateGallery() {
  initialCards.forEach( (cardInfo) => {
    const newCard = createNewCard(cardInfo);
    imageGallery.append(newCard);
  });
}

export {createNewCard, populateGallery};