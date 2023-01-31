'use strict';

const StorageManager = (function () {
  const listParant = document.querySelector('.list-container');
  const storageArr = [];

  const storageStart = () => {
    if (localStorage) {
      populateStorage();
    } else {
      setStorage();
    }
  };
  const setStorage = () => {
    console.log('setting storage');
  };
  const populateStorage = () => {
    createStorageCard(1);
    console.log('populating storage');
  };

  const createStorageCard = (index) => {
    let title = localStorage.getItem(`title${index}`);
    console.log(title);
  };
  return { storageStart, populateStorage, storageArr };
})();
export default StorageManager;
