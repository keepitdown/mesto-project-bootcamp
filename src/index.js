import './pages/index.css';

import {profileEditBtn, addImageBtn, closePopupBtns, popupOverlays, profileEditWindow, profileEditForm, newImageWindow,
  newImageForm} from './components/constants.js'
import {closePopup, disableCloseWithKbrd} from './components/utils.js';
import {openProfileEditor, openNewImageEditor, applyProfileChanges, createImageFromInputForm} from './components/modal.js';
import {populateGallery} from './components/card.js';
import {enableValidation} from './components/validate.js';

//----------------------------Adding event listeners--------------------------------

//Profile-Info buttons

profileEditBtn.addEventListener('click', openProfileEditor);

addImageBtn.addEventListener('click', openNewImageEditor);

//Popup submit functionality

profileEditForm.addEventListener('submit', (e) => {
  e.preventDefault();
  applyProfileChanges();
  closePopup(profileEditWindow);
});

newImageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createImageFromInputForm();
  closePopup(newImageWindow);
})

//Close popup functionality

closePopupBtns.forEach((closeButton) => {
  const parentWindow = closeButton.closest('.popup');
  closeButton.addEventListener('click', () => {
    closePopup(parentWindow);
    disableCloseWithKbrd();
  });
});

popupOverlays.forEach((overlayElement) => {
  overlayElement.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      closePopup(overlayElement);
      disableCloseWithKbrd();
    }
  });
});

//-----------------------Function calls---------------------------

populateGallery();

enableValidation({
  formSelector: 'popup__form',
  inputSelector: 'popup__input-field',
  submitButtonSelector: 'popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__input-field_invalid',
  errorClass: 'popup__input-error-message'
});