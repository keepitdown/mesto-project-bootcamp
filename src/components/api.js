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

export {requestProfileInfo, requestGalleryContent, sendProfileInfoUpd, sendImageCardData};