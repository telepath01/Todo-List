'use strict';
import ElementCreator from './elementCreator';
import PageRenderer from './pageElements';
import ListCardCreator from './listCardCreator';
import ModalCreator from './listModalCreator';
import FooterCreator from './footerCreator';

const StorageManager = (function () {
  let cardCount = 0;
  const storageRender = () => {
    if (localStorage.getItem('title1')) {
      console.log(cardCount);
      cardCount = Number(localStorage.getItem('cardCounter'));
      for (let i = 1; i <= cardCount; i++) {
        populateFromStorage(i);
      }
    }
  };

  const populateFromStorage = (index) => {
    const cardContainer = new ElementCreator(
      PageRenderer.elementsArr[3].element,
      'div',
      'card'
    );
    const titleContainer = new ElementCreator(
      cardContainer.element,
      'p',
      'card-title',
      localStorage.getItem(`title${index}`)
    );
    const descriptionContainer = new ElementCreator(
      cardContainer.element,
      'p',
      'card-description',
      localStorage.getItem(`description${index}`)
    );
    const dueDateContainer = new ElementCreator(
      cardContainer.element,
      'p',
      'card-dueDate',
      localStorage.getItem(`dueDate${index}`)
    );
    const priorityContainer = new ElementCreator(
      cardContainer.element,
      'p',
      'card-priority',
      localStorage.getItem(`priority${index}`)
    );
    const notesContainer = new ElementCreator(
      cardContainer.element,
      'p',
      'card-notes',
      localStorage.getItem(`notes${index}`)
    );
    const completeDiv = new ElementCreator(
      cardContainer.element,
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
      cardContainer.element,
      'button',
      'delete-button',
      'X'
    );
    ListCardCreator.completeChecked(checkbox, cardContainer);
    ListCardCreator.priorityCheck(priorityContainer);

    priorityColor(priorityContainer);
  };

  const storageSetter = (
    index,
    title,
    description,
    dueDate,
    priority,
    notes
  ) => {
    const storageTitle = localStorage.setItem(
      `title${index}`,
      title.element.textContent
    );
    const storageDescription = localStorage.setItem(
      `description${index}`,
      description.element.textContent
    );
    const storageDate = localStorage.setItem(
      `dueDate${index}`,
      dueDate.element.textContent
    );
    const storagePriority = localStorage.setItem(
      `priority${index}`,
      priority.element.textContent
    );
    const storageNotes = localStorage.setItem(
      `notes${index}`,
      notes.element.textContent
    );
  };
  const countAdd = () => {
    cardCount += 1;
    localStorage.setItem('cardCounter', cardCount);
  };
  const countSubract = () => {
    cardCount -= 1;
    localStorage.setItem('cardCounter', cardCount);
  };

  const priorityColor = (priority) => {
    if (priority.element.textContent === 'Low') {
      FooterCreator.lowCountGetter('add');
    } else if (priority.element.textContent === 'High') {
      FooterCreator.highCountGetter('add');
    }
  };

  const deleteStorageItem = (index) => {
    localStorage.removeItem(`title${index}`);
    localStorage.removeItem(`description${index}`);
    localStorage.removeItem(`dueDate${index}`);
    localStorage.removeItem(`priority${index}`);
    localStorage.removeItem(`notes${index}`);
  };

  return {
    storageSetter,
    storageRender,
    countAdd,
    countSubract,
    deleteStorageItem,
  };
})();
export default StorageManager;
