'use strict';
import ModalCreator from './listModalCreator';
import ElementCreator from './elementCreator';

const ListCardCreator = (function () {
  const cardRenderer = () => {
    cardCreator();
  };

  const cardCreator = () => {
    const parentCard = document.querySelector('.list-container');
    const cardArr = ModalCreator.listArr;
    for (let i = 0; i < cardArr.length; i++) {
      const cardDiv = new ElementCreator(parentCard, 'div', 'card');
      const title = new ElementCreator(
        cardDiv.element,
        'p',
        'card-title',
        `Title: ${cardArr[i].title}`
      );
      const description = new ElementCreator(
        cardDiv.element,
        'p',
        'card-description',
        cardArr[i].description
      );
      const dueDate = new ElementCreator(
        cardDiv.element,
        'p',
        'card-dueDate',
        cardArr[i].dueDate
      );
      const priority = new ElementCreator(
        cardDiv.element,
        'p',
        'card-priority',
        cardArr[i].priority
      );
      const notes = new ElementCreator(
        cardDiv.element,
        'p',
        'card-notes',
        cardArr[i].notes
      );
      const completeDiv = new ElementCreator(
        cardDiv.element,
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
        cardDiv.element,
        'button',
        'delete-button',
        'X'
      );
      completeChecked(checkbox, cardDiv);
      deleteListener(button, parentCard, cardDiv, cardArr, i);
    }
  };

  const completeChecked = (checkElement, cardDiv) => {
    checkElement.element.addEventListener('change', () => {
      if (checkElement.element.checked) {
        cardDiv.element.style.backgroundColor = '#7CB9E8';
      } else cardDiv.element.style.backgroundColor = '#efefef';
    });
  };

  const deleteListener = (
    deleteButton,
    parentElement,
    childElement,
    arrayList,
    index
  ) => {
    deleteButton.element.addEventListener('click', () => {
      parentElement.removeChild(childElement.element);
      arrayList.splice(index);
    });
  };
  return { cardRenderer };
})();
export default ListCardCreator;
