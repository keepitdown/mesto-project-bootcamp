import {baseUrl, groupId, token} from './data.js';

function requestProfileInfo() {
  return fetch(`${baseUrl}${groupId}/users/me`, {
    method: 'GET',
    headers: {
      authorization: token
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

function uploadProfileInfo() {
  
}

export {requestProfileInfo};