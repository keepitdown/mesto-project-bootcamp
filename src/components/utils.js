function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function closeWithKbrd(e) {
  if (e.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
    window.removeEventListener('keydown', closeWithKbrd);
  }
}

function enableCloseWithKbrd () {
  window.addEventListener('keydown', closeWithKbrd);
}

function disableCloseWithKbrd () {
  window.removeEventListener('keydown', closeWithKbrd);
}

export {openPopup, closePopup, enableCloseWithKbrd, disableCloseWithKbrd};