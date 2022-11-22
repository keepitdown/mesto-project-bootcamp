//Imports

import {profileName, profileDescription, imageGallery, profileEditWindow, profileEditForm, profileNameField, profileDescriptionField,
  profileEditErrorMessages, profileEditSubmitButton, newImageWindow, newImageForm, newImageNameField, newImageLinkField, newImageErrorMessages,
  newImageSubmitButton, changeProfilePicForm, changePicLinkField, changePicWindow, changePicErrorMessages, changePicSubmitButton, deleteConfirmWindow,
  deleteConfirmWForm, confrimDeleteBtn} from './constants.js';
import {profileData} from './data.js';
import {openPopup, closePopup, logError, changeProfileImage, changeProfileInfo, clearTextFields, showInprogressMessage, clearInputErrorMessages, removeErrorStyles,
  disableSubmitButton} from './utils.js';
import {createNewCard, removeImageCardLocaly} from './card.js';
import {sendProfilePicUpd, sendProfileInfoUpd, sendImageCardData, deleteCardRequest} from './api';

//Change profile pic popup open function

function openProfilePicEditor() {
  clearTextFields(changeProfilePicForm);
  clearInputErrorMessages(changePicErrorMessages);
  removeErrorStyles(changeProfilePicForm);
  disableSubmitButton(changePicSubmitButton);
  openPopup(changePicWindow);
}

//Submit new profile pic function

function applyProfilePictureChange() {
  showInprogressMessage(changePicSubmitButton, true, 'Сохранение...');

  sendProfilePicUpd(changePicLinkField.value)
    .then((data) => {
      profileData.avatar = data.avatar;
      changeProfileImage(profileData.avatar);
      closePopup(changePicWindow);
    })
    .catch(logError)
    .finally(() => showInprogressMessage(changePicSubmitButton, false, 'Сохранить'));
}

//function 

//Profile editor popup open functions

function showCurrentInfo() {
  profileNameField.value = profileName.textContent;
  profileDescriptionField.value = profileDescription.textContent;
}

function openProfileEditor() {
  showCurrentInfo();
  clearInputErrorMessages(profileEditErrorMessages);
  removeErrorStyles(profileEditForm);
  disableSubmitButton(profileEditSubmitButton);
  openPopup(profileEditWindow);
}

//Edit profile info functions

function applyProfileInfoChanges() {

  showInprogressMessage(profileEditSubmitButton, true, 'Сохранение...');

  sendProfileInfoUpd(profileNameField.value, profileDescriptionField.value)
    .then((newProfileData) => {
      profileData.name = newProfileData.name;
      profileData.about = newProfileData.about;
      changeProfileInfo(profileData.name, profileData.about)
      closePopup(profileEditWindow);
    })
    .catch(logError)
    .finally(() => showInprogressMessage(profileEditSubmitButton, false, 'Сохранить'));
}

//New image popup open function

function openNewImageEditor() {
  clearTextFields(newImageForm);
  clearInputErrorMessages(newImageErrorMessages);
  removeErrorStyles(newImageForm);
  disableSubmitButton(newImageSubmitButton);
  openPopup(newImageWindow);
}

//New image submit

function createImageFromInputForm() {

  showInprogressMessage(newImageSubmitButton, true, 'Сохранение...');

  const newImageData = {name: newImageNameField.value, link: newImageLinkField.value};
  sendImageCardData(newImageData)
    .then((newCardData) => {
      const newCard = createNewCard(newCardData);
      imageGallery.prepend(newCard);
      closePopup(newImageWindow);
    })
    .catch(logError)
    .finally(() => showInprogressMessage(newImageSubmitButton, false, 'Создать'));
}

//Image card delete confirm

let deleteTargetCard;

function openDeleteConfirmWindow(cardId) {
  openPopup(deleteConfirmWindow);
  deleteTargetCard = cardId;
}

function removeImageCard() {
  showInprogressMessage(confrimDeleteBtn, true, 'Удаление...')
  deleteCardRequest(deleteTargetCard)
    .then(() => {
      removeImageCardLocaly(deleteTargetCard)
      closePopup(deleteConfirmWindow);
    })
    .catch(logError)
    .finally(() => showInprogressMessage(confrimDeleteBtn, false, 'Да'));
}

export {openProfilePicEditor, openProfileEditor, openNewImageEditor, applyProfilePictureChange, applyProfileInfoChanges,
  createImageFromInputForm, openDeleteConfirmWindow, removeImageCard};