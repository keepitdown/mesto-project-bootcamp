import './pages/index.css';

import { profileData } from './components/data.js';
import {profileEditBtn, addImageBtn, popupOverlays, profileEditWindow, profileEditForm, profileNameField, profileDescriptionField,
  newImageWindow, newImageForm} from './components/constants.js'
import {closePopup, changeProfileInfo, changeProfileImage} from './components/utils.js';
import {openProfileEditor, openNewImageEditor, applyProfileInfoChanges, createImageFromInputForm} from './components/modal.js';
import {createNewCard, populateGallery} from './components/card.js';
import {enableValidation} from './components/validate.js';
import { requestProfileInfo, sendProfileInfoUpd} from './components/api';

//----------------------------Adding event listeners--------------------------------

//Profile-Info buttons

profileEditBtn.addEventListener('click', openProfileEditor);

addImageBtn.addEventListener('click', openNewImageEditor);

//Popup submit functionality

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
    .catch((err) => console.log(err));
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