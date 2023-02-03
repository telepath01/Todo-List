"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["pageElements"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pageElements.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VsZW1lbnRDcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb290ZXJDcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saXN0Q2FyZENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xpc3RNb2RhbENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZU1hbmFnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5jbGFzcyBFbGVtZW50Q3JlYXRvciB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwYXJlbnRFbGVtZW50LFxyXG4gICAgZWxlbWVudCxcclxuICAgIGNsYXNzbmFtZSxcclxuICAgIGNvbnRlbnQsXHJcbiAgICBpbWcsXHJcbiAgICBpZCxcclxuICAgIHR5cGUsXHJcbiAgICBsaXN0VmFsdWVcclxuICApIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICB0aGlzLmNsYXNzbmFtZSA9IHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc25hbWU7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLnNldENvbnRleHQoY29udGVudCk7XHJcbiAgICB0aGlzLmltZyA9IHRoaXMuc2V0SW1hZ2UoaW1nKTtcclxuICAgIHRoaXMuaWQgPSB0aGlzLmxhYmVsUGxhY2VtZW50KGlkKTtcclxuICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZVBsYWNlbWVudCh0eXBlKTtcclxuICAgIHRoaXMubGlzdFZhbHVlID0gdGhpcy52YWx1ZVBsYWNlbWVudChsaXN0VmFsdWUpO1xyXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gdGhpcy5lbGVtZW50UGxhY2VtZW50KHBhcmVudEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGV4dChjb250ZW50KSB7XHJcbiAgICBpZiAoY29udGVudCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEltYWdlKGltZykge1xyXG4gICAgaWYgKGltZykge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc3JjID0gaW1nO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsZW1lbnRQbGFjZW1lbnQocGFyZW50RWxlbWVudCkge1xyXG4gICAgaWYgKHBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcy5lbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcbiAgbGFiZWxQbGFjZW1lbnQoaWQpIHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHR5cGVQbGFjZW1lbnQoaW5wdXRUeXBlKSB7XHJcbiAgICBpZiAoaW5wdXRUeXBlKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpbnB1dFR5cGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICB2YWx1ZVBsYWNlbWVudChsaXN0VmFsdWUpIHtcclxuICAgIGlmIChsaXN0VmFsdWUpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBsaXN0VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudENyZWF0b3I7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4vZWxlbWVudENyZWF0b3InO1xyXG5pbXBvcnQgUGFnZVJlbmRlcmVyIGZyb20gJy4vcGFnZUVsZW1lbnRzJztcclxuXHJcbmNvbnN0IEZvb3RlckNyZWF0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGxldCBsb3dQcmlvcml0eUNvdW50ID0gMDtcclxuICBsZXQgaGlnaFByaW9yaXR5Q291bnQgPSAwO1xyXG5cclxuICBjb25zdCBmb290ZXJSZW5kZXIgPSAocGFyZW50RWxlbWVudCkgPT4ge1xyXG4gICAgZm9vdGVyRWxlbWVudENyZWF0b3IocGFyZW50RWxlbWVudCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9vdGVyRWxlbWVudENyZWF0b3IgPSAocGFyZW50RWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgbG93UHJpb3JpdHlEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhcmVudEVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnbG93Q291bnRlci1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgbG93UHJpb3JpdHlUaXRsZSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgbG93UHJpb3JpdHlEaXYuZWxlbWVudCxcclxuICAgICAgJ3AnLFxyXG4gICAgICAnbG93LXRleHQnLFxyXG4gICAgICBgTG93IFByaW9yaXR5OiAke2xvd1ByaW9yaXR5Q291bnR9YFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGhpZ2hQcmlvcml0eURpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFyZW50RWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdoaWdoQ291bnQtY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGhpZ2hQcmlvcml0eVRpdGxlID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBoaWdoUHJpb3JpdHlEaXYuZWxlbWVudCxcclxuICAgICAgJ3AnLFxyXG4gICAgICAnaGlnaC10ZXh0JyxcclxuICAgICAgYEhpZ2ggUHJpb3JpdHk6ICR7aGlnaFByaW9yaXR5Q291bnR9YFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb3dDb3VudEdldHRlciA9IChjaG9pY2UpID0+IHtcclxuICAgIGNvbnN0IGxvd0NoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvd0NvdW50ZXItY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBoaWdoQ2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaENvdW50LWNvbnRhaW5lcicpO1xyXG4gICAgaWYgKGNob2ljZSA9PT0gJ2FkZCcpIHtcclxuICAgICAgbG93UHJpb3JpdHlDb3VudCArPSAxO1xyXG4gICAgICBQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbNF0uZWxlbWVudC5yZW1vdmVDaGlsZChsb3dDaGlsZCwgaGlnaENoaWxkKTtcclxuICAgICAgRm9vdGVyQ3JlYXRvci5mb290ZXJSZW5kZXIoUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIGlmIChjaG9pY2UgPT09ICdzdWJ0cmFjdCcpIHtcclxuICAgICAgbG93UHJpb3JpdHlDb3VudCAtPSAxO1xyXG4gICAgICBQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbNF0uZWxlbWVudC5yZW1vdmVDaGlsZChsb3dDaGlsZCwgaGlnaENoaWxkKTtcclxuICAgICAgRm9vdGVyQ3JlYXRvci5mb290ZXJSZW5kZXIoUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGlnaENvdW50R2V0dGVyID0gKGNob2ljZSkgPT4ge1xyXG4gICAgY29uc3QgbG93Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93Q291bnRlci1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGhpZ2hDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoQ291bnQtY29udGFpbmVyJyk7XHJcbiAgICBpZiAoY2hvaWNlID09PSAnYWRkJykge1xyXG4gICAgICBoaWdoUHJpb3JpdHlDb3VudCArPSAxO1xyXG4gICAgICBQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbNF0uZWxlbWVudC5yZW1vdmVDaGlsZChsb3dDaGlsZCwgaGlnaENoaWxkKTtcclxuICAgICAgRm9vdGVyQ3JlYXRvci5mb290ZXJSZW5kZXIoUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIGlmIChjaG9pY2UgPT09ICdzdWJ0cmFjdCcpIHtcclxuICAgICAgaGlnaFByaW9yaXR5Q291bnQgLT0gMTtcclxuICAgICAgUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQucmVtb3ZlQ2hpbGQobG93Q2hpbGQsIGhpZ2hDaGlsZCk7XHJcbiAgICAgIEZvb3RlckNyZWF0b3IuZm9vdGVyUmVuZGVyKFBhZ2VSZW5kZXJlci5lbGVtZW50c0Fycls0XS5lbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4geyBmb290ZXJSZW5kZXIsIGxvd0NvdW50R2V0dGVyLCBoaWdoQ291bnRHZXR0ZXIgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyQ3JlYXRvcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgTW9kYWxDcmVhdG9yIGZyb20gJy4vbGlzdE1vZGFsQ3JlYXRvcic7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuL2VsZW1lbnRDcmVhdG9yJztcclxuaW1wb3J0IEZvb3RlckNyZWF0b3IgZnJvbSAnLi9mb290ZXJDcmVhdG9yJztcclxuaW1wb3J0IFN0b3JhZ2VNYW5hZ2VyIGZyb20gJy4vc3RvcmFnZU1hbmFnZXInO1xyXG5jb25zdCBMaXN0Q2FyZENyZWF0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGNhcmRSZW5kZXJlciA9ICgpID0+IHtcclxuICAgIGNhcmRDcmVhdG9yKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FyZENyZWF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYXJlbnRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBjYXJkQXJyID0gTW9kYWxDcmVhdG9yLmxpc3RBcnI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY2FyZERpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihwYXJlbnRDYXJkLCAnZGl2JywgJ2NhcmQnKTtcclxuICAgICAgY29uc3QgdGl0bGUgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LFxyXG4gICAgICAgICdwJyxcclxuICAgICAgICAnY2FyZC10aXRsZScsXHJcbiAgICAgICAgYFRpdGxlOiAke2NhcmRBcnJbaV0udGl0bGV9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjYXJkRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ3AnLFxyXG4gICAgICAgICdjYXJkLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICBjYXJkQXJyW2ldLmRlc2NyaXB0aW9uXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LFxyXG4gICAgICAgICdwJyxcclxuICAgICAgICAnY2FyZC1kdWVEYXRlJyxcclxuICAgICAgICBjYXJkQXJyW2ldLmR1ZURhdGVcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcHJpb3JpdHkgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LFxyXG4gICAgICAgICdwJyxcclxuICAgICAgICAnY2FyZC1wcmlvcml0eScsXHJcbiAgICAgICAgY2FyZEFycltpXS5wcmlvcml0eVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBub3RlcyA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjYXJkRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ3AnLFxyXG4gICAgICAgICdjYXJkLW5vdGVzJyxcclxuICAgICAgICBjYXJkQXJyW2ldLm5vdGVzXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGNvbXBsZXRlRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAnZGl2JyxcclxuICAgICAgICAnY29tcGxldGUtY29udGFpbmVyJ1xyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBjaGVja0xhYmVsID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNvbXBsZXRlRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ2xhYmVsJyxcclxuICAgICAgICAnY29tcGxldGUtbGFiZWwnLFxyXG4gICAgICAgICdDb21wbGV0ZTogJ1xyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBjaGVja2JveCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjb21wbGV0ZURpdi5lbGVtZW50LFxyXG4gICAgICAgICdpbnB1dCcsXHJcbiAgICAgICAgJ2NvbXBsZXRlLWNoZWNrJyxcclxuICAgICAgICAnJyxcclxuICAgICAgICAnJyxcclxuICAgICAgICAnJyxcclxuICAgICAgICAnY2hlY2tib3gnXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjYXJkRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ2J1dHRvbicsXHJcbiAgICAgICAgJ2RlbGV0ZS1idXR0b24nLFxyXG4gICAgICAgICdYJ1xyXG4gICAgICApO1xyXG4gICAgICBTdG9yYWdlTWFuYWdlci5zdG9yYWdlU2V0dGVyKFxyXG4gICAgICAgIGkgKyAxLFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgbm90ZXNcclxuICAgICAgKTtcclxuICAgICAgcHJpb3JpdHlDaGVjayhwcmlvcml0eSk7XHJcbiAgICAgIGNvbXBsZXRlQ2hlY2tlZChjaGVja2JveCwgY2FyZERpdik7XHJcbiAgICAgIGRlbGV0ZUxpc3RlbmVyKGJ1dHRvbiwgcGFyZW50Q2FyZCwgY2FyZERpdiwgY2FyZEFyciwgaSwgcHJpb3JpdHkuZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29tcGxldGVDaGVja2VkID0gKGNoZWNrRWxlbWVudCwgY2FyZERpdikgPT4ge1xyXG4gICAgY2hlY2tFbGVtZW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICBpZiAoY2hlY2tFbGVtZW50LmVsZW1lbnQuY2hlY2tlZCkge1xyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzdDQjlFOCc7XHJcbiAgICAgIH0gZWxzZSBjYXJkRGl2LmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlZmVmZWYnO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlTGlzdGVuZXIgPSAoXHJcbiAgICBkZWxldGVCdXR0b24sXHJcbiAgICBwYXJlbnRFbGVtZW50LFxyXG4gICAgY2hpbGRFbGVtZW50LFxyXG4gICAgYXJyYXlMaXN0LFxyXG4gICAgaW5kZXgsXHJcbiAgICBwcmlvcml0eVxyXG4gICkgPT4ge1xyXG4gICAgZGVsZXRlQnV0dG9uLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmIChwcmlvcml0eS50ZXh0Q29udGVudCA9PT0gJ0xvdycpIHtcclxuICAgICAgICBGb290ZXJDcmVhdG9yLmxvd0NvdW50R2V0dGVyKCdzdWJ0cmFjdCcpO1xyXG4gICAgICB9IGVsc2UgaWYgKHByaW9yaXR5LnRleHRDb250ZW50ID09PSAnSGlnaCcpIHtcclxuICAgICAgICBGb290ZXJDcmVhdG9yLmhpZ2hDb3VudEdldHRlcignc3VidHJhY3QnKTtcclxuICAgICAgfVxyXG4gICAgICBwYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkRWxlbWVudC5lbGVtZW50KTtcclxuICAgICAgYXJyYXlMaXN0LnNwbGljZShpbmRleCk7XHJcbiAgICAgIFN0b3JhZ2VNYW5hZ2VyLmRlbGV0ZVN0b3JhZ2VJdGVtKGluZGV4ICsgMSk7XHJcbiAgICAgIFN0b3JhZ2VNYW5hZ2VyLmNvdW50U3VicmFjdCgpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlDaGVjayA9IChwcmlvcml0eSkgPT4ge1xyXG4gICAgaWYgKHByaW9yaXR5LmVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdMb3cnKSB7XHJcbiAgICAgIHByaW9yaXR5LmVsZW1lbnQuc3R5bGUuY29sb3IgPSAnI0ZGRkFGMCc7XHJcbiAgICAgIHByaW9yaXR5LmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMxNzcyNDUnO1xyXG4gICAgfSBlbHNlIGlmIChwcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID09PSAnSGlnaCcpIHtcclxuICAgICAgcHJpb3JpdHkuZWxlbWVudC5zdHlsZS5jb2xvciA9ICcjRkZGQUYwJztcclxuICAgICAgcHJpb3JpdHkuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0IyMjIyMic7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgY2FyZFJlbmRlcmVyLCBjb21wbGV0ZUNoZWNrZWQsIHByaW9yaXR5Q2hlY2ssIGRlbGV0ZUxpc3RlbmVyIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IExpc3RDYXJkQ3JlYXRvcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi9lbGVtZW50Q3JlYXRvcic7XHJcbmltcG9ydCBMaXN0Q2FyZENyZWF0b3IgZnJvbSAnLi9saXN0Q2FyZENyZWF0b3InO1xyXG5pbXBvcnQgRm9vdGVyQ3JlYXRvciBmcm9tICcuL2Zvb3RlckNyZWF0b3InO1xyXG5pbXBvcnQgU3RvcmFnZU1hbmFnZXIgZnJvbSAnLi9zdG9yYWdlTWFuYWdlcic7XHJcblxyXG5jb25zdCBNb2RhbENyZWF0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xyXG4gIGNvbnN0IGxpc3RBcnIgPSBbXTtcclxuICBjbGFzcyBMaXN0RWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGUudmFsdWU7XHJcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi52YWx1ZTtcclxuICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZS52YWx1ZTtcclxuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlO1xyXG4gICAgICB0aGlzLm5vdGVzID0gbm90ZXMudmFsdWU7XHJcbiAgICAgIHRoaXMuY2hlY2tsaXN0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaXN0Q3JlYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxpc3RNb2RhbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFyZW50RWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdtb2RhbC1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgbGlzdERpdmlzaW9uID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBsaXN0TW9kYWwuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdmb3JtLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGxpc3REaXZpc2lvbi5lbGVtZW50LFxyXG4gICAgICAnaDEnLFxyXG4gICAgICAnZm9ybS10aXRsZScsXHJcbiAgICAgICdOZXcgSXRlbSdcclxuICAgICk7XHJcbiAgICBjb25zdCBmb3JtQmxvY2sgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGxpc3REaXZpc2lvbi5lbGVtZW50LFxyXG4gICAgICAnZm9ybScsXHJcbiAgICAgICdmb3JtLWJsb2NrJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGZpZWxkc2V0Rm9ybSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZm9ybUJsb2NrLmVsZW1lbnQsXHJcbiAgICAgICdmaWVsZHNldCcsXHJcbiAgICAgICdmb3JtLWZpZWxkc2V0J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGZpZWxkc2V0TGVnZW5kID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2xlZ2VuZCcsXHJcbiAgICAgICdmb3JtLWZpZWxkc2V0LWxlZ2VuZCcsXHJcbiAgICAgICdUby1EbyBJdGVtJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHRpdGxlRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICd0b2RvLXRpdGxlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHRpdGxlRGl2LmVsZW1lbnQsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICd0aXRsZS1sYWJlbCcsXHJcbiAgICAgICdUaXRsZTonLFxyXG4gICAgICAnJyxcclxuICAgICAgJ3RpdGxlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHRpdGxlRGl2LmVsZW1lbnQsXHJcbiAgICAgICdpbnB1dCcsXHJcbiAgICAgICd0aXRsZS1pbnB1dCcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ3RpdGxlJyxcclxuICAgICAgJ3RleHQnXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3RvZG8tZGVzY3JpcHRpb24nXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZGVzY3JpcHRpb25EaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ2Rlcy1sYWJlbCcsXHJcbiAgICAgICdEZXNjcmlwdGlvbjonLFxyXG4gICAgICAnJyxcclxuICAgICAgJ2Rlc2NyaXB0aW9uJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGRlc2NyaXB0aW9uRGl2LmVsZW1lbnQsXHJcbiAgICAgICdpbnB1dCcsXHJcbiAgICAgICdkZXMtaW5wdXQnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICd0ZXh0J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3RvZG8tZHVlRGF0ZSdcclxuICAgICk7XHJcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGR1ZURhdGVEaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ2R1ZURhdGUtbGFiZWwnLFxyXG4gICAgICAnRHVlIERhdGU6ICcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnZHVlRGF0ZSdcclxuICAgICk7XHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGR1ZURhdGVEaXYuZWxlbWVudCxcclxuICAgICAgJ2lucHV0JyxcclxuICAgICAgJ2R1ZURhdGUtaW5wdXQnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdkdWVEYXRlJyxcclxuICAgICAgJ2RhdGUnXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3RvZG8tcHJpb3JpdHknXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcHJpb3JpdHlEaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ3RvZG8tcHJpb3JpdHknLFxyXG4gICAgICAnUHJpb3JpdHk6ICcsXHJcbiAgICAgICcnLFxyXG4gICAgICAncHJpb3JpdHknXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHByaW9yaXR5RGl2LmVsZW1lbnQsXHJcbiAgICAgICdzZWxlY3QnLFxyXG4gICAgICAncHJpb3JpdHktc2VsZWN0JyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAncHJpb3JpdHknXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb24xID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwcmlvcml0eVNlbGVjdC5lbGVtZW50LFxyXG4gICAgICAnb3B0aW9uJyxcclxuICAgICAgJ3NlbGVjdGlvbicsXHJcbiAgICAgICctLVBsZWFzZSBDaG9vc2UgUHJpb3JpdHknLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnXCJcIidcclxuICAgICk7XHJcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbjIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHByaW9yaXR5U2VsZWN0LmVsZW1lbnQsXHJcbiAgICAgICdvcHRpb24nLFxyXG4gICAgICAnc2VsZWN0aW9uJyxcclxuICAgICAgJ0xvdycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdMb3cnXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb24zID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwcmlvcml0eVNlbGVjdC5lbGVtZW50LFxyXG4gICAgICAnb3B0aW9uJyxcclxuICAgICAgJ3NlbGVjdGlvbicsXHJcbiAgICAgICdIaWdoJyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ0hpZ2gnXHJcbiAgICApO1xyXG4gICAgY29uc3Qgbm90ZXNEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ25vdGVzLXRleHRhcmVhJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IG5vdGVzTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIG5vdGVzRGl2LmVsZW1lbnQsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICdub3Rlcy1sYWJlbCcsXHJcbiAgICAgICdOb3RlczogJyxcclxuICAgICAgJycsXHJcbiAgICAgICdub3RlcydcclxuICAgICk7XHJcbiAgICBjb25zdCBub3Rlc1RleHRBcmVhID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBub3Rlc0Rpdi5lbGVtZW50LFxyXG4gICAgICAndGV4dGFyZWEnLFxyXG4gICAgICAnbm90ZXMtdGV4dCdcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdidXR0b24tZGl2J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGZvcm1CdXR0b24gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGJ1dHRvbkRpdi5lbGVtZW50LFxyXG4gICAgICAnYnV0dG9uJyxcclxuICAgICAgJ2Zvcm0tYnV0dG9uJyxcclxuICAgICAgJ0NyZWF0ZSBJdGVtJ1xyXG4gICAgKTtcclxuICAgIGZvcm1TdWJtaXQoXHJcbiAgICAgIGZvcm1CdXR0b24uZWxlbWVudCxcclxuICAgICAgbGlzdE1vZGFsLmVsZW1lbnQsXHJcbiAgICAgIGxpc3RBcnIsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1pbnB1dCcpLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzLWlucHV0JyksXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWVEYXRlLWlucHV0JyksXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1zZWxlY3QnKSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLXRleHQnKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsaXN0T2plY3RDcmVhdG9yID0gKFxyXG4gICAgc3RvcmFnZSxcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgcHJpb3JpdHksXHJcbiAgICBub3Rlc1xyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgbGlzdE9iamVjdCA9IG5ldyBMaXN0RWxlbWVudChcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBkdWVEYXRlLFxyXG4gICAgICBwcmlvcml0eSxcclxuICAgICAgbm90ZXNcclxuICAgICk7XHJcblxyXG4gICAgc3RvcmFnZS5wdXNoKGxpc3RPYmplY3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldENvdW50ZXJOdW1iZXIgPSAocHJpb3JpdHkpID0+IHtcclxuICAgIGlmIChwcmlvcml0eS52YWx1ZSA9PT0gJ0xvdycpIHtcclxuICAgICAgRm9vdGVyQ3JlYXRvci5sb3dDb3VudEdldHRlcignYWRkJyk7XHJcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5LnZhbHVlID09PSAnSGlnaCcpIHtcclxuICAgICAgRm9vdGVyQ3JlYXRvci5oaWdoQ291bnRHZXR0ZXIoJ2FkZCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1TdWJtaXQgPSAoXHJcbiAgICBidXR0b24sXHJcbiAgICBjaGlsZEVsZW1lbnQsXHJcbiAgICBzdG9yYWdlLFxyXG4gICAgdGl0bGVJbnB1dCxcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQsXHJcbiAgICBkdWVEYXRlSW5wdXQsXHJcbiAgICBwcmlvcml0eUlucHV0LFxyXG4gICAgbm90ZXNJbnB1dFxyXG4gICkgPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsaXN0T2plY3RDcmVhdG9yKFxyXG4gICAgICAgIHN0b3JhZ2UsXHJcbiAgICAgICAgdGl0bGVJbnB1dCxcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LFxyXG4gICAgICAgIGR1ZURhdGVJbnB1dCxcclxuICAgICAgICBwcmlvcml0eUlucHV0LFxyXG4gICAgICAgIG5vdGVzSW5wdXRcclxuICAgICAgKTtcclxuICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZEVsZW1lbnQpO1xyXG4gICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJykudGV4dENvbnRlbnQgPSAnJyksXHJcbiAgICAgICAgTGlzdENhcmRDcmVhdG9yLmNhcmRSZW5kZXJlcigpO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBzZXRDb3VudGVyTnVtYmVyKHByaW9yaXR5SW5wdXQpO1xyXG4gICAgICBTdG9yYWdlTWFuYWdlci5jb3VudEFkZCgpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgbGlzdENyZWF0b3IsIGxpc3RBcnIgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxDcmVhdG9yO1xyXG4iLCJpbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi9lbGVtZW50Q3JlYXRvcic7XHJcbmltcG9ydCBGb290ZXJDcmVhdG9yIGZyb20gJy4vZm9vdGVyQ3JlYXRvcic7XHJcbmltcG9ydCBTdG9yYWdlTWFuYWdlciBmcm9tICcuL3N0b3JhZ2VNYW5hZ2VyJztcclxuXHJcbmNvbnN0IFBhZ2VSZW5kZXJlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcclxuICBjb25zdCBlbGVtZW50c0FyciA9IFtdO1xyXG5cclxuICBjb25zdCBwYWdlUmVuZGVyID0gKCkgPT4ge1xyXG4gICAgcGFyZW50Q3JlYXRvcigpO1xyXG4gICAgRm9vdGVyQ3JlYXRvci5mb290ZXJSZW5kZXIoZWxlbWVudHNBcnJbNF0uZWxlbWVudCk7XHJcbiAgICBTdG9yYWdlTWFuYWdlci5zdG9yYWdlUmVuZGVyKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGFyZW50Q3JlYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhZ2VDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhcmVudENvbnRhaW5lcixcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdwYWdlLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnaGVhZGluZy1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFnZUNvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3NpZGViYXItY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhZ2VDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdsaXN0LWNvbnRhaW5lcidcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnZm9vdGVyLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBlbGVtZW50c0Fyci5wdXNoKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLFxyXG4gICAgICBoZWFkaW5nQ29udGFpbmVyLFxyXG4gICAgICBzaWRlYmFyQ29udGFpbmVyLFxyXG4gICAgICBsaXN0Q29udGFpbmVyLFxyXG4gICAgICBmb290ZXJDb250YWluZXJcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFnZUNvbnRhaW5lcixcclxuICAgICAgaGVhZGluZ0NvbnRhaW5lcixcclxuICAgICAgc2lkZWJhckNvbnRhaW5lcixcclxuICAgICAgbGlzdENvbnRhaW5lcixcclxuICAgICAgZm9vdGVyQ29udGFpbmVyLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBwYWdlUmVuZGVyLCBlbGVtZW50c0FyciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBQYWdlUmVuZGVyZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4vZWxlbWVudENyZWF0b3InO1xyXG5pbXBvcnQgUGFnZVJlbmRlcmVyIGZyb20gJy4vcGFnZUVsZW1lbnRzJztcclxuaW1wb3J0IExpc3RDYXJkQ3JlYXRvciBmcm9tICcuL2xpc3RDYXJkQ3JlYXRvcic7XHJcbmltcG9ydCBNb2RhbENyZWF0b3IgZnJvbSAnLi9saXN0TW9kYWxDcmVhdG9yJztcclxuaW1wb3J0IEZvb3RlckNyZWF0b3IgZnJvbSAnLi9mb290ZXJDcmVhdG9yJztcclxuXHJcbmNvbnN0IFN0b3JhZ2VNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgY2FyZENvdW50ID0gMDtcclxuICBjb25zdCBzdG9yYWdlUmVuZGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aXRsZTEnKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhjYXJkQ291bnQpO1xyXG4gICAgICBjYXJkQ291bnQgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcmRDb3VudGVyJykpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBjYXJkQ291bnQ7IGkrKykge1xyXG4gICAgICAgIHBvcHVsYXRlRnJvbVN0b3JhZ2UoaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwb3B1bGF0ZUZyb21TdG9yYWdlID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBjYXJkQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbM10uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdjYXJkJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBjYXJkQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdwJyxcclxuICAgICAgJ2NhcmQtdGl0bGUnLFxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdGl0bGUke2luZGV4fWApXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGNhcmRDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ3AnLFxyXG4gICAgICAnY2FyZC1kZXNjcmlwdGlvbicsXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBkZXNjcmlwdGlvbiR7aW5kZXh9YClcclxuICAgICk7XHJcbiAgICBjb25zdCBkdWVEYXRlQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBjYXJkQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdwJyxcclxuICAgICAgJ2NhcmQtZHVlRGF0ZScsXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBkdWVEYXRlJHtpbmRleH1gKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBjYXJkQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdwJyxcclxuICAgICAgJ2NhcmQtcHJpb3JpdHknLFxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgcHJpb3JpdHkke2luZGV4fWApXHJcbiAgICApO1xyXG4gICAgY29uc3Qgbm90ZXNDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGNhcmRDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ3AnLFxyXG4gICAgICAnY2FyZC1ub3RlcycsXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBub3RlcyR7aW5kZXh9YClcclxuICAgICk7XHJcbiAgICBjb25zdCBjb21wbGV0ZURpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY2FyZENvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2NvbXBsZXRlLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBjaGVja0xhYmVsID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBjb21wbGV0ZURpdi5lbGVtZW50LFxyXG4gICAgICAnbGFiZWwnLFxyXG4gICAgICAnY29tcGxldGUtbGFiZWwnLFxyXG4gICAgICAnQ29tcGxldGU6ICdcclxuICAgICk7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY29tcGxldGVEaXYuZWxlbWVudCxcclxuICAgICAgJ2lucHV0JyxcclxuICAgICAgJ2NvbXBsZXRlLWNoZWNrJyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ2NoZWNrYm94J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY2FyZENvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAnYnV0dG9uJyxcclxuICAgICAgJ2RlbGV0ZS1idXR0b24nLFxyXG4gICAgICAnWCdcclxuICAgICk7XHJcbiAgICBMaXN0Q2FyZENyZWF0b3IuY29tcGxldGVDaGVja2VkKGNoZWNrYm94LCBjYXJkQ29udGFpbmVyKTtcclxuICAgIExpc3RDYXJkQ3JlYXRvci5wcmlvcml0eUNoZWNrKHByaW9yaXR5Q29udGFpbmVyKTtcclxuXHJcbiAgICBwcmlvcml0eUNvbG9yKHByaW9yaXR5Q29udGFpbmVyKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdG9yYWdlU2V0dGVyID0gKFxyXG4gICAgaW5kZXgsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgbm90ZXNcclxuICApID0+IHtcclxuICAgIGNvbnN0IHN0b3JhZ2VUaXRsZSA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICBgdGl0bGUke2luZGV4fWAsXHJcbiAgICAgIHRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnRcclxuICAgICk7XHJcbiAgICBjb25zdCBzdG9yYWdlRGVzY3JpcHRpb24gPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgYGRlc2NyaXB0aW9uJHtpbmRleH1gLFxyXG4gICAgICBkZXNjcmlwdGlvbi5lbGVtZW50LnRleHRDb250ZW50XHJcbiAgICApO1xyXG4gICAgY29uc3Qgc3RvcmFnZURhdGUgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgYGR1ZURhdGUke2luZGV4fWAsXHJcbiAgICAgIGR1ZURhdGUuZWxlbWVudC50ZXh0Q29udGVudFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHN0b3JhZ2VQcmlvcml0eSA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICBgcHJpb3JpdHkke2luZGV4fWAsXHJcbiAgICAgIHByaW9yaXR5LmVsZW1lbnQudGV4dENvbnRlbnRcclxuICAgICk7XHJcbiAgICBjb25zdCBzdG9yYWdlTm90ZXMgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgYG5vdGVzJHtpbmRleH1gLFxyXG4gICAgICBub3Rlcy5lbGVtZW50LnRleHRDb250ZW50XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgY291bnRBZGQgPSAoKSA9PiB7XHJcbiAgICBjYXJkQ291bnQgKz0gMTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJkQ291bnRlcicsIGNhcmRDb3VudCk7XHJcbiAgfTtcclxuICBjb25zdCBjb3VudFN1YnJhY3QgPSAoKSA9PiB7XHJcbiAgICBjYXJkQ291bnQgLT0gMTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJkQ291bnRlcicsIGNhcmRDb3VudCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlDb2xvciA9IChwcmlvcml0eSkgPT4ge1xyXG4gICAgaWYgKHByaW9yaXR5LmVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdMb3cnKSB7XHJcbiAgICAgIEZvb3RlckNyZWF0b3IubG93Q291bnRHZXR0ZXIoJ2FkZCcpO1xyXG4gICAgfSBlbHNlIGlmIChwcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID09PSAnSGlnaCcpIHtcclxuICAgICAgRm9vdGVyQ3JlYXRvci5oaWdoQ291bnRHZXR0ZXIoJ2FkZCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVN0b3JhZ2VJdGVtID0gKGluZGV4KSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgdGl0bGUke2luZGV4fWApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGRlc2NyaXB0aW9uJHtpbmRleH1gKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBkdWVEYXRlJHtpbmRleH1gKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBwcmlvcml0eSR7aW5kZXh9YCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgbm90ZXMke2luZGV4fWApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzdG9yYWdlU2V0dGVyLFxyXG4gICAgc3RvcmFnZVJlbmRlcixcclxuICAgIGNvdW50QWRkLFxyXG4gICAgY291bnRTdWJyYWN0LFxyXG4gICAgZGVsZXRlU3RvcmFnZUl0ZW0sXHJcbiAgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZU1hbmFnZXI7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==