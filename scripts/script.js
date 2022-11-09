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

const imageGallery = document.querySelector('.gallery__list');
const cardTemplate = document.querySelector('#image-card-template');

function createNewCard(cardInfo) {
  const newCard = cardTemplate.content.querySelector('.image-card').cloneNode(true);
  newCard.querySelector('.image-card__title').textContent = cardInfo.name;
  newCard.querySelector('.image-card__image').src = cardInfo.link;
  imageGallery.append(newCard);
}

function populateGallery() {
  initialCards.forEach(createNewCard);
}

populateGallery();