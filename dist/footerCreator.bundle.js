"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["footerCreator"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/footerCreator.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lbGVtZW50Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9vdGVyQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGlzdENhcmRDcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saXN0TW9kYWxDcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2VNYW5hZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuY2xhc3MgRWxlbWVudENyZWF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcGFyZW50RWxlbWVudCxcclxuICAgIGVsZW1lbnQsXHJcbiAgICBjbGFzc25hbWUsXHJcbiAgICBjb250ZW50LFxyXG4gICAgaW1nLFxyXG4gICAgaWQsXHJcbiAgICB0eXBlLFxyXG4gICAgbGlzdFZhbHVlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgdGhpcy5jbGFzc25hbWUgPSB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NuYW1lO1xyXG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5zZXRDb250ZXh0KGNvbnRlbnQpO1xyXG4gICAgdGhpcy5pbWcgPSB0aGlzLnNldEltYWdlKGltZyk7XHJcbiAgICB0aGlzLmlkID0gdGhpcy5sYWJlbFBsYWNlbWVudChpZCk7XHJcbiAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVQbGFjZW1lbnQodHlwZSk7XHJcbiAgICB0aGlzLmxpc3RWYWx1ZSA9IHRoaXMudmFsdWVQbGFjZW1lbnQobGlzdFZhbHVlKTtcclxuICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHRoaXMuZWxlbWVudFBsYWNlbWVudChwYXJlbnRFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHNldENvbnRleHQoY29udGVudCkge1xyXG4gICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRJbWFnZShpbWcpIHtcclxuICAgIGlmIChpbWcpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnNyYyA9IGltZztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbGVtZW50UGxhY2VtZW50KHBhcmVudEVsZW1lbnQpIHtcclxuICAgIGlmIChwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxhYmVsUGxhY2VtZW50KGlkKSB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuICB0eXBlUGxhY2VtZW50KGlucHV0VHlwZSkge1xyXG4gICAgaWYgKGlucHV0VHlwZSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRUeXBlKTtcclxuICAgIH1cclxuICB9XHJcbiAgdmFsdWVQbGFjZW1lbnQobGlzdFZhbHVlKSB7XHJcbiAgICBpZiAobGlzdFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbGlzdFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnRDcmVhdG9yO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuL2VsZW1lbnRDcmVhdG9yJztcclxuaW1wb3J0IFBhZ2VSZW5kZXJlciBmcm9tICcuL3BhZ2VFbGVtZW50cyc7XHJcblxyXG5jb25zdCBGb290ZXJDcmVhdG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgbG93UHJpb3JpdHlDb3VudCA9IDA7XHJcbiAgbGV0IGhpZ2hQcmlvcml0eUNvdW50ID0gMDtcclxuXHJcbiAgY29uc3QgZm9vdGVyUmVuZGVyID0gKHBhcmVudEVsZW1lbnQpID0+IHtcclxuICAgIGZvb3RlckVsZW1lbnRDcmVhdG9yKHBhcmVudEVsZW1lbnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvb3RlckVsZW1lbnRDcmVhdG9yID0gKHBhcmVudEVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGxvd1ByaW9yaXR5RGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYXJlbnRFbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2xvd0NvdW50ZXItY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGxvd1ByaW9yaXR5VGl0bGUgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGxvd1ByaW9yaXR5RGl2LmVsZW1lbnQsXHJcbiAgICAgICdwJyxcclxuICAgICAgJ2xvdy10ZXh0JyxcclxuICAgICAgYExvdyBQcmlvcml0eTogJHtsb3dQcmlvcml0eUNvdW50fWBcclxuICAgICk7XHJcbiAgICBjb25zdCBoaWdoUHJpb3JpdHlEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhcmVudEVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnaGlnaENvdW50LWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBoaWdoUHJpb3JpdHlUaXRsZSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgaGlnaFByaW9yaXR5RGl2LmVsZW1lbnQsXHJcbiAgICAgICdwJyxcclxuICAgICAgJ2hpZ2gtdGV4dCcsXHJcbiAgICAgIGBIaWdoIFByaW9yaXR5OiAke2hpZ2hQcmlvcml0eUNvdW50fWBcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG93Q291bnRHZXR0ZXIgPSAoY2hvaWNlKSA9PiB7XHJcbiAgICBjb25zdCBsb3dDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3dDb3VudGVyLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgaGlnaENoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2hDb3VudC1jb250YWluZXInKTtcclxuICAgIGlmIChjaG9pY2UgPT09ICdhZGQnKSB7XHJcbiAgICAgIGxvd1ByaW9yaXR5Q291bnQgKz0gMTtcclxuICAgICAgUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQucmVtb3ZlQ2hpbGQobG93Q2hpbGQsIGhpZ2hDaGlsZCk7XHJcbiAgICAgIEZvb3RlckNyZWF0b3IuZm9vdGVyUmVuZGVyKFBhZ2VSZW5kZXJlci5lbGVtZW50c0Fycls0XS5lbGVtZW50KTtcclxuICAgIH0gZWxzZSBpZiAoY2hvaWNlID09PSAnc3VidHJhY3QnKSB7XHJcbiAgICAgIGxvd1ByaW9yaXR5Q291bnQgLT0gMTtcclxuICAgICAgUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQucmVtb3ZlQ2hpbGQobG93Q2hpbGQsIGhpZ2hDaGlsZCk7XHJcbiAgICAgIEZvb3RlckNyZWF0b3IuZm9vdGVyUmVuZGVyKFBhZ2VSZW5kZXJlci5lbGVtZW50c0Fycls0XS5lbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhpZ2hDb3VudEdldHRlciA9IChjaG9pY2UpID0+IHtcclxuICAgIGNvbnN0IGxvd0NoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvd0NvdW50ZXItY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBoaWdoQ2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaENvdW50LWNvbnRhaW5lcicpO1xyXG4gICAgaWYgKGNob2ljZSA9PT0gJ2FkZCcpIHtcclxuICAgICAgaGlnaFByaW9yaXR5Q291bnQgKz0gMTtcclxuICAgICAgUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQucmVtb3ZlQ2hpbGQobG93Q2hpbGQsIGhpZ2hDaGlsZCk7XHJcbiAgICAgIEZvb3RlckNyZWF0b3IuZm9vdGVyUmVuZGVyKFBhZ2VSZW5kZXJlci5lbGVtZW50c0Fycls0XS5lbGVtZW50KTtcclxuICAgIH0gZWxzZSBpZiAoY2hvaWNlID09PSAnc3VidHJhY3QnKSB7XHJcbiAgICAgIGhpZ2hQcmlvcml0eUNvdW50IC09IDE7XHJcbiAgICAgIFBhZ2VSZW5kZXJlci5lbGVtZW50c0Fycls0XS5lbGVtZW50LnJlbW92ZUNoaWxkKGxvd0NoaWxkLCBoaWdoQ2hpbGQpO1xyXG4gICAgICBGb290ZXJDcmVhdG9yLmZvb3RlclJlbmRlcihQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbNF0uZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgZm9vdGVyUmVuZGVyLCBsb3dDb3VudEdldHRlciwgaGlnaENvdW50R2V0dGVyIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlckNyZWF0b3I7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IE1vZGFsQ3JlYXRvciBmcm9tICcuL2xpc3RNb2RhbENyZWF0b3InO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi9lbGVtZW50Q3JlYXRvcic7XHJcbmltcG9ydCBGb290ZXJDcmVhdG9yIGZyb20gJy4vZm9vdGVyQ3JlYXRvcic7XHJcbmltcG9ydCBTdG9yYWdlTWFuYWdlciBmcm9tICcuL3N0b3JhZ2VNYW5hZ2VyJztcclxuY29uc3QgTGlzdENhcmRDcmVhdG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjYXJkUmVuZGVyZXIgPSAoKSA9PiB7XHJcbiAgICBjYXJkQ3JlYXRvcigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhcmRDcmVhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFyZW50Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgY2FyZEFyciA9IE1vZGFsQ3JlYXRvci5saXN0QXJyO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNhcmREaXYgPSBuZXcgRWxlbWVudENyZWF0b3IocGFyZW50Q2FyZCwgJ2RpdicsICdjYXJkJyk7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAncCcsXHJcbiAgICAgICAgJ2NhcmQtdGl0bGUnLFxyXG4gICAgICAgIGBUaXRsZTogJHtjYXJkQXJyW2ldLnRpdGxlfWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LFxyXG4gICAgICAgICdwJyxcclxuICAgICAgICAnY2FyZC1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgY2FyZEFycltpXS5kZXNjcmlwdGlvblxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkdWVEYXRlID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAncCcsXHJcbiAgICAgICAgJ2NhcmQtZHVlRGF0ZScsXHJcbiAgICAgICAgY2FyZEFycltpXS5kdWVEYXRlXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAncCcsXHJcbiAgICAgICAgJ2NhcmQtcHJpb3JpdHknLFxyXG4gICAgICAgIGNhcmRBcnJbaV0ucHJpb3JpdHlcclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgbm90ZXMgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LFxyXG4gICAgICAgICdwJyxcclxuICAgICAgICAnY2FyZC1ub3RlcycsXHJcbiAgICAgICAgY2FyZEFycltpXS5ub3Rlc1xyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBjb21wbGV0ZURpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjYXJkRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ2RpdicsXHJcbiAgICAgICAgJ2NvbXBsZXRlLWNvbnRhaW5lcidcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY2hlY2tMYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjb21wbGV0ZURpdi5lbGVtZW50LFxyXG4gICAgICAgICdsYWJlbCcsXHJcbiAgICAgICAgJ2NvbXBsZXRlLWxhYmVsJyxcclxuICAgICAgICAnQ29tcGxldGU6ICdcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY2hlY2tib3ggPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY29tcGxldGVEaXYuZWxlbWVudCxcclxuICAgICAgICAnaW5wdXQnLFxyXG4gICAgICAgICdjb21wbGV0ZS1jaGVjaycsXHJcbiAgICAgICAgJycsXHJcbiAgICAgICAgJycsXHJcbiAgICAgICAgJycsXHJcbiAgICAgICAgJ2NoZWNrYm94J1xyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBidXR0b24gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LFxyXG4gICAgICAgICdidXR0b24nLFxyXG4gICAgICAgICdkZWxldGUtYnV0dG9uJyxcclxuICAgICAgICAnWCdcclxuICAgICAgKTtcclxuICAgICAgU3RvcmFnZU1hbmFnZXIuc3RvcmFnZVNldHRlcihcclxuICAgICAgICBpICsgMSxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBkdWVEYXRlLFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIG5vdGVzXHJcbiAgICAgICk7XHJcbiAgICAgIHByaW9yaXR5Q2hlY2socHJpb3JpdHkpO1xyXG4gICAgICBjb21wbGV0ZUNoZWNrZWQoY2hlY2tib3gsIGNhcmREaXYpO1xyXG4gICAgICBkZWxldGVMaXN0ZW5lcihidXR0b24sIHBhcmVudENhcmQsIGNhcmREaXYsIGNhcmRBcnIsIGksIHByaW9yaXR5LmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbXBsZXRlQ2hlY2tlZCA9IChjaGVja0VsZW1lbnQsIGNhcmREaXYpID0+IHtcclxuICAgIGNoZWNrRWxlbWVudC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgaWYgKGNoZWNrRWxlbWVudC5lbGVtZW50LmNoZWNrZWQpIHtcclxuICAgICAgICBjYXJkRGl2LmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM3Q0I5RTgnO1xyXG4gICAgICB9IGVsc2UgY2FyZERpdi5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWZlZmVmJztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUxpc3RlbmVyID0gKFxyXG4gICAgZGVsZXRlQnV0dG9uLFxyXG4gICAgcGFyZW50RWxlbWVudCxcclxuICAgIGNoaWxkRWxlbWVudCxcclxuICAgIGFycmF5TGlzdCxcclxuICAgIGluZGV4LFxyXG4gICAgcHJpb3JpdHlcclxuICApID0+IHtcclxuICAgIGRlbGV0ZUJ1dHRvbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAocHJpb3JpdHkudGV4dENvbnRlbnQgPT09ICdMb3cnKSB7XHJcbiAgICAgICAgRm9vdGVyQ3JlYXRvci5sb3dDb3VudEdldHRlcignc3VidHJhY3QnKTtcclxuICAgICAgfSBlbHNlIGlmIChwcmlvcml0eS50ZXh0Q29udGVudCA9PT0gJ0hpZ2gnKSB7XHJcbiAgICAgICAgRm9vdGVyQ3JlYXRvci5oaWdoQ291bnRHZXR0ZXIoJ3N1YnRyYWN0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZEVsZW1lbnQuZWxlbWVudCk7XHJcbiAgICAgIGFycmF5TGlzdC5zcGxpY2UoaW5kZXgpO1xyXG4gICAgICBTdG9yYWdlTWFuYWdlci5kZWxldGVTdG9yYWdlSXRlbShpbmRleCArIDEpO1xyXG4gICAgICBTdG9yYWdlTWFuYWdlci5jb3VudFN1YnJhY3QoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5Q2hlY2sgPSAocHJpb3JpdHkpID0+IHtcclxuICAgIGlmIChwcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID09PSAnTG93Jykge1xyXG4gICAgICBwcmlvcml0eS5lbGVtZW50LnN0eWxlLmNvbG9yID0gJyNGRkZBRjAnO1xyXG4gICAgICBwcmlvcml0eS5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMTc3MjQ1JztcclxuICAgIH0gZWxzZSBpZiAocHJpb3JpdHkuZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0hpZ2gnKSB7XHJcbiAgICAgIHByaW9yaXR5LmVsZW1lbnQuc3R5bGUuY29sb3IgPSAnI0ZGRkFGMCc7XHJcbiAgICAgIHByaW9yaXR5LmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNCMjIyMjInO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGNhcmRSZW5kZXJlciwgY29tcGxldGVDaGVja2VkLCBwcmlvcml0eUNoZWNrLCBkZWxldGVMaXN0ZW5lciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBMaXN0Q2FyZENyZWF0b3I7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4vZWxlbWVudENyZWF0b3InO1xyXG5pbXBvcnQgTGlzdENhcmRDcmVhdG9yIGZyb20gJy4vbGlzdENhcmRDcmVhdG9yJztcclxuaW1wb3J0IEZvb3RlckNyZWF0b3IgZnJvbSAnLi9mb290ZXJDcmVhdG9yJztcclxuaW1wb3J0IFN0b3JhZ2VNYW5hZ2VyIGZyb20gJy4vc3RvcmFnZU1hbmFnZXInO1xyXG5cclxuY29uc3QgTW9kYWxDcmVhdG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcclxuICBjb25zdCBsaXN0QXJyID0gW107XHJcbiAgY2xhc3MgTGlzdEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcclxuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlLnZhbHVlO1xyXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24udmFsdWU7XHJcbiAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUudmFsdWU7XHJcbiAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eS52YWx1ZTtcclxuICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzLnZhbHVlO1xyXG4gICAgICB0aGlzLmNoZWNrbGlzdCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbGlzdENyZWF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0TW9kYWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhcmVudEVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnbW9kYWwtY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGxpc3REaXZpc2lvbiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgbGlzdE1vZGFsLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnZm9ybS1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgZm9ybVRpdGxlID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBsaXN0RGl2aXNpb24uZWxlbWVudCxcclxuICAgICAgJ2gxJyxcclxuICAgICAgJ2Zvcm0tdGl0bGUnLFxyXG4gICAgICAnTmV3IEl0ZW0nXHJcbiAgICApO1xyXG4gICAgY29uc3QgZm9ybUJsb2NrID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBsaXN0RGl2aXNpb24uZWxlbWVudCxcclxuICAgICAgJ2Zvcm0nLFxyXG4gICAgICAnZm9ybS1ibG9jaydcclxuICAgICk7XHJcbiAgICBjb25zdCBmaWVsZHNldEZvcm0gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZvcm1CbG9jay5lbGVtZW50LFxyXG4gICAgICAnZmllbGRzZXQnLFxyXG4gICAgICAnZm9ybS1maWVsZHNldCdcclxuICAgICk7XHJcbiAgICBjb25zdCBmaWVsZHNldExlZ2VuZCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZmllbGRzZXRGb3JtLmVsZW1lbnQsXHJcbiAgICAgICdsZWdlbmQnLFxyXG4gICAgICAnZm9ybS1maWVsZHNldC1sZWdlbmQnLFxyXG4gICAgICAnVG8tRG8gSXRlbSdcclxuICAgICk7XHJcbiAgICBjb25zdCB0aXRsZURpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZmllbGRzZXRGb3JtLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAndG9kby10aXRsZSdcclxuICAgICk7XHJcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICB0aXRsZURpdi5lbGVtZW50LFxyXG4gICAgICAnbGFiZWwnLFxyXG4gICAgICAndGl0bGUtbGFiZWwnLFxyXG4gICAgICAnVGl0bGU6JyxcclxuICAgICAgJycsXHJcbiAgICAgICd0aXRsZSdcclxuICAgICk7XHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICB0aXRsZURpdi5lbGVtZW50LFxyXG4gICAgICAnaW5wdXQnLFxyXG4gICAgICAndGl0bGUtaW5wdXQnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICd0aXRsZScsXHJcbiAgICAgICd0ZXh0J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICd0b2RvLWRlc2NyaXB0aW9uJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGRlc2NyaXB0aW9uRGl2LmVsZW1lbnQsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICdkZXMtbGFiZWwnLFxyXG4gICAgICAnRGVzY3JpcHRpb246JyxcclxuICAgICAgJycsXHJcbiAgICAgICdkZXNjcmlwdGlvbidcclxuICAgICk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBkZXNjcmlwdGlvbkRpdi5lbGVtZW50LFxyXG4gICAgICAnaW5wdXQnLFxyXG4gICAgICAnZGVzLWlucHV0JyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnZGVzY3JpcHRpb24nLFxyXG4gICAgICAndGV4dCdcclxuICAgICk7XHJcbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICd0b2RvLWR1ZURhdGUnXHJcbiAgICApO1xyXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBkdWVEYXRlRGl2LmVsZW1lbnQsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICdkdWVEYXRlLWxhYmVsJyxcclxuICAgICAgJ0R1ZSBEYXRlOiAnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ2R1ZURhdGUnXHJcbiAgICApO1xyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBkdWVEYXRlRGl2LmVsZW1lbnQsXHJcbiAgICAgICdpbnB1dCcsXHJcbiAgICAgICdkdWVEYXRlLWlucHV0JyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnZHVlRGF0ZScsXHJcbiAgICAgICdkYXRlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICd0b2RvLXByaW9yaXR5J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHByaW9yaXR5RGl2LmVsZW1lbnQsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICd0b2RvLXByaW9yaXR5JyxcclxuICAgICAgJ1ByaW9yaXR5OiAnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ3ByaW9yaXR5J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwcmlvcml0eURpdi5lbGVtZW50LFxyXG4gICAgICAnc2VsZWN0JyxcclxuICAgICAgJ3ByaW9yaXR5LXNlbGVjdCcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ3ByaW9yaXR5J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uMSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcHJpb3JpdHlTZWxlY3QuZWxlbWVudCxcclxuICAgICAgJ29wdGlvbicsXHJcbiAgICAgICdzZWxlY3Rpb24nLFxyXG4gICAgICAnLS1QbGVhc2UgQ2hvb3NlIFByaW9yaXR5JyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ1wiXCInXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb24yID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwcmlvcml0eVNlbGVjdC5lbGVtZW50LFxyXG4gICAgICAnb3B0aW9uJyxcclxuICAgICAgJ3NlbGVjdGlvbicsXHJcbiAgICAgICdMb3cnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnTG93J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uMyA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcHJpb3JpdHlTZWxlY3QuZWxlbWVudCxcclxuICAgICAgJ29wdGlvbicsXHJcbiAgICAgICdzZWxlY3Rpb24nLFxyXG4gICAgICAnSGlnaCcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdIaWdoJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IG5vdGVzRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdub3Rlcy10ZXh0YXJlYSdcclxuICAgICk7XHJcbiAgICBjb25zdCBub3Rlc0xhYmVsID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBub3Rlc0Rpdi5lbGVtZW50LFxyXG4gICAgICAnbGFiZWwnLFxyXG4gICAgICAnbm90ZXMtbGFiZWwnLFxyXG4gICAgICAnTm90ZXM6ICcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnbm90ZXMnXHJcbiAgICApO1xyXG4gICAgY29uc3Qgbm90ZXNUZXh0QXJlYSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgbm90ZXNEaXYuZWxlbWVudCxcclxuICAgICAgJ3RleHRhcmVhJyxcclxuICAgICAgJ25vdGVzLXRleHQnXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZmllbGRzZXRGb3JtLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnYnV0dG9uLWRpdidcclxuICAgICk7XHJcbiAgICBjb25zdCBmb3JtQnV0dG9uID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBidXR0b25EaXYuZWxlbWVudCxcclxuICAgICAgJ2J1dHRvbicsXHJcbiAgICAgICdmb3JtLWJ1dHRvbicsXHJcbiAgICAgICdDcmVhdGUgSXRlbSdcclxuICAgICk7XHJcbiAgICBmb3JtU3VibWl0KFxyXG4gICAgICBmb3JtQnV0dG9uLmVsZW1lbnQsXHJcbiAgICAgIGxpc3RNb2RhbC5lbGVtZW50LFxyXG4gICAgICBsaXN0QXJyLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtaW5wdXQnKSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlcy1pbnB1dCcpLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlRGF0ZS1pbnB1dCcpLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktc2VsZWN0JyksXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy10ZXh0JylcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGlzdE9qZWN0Q3JlYXRvciA9IChcclxuICAgIHN0b3JhZ2UsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgbm90ZXNcclxuICApID0+IHtcclxuICAgIGNvbnN0IGxpc3RPYmplY3QgPSBuZXcgTGlzdEVsZW1lbnQoXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgZHVlRGF0ZSxcclxuICAgICAgcHJpb3JpdHksXHJcbiAgICAgIG5vdGVzXHJcbiAgICApO1xyXG5cclxuICAgIHN0b3JhZ2UucHVzaChsaXN0T2JqZWN0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRDb3VudGVyTnVtYmVyID0gKHByaW9yaXR5KSA9PiB7XHJcbiAgICBpZiAocHJpb3JpdHkudmFsdWUgPT09ICdMb3cnKSB7XHJcbiAgICAgIEZvb3RlckNyZWF0b3IubG93Q291bnRHZXR0ZXIoJ2FkZCcpO1xyXG4gICAgfSBlbHNlIGlmIChwcmlvcml0eS52YWx1ZSA9PT0gJ0hpZ2gnKSB7XHJcbiAgICAgIEZvb3RlckNyZWF0b3IuaGlnaENvdW50R2V0dGVyKCdhZGQnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtU3VibWl0ID0gKFxyXG4gICAgYnV0dG9uLFxyXG4gICAgY2hpbGRFbGVtZW50LFxyXG4gICAgc3RvcmFnZSxcclxuICAgIHRpdGxlSW5wdXQsXHJcbiAgICBkZXNjcmlwdGlvbklucHV0LFxyXG4gICAgZHVlRGF0ZUlucHV0LFxyXG4gICAgcHJpb3JpdHlJbnB1dCxcclxuICAgIG5vdGVzSW5wdXRcclxuICApID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGlzdE9qZWN0Q3JlYXRvcihcclxuICAgICAgICBzdG9yYWdlLFxyXG4gICAgICAgIHRpdGxlSW5wdXQsXHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dCxcclxuICAgICAgICBkdWVEYXRlSW5wdXQsXHJcbiAgICAgICAgcHJpb3JpdHlJbnB1dCxcclxuICAgICAgICBub3Rlc0lucHV0XHJcbiAgICAgICk7XHJcbiAgICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGRFbGVtZW50KTtcclxuICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWNvbnRhaW5lcicpLnRleHRDb250ZW50ID0gJycpLFxyXG4gICAgICAgIExpc3RDYXJkQ3JlYXRvci5jYXJkUmVuZGVyZXIoKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgc2V0Q291bnRlck51bWJlcihwcmlvcml0eUlucHV0KTtcclxuICAgICAgU3RvcmFnZU1hbmFnZXIuY291bnRBZGQoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGxpc3RDcmVhdG9yLCBsaXN0QXJyIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsQ3JlYXRvcjtcclxuIiwiaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4vZWxlbWVudENyZWF0b3InO1xyXG5pbXBvcnQgRm9vdGVyQ3JlYXRvciBmcm9tICcuL2Zvb3RlckNyZWF0b3InO1xyXG5pbXBvcnQgU3RvcmFnZU1hbmFnZXIgZnJvbSAnLi9zdG9yYWdlTWFuYWdlcic7XHJcblxyXG5jb25zdCBQYWdlUmVuZGVyZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LmJvZHk7XHJcbiAgY29uc3QgZWxlbWVudHNBcnIgPSBbXTtcclxuXHJcbiAgY29uc3QgcGFnZVJlbmRlciA9ICgpID0+IHtcclxuICAgIHBhcmVudENyZWF0b3IoKTtcclxuICAgIEZvb3RlckNyZWF0b3IuZm9vdGVyUmVuZGVyKGVsZW1lbnRzQXJyWzRdLmVsZW1lbnQpO1xyXG4gICAgU3RvcmFnZU1hbmFnZXIuc3RvcmFnZVJlbmRlcigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBhcmVudENyZWF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYXJlbnRDb250YWluZXIsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAncGFnZS1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgaGVhZGluZ0NvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFnZUNvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2hlYWRpbmctY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHNpZGViYXJDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhZ2VDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdzaWRlYmFyLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnbGlzdC1jb250YWluZXInXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFnZUNvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2Zvb3Rlci1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgZWxlbWVudHNBcnIucHVzaChcclxuICAgICAgcGFnZUNvbnRhaW5lcixcclxuICAgICAgaGVhZGluZ0NvbnRhaW5lcixcclxuICAgICAgc2lkZWJhckNvbnRhaW5lcixcclxuICAgICAgbGlzdENvbnRhaW5lcixcclxuICAgICAgZm9vdGVyQ29udGFpbmVyXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhZ2VDb250YWluZXIsXHJcbiAgICAgIGhlYWRpbmdDb250YWluZXIsXHJcbiAgICAgIHNpZGViYXJDb250YWluZXIsXHJcbiAgICAgIGxpc3RDb250YWluZXIsXHJcbiAgICAgIGZvb3RlckNvbnRhaW5lcixcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgcGFnZVJlbmRlciwgZWxlbWVudHNBcnIgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgUGFnZVJlbmRlcmVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuL2VsZW1lbnRDcmVhdG9yJztcclxuaW1wb3J0IFBhZ2VSZW5kZXJlciBmcm9tICcuL3BhZ2VFbGVtZW50cyc7XHJcbmltcG9ydCBMaXN0Q2FyZENyZWF0b3IgZnJvbSAnLi9saXN0Q2FyZENyZWF0b3InO1xyXG5pbXBvcnQgTW9kYWxDcmVhdG9yIGZyb20gJy4vbGlzdE1vZGFsQ3JlYXRvcic7XHJcbmltcG9ydCBGb290ZXJDcmVhdG9yIGZyb20gJy4vZm9vdGVyQ3JlYXRvcic7XHJcblxyXG5jb25zdCBTdG9yYWdlTWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGNhcmRDb3VudCA9IDA7XHJcbiAgY29uc3Qgc3RvcmFnZVJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGl0bGUxJykpIHtcclxuICAgICAgY29uc29sZS5sb2coY2FyZENvdW50KTtcclxuICAgICAgY2FyZENvdW50ID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJkQ291bnRlcicpKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gY2FyZENvdW50OyBpKyspIHtcclxuICAgICAgICBwb3B1bGF0ZUZyb21TdG9yYWdlKGkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcG9wdWxhdGVGcm9tU3RvcmFnZSA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgY2FyZENvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzNdLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnY2FyZCdcclxuICAgICk7XHJcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY2FyZENvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAncCcsXHJcbiAgICAgICdjYXJkLXRpdGxlJyxcclxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRpdGxlJHtpbmRleH1gKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBjYXJkQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdwJyxcclxuICAgICAgJ2NhcmQtZGVzY3JpcHRpb24nLFxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgZGVzY3JpcHRpb24ke2luZGV4fWApXHJcbiAgICApO1xyXG4gICAgY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY2FyZENvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAncCcsXHJcbiAgICAgICdjYXJkLWR1ZURhdGUnLFxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgZHVlRGF0ZSR7aW5kZXh9YClcclxuICAgICk7XHJcbiAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY2FyZENvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAncCcsXHJcbiAgICAgICdjYXJkLXByaW9yaXR5JyxcclxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHByaW9yaXR5JHtpbmRleH1gKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IG5vdGVzQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBjYXJkQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdwJyxcclxuICAgICAgJ2NhcmQtbm90ZXMnLFxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgbm90ZXMke2luZGV4fWApXHJcbiAgICApO1xyXG4gICAgY29uc3QgY29tcGxldGVEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGNhcmRDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdjb21wbGV0ZS1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgY2hlY2tMYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY29tcGxldGVEaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ2NvbXBsZXRlLWxhYmVsJyxcclxuICAgICAgJ0NvbXBsZXRlOiAnXHJcbiAgICApO1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGNvbXBsZXRlRGl2LmVsZW1lbnQsXHJcbiAgICAgICdpbnB1dCcsXHJcbiAgICAgICdjb21wbGV0ZS1jaGVjaycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdjaGVja2JveCdcclxuICAgICk7XHJcbiAgICBjb25zdCBidXR0b24gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGNhcmRDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ2J1dHRvbicsXHJcbiAgICAgICdkZWxldGUtYnV0dG9uJyxcclxuICAgICAgJ1gnXHJcbiAgICApO1xyXG4gICAgTGlzdENhcmRDcmVhdG9yLmNvbXBsZXRlQ2hlY2tlZChjaGVja2JveCwgY2FyZENvbnRhaW5lcik7XHJcbiAgICBMaXN0Q2FyZENyZWF0b3IucHJpb3JpdHlDaGVjayhwcmlvcml0eUNvbnRhaW5lcik7XHJcblxyXG4gICAgcHJpb3JpdHlDb2xvcihwcmlvcml0eUNvbnRhaW5lcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3RvcmFnZVNldHRlciA9IChcclxuICAgIGluZGV4LFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGR1ZURhdGUsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIG5vdGVzXHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yYWdlVGl0bGUgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgYHRpdGxlJHtpbmRleH1gLFxyXG4gICAgICB0aXRsZS5lbGVtZW50LnRleHRDb250ZW50XHJcbiAgICApO1xyXG4gICAgY29uc3Qgc3RvcmFnZURlc2NyaXB0aW9uID0gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgIGBkZXNjcmlwdGlvbiR7aW5kZXh9YCxcclxuICAgICAgZGVzY3JpcHRpb24uZWxlbWVudC50ZXh0Q29udGVudFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHN0b3JhZ2VEYXRlID0gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgIGBkdWVEYXRlJHtpbmRleH1gLFxyXG4gICAgICBkdWVEYXRlLmVsZW1lbnQudGV4dENvbnRlbnRcclxuICAgICk7XHJcbiAgICBjb25zdCBzdG9yYWdlUHJpb3JpdHkgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgYHByaW9yaXR5JHtpbmRleH1gLFxyXG4gICAgICBwcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50XHJcbiAgICApO1xyXG4gICAgY29uc3Qgc3RvcmFnZU5vdGVzID0gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgIGBub3RlcyR7aW5kZXh9YCxcclxuICAgICAgbm90ZXMuZWxlbWVudC50ZXh0Q29udGVudFxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IGNvdW50QWRkID0gKCkgPT4ge1xyXG4gICAgY2FyZENvdW50ICs9IDE7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FyZENvdW50ZXInLCBjYXJkQ291bnQpO1xyXG4gIH07XHJcbiAgY29uc3QgY291bnRTdWJyYWN0ID0gKCkgPT4ge1xyXG4gICAgY2FyZENvdW50IC09IDE7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FyZENvdW50ZXInLCBjYXJkQ291bnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5Q29sb3IgPSAocHJpb3JpdHkpID0+IHtcclxuICAgIGlmIChwcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID09PSAnTG93Jykge1xyXG4gICAgICBGb290ZXJDcmVhdG9yLmxvd0NvdW50R2V0dGVyKCdhZGQnKTtcclxuICAgIH0gZWxzZSBpZiAocHJpb3JpdHkuZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0hpZ2gnKSB7XHJcbiAgICAgIEZvb3RlckNyZWF0b3IuaGlnaENvdW50R2V0dGVyKCdhZGQnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVTdG9yYWdlSXRlbSA9IChpbmRleCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYHRpdGxlJHtpbmRleH1gKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBkZXNjcmlwdGlvbiR7aW5kZXh9YCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgZHVlRGF0ZSR7aW5kZXh9YCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgcHJpb3JpdHkke2luZGV4fWApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYG5vdGVzJHtpbmRleH1gKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3RvcmFnZVNldHRlcixcclxuICAgIHN0b3JhZ2VSZW5kZXIsXHJcbiAgICBjb3VudEFkZCxcclxuICAgIGNvdW50U3VicmFjdCxcclxuICAgIGRlbGV0ZVN0b3JhZ2VJdGVtLFxyXG4gIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2VNYW5hZ2VyO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=