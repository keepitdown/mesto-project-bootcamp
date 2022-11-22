import './pages/index.css';

import { profileData } from './components/data.js';
import {editProfilePicBtn, profileEditBtn, addImageBtn, popupOverlays, profileEditForm,
  newImageForm, changeProfilePicForm, deleteConfirmWForm} from './components/constants.js'
import {closePopup, logError, changeProfileInfo, changeProfileImage} from './components/utils.js';
import {openProfilePicEditor, openProfileEditor, openNewImageEditor, applyProfilePictureChange, applyProfileInfoChanges, createImageFromInputForm, removeImageCard
  } from './components/modal.js';
import {populateGallery} from './components/card.js';
import {enableValidation} from './components/validate.js';
import {requestProfileData, requestGalleryContent} from './components/api';

//----------------------------Adding event listeners--------------------------------

//Profile-Info buttons

editProfilePicBtn.addEventListener('click', openProfilePicEditor);

profileEditBtn.addEventListener('click', openProfileEditor);

addImageBtn.addEventListener('click', openNewImageEditor);

//Popup submit functionality

changeProfilePicForm.addEventListener('submit', (e) => {
  e.preventDefault();
  applyProfilePictureChange();
});

profileEditForm.addEventListener('submit', (e) => {
  e.preventDefault();
  applyProfileInfoChanges();
});

newImageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createImageFromInputForm();
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
});

//----------------Profile-info download functions------------------

function loadProfileInfo(dataObject) {
    for (let property in dataObject) {
      profileData[property] = dataObject[property];
    }
    changeProfileInfo(profileData.name, profileData.about);
    changeProfileImage(profileData.avatar);
}

function loadInitialData() {
  Promise.all([requestProfileData(), requestGalleryContent()])
  .then((initialData) => {
    const profileData = initialData[0];
    loadProfileInfo(profileData);

    const GalleryContent = initialData[1];
    populateGallery(GalleryContent);
    })
    .catch(logError);
}

//-----------------------Function calls---------------------------

loadInitialData()

enableValidation({
  formSelector: 'popup__form',
  inputSelector: 'popup__input-field',
  submitButtonSelector: 'popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__input-field_invalid',
  errorClass: 'popup__input-error-message'
});