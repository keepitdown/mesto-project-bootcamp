function setInputState (input, errorMessageElement, classNames) {
  if (input.checkValidity()) {
    input.classList.remove(classNames.inputErrorClass);
    errorMessageElement.textContent = '';
  } else {
    input.classList.add(classNames.inputErrorClass);
    errorMessageElement.textContent = input.validationMessage;
  }
}

function setSubmitButtonState(form, submitButton, classNames) {
  if (form.checkValidity()) {
    submitButton.classList.remove(classNames.inactiveButtonClass);
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.classList.add(classNames.inactiveButtonClass);
    submitButton.setAttribute('disabled', '');
  }
}

function setInputListener (form, input, submitButton, classNames) {
  const errorMessageElement = input.parentElement.querySelector(`.${classNames.errorClass}`);
  input.addEventListener('input', () => {
    setInputState(input, errorMessageElement, classNames);
    setSubmitButtonState(form, submitButton, classNames);
  });
}

function validateForm(form, classNames) {
  const submitButton = form.querySelector(`.${classNames.submitButtonSelector}`);
  const formInputs = form.querySelectorAll(`.${classNames.inputSelector}`);
  formInputs.forEach((input) => setInputListener(form, input, submitButton, classNames));
}

function enableValidation(classNames) {
  const pageForms = document.querySelectorAll(`.${classNames.formSelector}`);
  pageForms.forEach((form) => validateForm(form, classNames));
}

export {enableValidation};