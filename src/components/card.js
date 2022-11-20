import {profileData} from './data.js';
import {imageGallery, imageViewerWindow, imageViewerImage, imageViewerCaption} from './constants.js';
import {openPopup} from './utils.js';
import {requestGalleryContent} from './api.js';

//-----------------Card buttons and functionality-----------------------

//Like button functionality

function toggleLike(likeBtn) {
  likeBtn.classList.toggle('image-card__like-btn_active');
}

function setLikesState(likeBtn, likeCount, likesArray) {
  likeCount.textContent = likesArray.length;
  if (likesArray.some((likeRecord) => likeRecord._id === profileData._id)) {
    likeBtn.classList.add('image-card__like-btn_active');
  } else likeBtn.classList.remove('image-card__like-btn_active');
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
}

//------------------------------Image-card creation-----------------------------------------

const cardTemplate = document.querySelector('#image-card-template');

function createNewCard(cardInfo) {
  const newCard = cardTemplate.content.querySelector('.image-card').cloneNode(true);
  newCard.dataset.id = cardInfo._id;
  const cardImage = newCard.querySelector('.image-card__image');
  newCard.querySelector('.image-card__title').textContent = cardInfo.name;
  cardImage.alt = cardInfo.name;
  cardImage.src = cardInfo.link;
  const likeBtn = newCard.querySelector('.image-card__like-btn');
  const likeCount = newCard.querySelector('.image-card__like-count')
  setLikesState(likeBtn, likeCount, cardInfo.likes);
  newCard.querySelector('.image-card__like-btn').addEventListener('click', (e) => toggleLike(e.target));
  const removeCardBtn = newCard.querySelector('.image-card__remove-card-btn');
  if (cardInfo.owner._id === profileData._id) {
    removeCardBtn.addEventListener('click', (e) => removeImageCard(e.target));
  } else {
    removeCardBtn.remove();
  }
  cardImage.addEventListener('click', () => openImageViewer(cardInfo));
  return(newCard)
}

//-----------------------Populate gallery function-------------------------------------------

function populateGallery() {
  requestGalleryContent()
    .then((cardArray) => {
      cardArray.forEach((cardInfo) => {
        const newCard = createNewCard(cardInfo);
        imageGallery.append(newCard);
      });
    })
    .catch((err) => console.log(err));
}

export {createNewCard, populateGallery};