"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["sidebarElement"],{

/***/ "./src/elementCreator.js":
/*!*******************************!*\
  !*** ./src/elementCreator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

class ElementCreator {
  constructor(
    parentElement,
    element,
    classname,
    content,
    img,
    id,
    type,
    listValue
  ) {
    this.element = document.createElement(element);
    this.classname = this.element.className = classname;
    this.content = this.setContext(content);
    this.img = this.setImage(img);
    this.id = this.labelPlacement(id);
    this.type = this.typePlacement(type);
    this.listValue = this.valuePlacement(listValue);
    this.parentElement = this.elementPlacement(parentElement);
  }

  setContext(content) {
    if (content) {
      this.element.textContent = content;
      return;
    }
  }
  setImage(img) {
    if (img) {
      this.element.src = img;
      return;
    }
  }
  elementPlacement(parentElement) {
    if (parentElement) {
      parentElement.append(this.element);
    }
  }
  labelPlacement(id) {
    if (id) {
      this.element.setAttribute('for', id);
    }
  }
  typePlacement(inputType) {
    if (inputType) {
      this.element.setAttribute('type', inputType);
    }
  }
  valuePlacement(listValue) {
    if (listValue) {
      this.element.setAttribute('value', listValue);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ElementCreator);


/***/ }),

/***/ "./src/footerCreator.js":
/*!******************************!*\
  !*** ./src/footerCreator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/elementCreator.js");
/* harmony import */ var _pageElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageElements */ "./src/pageElements.js");




const FooterCreator = (function () {
  let lowPriorityCount = 0;
  let highPriorityCount = 0;

  const footerRender = (parentElement) => {
    footerElementCreator(parentElement);
  };

  const footerElementCreator = (parentElement) => {
    const lowPriorityDiv = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      parentElement,
      'div',
      'lowCounter-container'
    );
    const lowPriorityTitle = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      lowPriorityDiv.element,
      'p',
      'low-text',
      `Low Priority: ${lowPriorityCount}`
    );
    const highPriorityDiv = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      parentElement,
      'div',
      'highCount-container'
    );
    const highPriorityTitle = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      highPriorityDiv.element,
      'p',
      'high-text',
      `High Priority: ${highPriorityCount}`
    );
  };

  const lowCountGetter = (choice) => {
    const lowChild = document.querySelector('.lowCounter-container');
    const highChild = document.querySelector('.highCount-container');
    if (choice === 'add') {
      lowPriorityCount += 1;
      _pageElements__WEBPACK_IMPORTED_MODULE_1__["default"].elementsArr[4].element.removeChild(lowChild, highChild);
      FooterCreator.footerRender(_pageElements__WEBPACK_IMPORTED_MODULE_1__["default"].elementsArr[4].element);
    } else if (choice === 'subtract') {
      lowPriorityCount -= 1;
      _pageElements__WEBPACK_IMPORTED_MODULE_1__["default"].elementsArr[4].element.removeChild(lowChild, highChild);
      FooterCreator.footerRender(_pageElements__WEBPACK_IMPORTED_MODULE_1__["default"].elementsArr[4].element);
    }
  };
  const highCountGetter = (choice) => {
    const lowChild = document.querySelector('.lowCounter-container');
    const highChild = document.querySelector('.highCount-container');
    if (choice === 'add') {
      highPriorityCount += 1;
      _pageElements__WEBPACK_IMPORTED_MODULE_1__["default"].elementsArr[4].element.removeChild(lowChild, highChild);
      FooterCreator.footerRender(_pageElements__WEBPACK_IMPORTED_MODULE_1__["default"].elementsArr[4].element);
    } else if (choice === 'subtract') {
      highPriorityCount -= 1;
      _pageElements__WEBPACK_IMPORTED_MODULE_1__["default"].elementsArr[4].element.removeChild(lowChild, highChild);
      FooterCreator.footerRender(_pageElements__WEBPACK_IMPORTED_MODULE_1__["default"].elementsArr[4].element);
    }
  };

  return { footerRender, lowCountGetter, highCountGetter };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterCreator);


/***/ }),

/***/ "./src/listCardCreator.js":
/*!********************************!*\
  !*** ./src/listCardCreator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listModalCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listModalCreator */ "./src/listModalCreator.js");
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementCreator */ "./src/elementCreator.js");
/* harmony import */ var _footerCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footerCreator */ "./src/footerCreator.js");
/* harmony import */ var _storageManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storageManager */ "./src/storageManager.js");






const ListCardCreator = (function () {
  const cardRenderer = () => {
    cardCreator();
  };

  const cardCreator = () => {
    const parentCard = document.querySelector('.list-container');
    const cardArr = _listModalCreator__WEBPACK_IMPORTED_MODULE_0__["default"].listArr;
    for (let i = 0; i < cardArr.length; i++) {
      const cardDiv = new _elementCreator__WEBPACK_IMPORTED_MODULE_1__["default"](parentCard, 'div', 'card');
      const title = new _elementCreator__WEBPACK_IMPORTED_MODULE_1__["default"](
        cardDiv.element,
        'p',
        'card-title',
        `Title: ${cardArr[i].title}`
      );
      const description = new _elementCreator__WEBPACK_IMPORTED_MODULE_1__["default"](
        cardDiv.element,
        'p',
        'card-description',
        cardArr[i].description
      );
      const dueDate = new _elementCreator__WEBPACK_IMPORTED_MODULE_1__["default"](
        cardDiv.element,
        'p',
        'card-dueDate',
        cardArr[i].dueDate
      );
      const priority = new _elementCreator__WEBPACK_IMPORTED_MODULE_1__["default"](
        cardDiv.element,
        'p',
        'card-priority',
        cardArr[i].priority
      );
      const notes = new _elementCreator__WEBPACK_IMPORTED_MODULE_1__["default"](
        cardDiv.element,
        'p',
        'card-notes',
        cardArr[i].notes
      );
      const completeDiv = new _elementCreator__WEBPACK_IMPORTED_MODULE_1__["default"](
        cardDiv.element,
        'div',
        'complete-container'
      );
      const checkLabel = new _elementCreator__WEBPACK_IMPORTED_MODULE_1__["default"](
        completeDiv.element,
        'label',
        'complete-label',
        'Complete: '
      );
      const checkbox = new _elementCreator__WEBPACK_IMPORTED_MODULE_1__["default"](
        completeDiv.element,
        'input',
        'complete-check',
        '',
        '',
        '',
        'checkbox'
      );
      const button = new _elementCreator__WEBPACK_IMPORTED_MODULE_1__["default"](
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
        _footerCreator__WEBPACK_IMPORTED_MODULE_2__["default"].lowCountGetter('subtract');
      } else if (priority.element.textContent === 'High') {
        console.log('deleted high');
        _footerCreator__WEBPACK_IMPORTED_MODULE_2__["default"].highCountGetter('subtract');
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
    localStorage.setItem(`title${indexAdd}`, title.element.textContent);
    localStorage.setItem(
      `description${indexAdd}`,
      description.element.textContent
    );
    localStorage.setItem(`priority${indexAdd}`, priority.element.textContent);
    localStorage.setItem(`dueDate${indexAdd}`, dueDate.element.textContent);
    localStorage.setItem(`notes${indexAdd}`, notes.element.textContent);
  };
  return { cardRenderer };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListCardCreator);


/***/ }),

/***/ "./src/listModalCreator.js":
/*!*********************************!*\
  !*** ./src/listModalCreator.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/elementCreator.js");
/* harmony import */ var _listCardCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listCardCreator */ "./src/listCardCreator.js");
/* harmony import */ var _footerCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footerCreator */ "./src/footerCreator.js");
/* harmony import */ var _storageManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storageManager */ "./src/storageManager.js");






const ModalCreator = (function () {
  const parentElement = document.body;
  const listArr = [];
  class ListElement {
    constructor(title, description, dueDate, priority, notes) {
      this.title = title.value;
      this.description = description.value;
      this.dueDate = dueDate.value;
      this.priority = priority.value;
      this.notes = notes.value;
      this.checklist = false;
    }
  }

  const listCreator = () => {
    const listModal = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      parentElement,
      'div',
      'modal-container'
    );
    const listDivision = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      listModal.element,
      'div',
      'form-container'
    );
    const formTitle = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      listDivision.element,
      'h1',
      'form-title',
      'New Item'
    );
    const formBlock = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      listDivision.element,
      'form',
      'form-block'
    );
    const fieldsetForm = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      formBlock.element,
      'fieldset',
      'form-fieldset'
    );
    const fieldsetLegend = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      fieldsetForm.element,
      'legend',
      'form-fieldset-legend',
      'To-Do Item'
    );
    const titleDiv = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      fieldsetForm.element,
      'div',
      'todo-title'
    );
    const titleLabel = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      titleDiv.element,
      'label',
      'title-label',
      'Title:',
      '',
      'title'
    );
    const titleInput = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      titleDiv.element,
      'input',
      'title-input',
      '',
      '',
      'title',
      'text'
    );
    const descriptionDiv = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      fieldsetForm.element,
      'div',
      'todo-description'
    );
    const descriptionLabel = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      descriptionDiv.element,
      'label',
      'des-label',
      'Description:',
      '',
      'description'
    );
    const descriptionInput = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      descriptionDiv.element,
      'input',
      'des-input',
      '',
      '',
      'description',
      'text'
    );
    const dueDateDiv = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      fieldsetForm.element,
      'div',
      'todo-dueDate'
    );
    const dueDateLabel = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      dueDateDiv.element,
      'label',
      'dueDate-label',
      'Due Date: ',
      '',
      'dueDate'
    );
    const dueDateInput = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      dueDateDiv.element,
      'input',
      'dueDate-input',
      '',
      '',
      'dueDate',
      'date'
    );
    const priorityDiv = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      fieldsetForm.element,
      'div',
      'todo-priority'
    );
    const priorityLabel = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      priorityDiv.element,
      'label',
      'todo-priority',
      'Priority: ',
      '',
      'priority'
    );
    const prioritySelect = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      priorityDiv.element,
      'select',
      'priority-select',
      '',
      '',
      'priority'
    );
    const priorityOption1 = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      prioritySelect.element,
      'option',
      'selection',
      '--Please Choose Priority',
      '',
      '',
      '',
      '""'
    );
    const priorityOption2 = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      prioritySelect.element,
      'option',
      'selection',
      'Low',
      '',
      '',
      '',
      'Low'
    );
    const priorityOption3 = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      prioritySelect.element,
      'option',
      'selection',
      'High',
      '',
      '',
      '',
      'High'
    );
    const notesDiv = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      fieldsetForm.element,
      'div',
      'notes-textarea'
    );
    const notesLabel = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      notesDiv.element,
      'label',
      'notes-label',
      'Notes: ',
      '',
      'notes'
    );
    const notesTextArea = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      notesDiv.element,
      'textarea',
      'notes-text'
    );

    const buttonDiv = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      fieldsetForm.element,
      'div',
      'button-div'
    );
    const formButton = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      buttonDiv.element,
      'button',
      'form-button',
      'Create Item'
    );
    formSubmit(
      formButton.element,
      listModal.element,
      listArr,
      document.querySelector('.title-input'),
      document.querySelector('.des-input'),
      document.querySelector('.dueDate-input'),
      document.querySelector('.priority-select'),
      document.querySelector('.notes-text')
    );
  };

  const listOjectCreator = (
    storage,
    title,
    description,
    dueDate,
    priority,
    notes
  ) => {
    const listObject = new ListElement(
      title,
      description,
      dueDate,
      priority,
      notes
    );

    storage.push(listObject);
  };

  const setCounterNumber = (priority) => {
    if (priority.value === 'Low') {
      _footerCreator__WEBPACK_IMPORTED_MODULE_2__["default"].lowCountGetter('add');
    } else if (priority.value === 'High') {
      _footerCreator__WEBPACK_IMPORTED_MODULE_2__["default"].highCountGetter('add');
    }
  };

  const formSubmit = (
    button,
    childElement,
    storage,
    titleInput,
    descriptionInput,
    dueDateInput,
    priorityInput,
    notesInput
  ) => {
    button.addEventListener('click', () => {
      listOjectCreator(
        storage,
        titleInput,
        descriptionInput,
        dueDateInput,
        priorityInput,
        notesInput
      );
      parentElement.removeChild(childElement);
      (document.querySelector('.list-container').textContent = ''),
        _listCardCreator__WEBPACK_IMPORTED_MODULE_1__["default"].cardRenderer();
      event.preventDefault();
      setCounterNumber(priorityInput);
      _storageManager__WEBPACK_IMPORTED_MODULE_3__["default"].indexCounting();
    });
  };

  return { listCreator, listArr };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalCreator);


/***/ }),

/***/ "./src/pageElements.js":
/*!*****************************!*\
  !*** ./src/pageElements.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/elementCreator.js");
/* harmony import */ var _footerCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footerCreator */ "./src/footerCreator.js");



const PageRenderer = (function () {
  const parentContainer = document.body;
  const elementsArr = [];

  const pageRender = () => {
    parentCreator();
    _footerCreator__WEBPACK_IMPORTED_MODULE_1__["default"].footerRender(elementsArr[4].element);
  };

  const parentCreator = () => {
    const pageContainer = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      parentContainer,
      'div',
      'page-container'
    );
    const headingContainer = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      pageContainer.element,
      'div',
      'heading-container'
    );
    const sidebarContainer = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      pageContainer.element,
      'div',
      'sidebar-container'
    );
    const listContainer = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      pageContainer.element,
      'div',
      'list-container'
    );

    const footerContainer = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      pageContainer.element,
      'div',
      'footer-container'
    );
    elementsArr.push(
      pageContainer,
      headingContainer,
      sidebarContainer,
      listContainer,
      footerContainer
    );

    return {
      pageContainer,
      headingContainer,
      sidebarContainer,
      listContainer,
      footerContainer,
    };
  };

  return { pageRender, elementsArr };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageRenderer);


/***/ }),

/***/ "./src/sidebarElement.js":
/*!*******************************!*\
  !*** ./src/sidebarElement.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/elementCreator.js");
/* harmony import */ var _pageElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageElements */ "./src/pageElements.js");
/* harmony import */ var _listModalCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listModalCreator */ "./src/listModalCreator.js");





const SidebarElements = (function () {
  const parentElement = _pageElements__WEBPACK_IMPORTED_MODULE_1__["default"].elementsArr;
  let buttonHolder;
  const sidebarElementCreator = () => {
    const buttonDiv = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      parentElement[2].element,
      'div',
      'buttons-container'
    );
    const creatButton = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      parentElement[2].element,
      'button',
      'creat-card-button',
      'New Item'
    );

    buttonHolder = creatButton;
  };

  const buttonClick = () => {
    buttonHolder.element.addEventListener('click', () => {
      _listModalCreator__WEBPACK_IMPORTED_MODULE_2__["default"].listCreator();
    });
  };

  const sidbarRenderer = () => {
    sidebarElementCreator();
    buttonClick();
  };
  return { sidbarRenderer };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarElements);


/***/ }),

/***/ "./src/storageManager.js":
/*!*******************************!*\
  !*** ./src/storageManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/elementCreator.js");
/* harmony import */ var _pageElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageElements */ "./src/pageElements.js");




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
    const card = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      _pageElements__WEBPACK_IMPORTED_MODULE_1__["default"].elementsArr[3].element,
      'div',
      'card'
    );
    const cardTitle = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      card.element,
      'p',
      'card-title',
      title
    );
    const cardDescription = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      card.element,
      'p',
      'card-description',
      description
    );
    const cardDueDate = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      card.element,
      'p',
      'card-dueDate',
      dueDate
    );
    const cardPriority = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      card.element,
      'p',
      'card-priority',
      priority
    );
    const cardNotes = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      card.element,
      'p',
      'card-notes',
      notes
    );
    const completeDiv = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      card.element,
      'div',
      'complete-container'
    );
    const checkLabel = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      completeDiv.element,
      'label',
      'complete-label',
      'Complete: '
    );
    const checkbox = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      completeDiv.element,
      'input',
      'complete-check',
      '',
      '',
      '',
      'checkbox'
    );
    const button = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      card.element,
      'button',
      'delete-button',
      'X'
    );
    priorityCheck(cardPriority.element);
    completeUpdater(checkbox, card);
    deleteListener(button, _pageElements__WEBPACK_IMPORTED_MODULE_1__["default"].elementsArr[3], card, index);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageManager);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/sidebarElement.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsb0NBQW9DLE1BQU07QUFDMUMsMENBQTBDLE1BQU07QUFDaEQsdUNBQXVDLE1BQU07QUFDN0Msc0NBQXNDLE1BQU07QUFDNUMsb0NBQW9DLE1BQU07QUFDMUM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRCxpRUFBZSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWxlbWVudENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvb3RlckNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xpc3RDYXJkQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGlzdE1vZGFsQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZUVsZW1lbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZU1hbmFnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5jbGFzcyBFbGVtZW50Q3JlYXRvciB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwYXJlbnRFbGVtZW50LFxyXG4gICAgZWxlbWVudCxcclxuICAgIGNsYXNzbmFtZSxcclxuICAgIGNvbnRlbnQsXHJcbiAgICBpbWcsXHJcbiAgICBpZCxcclxuICAgIHR5cGUsXHJcbiAgICBsaXN0VmFsdWVcclxuICApIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICB0aGlzLmNsYXNzbmFtZSA9IHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc25hbWU7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLnNldENvbnRleHQoY29udGVudCk7XHJcbiAgICB0aGlzLmltZyA9IHRoaXMuc2V0SW1hZ2UoaW1nKTtcclxuICAgIHRoaXMuaWQgPSB0aGlzLmxhYmVsUGxhY2VtZW50KGlkKTtcclxuICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZVBsYWNlbWVudCh0eXBlKTtcclxuICAgIHRoaXMubGlzdFZhbHVlID0gdGhpcy52YWx1ZVBsYWNlbWVudChsaXN0VmFsdWUpO1xyXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gdGhpcy5lbGVtZW50UGxhY2VtZW50KHBhcmVudEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGV4dChjb250ZW50KSB7XHJcbiAgICBpZiAoY29udGVudCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEltYWdlKGltZykge1xyXG4gICAgaWYgKGltZykge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc3JjID0gaW1nO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsZW1lbnRQbGFjZW1lbnQocGFyZW50RWxlbWVudCkge1xyXG4gICAgaWYgKHBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcy5lbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcbiAgbGFiZWxQbGFjZW1lbnQoaWQpIHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHR5cGVQbGFjZW1lbnQoaW5wdXRUeXBlKSB7XHJcbiAgICBpZiAoaW5wdXRUeXBlKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpbnB1dFR5cGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICB2YWx1ZVBsYWNlbWVudChsaXN0VmFsdWUpIHtcclxuICAgIGlmIChsaXN0VmFsdWUpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBsaXN0VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudENyZWF0b3I7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4vZWxlbWVudENyZWF0b3InO1xyXG5pbXBvcnQgUGFnZVJlbmRlcmVyIGZyb20gJy4vcGFnZUVsZW1lbnRzJztcclxuXHJcbmNvbnN0IEZvb3RlckNyZWF0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGxldCBsb3dQcmlvcml0eUNvdW50ID0gMDtcclxuICBsZXQgaGlnaFByaW9yaXR5Q291bnQgPSAwO1xyXG5cclxuICBjb25zdCBmb290ZXJSZW5kZXIgPSAocGFyZW50RWxlbWVudCkgPT4ge1xyXG4gICAgZm9vdGVyRWxlbWVudENyZWF0b3IocGFyZW50RWxlbWVudCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9vdGVyRWxlbWVudENyZWF0b3IgPSAocGFyZW50RWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgbG93UHJpb3JpdHlEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhcmVudEVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnbG93Q291bnRlci1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgbG93UHJpb3JpdHlUaXRsZSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgbG93UHJpb3JpdHlEaXYuZWxlbWVudCxcclxuICAgICAgJ3AnLFxyXG4gICAgICAnbG93LXRleHQnLFxyXG4gICAgICBgTG93IFByaW9yaXR5OiAke2xvd1ByaW9yaXR5Q291bnR9YFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGhpZ2hQcmlvcml0eURpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFyZW50RWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdoaWdoQ291bnQtY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGhpZ2hQcmlvcml0eVRpdGxlID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBoaWdoUHJpb3JpdHlEaXYuZWxlbWVudCxcclxuICAgICAgJ3AnLFxyXG4gICAgICAnaGlnaC10ZXh0JyxcclxuICAgICAgYEhpZ2ggUHJpb3JpdHk6ICR7aGlnaFByaW9yaXR5Q291bnR9YFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb3dDb3VudEdldHRlciA9IChjaG9pY2UpID0+IHtcclxuICAgIGNvbnN0IGxvd0NoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvd0NvdW50ZXItY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBoaWdoQ2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaENvdW50LWNvbnRhaW5lcicpO1xyXG4gICAgaWYgKGNob2ljZSA9PT0gJ2FkZCcpIHtcclxuICAgICAgbG93UHJpb3JpdHlDb3VudCArPSAxO1xyXG4gICAgICBQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbNF0uZWxlbWVudC5yZW1vdmVDaGlsZChsb3dDaGlsZCwgaGlnaENoaWxkKTtcclxuICAgICAgRm9vdGVyQ3JlYXRvci5mb290ZXJSZW5kZXIoUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIGlmIChjaG9pY2UgPT09ICdzdWJ0cmFjdCcpIHtcclxuICAgICAgbG93UHJpb3JpdHlDb3VudCAtPSAxO1xyXG4gICAgICBQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbNF0uZWxlbWVudC5yZW1vdmVDaGlsZChsb3dDaGlsZCwgaGlnaENoaWxkKTtcclxuICAgICAgRm9vdGVyQ3JlYXRvci5mb290ZXJSZW5kZXIoUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGlnaENvdW50R2V0dGVyID0gKGNob2ljZSkgPT4ge1xyXG4gICAgY29uc3QgbG93Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93Q291bnRlci1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGhpZ2hDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoQ291bnQtY29udGFpbmVyJyk7XHJcbiAgICBpZiAoY2hvaWNlID09PSAnYWRkJykge1xyXG4gICAgICBoaWdoUHJpb3JpdHlDb3VudCArPSAxO1xyXG4gICAgICBQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbNF0uZWxlbWVudC5yZW1vdmVDaGlsZChsb3dDaGlsZCwgaGlnaENoaWxkKTtcclxuICAgICAgRm9vdGVyQ3JlYXRvci5mb290ZXJSZW5kZXIoUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIGlmIChjaG9pY2UgPT09ICdzdWJ0cmFjdCcpIHtcclxuICAgICAgaGlnaFByaW9yaXR5Q291bnQgLT0gMTtcclxuICAgICAgUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQucmVtb3ZlQ2hpbGQobG93Q2hpbGQsIGhpZ2hDaGlsZCk7XHJcbiAgICAgIEZvb3RlckNyZWF0b3IuZm9vdGVyUmVuZGVyKFBhZ2VSZW5kZXJlci5lbGVtZW50c0Fycls0XS5lbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4geyBmb290ZXJSZW5kZXIsIGxvd0NvdW50R2V0dGVyLCBoaWdoQ291bnRHZXR0ZXIgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyQ3JlYXRvcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgTW9kYWxDcmVhdG9yIGZyb20gJy4vbGlzdE1vZGFsQ3JlYXRvcic7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuL2VsZW1lbnRDcmVhdG9yJztcclxuaW1wb3J0IEZvb3RlckNyZWF0b3IgZnJvbSAnLi9mb290ZXJDcmVhdG9yJztcclxuaW1wb3J0IFN0b3JhZ2VNYW5hZ2VyIGZyb20gJy4vc3RvcmFnZU1hbmFnZXInO1xyXG5cclxuY29uc3QgTGlzdENhcmRDcmVhdG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjYXJkUmVuZGVyZXIgPSAoKSA9PiB7XHJcbiAgICBjYXJkQ3JlYXRvcigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhcmRDcmVhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFyZW50Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgY2FyZEFyciA9IE1vZGFsQ3JlYXRvci5saXN0QXJyO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNhcmREaXYgPSBuZXcgRWxlbWVudENyZWF0b3IocGFyZW50Q2FyZCwgJ2RpdicsICdjYXJkJyk7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAncCcsXHJcbiAgICAgICAgJ2NhcmQtdGl0bGUnLFxyXG4gICAgICAgIGBUaXRsZTogJHtjYXJkQXJyW2ldLnRpdGxlfWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LFxyXG4gICAgICAgICdwJyxcclxuICAgICAgICAnY2FyZC1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgY2FyZEFycltpXS5kZXNjcmlwdGlvblxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkdWVEYXRlID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAncCcsXHJcbiAgICAgICAgJ2NhcmQtZHVlRGF0ZScsXHJcbiAgICAgICAgY2FyZEFycltpXS5kdWVEYXRlXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAncCcsXHJcbiAgICAgICAgJ2NhcmQtcHJpb3JpdHknLFxyXG4gICAgICAgIGNhcmRBcnJbaV0ucHJpb3JpdHlcclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgbm90ZXMgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LFxyXG4gICAgICAgICdwJyxcclxuICAgICAgICAnY2FyZC1ub3RlcycsXHJcbiAgICAgICAgY2FyZEFycltpXS5ub3Rlc1xyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBjb21wbGV0ZURpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjYXJkRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ2RpdicsXHJcbiAgICAgICAgJ2NvbXBsZXRlLWNvbnRhaW5lcidcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY2hlY2tMYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjb21wbGV0ZURpdi5lbGVtZW50LFxyXG4gICAgICAgICdsYWJlbCcsXHJcbiAgICAgICAgJ2NvbXBsZXRlLWxhYmVsJyxcclxuICAgICAgICAnQ29tcGxldGU6ICdcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY2hlY2tib3ggPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY29tcGxldGVEaXYuZWxlbWVudCxcclxuICAgICAgICAnaW5wdXQnLFxyXG4gICAgICAgICdjb21wbGV0ZS1jaGVjaycsXHJcbiAgICAgICAgJycsXHJcbiAgICAgICAgJycsXHJcbiAgICAgICAgJycsXHJcbiAgICAgICAgJ2NoZWNrYm94J1xyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBidXR0b24gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LFxyXG4gICAgICAgICdidXR0b24nLFxyXG4gICAgICAgICdkZWxldGUtYnV0dG9uJyxcclxuICAgICAgICAnWCdcclxuICAgICAgKTtcclxuICAgICAgc3RvcmFnZVBvcHVsYXRpb24oaSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSwgbm90ZXMpO1xyXG4gICAgICBwcmlvcml0eUNoZWNrKHByaW9yaXR5KTtcclxuICAgICAgY29tcGxldGVDaGVja2VkKGNoZWNrYm94LCBjYXJkRGl2KTtcclxuICAgICAgZGVsZXRlTGlzdGVuZXIoYnV0dG9uLCBwYXJlbnRDYXJkLCBjYXJkRGl2LCBjYXJkQXJyLCBpLCBwcmlvcml0eSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29tcGxldGVDaGVja2VkID0gKGNoZWNrRWxlbWVudCwgY2FyZERpdikgPT4ge1xyXG4gICAgY2hlY2tFbGVtZW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICBpZiAoY2hlY2tFbGVtZW50LmVsZW1lbnQuY2hlY2tlZCkge1xyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzdDQjlFOCc7XHJcbiAgICAgIH0gZWxzZSBjYXJkRGl2LmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlZmVmZWYnO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlTGlzdGVuZXIgPSAoXHJcbiAgICBkZWxldGVCdXR0b24sXHJcbiAgICBwYXJlbnRFbGVtZW50LFxyXG4gICAgY2hpbGRFbGVtZW50LFxyXG4gICAgYXJyYXlMaXN0LFxyXG4gICAgaW5kZXgsXHJcbiAgICBwcmlvcml0eVxyXG4gICkgPT4ge1xyXG4gICAgZGVsZXRlQnV0dG9uLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmIChwcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID09PSAnTG93Jykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGVkIGxvdycpO1xyXG4gICAgICAgIEZvb3RlckNyZWF0b3IubG93Q291bnRHZXR0ZXIoJ3N1YnRyYWN0Jyk7XHJcbiAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkuZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0hpZ2gnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZWQgaGlnaCcpO1xyXG4gICAgICAgIEZvb3RlckNyZWF0b3IuaGlnaENvdW50R2V0dGVyKCdzdWJ0cmFjdCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGRFbGVtZW50LmVsZW1lbnQpO1xyXG4gICAgICBhcnJheUxpc3Quc3BsaWNlKGluZGV4KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5Q2hlY2sgPSAocHJpb3JpdHkpID0+IHtcclxuICAgIGlmIChwcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID09PSAnTG93Jykge1xyXG4gICAgICBwcmlvcml0eS5lbGVtZW50LnN0eWxlLmNvbG9yID0gJyNGRkZBRjAnO1xyXG4gICAgICBwcmlvcml0eS5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMTc3MjQ1JztcclxuICAgIH0gZWxzZSBpZiAocHJpb3JpdHkuZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0hpZ2gnKSB7XHJcbiAgICAgIHByaW9yaXR5LmVsZW1lbnQuc3R5bGUuY29sb3IgPSAnI0ZGRkFGMCc7XHJcbiAgICAgIHByaW9yaXR5LmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNCMjIyMjInO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0b3JhZ2VQb3B1bGF0aW9uID0gKFxyXG4gICAgaW5kZXgsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgcHJpb3JpdHksXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgbm90ZXNcclxuICApID0+IHtcclxuICAgIGNvbnN0IGluZGV4QWRkID0gaW5kZXggKyAxO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRpdGxlJHtpbmRleEFkZH1gLCB0aXRsZS5lbGVtZW50LnRleHRDb250ZW50KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICBgZGVzY3JpcHRpb24ke2luZGV4QWRkfWAsXHJcbiAgICAgIGRlc2NyaXB0aW9uLmVsZW1lbnQudGV4dENvbnRlbnRcclxuICAgICk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcHJpb3JpdHkke2luZGV4QWRkfWAsIHByaW9yaXR5LmVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGR1ZURhdGUke2luZGV4QWRkfWAsIGR1ZURhdGUuZWxlbWVudC50ZXh0Q29udGVudCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgbm90ZXMke2luZGV4QWRkfWAsIG5vdGVzLmVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgY2FyZFJlbmRlcmVyIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IExpc3RDYXJkQ3JlYXRvcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi9lbGVtZW50Q3JlYXRvcic7XHJcbmltcG9ydCBMaXN0Q2FyZENyZWF0b3IgZnJvbSAnLi9saXN0Q2FyZENyZWF0b3InO1xyXG5pbXBvcnQgRm9vdGVyQ3JlYXRvciBmcm9tICcuL2Zvb3RlckNyZWF0b3InO1xyXG5pbXBvcnQgU3RvcmFnZU1hbmFnZXIgZnJvbSAnLi9zdG9yYWdlTWFuYWdlcic7XHJcblxyXG5jb25zdCBNb2RhbENyZWF0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xyXG4gIGNvbnN0IGxpc3RBcnIgPSBbXTtcclxuICBjbGFzcyBMaXN0RWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGUudmFsdWU7XHJcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi52YWx1ZTtcclxuICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZS52YWx1ZTtcclxuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlO1xyXG4gICAgICB0aGlzLm5vdGVzID0gbm90ZXMudmFsdWU7XHJcbiAgICAgIHRoaXMuY2hlY2tsaXN0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaXN0Q3JlYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxpc3RNb2RhbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFyZW50RWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdtb2RhbC1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgbGlzdERpdmlzaW9uID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBsaXN0TW9kYWwuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdmb3JtLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGxpc3REaXZpc2lvbi5lbGVtZW50LFxyXG4gICAgICAnaDEnLFxyXG4gICAgICAnZm9ybS10aXRsZScsXHJcbiAgICAgICdOZXcgSXRlbSdcclxuICAgICk7XHJcbiAgICBjb25zdCBmb3JtQmxvY2sgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGxpc3REaXZpc2lvbi5lbGVtZW50LFxyXG4gICAgICAnZm9ybScsXHJcbiAgICAgICdmb3JtLWJsb2NrJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGZpZWxkc2V0Rm9ybSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZm9ybUJsb2NrLmVsZW1lbnQsXHJcbiAgICAgICdmaWVsZHNldCcsXHJcbiAgICAgICdmb3JtLWZpZWxkc2V0J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGZpZWxkc2V0TGVnZW5kID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2xlZ2VuZCcsXHJcbiAgICAgICdmb3JtLWZpZWxkc2V0LWxlZ2VuZCcsXHJcbiAgICAgICdUby1EbyBJdGVtJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHRpdGxlRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICd0b2RvLXRpdGxlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHRpdGxlRGl2LmVsZW1lbnQsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICd0aXRsZS1sYWJlbCcsXHJcbiAgICAgICdUaXRsZTonLFxyXG4gICAgICAnJyxcclxuICAgICAgJ3RpdGxlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHRpdGxlRGl2LmVsZW1lbnQsXHJcbiAgICAgICdpbnB1dCcsXHJcbiAgICAgICd0aXRsZS1pbnB1dCcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ3RpdGxlJyxcclxuICAgICAgJ3RleHQnXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3RvZG8tZGVzY3JpcHRpb24nXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZGVzY3JpcHRpb25EaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ2Rlcy1sYWJlbCcsXHJcbiAgICAgICdEZXNjcmlwdGlvbjonLFxyXG4gICAgICAnJyxcclxuICAgICAgJ2Rlc2NyaXB0aW9uJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGRlc2NyaXB0aW9uRGl2LmVsZW1lbnQsXHJcbiAgICAgICdpbnB1dCcsXHJcbiAgICAgICdkZXMtaW5wdXQnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICd0ZXh0J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3RvZG8tZHVlRGF0ZSdcclxuICAgICk7XHJcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGR1ZURhdGVEaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ2R1ZURhdGUtbGFiZWwnLFxyXG4gICAgICAnRHVlIERhdGU6ICcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnZHVlRGF0ZSdcclxuICAgICk7XHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGR1ZURhdGVEaXYuZWxlbWVudCxcclxuICAgICAgJ2lucHV0JyxcclxuICAgICAgJ2R1ZURhdGUtaW5wdXQnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdkdWVEYXRlJyxcclxuICAgICAgJ2RhdGUnXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3RvZG8tcHJpb3JpdHknXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcHJpb3JpdHlEaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ3RvZG8tcHJpb3JpdHknLFxyXG4gICAgICAnUHJpb3JpdHk6ICcsXHJcbiAgICAgICcnLFxyXG4gICAgICAncHJpb3JpdHknXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHByaW9yaXR5RGl2LmVsZW1lbnQsXHJcbiAgICAgICdzZWxlY3QnLFxyXG4gICAgICAncHJpb3JpdHktc2VsZWN0JyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAncHJpb3JpdHknXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb24xID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwcmlvcml0eVNlbGVjdC5lbGVtZW50LFxyXG4gICAgICAnb3B0aW9uJyxcclxuICAgICAgJ3NlbGVjdGlvbicsXHJcbiAgICAgICctLVBsZWFzZSBDaG9vc2UgUHJpb3JpdHknLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnXCJcIidcclxuICAgICk7XHJcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbjIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHByaW9yaXR5U2VsZWN0LmVsZW1lbnQsXHJcbiAgICAgICdvcHRpb24nLFxyXG4gICAgICAnc2VsZWN0aW9uJyxcclxuICAgICAgJ0xvdycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdMb3cnXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb24zID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwcmlvcml0eVNlbGVjdC5lbGVtZW50LFxyXG4gICAgICAnb3B0aW9uJyxcclxuICAgICAgJ3NlbGVjdGlvbicsXHJcbiAgICAgICdIaWdoJyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ0hpZ2gnXHJcbiAgICApO1xyXG4gICAgY29uc3Qgbm90ZXNEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ25vdGVzLXRleHRhcmVhJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IG5vdGVzTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIG5vdGVzRGl2LmVsZW1lbnQsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICdub3Rlcy1sYWJlbCcsXHJcbiAgICAgICdOb3RlczogJyxcclxuICAgICAgJycsXHJcbiAgICAgICdub3RlcydcclxuICAgICk7XHJcbiAgICBjb25zdCBub3Rlc1RleHRBcmVhID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBub3Rlc0Rpdi5lbGVtZW50LFxyXG4gICAgICAndGV4dGFyZWEnLFxyXG4gICAgICAnbm90ZXMtdGV4dCdcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdidXR0b24tZGl2J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGZvcm1CdXR0b24gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGJ1dHRvbkRpdi5lbGVtZW50LFxyXG4gICAgICAnYnV0dG9uJyxcclxuICAgICAgJ2Zvcm0tYnV0dG9uJyxcclxuICAgICAgJ0NyZWF0ZSBJdGVtJ1xyXG4gICAgKTtcclxuICAgIGZvcm1TdWJtaXQoXHJcbiAgICAgIGZvcm1CdXR0b24uZWxlbWVudCxcclxuICAgICAgbGlzdE1vZGFsLmVsZW1lbnQsXHJcbiAgICAgIGxpc3RBcnIsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1pbnB1dCcpLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzLWlucHV0JyksXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWVEYXRlLWlucHV0JyksXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1zZWxlY3QnKSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLXRleHQnKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsaXN0T2plY3RDcmVhdG9yID0gKFxyXG4gICAgc3RvcmFnZSxcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgcHJpb3JpdHksXHJcbiAgICBub3Rlc1xyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgbGlzdE9iamVjdCA9IG5ldyBMaXN0RWxlbWVudChcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBkdWVEYXRlLFxyXG4gICAgICBwcmlvcml0eSxcclxuICAgICAgbm90ZXNcclxuICAgICk7XHJcblxyXG4gICAgc3RvcmFnZS5wdXNoKGxpc3RPYmplY3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldENvdW50ZXJOdW1iZXIgPSAocHJpb3JpdHkpID0+IHtcclxuICAgIGlmIChwcmlvcml0eS52YWx1ZSA9PT0gJ0xvdycpIHtcclxuICAgICAgRm9vdGVyQ3JlYXRvci5sb3dDb3VudEdldHRlcignYWRkJyk7XHJcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5LnZhbHVlID09PSAnSGlnaCcpIHtcclxuICAgICAgRm9vdGVyQ3JlYXRvci5oaWdoQ291bnRHZXR0ZXIoJ2FkZCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1TdWJtaXQgPSAoXHJcbiAgICBidXR0b24sXHJcbiAgICBjaGlsZEVsZW1lbnQsXHJcbiAgICBzdG9yYWdlLFxyXG4gICAgdGl0bGVJbnB1dCxcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQsXHJcbiAgICBkdWVEYXRlSW5wdXQsXHJcbiAgICBwcmlvcml0eUlucHV0LFxyXG4gICAgbm90ZXNJbnB1dFxyXG4gICkgPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsaXN0T2plY3RDcmVhdG9yKFxyXG4gICAgICAgIHN0b3JhZ2UsXHJcbiAgICAgICAgdGl0bGVJbnB1dCxcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LFxyXG4gICAgICAgIGR1ZURhdGVJbnB1dCxcclxuICAgICAgICBwcmlvcml0eUlucHV0LFxyXG4gICAgICAgIG5vdGVzSW5wdXRcclxuICAgICAgKTtcclxuICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZEVsZW1lbnQpO1xyXG4gICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJykudGV4dENvbnRlbnQgPSAnJyksXHJcbiAgICAgICAgTGlzdENhcmRDcmVhdG9yLmNhcmRSZW5kZXJlcigpO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBzZXRDb3VudGVyTnVtYmVyKHByaW9yaXR5SW5wdXQpO1xyXG4gICAgICBTdG9yYWdlTWFuYWdlci5pbmRleENvdW50aW5nKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBsaXN0Q3JlYXRvciwgbGlzdEFyciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBNb2RhbENyZWF0b3I7XHJcbiIsImltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuL2VsZW1lbnRDcmVhdG9yJztcclxuaW1wb3J0IEZvb3RlckNyZWF0b3IgZnJvbSAnLi9mb290ZXJDcmVhdG9yJztcclxuXHJcbmNvbnN0IFBhZ2VSZW5kZXJlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcclxuICBjb25zdCBlbGVtZW50c0FyciA9IFtdO1xyXG5cclxuICBjb25zdCBwYWdlUmVuZGVyID0gKCkgPT4ge1xyXG4gICAgcGFyZW50Q3JlYXRvcigpO1xyXG4gICAgRm9vdGVyQ3JlYXRvci5mb290ZXJSZW5kZXIoZWxlbWVudHNBcnJbNF0uZWxlbWVudCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGFyZW50Q3JlYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhZ2VDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhcmVudENvbnRhaW5lcixcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdwYWdlLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnaGVhZGluZy1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFnZUNvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3NpZGViYXItY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhZ2VDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdsaXN0LWNvbnRhaW5lcidcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnZm9vdGVyLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBlbGVtZW50c0Fyci5wdXNoKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLFxyXG4gICAgICBoZWFkaW5nQ29udGFpbmVyLFxyXG4gICAgICBzaWRlYmFyQ29udGFpbmVyLFxyXG4gICAgICBsaXN0Q29udGFpbmVyLFxyXG4gICAgICBmb290ZXJDb250YWluZXJcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFnZUNvbnRhaW5lcixcclxuICAgICAgaGVhZGluZ0NvbnRhaW5lcixcclxuICAgICAgc2lkZWJhckNvbnRhaW5lcixcclxuICAgICAgbGlzdENvbnRhaW5lcixcclxuICAgICAgZm9vdGVyQ29udGFpbmVyLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBwYWdlUmVuZGVyLCBlbGVtZW50c0FyciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBQYWdlUmVuZGVyZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4vZWxlbWVudENyZWF0b3InO1xyXG5pbXBvcnQgUGFnZVJlbmRlcmVyIGZyb20gJy4vcGFnZUVsZW1lbnRzJztcclxuaW1wb3J0IE1vZGFsQ3JlYXRvciBmcm9tICcuL2xpc3RNb2RhbENyZWF0b3InO1xyXG5cclxuY29uc3QgU2lkZWJhckVsZW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyO1xyXG4gIGxldCBidXR0b25Ib2xkZXI7XHJcbiAgY29uc3Qgc2lkZWJhckVsZW1lbnRDcmVhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9uRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYXJlbnRFbGVtZW50WzJdLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnYnV0dG9ucy1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgY3JlYXRCdXR0b24gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhcmVudEVsZW1lbnRbMl0uZWxlbWVudCxcclxuICAgICAgJ2J1dHRvbicsXHJcbiAgICAgICdjcmVhdC1jYXJkLWJ1dHRvbicsXHJcbiAgICAgICdOZXcgSXRlbSdcclxuICAgICk7XHJcblxyXG4gICAgYnV0dG9uSG9sZGVyID0gY3JlYXRCdXR0b247XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBidXR0b25Ib2xkZXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgTW9kYWxDcmVhdG9yLmxpc3RDcmVhdG9yKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWRiYXJSZW5kZXJlciA9ICgpID0+IHtcclxuICAgIHNpZGViYXJFbGVtZW50Q3JlYXRvcigpO1xyXG4gICAgYnV0dG9uQ2xpY2soKTtcclxuICB9O1xyXG4gIHJldHVybiB7IHNpZGJhclJlbmRlcmVyIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJFbGVtZW50cztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi9lbGVtZW50Q3JlYXRvcic7XHJcbmltcG9ydCBQYWdlUmVuZGVyZXIgZnJvbSAnLi9wYWdlRWxlbWVudHMnO1xyXG5cclxuY29uc3QgU3RvcmFnZU1hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGxpc3RQYXJhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1jb250YWluZXInKTtcclxuICBjb25zdCBzdG9yYWdlQXJyID0gW107XHJcbiAgbGV0IGluZGV4Q291bnRlciA9IDA7XHJcblxyXG4gIGNvbnN0IHN0b3JhZ2VTdGFydCA9ICgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UpIHtcclxuICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTdG9yYWdlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBzZXRTdG9yYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3NldHRpbmcgc3RvcmFnZScpO1xyXG4gIH07XHJcbiAgY29uc3QgcG9wdWxhdGVTdG9yYWdlID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT09IDApIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGluZGV4Q291bnRlcjsgaSsrKSB7XHJcbiAgICAgICAgY3JlYXRlU3RvcmFnZUNhcmQoaSArIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygncG9wdWxhdGluZyBzdG9yYWdlJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5kZXhDb3VudGluZyA9ICgpID0+IHtcclxuICAgIGluZGV4Q291bnRlciArPSAxO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luZGV4Q291bnRlcicsIGluZGV4Q291bnRlcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlU3RvcmFnZUNhcmQgPSAoaW5kZXgpID0+IHtcclxuICAgIGxldCB0aXRsZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0aXRsZSR7aW5kZXh9YCk7XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgZGVzY3JpcHRpb24ke2luZGV4fWApO1xyXG4gICAgbGV0IHByaW9yaXR5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHByaW9yaXR5JHtpbmRleH1gKTtcclxuICAgIGxldCBkdWVEYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGR1ZURhdGUke2luZGV4fWApO1xyXG4gICAgbGV0IG5vdGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYG5vdGVzJHtpbmRleH1gKTtcclxuICAgIGNvbnN0IGNhcmQgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIFBhZ2VSZW5kZXJlci5lbGVtZW50c0FyclszXS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2NhcmQnXHJcbiAgICApO1xyXG4gICAgY29uc3QgY2FyZFRpdGxlID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBjYXJkLmVsZW1lbnQsXHJcbiAgICAgICdwJyxcclxuICAgICAgJ2NhcmQtdGl0bGUnLFxyXG4gICAgICB0aXRsZVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNhcmREZXNjcmlwdGlvbiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY2FyZC5lbGVtZW50LFxyXG4gICAgICAncCcsXHJcbiAgICAgICdjYXJkLWRlc2NyaXB0aW9uJyxcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICk7XHJcbiAgICBjb25zdCBjYXJkRHVlRGF0ZSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY2FyZC5lbGVtZW50LFxyXG4gICAgICAncCcsXHJcbiAgICAgICdjYXJkLWR1ZURhdGUnLFxyXG4gICAgICBkdWVEYXRlXHJcbiAgICApO1xyXG4gICAgY29uc3QgY2FyZFByaW9yaXR5ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBjYXJkLmVsZW1lbnQsXHJcbiAgICAgICdwJyxcclxuICAgICAgJ2NhcmQtcHJpb3JpdHknLFxyXG4gICAgICBwcmlvcml0eVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNhcmROb3RlcyA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY2FyZC5lbGVtZW50LFxyXG4gICAgICAncCcsXHJcbiAgICAgICdjYXJkLW5vdGVzJyxcclxuICAgICAgbm90ZXNcclxuICAgICk7XHJcbiAgICBjb25zdCBjb21wbGV0ZURpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY2FyZC5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2NvbXBsZXRlLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBjaGVja0xhYmVsID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBjb21wbGV0ZURpdi5lbGVtZW50LFxyXG4gICAgICAnbGFiZWwnLFxyXG4gICAgICAnY29tcGxldGUtbGFiZWwnLFxyXG4gICAgICAnQ29tcGxldGU6ICdcclxuICAgICk7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY29tcGxldGVEaXYuZWxlbWVudCxcclxuICAgICAgJ2lucHV0JyxcclxuICAgICAgJ2NvbXBsZXRlLWNoZWNrJyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ2NoZWNrYm94J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY2FyZC5lbGVtZW50LFxyXG4gICAgICAnYnV0dG9uJyxcclxuICAgICAgJ2RlbGV0ZS1idXR0b24nLFxyXG4gICAgICAnWCdcclxuICAgICk7XHJcbiAgICBwcmlvcml0eUNoZWNrKGNhcmRQcmlvcml0eS5lbGVtZW50KTtcclxuICAgIGNvbXBsZXRlVXBkYXRlcihjaGVja2JveCwgY2FyZCk7XHJcbiAgICBkZWxldGVMaXN0ZW5lcihidXR0b24sIFBhZ2VSZW5kZXJlci5lbGVtZW50c0FyclszXSwgY2FyZCwgaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5Q2hlY2sgPSAocHJpb3JpdHlFbGVtZW50KSA9PiB7XHJcbiAgICBpZiAocHJpb3JpdHlFbGVtZW50LnRleHRDb250ZW50ID09PSAnTG93Jykge1xyXG4gICAgICBwcmlvcml0eUVsZW1lbnQuc3R5bGUuY29sb3IgPSAnI0ZGRkFGMCc7XHJcbiAgICAgIHByaW9yaXR5RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzE3NzI0NSc7XHJcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5RWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0hpZ2gnKSB7XHJcbiAgICAgIHByaW9yaXR5RWxlbWVudC5zdHlsZS5jb2xvciA9ICcjRkZGQUYwJztcclxuICAgICAgcHJpb3JpdHlFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjQjIyMjIyJztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjb21wbGV0ZVVwZGF0ZXIgPSAoY2hlY2tFbGVtZW50LCBjYXJkRGl2KSA9PiB7XHJcbiAgICBjaGVja0VsZW1lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIGlmIChjaGVja0VsZW1lbnQuZWxlbWVudC5jaGVja2VkKSB7XHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjN0NCOUU4JztcclxuICAgICAgfSBlbHNlIGNhcmREaXYuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2VmZWZlZic7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVMaXN0ZW5lciA9IChkZWxldGVCdXR0b24sIHBhcmVudEVsZW1lbnQsIGNoaWxkRWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgIGRlbGV0ZUJ1dHRvbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBwYXJlbnRFbGVtZW50LmVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGRFbGVtZW50LmVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgdGl0bGUke2luZGV4fWApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGRlc2NyaXB0aW9uJHtpbmRleH1gKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBwcmlvcml0eSR7aW5kZXh9YCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgZHVlRGF0ZSR7aW5kZXh9YCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgbm90ZXMke2luZGV4fWApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luZGV4Q291bnRlcicsIGluZGV4Q291bnRlciAtIDEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IHN0b3JhZ2VTdGFydCwgcG9wdWxhdGVTdG9yYWdlLCBzdG9yYWdlQXJyLCBpbmRleENvdW50aW5nIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2VNYW5hZ2VyO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=