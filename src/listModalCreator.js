'use strict';
import ElementCreator from './elementCreator';
import PageRenderer from './pageElements';

const ModalCreator = (function () {
  const parentElement = document.body;
  const listArr = [];
  class ListElement {
    constructor(
      storageArr,
      title,
      description,
      dueDate,
      priority,
      notes,
      checklist
    ) {
      this.storageArr = this.sendtoArr(storageArr);
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;
      this.checklist = checklist;
    }

    sendtoArr() {
      if (this.storageArr) {
        this.storageArr.push();
      }
    }
  }

  const listCreator = () => {
    const listModal = new ElementCreator(
      parentElement,
      'div',
      'modal-container'
    );
  };

  return { listCreator };
})();
export default ModalCreator;
