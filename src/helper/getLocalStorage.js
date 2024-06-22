export function getLocalStorage(key, refElem) {
  const parsedValueLS = JSON.parse(localStorage.getItem(key));

  refElem.elements.email.value = !parsedValueLS
    ? ''
    : parsedValueLS.email.trim();
  refElem.elements.message.value = !parsedValueLS
    ? ''
    : parsedValueLS.message.trim();
}
