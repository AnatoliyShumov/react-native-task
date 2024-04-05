export function getValueFromLocalStorage(name) {
  const getValue = localStorage.getItem(`${name}`) || '';

  return getValue;
}

export function setValueToLocalStorage(name, value) {
  localStorage.setItem(`${name}`, value);
}

export function removeValueFromLocalStorage(name) {
  localStorage.removeItem(`${name}`);
}
