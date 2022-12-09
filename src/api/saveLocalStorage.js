const saveLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export default saveLocalStorage;
