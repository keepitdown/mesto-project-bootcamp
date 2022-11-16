//------------------------------Image gallery content-------------------------------------

const initialCards = [
  {
    name: 'Nissan Skyline GT-R R32',
    link: 'https://images.unsplash.com/photo-1600793575654-910699b5e4d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Nissan Skyline GT-R R34',
    link: 'https://images.unsplash.com/photo-1605907153179-8b364644a241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80'
  },
  {
    name: 'Nissan Silvia S13',
    link: 'https://images.unsplash.com/photo-1595000728060-8555b134374e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
  },
  {
    name: 'Toyota GT-86',
    link: 'https://images.unsplash.com/photo-1613467074357-5cc1804900a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Mitsubishi Lancer Evolution V',
    link: 'https://images.unsplash.com/photo-1560267806-265372a71e48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
  },
  {
    name: 'Porsche 911 (993) RWB',
    link: 'https://images.unsplash.com/photo-1659940316181-d34bf23ae835?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  }
];

//--------------------Basic popup close/open functions----------------------------

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function closeWithKbrd(e) {
  if (e.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
}

function enableCloseWithKbrd () {
  window.addEventListener('keydown', closeWithKbrd, {once: true});
}

function disableCloseWithKbrd () {
  window.removeEventListener('keydown', closeWithKbrd);
}

//---------------------------Profile-Info buttons---------------------------------

//Profile editor popup open

const profileName = document.querySelector('.profile-info__profile-name');
const profileDescription = document.querySelector('.profile-info__profile-description');

const profileEditWindow = document.querySelector('#profile-editor-window');

const profileNameField = profileEditWindow.querySelector('#profile-name-field');
const profileDescriptionField = profileEditWindow.querySelector('#profile-description-field');


function showCurrentInfo() {
  profileNameField.value = profileName.textContent;
  profileDescriptionField.value = profileDescription.textContent;
}

const profileEditBtn = document.querySelector('#profile-edit-btn');

profileEditBtn.addEventListener('click', () => {
  showCurrentInfo();
  openPopup(profileEditWindow);
  enableCloseWithKbrd();
});

//New image popup open

const addImageBtn = document.querySelector('#add-image-btn');
const newImageWindow = document.querySelector('#new-image-window');

function clearTextFields(formWindow) {
  formWindow.querySelector('form').reset();
}

addImageBtn.addEventListener('click', () => {
  clearTextFields(newImageWindow);
  openPopup(newImageWindow);
  enableCloseWithKbrd();
});

//---------------------Image-card buttons and functionality----------------------------

//Like button functionality

function leaveOrRemoveLike(likeBtn) {
  likeBtn.classList.toggle('image-card__like-btn_active');
}

//Delete button functionality

function removeImageCard(removeBtn) {
  const parentCard = removeBtn.closest('.image-card');
  parentCard.classList.add('image-card_deleted');
  parentCard.addEventListener('transitionend', (e) => e.target.remove());
}

//Open image-viwer

const imageViewerWindow = document.querySelector('#image-viewer-window');
const imageViewerImage = imageViewerWindow.querySelector('#image-viewer-image');
const imageViewerCaption = imageViewerWindow.querySelector('#image-viewer-caption');

function changeImageInsideViewer(image) {
  imageViewerImage.src = image.src;
  imageViewerCaption.textContent = image.closest('.image-card').querySelector('.image-card__title').textContent;
}

function openImageViewer(image) {
  changeImageInsideViewer(image);
  openPopup(imageViewerWindow);
  enableCloseWithKbrd();
}

//------------------------------Image-card creation-----------------------------------------

const imageGallery = document.querySelector('.gallery__list');
const cardTemplate = document.querySelector('#image-card-template');

function createNewCard(cardInfo) {
  const newCard = cardTemplate.content.querySelector('.image-card').cloneNode(true);
  const cardImage = newCard.querySelector('.image-card__image');
  newCard.querySelector('.image-card__title').textContent = cardInfo.name;
  cardImage.src = cardInfo.link;
  newCard.querySelector('.image-card__like-btn').addEventListener('click', (e) => leaveOrRemoveLike(e.target));
  newCard.querySelector('.image-card__remove-card-btn').addEventListener('click', (e) => removeImageCard(e.target));
  cardImage.addEventListener('click', (e) => openImageViewer(e.target));
  imageGallery.prepend(newCard);
}

//-------------------------------Popup windows buttons---------------------------------------

//Profile edit submit

function changePageTitle(newProfileName) {
  document.title = `${newProfileName}  - Mesto`;
}

function applyProfileChanges() {
  profileName.textContent = profileNameField.value;
  profileDescription.textContent = profileDescriptionField.value;
  changePageTitle(profileNameField.value);
}

const profileEditForm = profileEditWindow.querySelector('#profile-info-edit-form')

profileEditForm.addEventListener('submit', (e) => {
  e.preventDefault();
  applyProfileChanges();
  closePopup(profileEditWindow);
});

//New image submit

const newImageForm = newImageWindow.querySelector('#new-image-form');

const newImageNameField = newImageWindow.querySelector('#image-name-field');
const newImageLinkField = newImageWindow.querySelector('#image-link-field');

function createImageFromInputForm() {
  const newImageData = {name: newImageNameField.value, link: newImageLinkField.value};
  createNewCard(newImageData);
}

newImageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createImageFromInputForm();
  closePopup(newImageWindow);
})

//Close popup buttons

const closePopupBtns = document.querySelectorAll('.popup__close-btn');

closePopupBtns.forEach((closeButton) => {
  const parentWindow = closeButton.closest('.popup');
  closeButton.addEventListener('click', () => {
    closePopup(parentWindow);
    disableCloseWithKbrd();
  });
});

//Click on overlay to close functionality

const popupOverlays = document.querySelectorAll('.popup');

popupOverlays.forEach((overlayElement) => {
  overlayElement.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      closePopup(overlayElement);
      disableCloseWithKbrd();
    }
  });
});

//-----------------------Populate gallery function declaration and call---------------------------

function populateGallery() {
  initialCards.reverse();
  initialCards.forEach(createNewCard);
}

populateGallery();