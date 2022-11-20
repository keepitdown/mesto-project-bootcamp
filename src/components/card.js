import {profileData} from './data.js';
import {imageGallery, imageViewerWindow, imageViewerImage, imageViewerCaption} from './constants.js';
import {openPopup, logError} from './utils.js';
import {openDeleteConfirmWindow} from './modal.js';
import {requestGalleryContent, sendLikeToggle} from './api.js';

//-----------------Card buttons and functionality-----------------------

//Like button functionality

function setLikesState(likeBtn, likeCount, cardInfo) {
  likeCount.textContent = cardInfo.likes.length;
  if (cardInfo.likes.some((likeOwner) => likeOwner._id === profileData._id)) {
    likeBtn.classList.add('image-card__like-btn_active');
    cardInfo.isLiked = true;
  } else {
    likeBtn.classList.remove('image-card__like-btn_active');
    cardInfo.isLiked = false;
  }
}

function toggleLike(cardInfo, likeBtn, likeCount) {
  sendLikeToggle(cardInfo)
    .then((cardData) => {
      cardInfo.likes = cardData.likes;
      setLikesState(likeBtn, likeCount, cardInfo);
    })
    .catch(logError);
}

//Delete button functionality

function removeFromDOM(event) {
  event.target.remove();
}

function removeImageCardLocaly(cardId) {
  const targetCard = imageGallery.querySelector(`[data-id="${cardId}"`);
  targetCard.classList.add('image-card_deleted');
  targetCard.addEventListener('transitionend', removeFromDOM, {once: true});
}

function removeImageCard(cardId) {

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

  cardInfo.isLiked = false;
  const likeBtn = newCard.querySelector('.image-card__like-btn');
  const likeCount = newCard.querySelector('.image-card__like-count')
  setLikesState(likeBtn, likeCount, cardInfo);
  likeBtn.addEventListener('click', () => toggleLike(cardInfo, likeBtn, likeCount));

  const removeCardBtn = newCard.querySelector('.image-card__remove-card-btn');
  if (cardInfo.owner._id === profileData._id) {
    removeCardBtn.addEventListener('click', () => openDeleteConfirmWindow(cardInfo._id));
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
    .catch(logError);
}

export {createNewCard, populateGallery, removeImageCardLocaly};