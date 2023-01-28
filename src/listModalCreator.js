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
    const listDivision = new ElementCreator(
      listModal.element,
      'div',
      'form-container'
    );
    const formTitle = new ElementCreator(
      listDivision.element,
      'h1',
      'form-title',
      'New Item'
    );
    const formBlock = new ElementCreator(
      listDivision.element,
      'form',
      'form-block'
    );
    const fieldsetForm = new ElementCreator(
      formBlock.element,
      'fieldset',
      'form-fieldset'
    );
    const fieldsetLegend = new ElementCreator(
      fieldsetForm.element,
      'legend',
      'form-fieldset',
      'To-Do Item'
    );
    const titleDiv = new ElementCreator(
      fieldsetForm.element,
      'div',
      'todo-title'
    );
    const titleLabel = new ElementCreator(
      titleDiv.element,
      'label',
      'title-label',
      'Title:',
      '',
      'title'
    );
    const titleInput = new ElementCreator(
      titleDiv.element,
      'input',
      'title-input',
      '',
      '',
      'title',
      'text'
    );
    const descriptionDiv = new ElementCreator(
      fieldsetForm.element,
      'div',
      'todo-description'
    );
    const descriptionLabel = new ElementCreator(
      descriptionDiv.element,
      'label',
      'des-label',
      'Description:',
      '',
      'description'
    );
    const descriptionInput = new ElementCreator(
      descriptionDiv.element,
      'input',
      'des-input',
      '',
      '',
      'description',
      'text'
    );
    const dueDateDiv = new ElementCreator(
      fieldsetForm.element,
      'div',
      'todo-dueDate'
    );
    const dueDateLabel = new ElementCreator(
      dueDateDiv.element,
      'label',
      'dueDate-label',
      'Due Date: ',
      '',
      'dueDate'
    );
    const dueDateInput = new ElementCreator(
      dueDateDiv.element,
      'input',
      'dueDate-input',
      '',
      '',
      'dueDate',
      'date'
    );
    const priorityDiv = new ElementCreator(
      fieldsetForm.element,
      'div',
      'todo-priority'
    );
    const priorityLabel = new ElementCreator(
      priorityDiv.element,
      'label',
      'todo-priority',
      'Priority: ',
      '',
      'priority'
    );
    const prioritySelect = new ElementCreator(
      priorityDiv.element,
      'select',
      'priority-select',
      '',
      '',
      'priority'
    );
    const priorityOption1 = new ElementCreator(
      prioritySelect.element,
      'option',
      'selection',
      '--Please Choose Priority',
      '',
      '',
      '',
      '""'
    );
    const priorityOption2 = new ElementCreator(
      prioritySelect.element,
      'option',
      'selection',
      'Low',
      '',
      '',
      '',
      'Low'
    );
    const priorityOption3 = new ElementCreator(
      prioritySelect.element,
      'option',
      'selection',
      'High',
      '',
      '',
      '',
      'High'
    );
    const notesDiv = new ElementCreator(
      fieldsetForm.element,
      'div',
      'notes-textarea'
    );
    const notesLabel = new ElementCreator(
      notesDiv.element,
      'label',
      'notes-label',
      'Notes: ',
      '',
      'notes'
    );
    const notesTextArea = new ElementCreator(
      notesDiv.element,
      'textarea',
      'notes-text'
    );

    const buttonDiv = new ElementCreator(
      fieldsetForm.element,
      'div',
      'button-div'
    );
    const formButton = new ElementCreator(
      buttonDiv.element,
      'button',
      'form-button',
      'Create Item'
    );
  };

  return { listCreator };
})();
export default ModalCreator;
