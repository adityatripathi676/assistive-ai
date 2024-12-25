export const createElement = (tag, className = '', attributes = {}) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
};

export const toggleElement = (element, show) => {
  if (show) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
};

export const setElementText = (element, text) => {
  if (element) {
    element.textContent = text;
  }
};