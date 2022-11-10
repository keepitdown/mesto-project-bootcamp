//Content data

const initialCards = [
  {
    name: 'Nissan GT-R R32',
    link: 'https://images.unsplash.com/photo-1600793575654-910699b5e4d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Nissan GT-R R34',
    link: 'https://images.unsplash.com/photo-1605907153179-8b364644a241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80'
  },
  {
    name: 'Nissan Sylvia S13',
    link: 'https://images.unsplash.com/photo-1595000728060-8555b134374e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
  },
  {
    name: 'Toyota GT-86',
    link: 'https://images.unsplash.com/photo-1613467074357-5cc1804900a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Mitsubishi Evolution',
    link: 'https://images.unsplash.com/photo-1560267806-265372a71e48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
  },
  {
    name: 'Porsche 911 RWB',
    link: 'https://images.unsplash.com/photo-1659940316181-d34bf23ae835?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  }
];

//Like button functionality

function leaveOrRemoveLike(likeBtn) {
  likeBtn.classList.toggle('image-card__like-btn_active');
}

//Gallery cards creation

const imageGallery = document.querySelector('.gallery__list');
const cardTemplate = document.querySelector('#image-card-template');

function createNewCard(cardInfo) {
  const newCard = cardTemplate.content.querySelector('.image-card').cloneNode(true);
  newCard.querySelector('.image-card__title').textContent = cardInfo.name;
  newCard.querySelector('.image-card__image').src = cardInfo.link;
  newCard.querySelector('.image-card__like-btn').addEventListener('click', (e) => leaveOrRemoveLike(e.target));
  imageGallery.append(newCard);
}

function populateGallery() {
  initialCards.forEach(createNewCard);
}

populateGallery();

//Profile editor popup activation

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

const profileName = document.querySelector('.profile-info__profile-name');
const profileNameField = document.querySelector('#profile-name-field');

const profileDescription = document.querySelector('.profile-info__profile-description');
const profileDescriptionField = document.querySelector('#profile-description-field');


function showCurrentInfo() {
  profileNameField.value = profileName.textContent;
  profileDescriptionField.value = profileDescription.textContent;
}

const profileEditBtn = document.querySelector('#profile-edit-btn');
const profileEditWindow = document.querySelector('#profile-editor-window');

profileEditBtn.addEventListener('click', () => {
  openPopup(profileEditWindow);
  showCurrentInfo();
});

//Profile editor popup deactivation

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

const closeProfileEditBtn = document.querySelector('#close-profile-edit-btn');

closeProfileEditBtn.addEventListener('click', () => closePopup(profileEditWindow));

//Profile editing

function changePageTitle(newProfileName) {
  document.title = `${newProfileName}  - Mesto`;
}

function applyProfileChanges() {
  profileName.textContent = profileNameField.value;
  profileDescription.textContent = profileDescriptionField.value;
  changePageTitle(profileNameField.value);
}

const saveProfileChangesBtn = document.querySelector('#save-profile-changes-btn');
const profileEditForm = document.querySelector('#profile-info-edit-form')

profileEditForm.addEventListener('submit', (e) => {
  e.preventDefault();
  applyProfileChanges();
  closePopup(profileEditWindow);
});

//New image popup activation

const addImageBtn = document.querySelector('#add-image-btn');
const newImageWindow = document.querySelector('#new-image-window');

/*function clearTextFields(formWindow) {
  const textFields = formWindow.querySelectorAll('input', 'type[text]');
  textFields.forEach((form) => form.value = '');
}*/

function clearTextFields(formWindow) {
  formWindow.querySelector('form').reset();
}

addImageBtn.addEventListener('click', () => {
  clearTextFields(newImageWindow);
  openPopup(newImageWindow)
});

//New image popup deactivation

const closeNewImageWindowBtn = document.querySelector('#close-new-image-btn');

closeNewImageWindowBtn.addEventListener('click', () => closePopup(newImageWindow));
