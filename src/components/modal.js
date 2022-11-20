//Imports

import {profileName, profileDescription, imageGallery, profileEditWindow, profileEditForm, profileNameField, profileDescriptionField,
  profileEditErrorMessages, profileEditSubmitButton, newImageWindow, newImageForm, newImageNameField, newImageLinkField, newImageErrorMessages,
  newImageSubmitButton} from './constants.js';
import {profileData} from './data.js';
import {openPopup, changeProfileInfo} from './utils.js';
import {createNewCard} from './card.js';
import {sendProfileInfoUpd} from './api';

//Profile editor popup open functions

function showCurrentInfo() {
  profileNameField.value = profileName.textContent;
  profileDescriptionField.value = profileDescription.textContent;
}

function clearInputErrorMessages(messageElements) {
  messageElements.forEach((messageElement) => messageElement.textContent = '');
}

function removeErrorStyles(form) {
  const inputs = Array.from(form.elements);
  inputs.forEach((inputElement) => inputElement.classList.remove('popup__input-field_invalid'));
}

function disableSubmitButton(button) {
  button.classList.add('popup__submit-btn_disabled');
  button.setAttribute('disabled', '');
}

function openProfileEditor() {
  showCurrentInfo();
  clearInputErrorMessages(profileEditErrorMessages);
  removeErrorStyles(profileEditForm);
  disableSubmitButton(profileEditSubmitButton);
  openPopup(profileEditWindow);
}

//Saving message

function showSavingingMessage(button, isSaving, defaultText) {
  if (isSaving) {
    button.textContent = 'Сохранение...';
    button.setAttribute('disabled', '');
  } else {
    button.textContent = defaultText;
    button.removeAttribute('disabled');
  }
}

//Edit profile info functions

function applyProfileInfoChanges() {

  showSavingingMessage(profileEditSubmitButton, true);

  sendProfileInfoUpd(profileNameField.value, profileDescriptionField.value)
    .then((newProfileData) => {
      profileData.name = newProfileData.name;
      profileData.about = newProfileData.about;
    })
    .then(() => changeProfileInfo(profileData.name, profileData.about))
    .catch((err) => console.log(err))
    .finally(() => showSavingingMessage(profileEditSubmitButton, false, 'Сохранить'));
}

//New image popup functions

function clearTextFields(formElement) {
  formElement.reset();
}

function openNewImageEditor() {
  clearTextFields(newImageForm);
  clearInputErrorMessages(newImageErrorMessages);
  removeErrorStyles(newImageForm);
  disableSubmitButton(newImageSubmitButton);
  openPopup(newImageWindow);
}

//New image submit

function createImageFromInputForm() {
  const newImageData = {name: newImageNameField.value, link: newImageLinkField.value};
  const newCard = createNewCard(newImageData);
  imageGallery.prepend(newCard);

}

export {openProfileEditor, openNewImageEditor, applyProfileInfoChanges, createImageFromInputForm};