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

//-------------------------------------Authorization---------------------------------------------------------

const baseUrl = 'https://nomoreparties.co/v1/';
const groupId = 'wbf-cohort-2';
const token = '4803648b-3623-4d3d-822d-5bca5bb3f6a1';

const profileData = {};
const cardData = [];

export {initialCards, baseUrl, groupId, token, profileData, cardData};