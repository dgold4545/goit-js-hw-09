import { formRefs } from '../refs/formRefs';
import { setLocalStorage } from '../helper/setLocalStorage';

const LS_KEY_FORM_STATE = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

formRefs.formElem.addEventListener('input', fedbackFromState);

function fedbackFromState(event) {
  const curTarget = event.currentTarget;
  // console.dir(curTarget.elements.email.value);
  // console.dir(curTarget.elements.message.value);

  const form = new FormData(curTarget);

  formData.email = form.get('email');
  formData.message = form.get('message');

  setLocalStorage(LS_KEY_FORM_STATE, formData);
}

function getLocalStorageValue(key) {
  const valueFromLS = JSON.parse(localStorage.getItem(key));

  console.log(valueFromLS);
}

getLocalStorageValue(LS_KEY_FORM_STATE);
