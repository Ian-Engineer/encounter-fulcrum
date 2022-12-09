const getLocalStorage = (name) => {
  const value = localStorage.getItem(name);
  return JSON.parse(value);
};

export default getLocalStorage;
