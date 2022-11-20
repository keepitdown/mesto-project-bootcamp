import './pages/index.css';

import { profileData } from './components/data.js';
import {editProfilePicBtn, profileEditBtn, addImageBtn, popupOverlays, profileEditWindow, profileEditForm, newImageWindow,
  newImageForm, changePicWindow, changeProfilePicForm, deleteConfirmWindow, deleteConfirmWForm} from './components/constants.js'
import {closePopup, logError, changeProfileInfo, changeProfileImage} from './components/utils.js';
import {openProfilePicEditor, openProfileEditor, openNewImageEditor, applyProfilePictureChange, applyProfileInfoChanges, createImageFromInputForm, removeImageCard
  } from './components/modal.js';
import {populateGallery} from './components/card.js';
import {enableValidation} from './components/validate.js';
import { requestProfileInfo} from './components/api';

//----------------------------Adding event listeners--------------------------------

//Profile-Info buttons

editProfilePicBtn.addEventListener('click', openProfilePicEditor);

profileEditBtn.addEventListener('click', openProfileEditor);

addImageBtn.addEventListener('click', openNewImageEditor);

//Popup submit functionality

changeProfilePicForm.addEventListener('submit', (e) => {
  e.preventDefault();
  applyProfilePictureChange();
  closePopup(changePicWindow);
});

profileEditForm.addEventListener('submit', (e) => {
  e.preventDefault();
  applyProfileInfoChanges();
  closePopup(profileEditWindow);
});

newImageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createImageFromInputForm();
  closePopup(newImageWindow);
})

popupOverlays.forEach((overlayElement) => {
  overlayElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup') || e.target.classList.contains('popup__close-btn')) {
      closePopup(overlayElement);
    }
  });
});

//Card delete confirm popup button

deleteConfirmWForm.addEventListener('submit', (e) => {
  e.preventDefault();
  removeImageCard();
  closePopup(deleteConfirmWindow);
});

//------------------Profile-info download function----------------------

function loadProfileInfo() {
  requestProfileInfo()
    .then((data) => {
      for (let property in data) {
        profileData[property] = data[property];
      }
      changeProfileInfo(profileData.name, profileData.about);
      changeProfileImage(profileData.avatar);
    })
    .catch(logError);
} 

//-----------------------Function calls---------------------------

loadProfileInfo();

populateGallery();

enableValidation({
  formSelector: 'popup__form',
  inputSelector: 'popup__input-field',
  submitButtonSelector: 'popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__input-field_invalid',
  errorClass: 'popup__input-error-message'
});