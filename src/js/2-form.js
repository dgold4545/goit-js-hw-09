import { formRefs } from '../refs/formRefs';
import { setLocalStorage } from '../helper/setLocalStorage';
import { getLocalStorage } from '../helper/getLocalStorage';

const LS_KEY_FORM_STATE = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

formRefs.formElem.addEventListener('input', fedbackFromState);

function fedbackFromState(event) {
  const curTarget = event.currentTarget;

  const form = new FormData(curTarget);

  formData.email = form.get('email').trim();
  formData.message = form.get('message').trim();

  setLocalStorage(LS_KEY_FORM_STATE, formData);
}

document.addEventListener('DOMContentLoaded', (event, refElem) => {
  getLocalStorage(LS_KEY_FORM_STATE, formRefs.formElem);
});

formRefs.formElem.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;

  const formValues = form.elements;
  const email = formValues.email.value.trim();
  const message = formValues.message.value.trim();

  if (!email || !message) {
    alert('«Fill please all fields»');
  } else {
    console.log(formData);
  }

  form.reset();
});
