'use strict';
import ModalCreator from './listModalCreator';
import ElementCreator from './elementCreator';
import FooterCreator from './footerCreator';
import StorageManager from './storageManager';

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
      storagePopulation(i, title, description, priority, dueDate, notes);
      priorityCheck(priority);
      completeChecked(checkbox, cardDiv);
      deleteListener(button, parentCard, cardDiv, cardArr, i, priority);
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
    index,
    priority
  ) => {
    deleteButton.element.addEventListener('click', () => {
      if (priority.element.textContent === 'Low') {
        console.log('deleted low');
        FooterCreator.lowCountGetter('subtract');
      } else if (priority.element.textContent === 'High') {
        console.log('deleted high');
        FooterCreator.highCountGetter('subtract');
      }
      parentElement.removeChild(childElement.element);
      arrayList.splice(index);
    });
  };
  const priorityCheck = (priority) => {
    if (priority.element.textContent === 'Low') {
      priority.element.style.color = '#FFFAF0';
      priority.element.style.backgroundColor = '#177245';
    } else if (priority.element.textContent === 'High') {
      priority.element.style.color = '#FFFAF0';
      priority.element.style.backgroundColor = '#B22222';
    }
  };

  const storagePopulation = (
    index,
    title,
    description,
    priority,
    dueDate,
    notes
  ) => {
    const indexAdd = index + 1;
    localStorage.setItem(`titile${indexAdd}`, title.element.textContent);
    localStorage.setItem(
      `description${indexAdd}`,
      description.element.textContent
    );
    localStorage.setItem(`priority${indexAdd}`, priority.element.textContent);
    localStorage.setItem(`duDate${indexAdd}`, dueDate.element.textContent);
    localStorage.setItem(`notes${indexAdd}`, notes.element.textContent);
  };
  return { cardRenderer };
})();
export default ListCardCreator;
