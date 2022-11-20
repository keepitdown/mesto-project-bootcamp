//Imports

import {profileName, profileDescription, imageGallery, profileEditWindow, profileEditForm, profileNameField, profileDescriptionField,
  profileEditErrorMessages, profileEditSubmitButton, newImageWindow, newImageForm, newImageNameField, newImageLinkField, newImageErrorMessages,
  newImageSubmitButton, changeProfilePicForm, changePicLinkField, changePicWindow, changePicErrorMessages, changePicSubmitButton, deleteConfirmWindow
  } from './constants.js';
import {profileData} from './data.js';
import {openPopup, logError, changeProfileImage, changeProfileInfo, clearTextFields, showSavingingMessage, clearInputErrorMessages, removeErrorStyles,
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
  showSavingingMessage(changePicSubmitButton, true, 'Сохранение...');

  sendProfilePicUpd(changePicLinkField.value)
    .then((data) => {
      profileData.avatar = data.avatar;
      changeProfileImage(profileData.avatar);
    })
    .catch(logError)
    .finally(() => showSavingingMessage(changePicSubmitButton, false, 'Сохранить'));
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

  showSavingingMessage(profileEditSubmitButton, true, 'Сохранение...');

  sendProfileInfoUpd(profileNameField.value, profileDescriptionField.value)
    .then((newProfileData) => {
      profileData.name = newProfileData.name;
      profileData.about = newProfileData.about;
    })
    .then(() => changeProfileInfo(profileData.name, profileData.about))
    .catch(logError)
    .finally(() => showSavingingMessage(profileEditSubmitButton, false, 'Сохранить'));
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

  showSavingingMessage(newImageSubmitButton, true, 'Сохранение...');

  const newImageData = {name: newImageNameField.value, link: newImageLinkField.value};
  sendImageCardData(newImageData)
    .then((newCardData) => createNewCard(newCardData))
    .then((newCard) => imageGallery.prepend(newCard))
    .catch(logError)
    .finally(() => showSavingingMessage(newImageSubmitButton, false, 'Создать'));
}

//Image card delete confirm

let deleteTargetCard;

function openDeleteConfirmWindow(cardId) {
  openPopup(deleteConfirmWindow);
  deleteTargetCard = cardId;
}

function removeImageCard() {
  showSavingingMessage(newImageSubmitButton, false, 'Удаление...')
  deleteCardRequest(deleteTargetCard)
    .then(() => removeImageCardLocaly(deleteTargetCard))
    .catch(logError)
    .finally(() => showSavingingMessage(newImageSubmitButton, false, 'Да'));
}

export {openProfilePicEditor, openProfileEditor, openNewImageEditor, applyProfilePictureChange, applyProfileInfoChanges,
  createImageFromInputForm, openDeleteConfirmWindow, removeImageCard};