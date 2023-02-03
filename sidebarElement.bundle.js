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
      _storageManager__WEBPACK_IMPORTED_MODULE_3__["default"].storageSetter(
        i + 1,
        title,
        description,
        dueDate,
        priority,
        notes
      );
      priorityCheck(priority);
      completeChecked(checkbox, cardDiv);
      deleteListener(button, parentCard, cardDiv, cardArr, i, priority.element);
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
      if (priority.textContent === 'Low') {
        _footerCreator__WEBPACK_IMPORTED_MODULE_2__["default"].lowCountGetter('subtract');
      } else if (priority.textContent === 'High') {
        _footerCreator__WEBPACK_IMPORTED_MODULE_2__["default"].highCountGetter('subtract');
      }
      parentElement.removeChild(childElement.element);
      arrayList.splice(index);
      _storageManager__WEBPACK_IMPORTED_MODULE_3__["default"].deleteStorageItem(index + 1);
      _storageManager__WEBPACK_IMPORTED_MODULE_3__["default"].countSubract();
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

  return { cardRenderer, completeChecked, priorityCheck, deleteListener };
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
      _storageManager__WEBPACK_IMPORTED_MODULE_3__["default"].countAdd();
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
/* harmony import */ var _storageManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageManager */ "./src/storageManager.js");




const PageRenderer = (function () {
  const parentContainer = document.body;
  const elementsArr = [];

  const pageRender = () => {
    parentCreator();
    _footerCreator__WEBPACK_IMPORTED_MODULE_1__["default"].footerRender(elementsArr[4].element);
    _storageManager__WEBPACK_IMPORTED_MODULE_2__["default"].storageRender();
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
/* harmony import */ var _listCardCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listCardCreator */ "./src/listCardCreator.js");
/* harmony import */ var _listModalCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listModalCreator */ "./src/listModalCreator.js");
/* harmony import */ var _footerCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footerCreator */ "./src/footerCreator.js");







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
    const cardContainer = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      _pageElements__WEBPACK_IMPORTED_MODULE_1__["default"].elementsArr[3].element,
      'div',
      'card'
    );
    const titleContainer = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      cardContainer.element,
      'p',
      'card-title',
      localStorage.getItem(`title${index}`)
    );
    const descriptionContainer = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      cardContainer.element,
      'p',
      'card-description',
      localStorage.getItem(`description${index}`)
    );
    const dueDateContainer = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      cardContainer.element,
      'p',
      'card-dueDate',
      localStorage.getItem(`dueDate${index}`)
    );
    const priorityContainer = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      cardContainer.element,
      'p',
      'card-priority',
      localStorage.getItem(`priority${index}`)
    );
    const notesContainer = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      cardContainer.element,
      'p',
      'card-notes',
      localStorage.getItem(`notes${index}`)
    );
    const completeDiv = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      cardContainer.element,
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
      cardContainer.element,
      'button',
      'delete-button',
      'X'
    );
    _listCardCreator__WEBPACK_IMPORTED_MODULE_2__["default"].completeChecked(checkbox, cardContainer);
    _listCardCreator__WEBPACK_IMPORTED_MODULE_2__["default"].priorityCheck(priorityContainer);

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
      _footerCreator__WEBPACK_IMPORTED_MODULE_4__["default"].lowCountGetter('add');
    } else if (priority.element.textContent === 'High') {
      _footerCreator__WEBPACK_IMPORTED_MODULE_4__["default"].highCountGetter('add');
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageManager);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/sidebarElement.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxRUFBNEI7QUFDbEMsTUFBTTtBQUNOLE1BQU0sc0VBQTZCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE1BQU07QUFDMUMsMENBQTBDLE1BQU07QUFDaEQsc0NBQXNDLE1BQU07QUFDNUMsdUNBQXVDLE1BQU07QUFDN0Msb0NBQW9DLE1BQU07QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lbGVtZW50Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9vdGVyQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGlzdENhcmRDcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saXN0TW9kYWxDcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NpZGViYXJFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlTWFuYWdlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmNsYXNzIEVsZW1lbnRDcmVhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHBhcmVudEVsZW1lbnQsXHJcbiAgICBlbGVtZW50LFxyXG4gICAgY2xhc3NuYW1lLFxyXG4gICAgY29udGVudCxcclxuICAgIGltZyxcclxuICAgIGlkLFxyXG4gICAgdHlwZSxcclxuICAgIGxpc3RWYWx1ZVxyXG4gICkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICAgIHRoaXMuY2xhc3NuYW1lID0gdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzbmFtZTtcclxuICAgIHRoaXMuY29udGVudCA9IHRoaXMuc2V0Q29udGV4dChjb250ZW50KTtcclxuICAgIHRoaXMuaW1nID0gdGhpcy5zZXRJbWFnZShpbWcpO1xyXG4gICAgdGhpcy5pZCA9IHRoaXMubGFiZWxQbGFjZW1lbnQoaWQpO1xyXG4gICAgdGhpcy50eXBlID0gdGhpcy50eXBlUGxhY2VtZW50KHR5cGUpO1xyXG4gICAgdGhpcy5saXN0VmFsdWUgPSB0aGlzLnZhbHVlUGxhY2VtZW50KGxpc3RWYWx1ZSk7XHJcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRQbGFjZW1lbnQocGFyZW50RWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBzZXRDb250ZXh0KGNvbnRlbnQpIHtcclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0SW1hZ2UoaW1nKSB7XHJcbiAgICBpZiAoaW1nKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zcmMgPSBpbWc7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcbiAgZWxlbWVudFBsYWNlbWVudChwYXJlbnRFbGVtZW50KSB7XHJcbiAgICBpZiAocGFyZW50RWxlbWVudCkge1xyXG4gICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBsYWJlbFBsYWNlbWVudChpZCkge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcclxuICAgIH1cclxuICB9XHJcbiAgdHlwZVBsYWNlbWVudChpbnB1dFR5cGUpIHtcclxuICAgIGlmIChpbnB1dFR5cGUpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsIGlucHV0VHlwZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHZhbHVlUGxhY2VtZW50KGxpc3RWYWx1ZSkge1xyXG4gICAgaWYgKGxpc3RWYWx1ZSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGxpc3RWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50Q3JlYXRvcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi9lbGVtZW50Q3JlYXRvcic7XHJcbmltcG9ydCBQYWdlUmVuZGVyZXIgZnJvbSAnLi9wYWdlRWxlbWVudHMnO1xyXG5cclxuY29uc3QgRm9vdGVyQ3JlYXRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGxvd1ByaW9yaXR5Q291bnQgPSAwO1xyXG4gIGxldCBoaWdoUHJpb3JpdHlDb3VudCA9IDA7XHJcblxyXG4gIGNvbnN0IGZvb3RlclJlbmRlciA9IChwYXJlbnRFbGVtZW50KSA9PiB7XHJcbiAgICBmb290ZXJFbGVtZW50Q3JlYXRvcihwYXJlbnRFbGVtZW50KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmb290ZXJFbGVtZW50Q3JlYXRvciA9IChwYXJlbnRFbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBsb3dQcmlvcml0eURpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFyZW50RWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdsb3dDb3VudGVyLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBsb3dQcmlvcml0eVRpdGxlID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBsb3dQcmlvcml0eURpdi5lbGVtZW50LFxyXG4gICAgICAncCcsXHJcbiAgICAgICdsb3ctdGV4dCcsXHJcbiAgICAgIGBMb3cgUHJpb3JpdHk6ICR7bG93UHJpb3JpdHlDb3VudH1gXHJcbiAgICApO1xyXG4gICAgY29uc3QgaGlnaFByaW9yaXR5RGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYXJlbnRFbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2hpZ2hDb3VudC1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgaGlnaFByaW9yaXR5VGl0bGUgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGhpZ2hQcmlvcml0eURpdi5lbGVtZW50LFxyXG4gICAgICAncCcsXHJcbiAgICAgICdoaWdoLXRleHQnLFxyXG4gICAgICBgSGlnaCBQcmlvcml0eTogJHtoaWdoUHJpb3JpdHlDb3VudH1gXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvd0NvdW50R2V0dGVyID0gKGNob2ljZSkgPT4ge1xyXG4gICAgY29uc3QgbG93Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93Q291bnRlci1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGhpZ2hDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoQ291bnQtY29udGFpbmVyJyk7XHJcbiAgICBpZiAoY2hvaWNlID09PSAnYWRkJykge1xyXG4gICAgICBsb3dQcmlvcml0eUNvdW50ICs9IDE7XHJcbiAgICAgIFBhZ2VSZW5kZXJlci5lbGVtZW50c0Fycls0XS5lbGVtZW50LnJlbW92ZUNoaWxkKGxvd0NoaWxkLCBoaWdoQ2hpbGQpO1xyXG4gICAgICBGb290ZXJDcmVhdG9yLmZvb3RlclJlbmRlcihQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbNF0uZWxlbWVudCk7XHJcbiAgICB9IGVsc2UgaWYgKGNob2ljZSA9PT0gJ3N1YnRyYWN0Jykge1xyXG4gICAgICBsb3dQcmlvcml0eUNvdW50IC09IDE7XHJcbiAgICAgIFBhZ2VSZW5kZXJlci5lbGVtZW50c0Fycls0XS5lbGVtZW50LnJlbW92ZUNoaWxkKGxvd0NoaWxkLCBoaWdoQ2hpbGQpO1xyXG4gICAgICBGb290ZXJDcmVhdG9yLmZvb3RlclJlbmRlcihQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbNF0uZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoaWdoQ291bnRHZXR0ZXIgPSAoY2hvaWNlKSA9PiB7XHJcbiAgICBjb25zdCBsb3dDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3dDb3VudGVyLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgaGlnaENoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2hDb3VudC1jb250YWluZXInKTtcclxuICAgIGlmIChjaG9pY2UgPT09ICdhZGQnKSB7XHJcbiAgICAgIGhpZ2hQcmlvcml0eUNvdW50ICs9IDE7XHJcbiAgICAgIFBhZ2VSZW5kZXJlci5lbGVtZW50c0Fycls0XS5lbGVtZW50LnJlbW92ZUNoaWxkKGxvd0NoaWxkLCBoaWdoQ2hpbGQpO1xyXG4gICAgICBGb290ZXJDcmVhdG9yLmZvb3RlclJlbmRlcihQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbNF0uZWxlbWVudCk7XHJcbiAgICB9IGVsc2UgaWYgKGNob2ljZSA9PT0gJ3N1YnRyYWN0Jykge1xyXG4gICAgICBoaWdoUHJpb3JpdHlDb3VudCAtPSAxO1xyXG4gICAgICBQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbNF0uZWxlbWVudC5yZW1vdmVDaGlsZChsb3dDaGlsZCwgaGlnaENoaWxkKTtcclxuICAgICAgRm9vdGVyQ3JlYXRvci5mb290ZXJSZW5kZXIoUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGZvb3RlclJlbmRlciwgbG93Q291bnRHZXR0ZXIsIGhpZ2hDb3VudEdldHRlciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJDcmVhdG9yO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBNb2RhbENyZWF0b3IgZnJvbSAnLi9saXN0TW9kYWxDcmVhdG9yJztcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4vZWxlbWVudENyZWF0b3InO1xyXG5pbXBvcnQgRm9vdGVyQ3JlYXRvciBmcm9tICcuL2Zvb3RlckNyZWF0b3InO1xyXG5pbXBvcnQgU3RvcmFnZU1hbmFnZXIgZnJvbSAnLi9zdG9yYWdlTWFuYWdlcic7XHJcbmNvbnN0IExpc3RDYXJkQ3JlYXRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY2FyZFJlbmRlcmVyID0gKCkgPT4ge1xyXG4gICAgY2FyZENyZWF0b3IoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYXJkQ3JlYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhcmVudENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGNhcmRBcnIgPSBNb2RhbENyZWF0b3IubGlzdEFycjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjYXJkRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKHBhcmVudENhcmQsICdkaXYnLCAnY2FyZCcpO1xyXG4gICAgICBjb25zdCB0aXRsZSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjYXJkRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ3AnLFxyXG4gICAgICAgICdjYXJkLXRpdGxlJyxcclxuICAgICAgICBgVGl0bGU6ICR7Y2FyZEFycltpXS50aXRsZX1gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAncCcsXHJcbiAgICAgICAgJ2NhcmQtZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIGNhcmRBcnJbaV0uZGVzY3JpcHRpb25cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjYXJkRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ3AnLFxyXG4gICAgICAgICdjYXJkLWR1ZURhdGUnLFxyXG4gICAgICAgIGNhcmRBcnJbaV0uZHVlRGF0ZVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBwcmlvcml0eSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjYXJkRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ3AnLFxyXG4gICAgICAgICdjYXJkLXByaW9yaXR5JyxcclxuICAgICAgICBjYXJkQXJyW2ldLnByaW9yaXR5XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG5vdGVzID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAncCcsXHJcbiAgICAgICAgJ2NhcmQtbm90ZXMnLFxyXG4gICAgICAgIGNhcmRBcnJbaV0ubm90ZXNcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY29tcGxldGVEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LFxyXG4gICAgICAgICdkaXYnLFxyXG4gICAgICAgICdjb21wbGV0ZS1jb250YWluZXInXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGNoZWNrTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY29tcGxldGVEaXYuZWxlbWVudCxcclxuICAgICAgICAnbGFiZWwnLFxyXG4gICAgICAgICdjb21wbGV0ZS1sYWJlbCcsXHJcbiAgICAgICAgJ0NvbXBsZXRlOiAnXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNvbXBsZXRlRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ2lucHV0JyxcclxuICAgICAgICAnY29tcGxldGUtY2hlY2snLFxyXG4gICAgICAgICcnLFxyXG4gICAgICAgICcnLFxyXG4gICAgICAgICcnLFxyXG4gICAgICAgICdjaGVja2JveCdcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgYnV0dG9uID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAnYnV0dG9uJyxcclxuICAgICAgICAnZGVsZXRlLWJ1dHRvbicsXHJcbiAgICAgICAgJ1gnXHJcbiAgICAgICk7XHJcbiAgICAgIFN0b3JhZ2VNYW5hZ2VyLnN0b3JhZ2VTZXR0ZXIoXHJcbiAgICAgICAgaSArIDEsXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgZHVlRGF0ZSxcclxuICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICBub3Rlc1xyXG4gICAgICApO1xyXG4gICAgICBwcmlvcml0eUNoZWNrKHByaW9yaXR5KTtcclxuICAgICAgY29tcGxldGVDaGVja2VkKGNoZWNrYm94LCBjYXJkRGl2KTtcclxuICAgICAgZGVsZXRlTGlzdGVuZXIoYnV0dG9uLCBwYXJlbnRDYXJkLCBjYXJkRGl2LCBjYXJkQXJyLCBpLCBwcmlvcml0eS5lbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjb21wbGV0ZUNoZWNrZWQgPSAoY2hlY2tFbGVtZW50LCBjYXJkRGl2KSA9PiB7XHJcbiAgICBjaGVja0VsZW1lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIGlmIChjaGVja0VsZW1lbnQuZWxlbWVudC5jaGVja2VkKSB7XHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjN0NCOUU4JztcclxuICAgICAgfSBlbHNlIGNhcmREaXYuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2VmZWZlZic7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVMaXN0ZW5lciA9IChcclxuICAgIGRlbGV0ZUJ1dHRvbixcclxuICAgIHBhcmVudEVsZW1lbnQsXHJcbiAgICBjaGlsZEVsZW1lbnQsXHJcbiAgICBhcnJheUxpc3QsXHJcbiAgICBpbmRleCxcclxuICAgIHByaW9yaXR5XHJcbiAgKSA9PiB7XHJcbiAgICBkZWxldGVCdXR0b24uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKHByaW9yaXR5LnRleHRDb250ZW50ID09PSAnTG93Jykge1xyXG4gICAgICAgIEZvb3RlckNyZWF0b3IubG93Q291bnRHZXR0ZXIoJ3N1YnRyYWN0Jyk7XHJcbiAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkudGV4dENvbnRlbnQgPT09ICdIaWdoJykge1xyXG4gICAgICAgIEZvb3RlckNyZWF0b3IuaGlnaENvdW50R2V0dGVyKCdzdWJ0cmFjdCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGRFbGVtZW50LmVsZW1lbnQpO1xyXG4gICAgICBhcnJheUxpc3Quc3BsaWNlKGluZGV4KTtcclxuICAgICAgU3RvcmFnZU1hbmFnZXIuZGVsZXRlU3RvcmFnZUl0ZW0oaW5kZXggKyAxKTtcclxuICAgICAgU3RvcmFnZU1hbmFnZXIuY291bnRTdWJyYWN0KCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmlvcml0eUNoZWNrID0gKHByaW9yaXR5KSA9PiB7XHJcbiAgICBpZiAocHJpb3JpdHkuZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0xvdycpIHtcclxuICAgICAgcHJpb3JpdHkuZWxlbWVudC5zdHlsZS5jb2xvciA9ICcjRkZGQUYwJztcclxuICAgICAgcHJpb3JpdHkuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzE3NzI0NSc7XHJcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5LmVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdIaWdoJykge1xyXG4gICAgICBwcmlvcml0eS5lbGVtZW50LnN0eWxlLmNvbG9yID0gJyNGRkZBRjAnO1xyXG4gICAgICBwcmlvcml0eS5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjQjIyMjIyJztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4geyBjYXJkUmVuZGVyZXIsIGNvbXBsZXRlQ2hlY2tlZCwgcHJpb3JpdHlDaGVjaywgZGVsZXRlTGlzdGVuZXIgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgTGlzdENhcmRDcmVhdG9yO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuL2VsZW1lbnRDcmVhdG9yJztcclxuaW1wb3J0IExpc3RDYXJkQ3JlYXRvciBmcm9tICcuL2xpc3RDYXJkQ3JlYXRvcic7XHJcbmltcG9ydCBGb290ZXJDcmVhdG9yIGZyb20gJy4vZm9vdGVyQ3JlYXRvcic7XHJcbmltcG9ydCBTdG9yYWdlTWFuYWdlciBmcm9tICcuL3N0b3JhZ2VNYW5hZ2VyJztcclxuXHJcbmNvbnN0IE1vZGFsQ3JlYXRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XHJcbiAgY29uc3QgbGlzdEFyciA9IFtdO1xyXG4gIGNsYXNzIExpc3RFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZS52YWx1ZTtcclxuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnZhbHVlO1xyXG4gICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlLnZhbHVlO1xyXG4gICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHkudmFsdWU7XHJcbiAgICAgIHRoaXMubm90ZXMgPSBub3Rlcy52YWx1ZTtcclxuICAgICAgdGhpcy5jaGVja2xpc3QgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGxpc3RDcmVhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGlzdE1vZGFsID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYXJlbnRFbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ21vZGFsLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBsaXN0RGl2aXNpb24gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGxpc3RNb2RhbC5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2Zvcm0tY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgbGlzdERpdmlzaW9uLmVsZW1lbnQsXHJcbiAgICAgICdoMScsXHJcbiAgICAgICdmb3JtLXRpdGxlJyxcclxuICAgICAgJ05ldyBJdGVtJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGZvcm1CbG9jayA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgbGlzdERpdmlzaW9uLmVsZW1lbnQsXHJcbiAgICAgICdmb3JtJyxcclxuICAgICAgJ2Zvcm0tYmxvY2snXHJcbiAgICApO1xyXG4gICAgY29uc3QgZmllbGRzZXRGb3JtID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmb3JtQmxvY2suZWxlbWVudCxcclxuICAgICAgJ2ZpZWxkc2V0JyxcclxuICAgICAgJ2Zvcm0tZmllbGRzZXQnXHJcbiAgICApO1xyXG4gICAgY29uc3QgZmllbGRzZXRMZWdlbmQgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnbGVnZW5kJyxcclxuICAgICAgJ2Zvcm0tZmllbGRzZXQtbGVnZW5kJyxcclxuICAgICAgJ1RvLURvIEl0ZW0nXHJcbiAgICApO1xyXG4gICAgY29uc3QgdGl0bGVEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3RvZG8tdGl0bGUnXHJcbiAgICApO1xyXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgdGl0bGVEaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ3RpdGxlLWxhYmVsJyxcclxuICAgICAgJ1RpdGxlOicsXHJcbiAgICAgICcnLFxyXG4gICAgICAndGl0bGUnXHJcbiAgICApO1xyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgdGl0bGVEaXYuZWxlbWVudCxcclxuICAgICAgJ2lucHV0JyxcclxuICAgICAgJ3RpdGxlLWlucHV0JyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAndGl0bGUnLFxyXG4gICAgICAndGV4dCdcclxuICAgICk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZmllbGRzZXRGb3JtLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAndG9kby1kZXNjcmlwdGlvbidcclxuICAgICk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBkZXNjcmlwdGlvbkRpdi5lbGVtZW50LFxyXG4gICAgICAnbGFiZWwnLFxyXG4gICAgICAnZGVzLWxhYmVsJyxcclxuICAgICAgJ0Rlc2NyaXB0aW9uOicsXHJcbiAgICAgICcnLFxyXG4gICAgICAnZGVzY3JpcHRpb24nXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZGVzY3JpcHRpb25EaXYuZWxlbWVudCxcclxuICAgICAgJ2lucHV0JyxcclxuICAgICAgJ2Rlcy1pbnB1dCcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgJ3RleHQnXHJcbiAgICApO1xyXG4gICAgY29uc3QgZHVlRGF0ZURpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZmllbGRzZXRGb3JtLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAndG9kby1kdWVEYXRlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZHVlRGF0ZURpdi5lbGVtZW50LFxyXG4gICAgICAnbGFiZWwnLFxyXG4gICAgICAnZHVlRGF0ZS1sYWJlbCcsXHJcbiAgICAgICdEdWUgRGF0ZTogJyxcclxuICAgICAgJycsXHJcbiAgICAgICdkdWVEYXRlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZHVlRGF0ZURpdi5lbGVtZW50LFxyXG4gICAgICAnaW5wdXQnLFxyXG4gICAgICAnZHVlRGF0ZS1pbnB1dCcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ2R1ZURhdGUnLFxyXG4gICAgICAnZGF0ZSdcclxuICAgICk7XHJcbiAgICBjb25zdCBwcmlvcml0eURpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZmllbGRzZXRGb3JtLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAndG9kby1wcmlvcml0eSdcclxuICAgICk7XHJcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwcmlvcml0eURpdi5lbGVtZW50LFxyXG4gICAgICAnbGFiZWwnLFxyXG4gICAgICAndG9kby1wcmlvcml0eScsXHJcbiAgICAgICdQcmlvcml0eTogJyxcclxuICAgICAgJycsXHJcbiAgICAgICdwcmlvcml0eSdcclxuICAgICk7XHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcHJpb3JpdHlEaXYuZWxlbWVudCxcclxuICAgICAgJ3NlbGVjdCcsXHJcbiAgICAgICdwcmlvcml0eS1zZWxlY3QnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdwcmlvcml0eSdcclxuICAgICk7XHJcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbjEgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHByaW9yaXR5U2VsZWN0LmVsZW1lbnQsXHJcbiAgICAgICdvcHRpb24nLFxyXG4gICAgICAnc2VsZWN0aW9uJyxcclxuICAgICAgJy0tUGxlYXNlIENob29zZSBQcmlvcml0eScsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdcIlwiJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uMiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcHJpb3JpdHlTZWxlY3QuZWxlbWVudCxcclxuICAgICAgJ29wdGlvbicsXHJcbiAgICAgICdzZWxlY3Rpb24nLFxyXG4gICAgICAnTG93JyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ0xvdydcclxuICAgICk7XHJcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbjMgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHByaW9yaXR5U2VsZWN0LmVsZW1lbnQsXHJcbiAgICAgICdvcHRpb24nLFxyXG4gICAgICAnc2VsZWN0aW9uJyxcclxuICAgICAgJ0hpZ2gnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnSGlnaCdcclxuICAgICk7XHJcbiAgICBjb25zdCBub3Rlc0RpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZmllbGRzZXRGb3JtLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnbm90ZXMtdGV4dGFyZWEnXHJcbiAgICApO1xyXG4gICAgY29uc3Qgbm90ZXNMYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgbm90ZXNEaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ25vdGVzLWxhYmVsJyxcclxuICAgICAgJ05vdGVzOiAnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ25vdGVzJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IG5vdGVzVGV4dEFyZWEgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIG5vdGVzRGl2LmVsZW1lbnQsXHJcbiAgICAgICd0ZXh0YXJlYScsXHJcbiAgICAgICdub3Rlcy10ZXh0J1xyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBidXR0b25EaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2J1dHRvbi1kaXYnXHJcbiAgICApO1xyXG4gICAgY29uc3QgZm9ybUJ1dHRvbiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgYnV0dG9uRGl2LmVsZW1lbnQsXHJcbiAgICAgICdidXR0b24nLFxyXG4gICAgICAnZm9ybS1idXR0b24nLFxyXG4gICAgICAnQ3JlYXRlIEl0ZW0nXHJcbiAgICApO1xyXG4gICAgZm9ybVN1Ym1pdChcclxuICAgICAgZm9ybUJ1dHRvbi5lbGVtZW50LFxyXG4gICAgICBsaXN0TW9kYWwuZWxlbWVudCxcclxuICAgICAgbGlzdEFycixcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlLWlucHV0JyksXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXMtaW5wdXQnKSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZURhdGUtaW5wdXQnKSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LXNlbGVjdCcpLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtdGV4dCcpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxpc3RPamVjdENyZWF0b3IgPSAoXHJcbiAgICBzdG9yYWdlLFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGR1ZURhdGUsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIG5vdGVzXHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0T2JqZWN0ID0gbmV3IExpc3RFbGVtZW50KFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGR1ZURhdGUsXHJcbiAgICAgIHByaW9yaXR5LFxyXG4gICAgICBub3Rlc1xyXG4gICAgKTtcclxuXHJcbiAgICBzdG9yYWdlLnB1c2gobGlzdE9iamVjdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0Q291bnRlck51bWJlciA9IChwcmlvcml0eSkgPT4ge1xyXG4gICAgaWYgKHByaW9yaXR5LnZhbHVlID09PSAnTG93Jykge1xyXG4gICAgICBGb290ZXJDcmVhdG9yLmxvd0NvdW50R2V0dGVyKCdhZGQnKTtcclxuICAgIH0gZWxzZSBpZiAocHJpb3JpdHkudmFsdWUgPT09ICdIaWdoJykge1xyXG4gICAgICBGb290ZXJDcmVhdG9yLmhpZ2hDb3VudEdldHRlcignYWRkJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybVN1Ym1pdCA9IChcclxuICAgIGJ1dHRvbixcclxuICAgIGNoaWxkRWxlbWVudCxcclxuICAgIHN0b3JhZ2UsXHJcbiAgICB0aXRsZUlucHV0LFxyXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcclxuICAgIGR1ZURhdGVJbnB1dCxcclxuICAgIHByaW9yaXR5SW5wdXQsXHJcbiAgICBub3Rlc0lucHV0XHJcbiAgKSA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGxpc3RPamVjdENyZWF0b3IoXHJcbiAgICAgICAgc3RvcmFnZSxcclxuICAgICAgICB0aXRsZUlucHV0LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQsXHJcbiAgICAgICAgZHVlRGF0ZUlucHV0LFxyXG4gICAgICAgIHByaW9yaXR5SW5wdXQsXHJcbiAgICAgICAgbm90ZXNJbnB1dFxyXG4gICAgICApO1xyXG4gICAgICBwYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkRWxlbWVudCk7XHJcbiAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1jb250YWluZXInKS50ZXh0Q29udGVudCA9ICcnKSxcclxuICAgICAgICBMaXN0Q2FyZENyZWF0b3IuY2FyZFJlbmRlcmVyKCk7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHNldENvdW50ZXJOdW1iZXIocHJpb3JpdHlJbnB1dCk7XHJcbiAgICAgIFN0b3JhZ2VNYW5hZ2VyLmNvdW50QWRkKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBsaXN0Q3JlYXRvciwgbGlzdEFyciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBNb2RhbENyZWF0b3I7XHJcbiIsImltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuL2VsZW1lbnRDcmVhdG9yJztcclxuaW1wb3J0IEZvb3RlckNyZWF0b3IgZnJvbSAnLi9mb290ZXJDcmVhdG9yJztcclxuaW1wb3J0IFN0b3JhZ2VNYW5hZ2VyIGZyb20gJy4vc3RvcmFnZU1hbmFnZXInO1xyXG5cclxuY29uc3QgUGFnZVJlbmRlcmVyID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBwYXJlbnRDb250YWluZXIgPSBkb2N1bWVudC5ib2R5O1xyXG4gIGNvbnN0IGVsZW1lbnRzQXJyID0gW107XHJcblxyXG4gIGNvbnN0IHBhZ2VSZW5kZXIgPSAoKSA9PiB7XHJcbiAgICBwYXJlbnRDcmVhdG9yKCk7XHJcbiAgICBGb290ZXJDcmVhdG9yLmZvb3RlclJlbmRlcihlbGVtZW50c0Fycls0XS5lbGVtZW50KTtcclxuICAgIFN0b3JhZ2VNYW5hZ2VyLnN0b3JhZ2VSZW5kZXIoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwYXJlbnRDcmVhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFnZUNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFyZW50Q29udGFpbmVyLFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3BhZ2UtY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGhlYWRpbmdDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhZ2VDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdoZWFkaW5nLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnc2lkZWJhci1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFnZUNvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2xpc3QtY29udGFpbmVyJ1xyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhZ2VDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdmb290ZXItY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGVsZW1lbnRzQXJyLnB1c2goXHJcbiAgICAgIHBhZ2VDb250YWluZXIsXHJcbiAgICAgIGhlYWRpbmdDb250YWluZXIsXHJcbiAgICAgIHNpZGViYXJDb250YWluZXIsXHJcbiAgICAgIGxpc3RDb250YWluZXIsXHJcbiAgICAgIGZvb3RlckNvbnRhaW5lclxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYWdlQ29udGFpbmVyLFxyXG4gICAgICBoZWFkaW5nQ29udGFpbmVyLFxyXG4gICAgICBzaWRlYmFyQ29udGFpbmVyLFxyXG4gICAgICBsaXN0Q29udGFpbmVyLFxyXG4gICAgICBmb290ZXJDb250YWluZXIsXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IHBhZ2VSZW5kZXIsIGVsZW1lbnRzQXJyIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VSZW5kZXJlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi9lbGVtZW50Q3JlYXRvcic7XHJcbmltcG9ydCBQYWdlUmVuZGVyZXIgZnJvbSAnLi9wYWdlRWxlbWVudHMnO1xyXG5pbXBvcnQgTW9kYWxDcmVhdG9yIGZyb20gJy4vbGlzdE1vZGFsQ3JlYXRvcic7XHJcblxyXG5jb25zdCBTaWRlYmFyRWxlbWVudHMgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnI7XHJcbiAgbGV0IGJ1dHRvbkhvbGRlcjtcclxuICBjb25zdCBzaWRlYmFyRWxlbWVudENyZWF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBidXR0b25EaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhcmVudEVsZW1lbnRbMl0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdidXR0b25zLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBjcmVhdEJ1dHRvbiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFyZW50RWxlbWVudFsyXS5lbGVtZW50LFxyXG4gICAgICAnYnV0dG9uJyxcclxuICAgICAgJ2NyZWF0LWNhcmQtYnV0dG9uJyxcclxuICAgICAgJ05ldyBJdGVtJ1xyXG4gICAgKTtcclxuXHJcbiAgICBidXR0b25Ib2xkZXIgPSBjcmVhdEJ1dHRvbjtcclxuICB9O1xyXG5cclxuICBjb25zdCBidXR0b25DbGljayA9ICgpID0+IHtcclxuICAgIGJ1dHRvbkhvbGRlci5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBNb2RhbENyZWF0b3IubGlzdENyZWF0b3IoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZGJhclJlbmRlcmVyID0gKCkgPT4ge1xyXG4gICAgc2lkZWJhckVsZW1lbnRDcmVhdG9yKCk7XHJcbiAgICBidXR0b25DbGljaygpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgc2lkYmFyUmVuZGVyZXIgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckVsZW1lbnRzO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuL2VsZW1lbnRDcmVhdG9yJztcclxuaW1wb3J0IFBhZ2VSZW5kZXJlciBmcm9tICcuL3BhZ2VFbGVtZW50cyc7XHJcbmltcG9ydCBMaXN0Q2FyZENyZWF0b3IgZnJvbSAnLi9saXN0Q2FyZENyZWF0b3InO1xyXG5pbXBvcnQgTW9kYWxDcmVhdG9yIGZyb20gJy4vbGlzdE1vZGFsQ3JlYXRvcic7XHJcbmltcG9ydCBGb290ZXJDcmVhdG9yIGZyb20gJy4vZm9vdGVyQ3JlYXRvcic7XHJcblxyXG5jb25zdCBTdG9yYWdlTWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGNhcmRDb3VudCA9IDA7XHJcbiAgY29uc3Qgc3RvcmFnZVJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGl0bGUxJykpIHtcclxuICAgICAgY29uc29sZS5sb2coY2FyZENvdW50KTtcclxuICAgICAgY2FyZENvdW50ID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJkQ291bnRlcicpKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gY2FyZENvdW50OyBpKyspIHtcclxuICAgICAgICBwb3B1bGF0ZUZyb21TdG9yYWdlKGkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcG9wdWxhdGVGcm9tU3RvcmFnZSA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgY2FyZENvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzNdLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnY2FyZCdcclxuICAgICk7XHJcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY2FyZENvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAncCcsXHJcbiAgICAgICdjYXJkLXRpdGxlJyxcclxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRpdGxlJHtpbmRleH1gKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBjYXJkQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdwJyxcclxuICAgICAgJ2NhcmQtZGVzY3JpcHRpb24nLFxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgZGVzY3JpcHRpb24ke2luZGV4fWApXHJcbiAgICApO1xyXG4gICAgY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY2FyZENvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAncCcsXHJcbiAgICAgICdjYXJkLWR1ZURhdGUnLFxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgZHVlRGF0ZSR7aW5kZXh9YClcclxuICAgICk7XHJcbiAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY2FyZENvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAncCcsXHJcbiAgICAgICdjYXJkLXByaW9yaXR5JyxcclxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHByaW9yaXR5JHtpbmRleH1gKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IG5vdGVzQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBjYXJkQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdwJyxcclxuICAgICAgJ2NhcmQtbm90ZXMnLFxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgbm90ZXMke2luZGV4fWApXHJcbiAgICApO1xyXG4gICAgY29uc3QgY29tcGxldGVEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGNhcmRDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdjb21wbGV0ZS1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgY2hlY2tMYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY29tcGxldGVEaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ2NvbXBsZXRlLWxhYmVsJyxcclxuICAgICAgJ0NvbXBsZXRlOiAnXHJcbiAgICApO1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGNvbXBsZXRlRGl2LmVsZW1lbnQsXHJcbiAgICAgICdpbnB1dCcsXHJcbiAgICAgICdjb21wbGV0ZS1jaGVjaycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdjaGVja2JveCdcclxuICAgICk7XHJcbiAgICBjb25zdCBidXR0b24gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGNhcmRDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ2J1dHRvbicsXHJcbiAgICAgICdkZWxldGUtYnV0dG9uJyxcclxuICAgICAgJ1gnXHJcbiAgICApO1xyXG4gICAgTGlzdENhcmRDcmVhdG9yLmNvbXBsZXRlQ2hlY2tlZChjaGVja2JveCwgY2FyZENvbnRhaW5lcik7XHJcbiAgICBMaXN0Q2FyZENyZWF0b3IucHJpb3JpdHlDaGVjayhwcmlvcml0eUNvbnRhaW5lcik7XHJcblxyXG4gICAgcHJpb3JpdHlDb2xvcihwcmlvcml0eUNvbnRhaW5lcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3RvcmFnZVNldHRlciA9IChcclxuICAgIGluZGV4LFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGR1ZURhdGUsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIG5vdGVzXHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yYWdlVGl0bGUgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgYHRpdGxlJHtpbmRleH1gLFxyXG4gICAgICB0aXRsZS5lbGVtZW50LnRleHRDb250ZW50XHJcbiAgICApO1xyXG4gICAgY29uc3Qgc3RvcmFnZURlc2NyaXB0aW9uID0gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgIGBkZXNjcmlwdGlvbiR7aW5kZXh9YCxcclxuICAgICAgZGVzY3JpcHRpb24uZWxlbWVudC50ZXh0Q29udGVudFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHN0b3JhZ2VEYXRlID0gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgIGBkdWVEYXRlJHtpbmRleH1gLFxyXG4gICAgICBkdWVEYXRlLmVsZW1lbnQudGV4dENvbnRlbnRcclxuICAgICk7XHJcbiAgICBjb25zdCBzdG9yYWdlUHJpb3JpdHkgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgYHByaW9yaXR5JHtpbmRleH1gLFxyXG4gICAgICBwcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50XHJcbiAgICApO1xyXG4gICAgY29uc3Qgc3RvcmFnZU5vdGVzID0gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgIGBub3RlcyR7aW5kZXh9YCxcclxuICAgICAgbm90ZXMuZWxlbWVudC50ZXh0Q29udGVudFxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IGNvdW50QWRkID0gKCkgPT4ge1xyXG4gICAgY2FyZENvdW50ICs9IDE7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FyZENvdW50ZXInLCBjYXJkQ291bnQpO1xyXG4gIH07XHJcbiAgY29uc3QgY291bnRTdWJyYWN0ID0gKCkgPT4ge1xyXG4gICAgY2FyZENvdW50IC09IDE7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FyZENvdW50ZXInLCBjYXJkQ291bnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5Q29sb3IgPSAocHJpb3JpdHkpID0+IHtcclxuICAgIGlmIChwcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID09PSAnTG93Jykge1xyXG4gICAgICBGb290ZXJDcmVhdG9yLmxvd0NvdW50R2V0dGVyKCdhZGQnKTtcclxuICAgIH0gZWxzZSBpZiAocHJpb3JpdHkuZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0hpZ2gnKSB7XHJcbiAgICAgIEZvb3RlckNyZWF0b3IuaGlnaENvdW50R2V0dGVyKCdhZGQnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVTdG9yYWdlSXRlbSA9IChpbmRleCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYHRpdGxlJHtpbmRleH1gKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBkZXNjcmlwdGlvbiR7aW5kZXh9YCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgZHVlRGF0ZSR7aW5kZXh9YCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgcHJpb3JpdHkke2luZGV4fWApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYG5vdGVzJHtpbmRleH1gKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3RvcmFnZVNldHRlcixcclxuICAgIHN0b3JhZ2VSZW5kZXIsXHJcbiAgICBjb3VudEFkZCxcclxuICAgIGNvdW50U3VicmFjdCxcclxuICAgIGRlbGV0ZVN0b3JhZ2VJdGVtLFxyXG4gIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2VNYW5hZ2VyO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=