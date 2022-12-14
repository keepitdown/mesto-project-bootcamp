//------------------------Profile info elements-----------------------------

const profilePicture = document.querySelector('.profile-info__profile-pic');

const editProfilePicBtn = document.querySelector('#change-pic-btn');

const profileName = document.querySelector('.profile-info__profile-name');
const profileDescription = document.querySelector('.profile-info__profile-description');

const profileEditBtn = document.querySelector('#profile-edit-btn');
const addImageBtn = document.querySelector('#add-image-btn');

//---------------------------Gallery elements--------------------------------

const imageGallery = document.querySelector('.gallery__list');

//---------------------------Popup elements--------------------------------------

//Generic popup elements

const popupOverlays = document.querySelectorAll('.popup');

//Change profile picture elements

const changePicWindow = document.querySelector('#change-profile-pic-window');
const changeProfilePicForm = document.forms['change-profile-pic-form'];

const changePicLinkField = changeProfilePicForm.elements['profile-pic-link'];

const changePicErrorMessages = changePicWindow.querySelectorAll('.popup__input-error-message');

const changePicSubmitButton = changeProfilePicForm.elements['save-profile-pic-btn'];

//Edit profile-info elements

const profileEditWindow = document.querySelector('#profile-editor-window');
const profileEditForm = document.forms['profile-info-edit-form'];

const profileNameField = profileEditForm.elements['profile-name'];
const profileDescriptionField = profileEditForm.elements['profile-description'];

const profileEditErrorMessages = profileEditWindow.querySelectorAll('.popup__input-error-message');

const profileEditSubmitButton = profileEditForm.elements['save-profile-changes-btn'];

//New image elements

const newImageWindow = document.querySelector('#new-image-window');
const newImageForm = document.forms['new-image-form'];

const newImageNameField = newImageForm.elements['image-name'];
const newImageLinkField = newImageForm.elements['image-link'];

const newImageErrorMessages = newImageWindow.querySelectorAll('.popup__input-error-message');

const newImageSubmitButton = newImageForm.elements['create-image-btn'];

//Image-viewer elements

const imageViewerWindow = document.querySelector('#image-viewer-window');
const imageViewerImage = imageViewerWindow.querySelector('#image-viewer-image');
const imageViewerCaption = imageViewerWindow.querySelector('#image-viewer-caption');

//Confirm delete elements

const deleteConfirmWindow = document.querySelector('#card-delete-confirm-window');
const deleteConfirmWForm = document.forms['confirm-card-delete-form'];
const confrimDeleteBtn = deleteConfirmWForm.elements['comfirm-card-delete-btn'];

export {profilePicture, editProfilePicBtn, profileName, profileDescription, profileEditBtn, addImageBtn, imageGallery,
  popupOverlays, profileEditWindow, profileEditForm, profileNameField, profileDescriptionField,
  profileEditErrorMessages, profileEditSubmitButton, newImageWindow, newImageForm, newImageNameField,
  newImageLinkField, newImageErrorMessages, newImageSubmitButton, imageViewerWindow, imageViewerImage,
  imageViewerCaption, changeProfilePicForm, changePicLinkField, changePicWindow, changePicErrorMessages,
  changePicSubmitButton, deleteConfirmWindow, deleteConfirmWForm, confrimDeleteBtn}; 