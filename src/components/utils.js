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

function changeProfileInfo(newName, newDescription) {
  profileName.textContent = newName;
  profileDescription.textContent = newDescription;
  document.title = `${newName}  - Mesto`;
}

function changeProfileImage(imageLink) {
  profilePicture.src = imageLink;
}

export {openPopup, closePopup, changeProfileInfo, changeProfileImage};