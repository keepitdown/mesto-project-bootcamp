//------------------------Profile info elements-----------------------------

const profileName = document.querySelector('.profile-info__profile-name');
const profileDescription = document.querySelector('.profile-info__profile-description');

const profileEditBtn = document.querySelector('#profile-edit-btn');
const addImageBtn = document.querySelector('#add-image-btn');

//---------------------------Gallery elements--------------------------------

const imageGallery = document.querySelector('.gallery__list');

//---------------------------Popup elements--------------------------------------

//Generic popup elements

const popupOverlays = document.querySelectorAll('.popup');

//Edit profile-info elements

const profileEditWindow = document.querySelector('#profile-editor-window');
const profileEditForm = document.forms['profile-info-edit-form'];

const profileNameField = profileEditForm.elements['profile-name'];
const profileDescriptionField = profileEditForm.elements['profile-description'];

const profileEditErrorMessages = profileEditWindow.querySelectorAll('.popup__input-error-message');

const profileEditSubmitButton = profileEditForm.querySelector('.popup__submit-btn');

//New image elements

const newImageWindow = document.querySelector('#new-image-window');
const newImageForm = document.forms['new-image-form'];

const newImageNameField = newImageForm.elements['image-name'];
const newImageLinkField = newImageForm.elements['image-link'];

const newImageErrorMessages = newImageWindow.querySelectorAll('.popup__input-error-message');

const newImageSubmitButton = newImageForm.querySelector('.popup__submit-btn');

//Image-viewer elements

const imageViewerWindow = document.querySelector('#image-viewer-window');
const imageViewerImage = imageViewerWindow.querySelector('#image-viewer-image');
const imageViewerCaption = imageViewerWindow.querySelector('#image-viewer-caption');

export {profileName, profileDescription, profileEditBtn, addImageBtn, imageGallery,
  popupOverlays, profileEditWindow, profileEditForm, profileNameField, profileDescriptionField,
  profileEditErrorMessages, profileEditSubmitButton, newImageWindow, newImageForm, newImageNameField,
  newImageLinkField, newImageErrorMessages, newImageSubmitButton, imageViewerWindow, imageViewerImage,
  imageViewerCaption};