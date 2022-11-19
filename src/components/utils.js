function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', closeWithKbrd);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', closeWithKbrd);
}

function closeWithKbrd(e) {
  if (e.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

export {openPopup, closePopup};