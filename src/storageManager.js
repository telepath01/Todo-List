'use strict';
import ElementCreator from './elementCreator';
import PageRenderer from './pageElements';

const StorageManager = (function () {
  const listParant = document.querySelector('.list-container');
  const storageArr = [];
  let indexCounter = 0;

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
    if (localStorage.length === 0) {
    } else {
      for (let i = 0; i <= indexCounter; i++) {
        createStorageCard(i + 1);
      }

      console.log('populating storage');
    }
  };

  const indexCounting = () => {
    indexCounter += 1;
    localStorage.setItem('indexCounter', indexCounter);
  };

  const createStorageCard = (index) => {
    let title = localStorage.getItem(`title${index}`);
    let description = localStorage.getItem(`description${index}`);
    let priority = localStorage.getItem(`priority${index}`);
    let dueDate = localStorage.getItem(`dueDate${index}`);
    let notes = localStorage.getItem(`notes${index}`);
    const card = new ElementCreator(
      PageRenderer.elementsArr[3].element,
      'div',
      'card'
    );
    const cardTitle = new ElementCreator(
      card.element,
      'p',
      'card-title',
      title
    );
    const cardDescription = new ElementCreator(
      card.element,
      'p',
      'card-description',
      description
    );
    const cardDueDate = new ElementCreator(
      card.element,
      'p',
      'card-dueDate',
      dueDate
    );
    const cardPriority = new ElementCreator(
      card.element,
      'p',
      'card-priority',
      priority
    );
    const cardNotes = new ElementCreator(
      card.element,
      'p',
      'card-notes',
      notes
    );
    const completeDiv = new ElementCreator(
      card.element,
      'div',
      'complete-container'
    );
    const checkLabel = new ElementCreator(
      completeDiv.element,
      'label',
      'complete-label',
      'Complete: '
    );
    const checkbox = new ElementCreator(
      completeDiv.element,
      'input',
      'complete-check',
      '',
      '',
      '',
      'checkbox'
    );
    const button = new ElementCreator(
      card.element,
      'button',
      'delete-button',
      'X'
    );
    priorityCheck(cardPriority.element);
    completeUpdater(checkbox, card);
    deleteListener(button, PageRenderer.elementsArr[3], card, index);
  };

  const priorityCheck = (priorityElement) => {
    if (priorityElement.textContent === 'Low') {
      priorityElement.style.color = '#FFFAF0';
      priorityElement.style.backgroundColor = '#177245';
    } else if (priorityElement.textContent === 'High') {
      priorityElement.style.color = '#FFFAF0';
      priorityElement.style.backgroundColor = '#B22222';
    }
  };

  const completeUpdater = (checkElement, cardDiv) => {
    checkElement.element.addEventListener('change', () => {
      if (checkElement.element.checked) {
        cardDiv.element.style.backgroundColor = '#7CB9E8';
      } else cardDiv.element.style.backgroundColor = '#efefef';
    });
  };

  const deleteListener = (deleteButton, parentElement, childElement, index) => {
    deleteButton.element.addEventListener('click', () => {
      parentElement.element.removeChild(childElement.element);
    });
    localStorage.removeItem(`title${index}`);
    localStorage.removeItem(`description${index}`);
    localStorage.removeItem(`priority${index}`);
    localStorage.removeItem(`dueDate${index}`);
    localStorage.removeItem(`notes${index}`);
    localStorage.setItem('indexCounter', indexCounter - 1);
  };

  return { storageStart, populateStorage, storageArr, indexCounting };
})();
export default StorageManager;
