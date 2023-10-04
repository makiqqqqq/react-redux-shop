export const getLocalStorageItem = (key: string) => {
  const jsonState = localStorage.getItem(key);

  if (jsonState) {
    return JSON.parse(jsonState);
  } else {
    return null;
  }
};

export const setStorageItem = <T>(state: T, key: string) => {
  const stringifyState = JSON.stringify(state);

  if (stringifyState) {
    localStorage.setItem(key, stringifyState);
  }
};
