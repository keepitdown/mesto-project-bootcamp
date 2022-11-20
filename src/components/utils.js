import {profilePicture, profileName, profileDescription} from './constants.js';

function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', closeWithKbrd);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', closeWithKbrd);
}

function closeWithKbrd(e) {
  if (e.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function logError(error) {
  console.log(error);
}

function changeProfileInfo(newName, newDescription) {
  profileName.textContent = newName;
  profileDescription.textContent = newDescription;
  document.title = `${newName}  - Mesto`;
}

function changeProfileImage(imageLink) {
  profilePicture.src = imageLink;
}

function clearTextFields(formElement) {
  formElement.reset();
}

function showSavingingMessage(button, isSaving, messageText) {
  if (isSaving) {
    button.textContent = messageText;
    button.setAttribute('disabled', '');
  } else {
    button.textContent = messageText;
    button.removeAttribute('disabled');
  }
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

export {openPopup, closePopup, logError, changeProfileInfo, changeProfileImage, clearTextFields, showSavingingMessage,
  clearInputErrorMessages, removeErrorStyles, disableSubmitButton};