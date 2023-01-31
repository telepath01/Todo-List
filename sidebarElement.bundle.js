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
/* harmony import */ var _pageElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageElements */ "./src/pageElements.js");






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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/sidebarElement.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVztBQUNYLENBQUM7QUFDRCxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVFrQjtBQUNGO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtRUFBMEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHVEQUFjO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVEQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVEQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHVEQUFjO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsdURBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRCxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEZjtBQUNpQztBQUNKO0FBQ0k7QUFDOUM7QUFDQTtBQUNBLHdCQUF3QixpRUFBd0I7QUFDaEQ7QUFDQTtBQUNBLDBCQUEwQix1REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1REFBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxRUFBd0I7QUFDOUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0QsaUVBQWUsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VsZW1lbnRDcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb290ZXJDcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saXN0Q2FyZENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xpc3RNb2RhbENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhckVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5jbGFzcyBFbGVtZW50Q3JlYXRvciB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwYXJlbnRFbGVtZW50LFxyXG4gICAgZWxlbWVudCxcclxuICAgIGNsYXNzbmFtZSxcclxuICAgIGNvbnRlbnQsXHJcbiAgICBpbWcsXHJcbiAgICBpZCxcclxuICAgIHR5cGUsXHJcbiAgICBsaXN0VmFsdWVcclxuICApIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICB0aGlzLmNsYXNzbmFtZSA9IHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc25hbWU7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLnNldENvbnRleHQoY29udGVudCk7XHJcbiAgICB0aGlzLmltZyA9IHRoaXMuc2V0SW1hZ2UoaW1nKTtcclxuICAgIHRoaXMuaWQgPSB0aGlzLmxhYmVsUGxhY2VtZW50KGlkKTtcclxuICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZVBsYWNlbWVudCh0eXBlKTtcclxuICAgIHRoaXMubGlzdFZhbHVlID0gdGhpcy52YWx1ZVBsYWNlbWVudChsaXN0VmFsdWUpO1xyXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gdGhpcy5lbGVtZW50UGxhY2VtZW50KHBhcmVudEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGV4dChjb250ZW50KSB7XHJcbiAgICBpZiAoY29udGVudCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEltYWdlKGltZykge1xyXG4gICAgaWYgKGltZykge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc3JjID0gaW1nO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsZW1lbnRQbGFjZW1lbnQocGFyZW50RWxlbWVudCkge1xyXG4gICAgaWYgKHBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcy5lbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcbiAgbGFiZWxQbGFjZW1lbnQoaWQpIHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHR5cGVQbGFjZW1lbnQoaW5wdXRUeXBlKSB7XHJcbiAgICBpZiAoaW5wdXRUeXBlKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpbnB1dFR5cGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICB2YWx1ZVBsYWNlbWVudChsaXN0VmFsdWUpIHtcclxuICAgIGlmIChsaXN0VmFsdWUpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBsaXN0VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudENyZWF0b3I7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4vZWxlbWVudENyZWF0b3InO1xyXG5pbXBvcnQgUGFnZVJlbmRlcmVyIGZyb20gJy4vcGFnZUVsZW1lbnRzJztcclxuXHJcbmNvbnN0IEZvb3RlckNyZWF0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGxldCBsb3dQcmlvcml0eUNvdW50ID0gMDtcclxuICBsZXQgaGlnaFByaW9yaXR5Q291bnQgPSAwO1xyXG5cclxuICBjb25zdCBmb290ZXJSZW5kZXIgPSAocGFyZW50RWxlbWVudCkgPT4ge1xyXG4gICAgZm9vdGVyRWxlbWVudENyZWF0b3IocGFyZW50RWxlbWVudCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9vdGVyRWxlbWVudENyZWF0b3IgPSAocGFyZW50RWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgbG93UHJpb3JpdHlEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhcmVudEVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnbG93Q291bnRlci1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgbG93UHJpb3JpdHlUaXRsZSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgbG93UHJpb3JpdHlEaXYuZWxlbWVudCxcclxuICAgICAgJ3AnLFxyXG4gICAgICAnbG93LXRleHQnLFxyXG4gICAgICBgTG93IFByaW9yaXR5OiAke2xvd1ByaW9yaXR5Q291bnR9YFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGhpZ2hQcmlvcml0eURpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFyZW50RWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdoaWdoQ291bnQtY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGhpZ2hQcmlvcml0eVRpdGxlID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBoaWdoUHJpb3JpdHlEaXYuZWxlbWVudCxcclxuICAgICAgJ3AnLFxyXG4gICAgICAnaGlnaC10ZXh0JyxcclxuICAgICAgYEhpZ2ggUHJpb3JpdHk6ICR7aGlnaFByaW9yaXR5Q291bnR9YFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb3dDb3VudEdldHRlciA9IChjaG9pY2UpID0+IHtcclxuICAgIGNvbnN0IGxvd0NoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvd0NvdW50ZXItY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBoaWdoQ2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaENvdW50LWNvbnRhaW5lcicpO1xyXG4gICAgaWYgKGNob2ljZSA9PT0gJ2FkZCcpIHtcclxuICAgICAgbG93UHJpb3JpdHlDb3VudCArPSAxO1xyXG4gICAgICBQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbNF0uZWxlbWVudC5yZW1vdmVDaGlsZChsb3dDaGlsZCwgaGlnaENoaWxkKTtcclxuICAgICAgRm9vdGVyQ3JlYXRvci5mb290ZXJSZW5kZXIoUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIGlmIChjaG9pY2UgPT09ICdzdWJ0cmFjdCcpIHtcclxuICAgICAgbG93UHJpb3JpdHlDb3VudCAtPSAxO1xyXG4gICAgICBQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbNF0uZWxlbWVudC5yZW1vdmVDaGlsZChsb3dDaGlsZCwgaGlnaENoaWxkKTtcclxuICAgICAgRm9vdGVyQ3JlYXRvci5mb290ZXJSZW5kZXIoUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGlnaENvdW50R2V0dGVyID0gKGNob2ljZSkgPT4ge1xyXG4gICAgY29uc3QgbG93Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93Q291bnRlci1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGhpZ2hDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoQ291bnQtY29udGFpbmVyJyk7XHJcbiAgICBpZiAoY2hvaWNlID09PSAnYWRkJykge1xyXG4gICAgICBoaWdoUHJpb3JpdHlDb3VudCArPSAxO1xyXG4gICAgICBQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbNF0uZWxlbWVudC5yZW1vdmVDaGlsZChsb3dDaGlsZCwgaGlnaENoaWxkKTtcclxuICAgICAgRm9vdGVyQ3JlYXRvci5mb290ZXJSZW5kZXIoUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIGlmIChjaG9pY2UgPT09ICdzdWJ0cmFjdCcpIHtcclxuICAgICAgaGlnaFByaW9yaXR5Q291bnQgLT0gMTtcclxuICAgICAgUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQucmVtb3ZlQ2hpbGQobG93Q2hpbGQsIGhpZ2hDaGlsZCk7XHJcbiAgICAgIEZvb3RlckNyZWF0b3IuZm9vdGVyUmVuZGVyKFBhZ2VSZW5kZXJlci5lbGVtZW50c0Fycls0XS5lbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4geyBmb290ZXJSZW5kZXIsIGxvd0NvdW50R2V0dGVyLCBoaWdoQ291bnRHZXR0ZXIgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyQ3JlYXRvcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgTW9kYWxDcmVhdG9yIGZyb20gJy4vbGlzdE1vZGFsQ3JlYXRvcic7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuL2VsZW1lbnRDcmVhdG9yJztcclxuaW1wb3J0IEZvb3RlckNyZWF0b3IgZnJvbSAnLi9mb290ZXJDcmVhdG9yJztcclxuXHJcbmNvbnN0IExpc3RDYXJkQ3JlYXRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY2FyZFJlbmRlcmVyID0gKCkgPT4ge1xyXG4gICAgY2FyZENyZWF0b3IoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYXJkQ3JlYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhcmVudENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGNhcmRBcnIgPSBNb2RhbENyZWF0b3IubGlzdEFycjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjYXJkRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKHBhcmVudENhcmQsICdkaXYnLCAnY2FyZCcpO1xyXG4gICAgICBjb25zdCB0aXRsZSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjYXJkRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ3AnLFxyXG4gICAgICAgICdjYXJkLXRpdGxlJyxcclxuICAgICAgICBgVGl0bGU6ICR7Y2FyZEFycltpXS50aXRsZX1gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAncCcsXHJcbiAgICAgICAgJ2NhcmQtZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIGNhcmRBcnJbaV0uZGVzY3JpcHRpb25cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjYXJkRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ3AnLFxyXG4gICAgICAgICdjYXJkLWR1ZURhdGUnLFxyXG4gICAgICAgIGNhcmRBcnJbaV0uZHVlRGF0ZVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBwcmlvcml0eSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjYXJkRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ3AnLFxyXG4gICAgICAgICdjYXJkLXByaW9yaXR5JyxcclxuICAgICAgICBjYXJkQXJyW2ldLnByaW9yaXR5XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG5vdGVzID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAncCcsXHJcbiAgICAgICAgJ2NhcmQtbm90ZXMnLFxyXG4gICAgICAgIGNhcmRBcnJbaV0ubm90ZXNcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY29tcGxldGVEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LFxyXG4gICAgICAgICdkaXYnLFxyXG4gICAgICAgICdjb21wbGV0ZS1jb250YWluZXInXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGNoZWNrTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY29tcGxldGVEaXYuZWxlbWVudCxcclxuICAgICAgICAnbGFiZWwnLFxyXG4gICAgICAgICdjb21wbGV0ZS1sYWJlbCcsXHJcbiAgICAgICAgJ0NvbXBsZXRlOiAnXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNvbXBsZXRlRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ2lucHV0JyxcclxuICAgICAgICAnY29tcGxldGUtY2hlY2snLFxyXG4gICAgICAgICcnLFxyXG4gICAgICAgICcnLFxyXG4gICAgICAgICcnLFxyXG4gICAgICAgICdjaGVja2JveCdcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgYnV0dG9uID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAnYnV0dG9uJyxcclxuICAgICAgICAnZGVsZXRlLWJ1dHRvbicsXHJcbiAgICAgICAgJ1gnXHJcbiAgICAgICk7XHJcbiAgICAgIHByaW9yaXR5Q2hlY2socHJpb3JpdHkpO1xyXG4gICAgICBjb21wbGV0ZUNoZWNrZWQoY2hlY2tib3gsIGNhcmREaXYpO1xyXG4gICAgICBkZWxldGVMaXN0ZW5lcihidXR0b24sIHBhcmVudENhcmQsIGNhcmREaXYsIGNhcmRBcnIsIGksIHByaW9yaXR5KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjb21wbGV0ZUNoZWNrZWQgPSAoY2hlY2tFbGVtZW50LCBjYXJkRGl2KSA9PiB7XHJcbiAgICBjaGVja0VsZW1lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIGlmIChjaGVja0VsZW1lbnQuZWxlbWVudC5jaGVja2VkKSB7XHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjN0NCOUU4JztcclxuICAgICAgfSBlbHNlIGNhcmREaXYuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2VmZWZlZic7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVMaXN0ZW5lciA9IChcclxuICAgIGRlbGV0ZUJ1dHRvbixcclxuICAgIHBhcmVudEVsZW1lbnQsXHJcbiAgICBjaGlsZEVsZW1lbnQsXHJcbiAgICBhcnJheUxpc3QsXHJcbiAgICBpbmRleCxcclxuICAgIHByaW9yaXR5XHJcbiAgKSA9PiB7XHJcbiAgICBkZWxldGVCdXR0b24uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKHByaW9yaXR5LmVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdMb3cnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZWQgbG93Jyk7XHJcbiAgICAgICAgRm9vdGVyQ3JlYXRvci5sb3dDb3VudEdldHRlcignc3VidHJhY3QnKTtcclxuICAgICAgfSBlbHNlIGlmIChwcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID09PSAnSGlnaCcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlZCBoaWdoJyk7XHJcbiAgICAgICAgRm9vdGVyQ3JlYXRvci5oaWdoQ291bnRHZXR0ZXIoJ3N1YnRyYWN0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZEVsZW1lbnQuZWxlbWVudCk7XHJcbiAgICAgIGFycmF5TGlzdC5zcGxpY2UoaW5kZXgpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBwcmlvcml0eUNoZWNrID0gKHByaW9yaXR5KSA9PiB7XHJcbiAgICBpZiAocHJpb3JpdHkuZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0xvdycpIHtcclxuICAgICAgcHJpb3JpdHkuZWxlbWVudC5zdHlsZS5jb2xvciA9ICcjRkZGQUYwJztcclxuICAgICAgcHJpb3JpdHkuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzE3NzI0NSc7XHJcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5LmVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdIaWdoJykge1xyXG4gICAgICBwcmlvcml0eS5lbGVtZW50LnN0eWxlLmNvbG9yID0gJyNGRkZBRjAnO1xyXG4gICAgICBwcmlvcml0eS5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjQjIyMjIyJztcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB7IGNhcmRSZW5kZXJlciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBMaXN0Q2FyZENyZWF0b3I7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4vZWxlbWVudENyZWF0b3InO1xyXG5pbXBvcnQgTGlzdENhcmRDcmVhdG9yIGZyb20gJy4vbGlzdENhcmRDcmVhdG9yJztcclxuaW1wb3J0IEZvb3RlckNyZWF0b3IgZnJvbSAnLi9mb290ZXJDcmVhdG9yJztcclxuaW1wb3J0IFBhZ2VSZW5kZXJlciBmcm9tICcuL3BhZ2VFbGVtZW50cyc7XHJcblxyXG5jb25zdCBNb2RhbENyZWF0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xyXG4gIGNvbnN0IGxpc3RBcnIgPSBbXTtcclxuICBjbGFzcyBMaXN0RWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGUudmFsdWU7XHJcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi52YWx1ZTtcclxuICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZS52YWx1ZTtcclxuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlO1xyXG4gICAgICB0aGlzLm5vdGVzID0gbm90ZXMudmFsdWU7XHJcbiAgICAgIHRoaXMuY2hlY2tsaXN0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaXN0Q3JlYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxpc3RNb2RhbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFyZW50RWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdtb2RhbC1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgbGlzdERpdmlzaW9uID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBsaXN0TW9kYWwuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdmb3JtLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGxpc3REaXZpc2lvbi5lbGVtZW50LFxyXG4gICAgICAnaDEnLFxyXG4gICAgICAnZm9ybS10aXRsZScsXHJcbiAgICAgICdOZXcgSXRlbSdcclxuICAgICk7XHJcbiAgICBjb25zdCBmb3JtQmxvY2sgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGxpc3REaXZpc2lvbi5lbGVtZW50LFxyXG4gICAgICAnZm9ybScsXHJcbiAgICAgICdmb3JtLWJsb2NrJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGZpZWxkc2V0Rm9ybSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZm9ybUJsb2NrLmVsZW1lbnQsXHJcbiAgICAgICdmaWVsZHNldCcsXHJcbiAgICAgICdmb3JtLWZpZWxkc2V0J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGZpZWxkc2V0TGVnZW5kID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2xlZ2VuZCcsXHJcbiAgICAgICdmb3JtLWZpZWxkc2V0LWxlZ2VuZCcsXHJcbiAgICAgICdUby1EbyBJdGVtJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHRpdGxlRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICd0b2RvLXRpdGxlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHRpdGxlRGl2LmVsZW1lbnQsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICd0aXRsZS1sYWJlbCcsXHJcbiAgICAgICdUaXRsZTonLFxyXG4gICAgICAnJyxcclxuICAgICAgJ3RpdGxlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHRpdGxlRGl2LmVsZW1lbnQsXHJcbiAgICAgICdpbnB1dCcsXHJcbiAgICAgICd0aXRsZS1pbnB1dCcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ3RpdGxlJyxcclxuICAgICAgJ3RleHQnXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3RvZG8tZGVzY3JpcHRpb24nXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZGVzY3JpcHRpb25EaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ2Rlcy1sYWJlbCcsXHJcbiAgICAgICdEZXNjcmlwdGlvbjonLFxyXG4gICAgICAnJyxcclxuICAgICAgJ2Rlc2NyaXB0aW9uJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGRlc2NyaXB0aW9uRGl2LmVsZW1lbnQsXHJcbiAgICAgICdpbnB1dCcsXHJcbiAgICAgICdkZXMtaW5wdXQnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICd0ZXh0J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3RvZG8tZHVlRGF0ZSdcclxuICAgICk7XHJcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGR1ZURhdGVEaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ2R1ZURhdGUtbGFiZWwnLFxyXG4gICAgICAnRHVlIERhdGU6ICcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnZHVlRGF0ZSdcclxuICAgICk7XHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGR1ZURhdGVEaXYuZWxlbWVudCxcclxuICAgICAgJ2lucHV0JyxcclxuICAgICAgJ2R1ZURhdGUtaW5wdXQnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdkdWVEYXRlJyxcclxuICAgICAgJ2RhdGUnXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3RvZG8tcHJpb3JpdHknXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcHJpb3JpdHlEaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ3RvZG8tcHJpb3JpdHknLFxyXG4gICAgICAnUHJpb3JpdHk6ICcsXHJcbiAgICAgICcnLFxyXG4gICAgICAncHJpb3JpdHknXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHByaW9yaXR5RGl2LmVsZW1lbnQsXHJcbiAgICAgICdzZWxlY3QnLFxyXG4gICAgICAncHJpb3JpdHktc2VsZWN0JyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAncHJpb3JpdHknXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb24xID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwcmlvcml0eVNlbGVjdC5lbGVtZW50LFxyXG4gICAgICAnb3B0aW9uJyxcclxuICAgICAgJ3NlbGVjdGlvbicsXHJcbiAgICAgICctLVBsZWFzZSBDaG9vc2UgUHJpb3JpdHknLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnXCJcIidcclxuICAgICk7XHJcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbjIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHByaW9yaXR5U2VsZWN0LmVsZW1lbnQsXHJcbiAgICAgICdvcHRpb24nLFxyXG4gICAgICAnc2VsZWN0aW9uJyxcclxuICAgICAgJ0xvdycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdMb3cnXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb24zID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwcmlvcml0eVNlbGVjdC5lbGVtZW50LFxyXG4gICAgICAnb3B0aW9uJyxcclxuICAgICAgJ3NlbGVjdGlvbicsXHJcbiAgICAgICdIaWdoJyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ0hpZ2gnXHJcbiAgICApO1xyXG4gICAgY29uc3Qgbm90ZXNEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ25vdGVzLXRleHRhcmVhJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IG5vdGVzTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIG5vdGVzRGl2LmVsZW1lbnQsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICdub3Rlcy1sYWJlbCcsXHJcbiAgICAgICdOb3RlczogJyxcclxuICAgICAgJycsXHJcbiAgICAgICdub3RlcydcclxuICAgICk7XHJcbiAgICBjb25zdCBub3Rlc1RleHRBcmVhID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBub3Rlc0Rpdi5lbGVtZW50LFxyXG4gICAgICAndGV4dGFyZWEnLFxyXG4gICAgICAnbm90ZXMtdGV4dCdcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdidXR0b24tZGl2J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGZvcm1CdXR0b24gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGJ1dHRvbkRpdi5lbGVtZW50LFxyXG4gICAgICAnYnV0dG9uJyxcclxuICAgICAgJ2Zvcm0tYnV0dG9uJyxcclxuICAgICAgJ0NyZWF0ZSBJdGVtJ1xyXG4gICAgKTtcclxuICAgIGZvcm1TdWJtaXQoXHJcbiAgICAgIGZvcm1CdXR0b24uZWxlbWVudCxcclxuICAgICAgbGlzdE1vZGFsLmVsZW1lbnQsXHJcbiAgICAgIGxpc3RBcnIsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1pbnB1dCcpLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzLWlucHV0JyksXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWVEYXRlLWlucHV0JyksXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1zZWxlY3QnKSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLXRleHQnKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsaXN0T2plY3RDcmVhdG9yID0gKFxyXG4gICAgc3RvcmFnZSxcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgcHJpb3JpdHksXHJcbiAgICBub3Rlc1xyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgbGlzdE9iamVjdCA9IG5ldyBMaXN0RWxlbWVudChcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBkdWVEYXRlLFxyXG4gICAgICBwcmlvcml0eSxcclxuICAgICAgbm90ZXNcclxuICAgICk7XHJcblxyXG4gICAgc3RvcmFnZS5wdXNoKGxpc3RPYmplY3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldENvdW50ZXJOdW1iZXIgPSAocHJpb3JpdHkpID0+IHtcclxuICAgIGlmIChwcmlvcml0eS52YWx1ZSA9PT0gJ0xvdycpIHtcclxuICAgICAgRm9vdGVyQ3JlYXRvci5sb3dDb3VudEdldHRlcignYWRkJyk7XHJcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5LnZhbHVlID09PSAnSGlnaCcpIHtcclxuICAgICAgRm9vdGVyQ3JlYXRvci5oaWdoQ291bnRHZXR0ZXIoJ2FkZCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1TdWJtaXQgPSAoXHJcbiAgICBidXR0b24sXHJcbiAgICBjaGlsZEVsZW1lbnQsXHJcbiAgICBzdG9yYWdlLFxyXG4gICAgdGl0bGVJbnB1dCxcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQsXHJcbiAgICBkdWVEYXRlSW5wdXQsXHJcbiAgICBwcmlvcml0eUlucHV0LFxyXG4gICAgbm90ZXNJbnB1dFxyXG4gICkgPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsaXN0T2plY3RDcmVhdG9yKFxyXG4gICAgICAgIHN0b3JhZ2UsXHJcbiAgICAgICAgdGl0bGVJbnB1dCxcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LFxyXG4gICAgICAgIGR1ZURhdGVJbnB1dCxcclxuICAgICAgICBwcmlvcml0eUlucHV0LFxyXG4gICAgICAgIG5vdGVzSW5wdXRcclxuICAgICAgKTtcclxuICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZEVsZW1lbnQpO1xyXG4gICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJykudGV4dENvbnRlbnQgPSAnJyksXHJcbiAgICAgICAgTGlzdENhcmRDcmVhdG9yLmNhcmRSZW5kZXJlcigpO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBzZXRDb3VudGVyTnVtYmVyKHByaW9yaXR5SW5wdXQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgbGlzdENyZWF0b3IsIGxpc3RBcnIgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxDcmVhdG9yO1xyXG4iLCJpbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi9lbGVtZW50Q3JlYXRvcic7XHJcbmltcG9ydCBGb290ZXJDcmVhdG9yIGZyb20gJy4vZm9vdGVyQ3JlYXRvcic7XHJcblxyXG5jb25zdCBQYWdlUmVuZGVyZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LmJvZHk7XHJcbiAgY29uc3QgZWxlbWVudHNBcnIgPSBbXTtcclxuXHJcbiAgY29uc3QgcGFnZVJlbmRlciA9ICgpID0+IHtcclxuICAgIHBhcmVudENyZWF0b3IoKTtcclxuICAgIEZvb3RlckNyZWF0b3IuZm9vdGVyUmVuZGVyKGVsZW1lbnRzQXJyWzRdLmVsZW1lbnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBhcmVudENyZWF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYXJlbnRDb250YWluZXIsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAncGFnZS1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgaGVhZGluZ0NvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFnZUNvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2hlYWRpbmctY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHNpZGViYXJDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhZ2VDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdzaWRlYmFyLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnbGlzdC1jb250YWluZXInXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFnZUNvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2Zvb3Rlci1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgZWxlbWVudHNBcnIucHVzaChcclxuICAgICAgcGFnZUNvbnRhaW5lcixcclxuICAgICAgaGVhZGluZ0NvbnRhaW5lcixcclxuICAgICAgc2lkZWJhckNvbnRhaW5lcixcclxuICAgICAgbGlzdENvbnRhaW5lcixcclxuICAgICAgZm9vdGVyQ29udGFpbmVyXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhZ2VDb250YWluZXIsXHJcbiAgICAgIGhlYWRpbmdDb250YWluZXIsXHJcbiAgICAgIHNpZGViYXJDb250YWluZXIsXHJcbiAgICAgIGxpc3RDb250YWluZXIsXHJcbiAgICAgIGZvb3RlckNvbnRhaW5lcixcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgcGFnZVJlbmRlciwgZWxlbWVudHNBcnIgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgUGFnZVJlbmRlcmVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuL2VsZW1lbnRDcmVhdG9yJztcclxuaW1wb3J0IFBhZ2VSZW5kZXJlciBmcm9tICcuL3BhZ2VFbGVtZW50cyc7XHJcbmltcG9ydCBNb2RhbENyZWF0b3IgZnJvbSAnLi9saXN0TW9kYWxDcmVhdG9yJztcclxuXHJcbmNvbnN0IFNpZGViYXJFbGVtZW50cyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IFBhZ2VSZW5kZXJlci5lbGVtZW50c0FycjtcclxuICBsZXQgYnV0dG9uSG9sZGVyO1xyXG4gIGNvbnN0IHNpZGViYXJFbGVtZW50Q3JlYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFyZW50RWxlbWVudFsyXS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2J1dHRvbnMtY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGNyZWF0QnV0dG9uID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYXJlbnRFbGVtZW50WzJdLmVsZW1lbnQsXHJcbiAgICAgICdidXR0b24nLFxyXG4gICAgICAnY3JlYXQtY2FyZC1idXR0b24nLFxyXG4gICAgICAnTmV3IEl0ZW0nXHJcbiAgICApO1xyXG5cclxuICAgIGJ1dHRvbkhvbGRlciA9IGNyZWF0QnV0dG9uO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgYnV0dG9uSG9sZGVyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIE1vZGFsQ3JlYXRvci5saXN0Q3JlYXRvcigpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lkYmFyUmVuZGVyZXIgPSAoKSA9PiB7XHJcbiAgICBzaWRlYmFyRWxlbWVudENyZWF0b3IoKTtcclxuICAgIGJ1dHRvbkNsaWNrKCk7XHJcbiAgfTtcclxuICByZXR1cm4geyBzaWRiYXJSZW5kZXJlciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyRWxlbWVudHM7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==