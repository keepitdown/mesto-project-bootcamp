import {baseUrl, groupId, token} from './data.js';

function checkResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.status}`);
}

function requestProfileInfo() {
  return fetch(`${baseUrl}${groupId}/users/me`, {
    method: 'GET',
    headers: {
      authorization: token
    }
  })
    .then(checkResponse);
}

function requestGalleryContent() {
  return fetch(`${baseUrl}${groupId}/cards`, {
    method: 'GET',
    headers: {
      authorization: token
    }
  })
    .then(checkResponse);
}

function sendProfileInfoUpd(profileName, profileDescription) {
  return fetch(`${baseUrl}${groupId}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: profileName,
      about: profileDescription
    })
  })
    .then(checkResponse);
}

function sendImageCardData(cardData) {
  return fetch(`${baseUrl}${groupId}/cards`, {
    method: 'POST',
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: cardData.name,
      link: cardData.link
    })
  })
  .then(checkResponse);
}

function sendLikeToggle(cardInfo) {
  const method = !cardInfo.isLiked ? 'PUT' : 'DELETE';
  return fetch(`${baseUrl}${groupId}/cards/likes/${cardInfo._id}`, {
    method,
    headers: {
      authorization: token
    }
  })
  .then(checkResponse);
}

function sendProfilePicUpd(newPicLink) {
  return fetch(`${baseUrl}${groupId}/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: newPicLink
    })
  })
  .then(checkResponse);
}

function deleteCardRequest(cardId) {
  return fetch(`${baseUrl}${groupId}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: token
    }
  })
    .then(checkResponse);
};

export {requestProfileInfo, requestGalleryContent, sendProfileInfoUpd, sendImageCardData, sendLikeToggle, sendProfilePicUpd, deleteCardRequest};