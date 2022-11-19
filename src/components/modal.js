//Imports

import {profileName, profileDescription, imageGallery, profileEditWindow, profileEditForm, profileNameField, profileDescriptionField,
  profileEditErrorMessages, profileEditSubmitButton, newImageWindow, newImageForm, newImageNameField, newImageLinkField, newImageErrorMessages,
  newImageSubmitButton} from './constants.js';

import {openPopup} from './utils.js';

import {createNewCard} from './card.js';

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

//Profile edit submit

function changePageTitle(newProfileName) {
  document.title = `${newProfileName}  - Mesto`;
}

function applyProfileChanges() {
  profileName.textContent = profileNameField.value;
  profileDescription.textContent = profileDescriptionField.value;
  changePageTitle(profileNameField.value);
}

//New image submit

function createImageFromInputForm() {
  const newImageData = {name: newImageNameField.value, link: newImageLinkField.value};
  const newCard = createNewCard(newImageData);
  imageGallery.prepend(newCard);

}

export {openProfileEditor, openNewImageEditor, applyProfileChanges, createImageFromInputForm};