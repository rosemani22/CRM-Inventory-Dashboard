// utils/localStorageService.js
export const LocalStorageService = {
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  get: (key) => JSON.parse(localStorage.getItem(key) || '[]'),
  remove: (key) => localStorage.removeItem(key),
};
