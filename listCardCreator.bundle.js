"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["listCardCreator"],{

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

/***/ "./src/storageManager.js":
/*!*******************************!*\
  !*** ./src/storageManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const StorageManager = (function () {
  const listParant = document.querySelector('.list-container');
  const storageArr = [];

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
    createStorageCard(1);
    console.log('populating storage');
  };

  const createStorageCard = (index) => {
    let title = localStorage.getItem(`title${index}`);
    console.log(title);
  };
  return { storageStart, populateStorage, storageArr };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageManager);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/listCardCreator.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQTRCO0FBQ3BDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0QsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVRa0I7QUFDRjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQTBCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix1REFBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1REFBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1REFBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix1REFBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVEQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0QsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxRGY7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxNQUFNO0FBQ25EO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNELGlFQUFlLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lbGVtZW50Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9vdGVyQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGlzdENhcmRDcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saXN0TW9kYWxDcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2VNYW5hZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuY2xhc3MgRWxlbWVudENyZWF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcGFyZW50RWxlbWVudCxcclxuICAgIGVsZW1lbnQsXHJcbiAgICBjbGFzc25hbWUsXHJcbiAgICBjb250ZW50LFxyXG4gICAgaW1nLFxyXG4gICAgaWQsXHJcbiAgICB0eXBlLFxyXG4gICAgbGlzdFZhbHVlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgdGhpcy5jbGFzc25hbWUgPSB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NuYW1lO1xyXG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5zZXRDb250ZXh0KGNvbnRlbnQpO1xyXG4gICAgdGhpcy5pbWcgPSB0aGlzLnNldEltYWdlKGltZyk7XHJcbiAgICB0aGlzLmlkID0gdGhpcy5sYWJlbFBsYWNlbWVudChpZCk7XHJcbiAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVQbGFjZW1lbnQodHlwZSk7XHJcbiAgICB0aGlzLmxpc3RWYWx1ZSA9IHRoaXMudmFsdWVQbGFjZW1lbnQobGlzdFZhbHVlKTtcclxuICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHRoaXMuZWxlbWVudFBsYWNlbWVudChwYXJlbnRFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHNldENvbnRleHQoY29udGVudCkge1xyXG4gICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRJbWFnZShpbWcpIHtcclxuICAgIGlmIChpbWcpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnNyYyA9IGltZztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbGVtZW50UGxhY2VtZW50KHBhcmVudEVsZW1lbnQpIHtcclxuICAgIGlmIChwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxhYmVsUGxhY2VtZW50KGlkKSB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuICB0eXBlUGxhY2VtZW50KGlucHV0VHlwZSkge1xyXG4gICAgaWYgKGlucHV0VHlwZSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRUeXBlKTtcclxuICAgIH1cclxuICB9XHJcbiAgdmFsdWVQbGFjZW1lbnQobGlzdFZhbHVlKSB7XHJcbiAgICBpZiAobGlzdFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbGlzdFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnRDcmVhdG9yO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuL2VsZW1lbnRDcmVhdG9yJztcclxuaW1wb3J0IFBhZ2VSZW5kZXJlciBmcm9tICcuL3BhZ2VFbGVtZW50cyc7XHJcblxyXG5jb25zdCBGb290ZXJDcmVhdG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgbG93UHJpb3JpdHlDb3VudCA9IDA7XHJcbiAgbGV0IGhpZ2hQcmlvcml0eUNvdW50ID0gMDtcclxuXHJcbiAgY29uc3QgZm9vdGVyUmVuZGVyID0gKHBhcmVudEVsZW1lbnQpID0+IHtcclxuICAgIGZvb3RlckVsZW1lbnRDcmVhdG9yKHBhcmVudEVsZW1lbnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvb3RlckVsZW1lbnRDcmVhdG9yID0gKHBhcmVudEVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGxvd1ByaW9yaXR5RGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYXJlbnRFbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2xvd0NvdW50ZXItY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGxvd1ByaW9yaXR5VGl0bGUgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGxvd1ByaW9yaXR5RGl2LmVsZW1lbnQsXHJcbiAgICAgICdwJyxcclxuICAgICAgJ2xvdy10ZXh0JyxcclxuICAgICAgYExvdyBQcmlvcml0eTogJHtsb3dQcmlvcml0eUNvdW50fWBcclxuICAgICk7XHJcbiAgICBjb25zdCBoaWdoUHJpb3JpdHlEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhcmVudEVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnaGlnaENvdW50LWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBoaWdoUHJpb3JpdHlUaXRsZSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgaGlnaFByaW9yaXR5RGl2LmVsZW1lbnQsXHJcbiAgICAgICdwJyxcclxuICAgICAgJ2hpZ2gtdGV4dCcsXHJcbiAgICAgIGBIaWdoIFByaW9yaXR5OiAke2hpZ2hQcmlvcml0eUNvdW50fWBcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG93Q291bnRHZXR0ZXIgPSAoY2hvaWNlKSA9PiB7XHJcbiAgICBjb25zdCBsb3dDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3dDb3VudGVyLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgaGlnaENoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2hDb3VudC1jb250YWluZXInKTtcclxuICAgIGlmIChjaG9pY2UgPT09ICdhZGQnKSB7XHJcbiAgICAgIGxvd1ByaW9yaXR5Q291bnQgKz0gMTtcclxuICAgICAgUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQucmVtb3ZlQ2hpbGQobG93Q2hpbGQsIGhpZ2hDaGlsZCk7XHJcbiAgICAgIEZvb3RlckNyZWF0b3IuZm9vdGVyUmVuZGVyKFBhZ2VSZW5kZXJlci5lbGVtZW50c0Fycls0XS5lbGVtZW50KTtcclxuICAgIH0gZWxzZSBpZiAoY2hvaWNlID09PSAnc3VidHJhY3QnKSB7XHJcbiAgICAgIGxvd1ByaW9yaXR5Q291bnQgLT0gMTtcclxuICAgICAgUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQucmVtb3ZlQ2hpbGQobG93Q2hpbGQsIGhpZ2hDaGlsZCk7XHJcbiAgICAgIEZvb3RlckNyZWF0b3IuZm9vdGVyUmVuZGVyKFBhZ2VSZW5kZXJlci5lbGVtZW50c0Fycls0XS5lbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhpZ2hDb3VudEdldHRlciA9IChjaG9pY2UpID0+IHtcclxuICAgIGNvbnN0IGxvd0NoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvd0NvdW50ZXItY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBoaWdoQ2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaENvdW50LWNvbnRhaW5lcicpO1xyXG4gICAgaWYgKGNob2ljZSA9PT0gJ2FkZCcpIHtcclxuICAgICAgaGlnaFByaW9yaXR5Q291bnQgKz0gMTtcclxuICAgICAgUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQucmVtb3ZlQ2hpbGQobG93Q2hpbGQsIGhpZ2hDaGlsZCk7XHJcbiAgICAgIEZvb3RlckNyZWF0b3IuZm9vdGVyUmVuZGVyKFBhZ2VSZW5kZXJlci5lbGVtZW50c0Fycls0XS5lbGVtZW50KTtcclxuICAgIH0gZWxzZSBpZiAoY2hvaWNlID09PSAnc3VidHJhY3QnKSB7XHJcbiAgICAgIGhpZ2hQcmlvcml0eUNvdW50IC09IDE7XHJcbiAgICAgIFBhZ2VSZW5kZXJlci5lbGVtZW50c0Fycls0XS5lbGVtZW50LnJlbW92ZUNoaWxkKGxvd0NoaWxkLCBoaWdoQ2hpbGQpO1xyXG4gICAgICBGb290ZXJDcmVhdG9yLmZvb3RlclJlbmRlcihQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbNF0uZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgZm9vdGVyUmVuZGVyLCBsb3dDb3VudEdldHRlciwgaGlnaENvdW50R2V0dGVyIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlckNyZWF0b3I7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IE1vZGFsQ3JlYXRvciBmcm9tICcuL2xpc3RNb2RhbENyZWF0b3InO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi9lbGVtZW50Q3JlYXRvcic7XHJcbmltcG9ydCBGb290ZXJDcmVhdG9yIGZyb20gJy4vZm9vdGVyQ3JlYXRvcic7XHJcbmltcG9ydCBTdG9yYWdlTWFuYWdlciBmcm9tICcuL3N0b3JhZ2VNYW5hZ2VyJztcclxuXHJcbmNvbnN0IExpc3RDYXJkQ3JlYXRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY2FyZFJlbmRlcmVyID0gKCkgPT4ge1xyXG4gICAgY2FyZENyZWF0b3IoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYXJkQ3JlYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhcmVudENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGNhcmRBcnIgPSBNb2RhbENyZWF0b3IubGlzdEFycjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjYXJkRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKHBhcmVudENhcmQsICdkaXYnLCAnY2FyZCcpO1xyXG4gICAgICBjb25zdCB0aXRsZSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjYXJkRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ3AnLFxyXG4gICAgICAgICdjYXJkLXRpdGxlJyxcclxuICAgICAgICBgVGl0bGU6ICR7Y2FyZEFycltpXS50aXRsZX1gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAncCcsXHJcbiAgICAgICAgJ2NhcmQtZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIGNhcmRBcnJbaV0uZGVzY3JpcHRpb25cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjYXJkRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ3AnLFxyXG4gICAgICAgICdjYXJkLWR1ZURhdGUnLFxyXG4gICAgICAgIGNhcmRBcnJbaV0uZHVlRGF0ZVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBwcmlvcml0eSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjYXJkRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ3AnLFxyXG4gICAgICAgICdjYXJkLXByaW9yaXR5JyxcclxuICAgICAgICBjYXJkQXJyW2ldLnByaW9yaXR5XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG5vdGVzID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAncCcsXHJcbiAgICAgICAgJ2NhcmQtbm90ZXMnLFxyXG4gICAgICAgIGNhcmRBcnJbaV0ubm90ZXNcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY29tcGxldGVEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LFxyXG4gICAgICAgICdkaXYnLFxyXG4gICAgICAgICdjb21wbGV0ZS1jb250YWluZXInXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGNoZWNrTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY29tcGxldGVEaXYuZWxlbWVudCxcclxuICAgICAgICAnbGFiZWwnLFxyXG4gICAgICAgICdjb21wbGV0ZS1sYWJlbCcsXHJcbiAgICAgICAgJ0NvbXBsZXRlOiAnXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNvbXBsZXRlRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ2lucHV0JyxcclxuICAgICAgICAnY29tcGxldGUtY2hlY2snLFxyXG4gICAgICAgICcnLFxyXG4gICAgICAgICcnLFxyXG4gICAgICAgICcnLFxyXG4gICAgICAgICdjaGVja2JveCdcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgYnV0dG9uID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAnYnV0dG9uJyxcclxuICAgICAgICAnZGVsZXRlLWJ1dHRvbicsXHJcbiAgICAgICAgJ1gnXHJcbiAgICAgICk7XHJcbiAgICAgIHN0b3JhZ2VQb3B1bGF0aW9uKGksIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIG5vdGVzKTtcclxuICAgICAgcHJpb3JpdHlDaGVjayhwcmlvcml0eSk7XHJcbiAgICAgIGNvbXBsZXRlQ2hlY2tlZChjaGVja2JveCwgY2FyZERpdik7XHJcbiAgICAgIGRlbGV0ZUxpc3RlbmVyKGJ1dHRvbiwgcGFyZW50Q2FyZCwgY2FyZERpdiwgY2FyZEFyciwgaSwgcHJpb3JpdHkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbXBsZXRlQ2hlY2tlZCA9IChjaGVja0VsZW1lbnQsIGNhcmREaXYpID0+IHtcclxuICAgIGNoZWNrRWxlbWVudC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgaWYgKGNoZWNrRWxlbWVudC5lbGVtZW50LmNoZWNrZWQpIHtcclxuICAgICAgICBjYXJkRGl2LmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM3Q0I5RTgnO1xyXG4gICAgICB9IGVsc2UgY2FyZERpdi5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWZlZmVmJztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUxpc3RlbmVyID0gKFxyXG4gICAgZGVsZXRlQnV0dG9uLFxyXG4gICAgcGFyZW50RWxlbWVudCxcclxuICAgIGNoaWxkRWxlbWVudCxcclxuICAgIGFycmF5TGlzdCxcclxuICAgIGluZGV4LFxyXG4gICAgcHJpb3JpdHlcclxuICApID0+IHtcclxuICAgIGRlbGV0ZUJ1dHRvbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAocHJpb3JpdHkuZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0xvdycpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlZCBsb3cnKTtcclxuICAgICAgICBGb290ZXJDcmVhdG9yLmxvd0NvdW50R2V0dGVyKCdzdWJ0cmFjdCcpO1xyXG4gICAgICB9IGVsc2UgaWYgKHByaW9yaXR5LmVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdIaWdoJykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGVkIGhpZ2gnKTtcclxuICAgICAgICBGb290ZXJDcmVhdG9yLmhpZ2hDb3VudEdldHRlcignc3VidHJhY3QnKTtcclxuICAgICAgfVxyXG4gICAgICBwYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkRWxlbWVudC5lbGVtZW50KTtcclxuICAgICAgYXJyYXlMaXN0LnNwbGljZShpbmRleCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IHByaW9yaXR5Q2hlY2sgPSAocHJpb3JpdHkpID0+IHtcclxuICAgIGlmIChwcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID09PSAnTG93Jykge1xyXG4gICAgICBwcmlvcml0eS5lbGVtZW50LnN0eWxlLmNvbG9yID0gJyNGRkZBRjAnO1xyXG4gICAgICBwcmlvcml0eS5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMTc3MjQ1JztcclxuICAgIH0gZWxzZSBpZiAocHJpb3JpdHkuZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0hpZ2gnKSB7XHJcbiAgICAgIHByaW9yaXR5LmVsZW1lbnQuc3R5bGUuY29sb3IgPSAnI0ZGRkFGMCc7XHJcbiAgICAgIHByaW9yaXR5LmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNCMjIyMjInO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0b3JhZ2VQb3B1bGF0aW9uID0gKFxyXG4gICAgaW5kZXgsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgcHJpb3JpdHksXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgbm90ZXNcclxuICApID0+IHtcclxuICAgIGNvbnN0IGluZGV4QWRkID0gaW5kZXggKyAxO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRpdGlsZSR7aW5kZXhBZGR9YCwgdGl0bGUuZWxlbWVudC50ZXh0Q29udGVudCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgYGRlc2NyaXB0aW9uJHtpbmRleEFkZH1gLFxyXG4gICAgICBkZXNjcmlwdGlvbi5lbGVtZW50LnRleHRDb250ZW50XHJcbiAgICApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHByaW9yaXR5JHtpbmRleEFkZH1gLCBwcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBkdURhdGUke2luZGV4QWRkfWAsIGR1ZURhdGUuZWxlbWVudC50ZXh0Q29udGVudCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgbm90ZXMke2luZGV4QWRkfWAsIG5vdGVzLmVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgY2FyZFJlbmRlcmVyIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IExpc3RDYXJkQ3JlYXRvcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi9lbGVtZW50Q3JlYXRvcic7XHJcbmltcG9ydCBMaXN0Q2FyZENyZWF0b3IgZnJvbSAnLi9saXN0Q2FyZENyZWF0b3InO1xyXG5pbXBvcnQgRm9vdGVyQ3JlYXRvciBmcm9tICcuL2Zvb3RlckNyZWF0b3InO1xyXG5pbXBvcnQgUGFnZVJlbmRlcmVyIGZyb20gJy4vcGFnZUVsZW1lbnRzJztcclxuXHJcbmNvbnN0IE1vZGFsQ3JlYXRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XHJcbiAgY29uc3QgbGlzdEFyciA9IFtdO1xyXG4gIGNsYXNzIExpc3RFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZS52YWx1ZTtcclxuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnZhbHVlO1xyXG4gICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlLnZhbHVlO1xyXG4gICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHkudmFsdWU7XHJcbiAgICAgIHRoaXMubm90ZXMgPSBub3Rlcy52YWx1ZTtcclxuICAgICAgdGhpcy5jaGVja2xpc3QgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGxpc3RDcmVhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGlzdE1vZGFsID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYXJlbnRFbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ21vZGFsLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBsaXN0RGl2aXNpb24gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGxpc3RNb2RhbC5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2Zvcm0tY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgbGlzdERpdmlzaW9uLmVsZW1lbnQsXHJcbiAgICAgICdoMScsXHJcbiAgICAgICdmb3JtLXRpdGxlJyxcclxuICAgICAgJ05ldyBJdGVtJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGZvcm1CbG9jayA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgbGlzdERpdmlzaW9uLmVsZW1lbnQsXHJcbiAgICAgICdmb3JtJyxcclxuICAgICAgJ2Zvcm0tYmxvY2snXHJcbiAgICApO1xyXG4gICAgY29uc3QgZmllbGRzZXRGb3JtID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmb3JtQmxvY2suZWxlbWVudCxcclxuICAgICAgJ2ZpZWxkc2V0JyxcclxuICAgICAgJ2Zvcm0tZmllbGRzZXQnXHJcbiAgICApO1xyXG4gICAgY29uc3QgZmllbGRzZXRMZWdlbmQgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnbGVnZW5kJyxcclxuICAgICAgJ2Zvcm0tZmllbGRzZXQtbGVnZW5kJyxcclxuICAgICAgJ1RvLURvIEl0ZW0nXHJcbiAgICApO1xyXG4gICAgY29uc3QgdGl0bGVEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3RvZG8tdGl0bGUnXHJcbiAgICApO1xyXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgdGl0bGVEaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ3RpdGxlLWxhYmVsJyxcclxuICAgICAgJ1RpdGxlOicsXHJcbiAgICAgICcnLFxyXG4gICAgICAndGl0bGUnXHJcbiAgICApO1xyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgdGl0bGVEaXYuZWxlbWVudCxcclxuICAgICAgJ2lucHV0JyxcclxuICAgICAgJ3RpdGxlLWlucHV0JyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAndGl0bGUnLFxyXG4gICAgICAndGV4dCdcclxuICAgICk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZmllbGRzZXRGb3JtLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAndG9kby1kZXNjcmlwdGlvbidcclxuICAgICk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBkZXNjcmlwdGlvbkRpdi5lbGVtZW50LFxyXG4gICAgICAnbGFiZWwnLFxyXG4gICAgICAnZGVzLWxhYmVsJyxcclxuICAgICAgJ0Rlc2NyaXB0aW9uOicsXHJcbiAgICAgICcnLFxyXG4gICAgICAnZGVzY3JpcHRpb24nXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZGVzY3JpcHRpb25EaXYuZWxlbWVudCxcclxuICAgICAgJ2lucHV0JyxcclxuICAgICAgJ2Rlcy1pbnB1dCcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgJ3RleHQnXHJcbiAgICApO1xyXG4gICAgY29uc3QgZHVlRGF0ZURpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZmllbGRzZXRGb3JtLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAndG9kby1kdWVEYXRlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZHVlRGF0ZURpdi5lbGVtZW50LFxyXG4gICAgICAnbGFiZWwnLFxyXG4gICAgICAnZHVlRGF0ZS1sYWJlbCcsXHJcbiAgICAgICdEdWUgRGF0ZTogJyxcclxuICAgICAgJycsXHJcbiAgICAgICdkdWVEYXRlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZHVlRGF0ZURpdi5lbGVtZW50LFxyXG4gICAgICAnaW5wdXQnLFxyXG4gICAgICAnZHVlRGF0ZS1pbnB1dCcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ2R1ZURhdGUnLFxyXG4gICAgICAnZGF0ZSdcclxuICAgICk7XHJcbiAgICBjb25zdCBwcmlvcml0eURpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZmllbGRzZXRGb3JtLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAndG9kby1wcmlvcml0eSdcclxuICAgICk7XHJcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwcmlvcml0eURpdi5lbGVtZW50LFxyXG4gICAgICAnbGFiZWwnLFxyXG4gICAgICAndG9kby1wcmlvcml0eScsXHJcbiAgICAgICdQcmlvcml0eTogJyxcclxuICAgICAgJycsXHJcbiAgICAgICdwcmlvcml0eSdcclxuICAgICk7XHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcHJpb3JpdHlEaXYuZWxlbWVudCxcclxuICAgICAgJ3NlbGVjdCcsXHJcbiAgICAgICdwcmlvcml0eS1zZWxlY3QnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdwcmlvcml0eSdcclxuICAgICk7XHJcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbjEgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHByaW9yaXR5U2VsZWN0LmVsZW1lbnQsXHJcbiAgICAgICdvcHRpb24nLFxyXG4gICAgICAnc2VsZWN0aW9uJyxcclxuICAgICAgJy0tUGxlYXNlIENob29zZSBQcmlvcml0eScsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdcIlwiJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uMiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcHJpb3JpdHlTZWxlY3QuZWxlbWVudCxcclxuICAgICAgJ29wdGlvbicsXHJcbiAgICAgICdzZWxlY3Rpb24nLFxyXG4gICAgICAnTG93JyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ0xvdydcclxuICAgICk7XHJcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbjMgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHByaW9yaXR5U2VsZWN0LmVsZW1lbnQsXHJcbiAgICAgICdvcHRpb24nLFxyXG4gICAgICAnc2VsZWN0aW9uJyxcclxuICAgICAgJ0hpZ2gnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnSGlnaCdcclxuICAgICk7XHJcbiAgICBjb25zdCBub3Rlc0RpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZmllbGRzZXRGb3JtLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnbm90ZXMtdGV4dGFyZWEnXHJcbiAgICApO1xyXG4gICAgY29uc3Qgbm90ZXNMYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgbm90ZXNEaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ25vdGVzLWxhYmVsJyxcclxuICAgICAgJ05vdGVzOiAnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ25vdGVzJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IG5vdGVzVGV4dEFyZWEgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIG5vdGVzRGl2LmVsZW1lbnQsXHJcbiAgICAgICd0ZXh0YXJlYScsXHJcbiAgICAgICdub3Rlcy10ZXh0J1xyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBidXR0b25EaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2J1dHRvbi1kaXYnXHJcbiAgICApO1xyXG4gICAgY29uc3QgZm9ybUJ1dHRvbiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgYnV0dG9uRGl2LmVsZW1lbnQsXHJcbiAgICAgICdidXR0b24nLFxyXG4gICAgICAnZm9ybS1idXR0b24nLFxyXG4gICAgICAnQ3JlYXRlIEl0ZW0nXHJcbiAgICApO1xyXG4gICAgZm9ybVN1Ym1pdChcclxuICAgICAgZm9ybUJ1dHRvbi5lbGVtZW50LFxyXG4gICAgICBsaXN0TW9kYWwuZWxlbWVudCxcclxuICAgICAgbGlzdEFycixcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlLWlucHV0JyksXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXMtaW5wdXQnKSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZURhdGUtaW5wdXQnKSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LXNlbGVjdCcpLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtdGV4dCcpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxpc3RPamVjdENyZWF0b3IgPSAoXHJcbiAgICBzdG9yYWdlLFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGR1ZURhdGUsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIG5vdGVzXHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0T2JqZWN0ID0gbmV3IExpc3RFbGVtZW50KFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGR1ZURhdGUsXHJcbiAgICAgIHByaW9yaXR5LFxyXG4gICAgICBub3Rlc1xyXG4gICAgKTtcclxuXHJcbiAgICBzdG9yYWdlLnB1c2gobGlzdE9iamVjdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0Q291bnRlck51bWJlciA9IChwcmlvcml0eSkgPT4ge1xyXG4gICAgaWYgKHByaW9yaXR5LnZhbHVlID09PSAnTG93Jykge1xyXG4gICAgICBGb290ZXJDcmVhdG9yLmxvd0NvdW50R2V0dGVyKCdhZGQnKTtcclxuICAgIH0gZWxzZSBpZiAocHJpb3JpdHkudmFsdWUgPT09ICdIaWdoJykge1xyXG4gICAgICBGb290ZXJDcmVhdG9yLmhpZ2hDb3VudEdldHRlcignYWRkJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybVN1Ym1pdCA9IChcclxuICAgIGJ1dHRvbixcclxuICAgIGNoaWxkRWxlbWVudCxcclxuICAgIHN0b3JhZ2UsXHJcbiAgICB0aXRsZUlucHV0LFxyXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcclxuICAgIGR1ZURhdGVJbnB1dCxcclxuICAgIHByaW9yaXR5SW5wdXQsXHJcbiAgICBub3Rlc0lucHV0XHJcbiAgKSA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGxpc3RPamVjdENyZWF0b3IoXHJcbiAgICAgICAgc3RvcmFnZSxcclxuICAgICAgICB0aXRsZUlucHV0LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQsXHJcbiAgICAgICAgZHVlRGF0ZUlucHV0LFxyXG4gICAgICAgIHByaW9yaXR5SW5wdXQsXHJcbiAgICAgICAgbm90ZXNJbnB1dFxyXG4gICAgICApO1xyXG4gICAgICBwYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkRWxlbWVudCk7XHJcbiAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1jb250YWluZXInKS50ZXh0Q29udGVudCA9ICcnKSxcclxuICAgICAgICBMaXN0Q2FyZENyZWF0b3IuY2FyZFJlbmRlcmVyKCk7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHNldENvdW50ZXJOdW1iZXIocHJpb3JpdHlJbnB1dCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBsaXN0Q3JlYXRvciwgbGlzdEFyciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBNb2RhbENyZWF0b3I7XHJcbiIsImltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuL2VsZW1lbnRDcmVhdG9yJztcclxuaW1wb3J0IEZvb3RlckNyZWF0b3IgZnJvbSAnLi9mb290ZXJDcmVhdG9yJztcclxuXHJcbmNvbnN0IFBhZ2VSZW5kZXJlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcclxuICBjb25zdCBlbGVtZW50c0FyciA9IFtdO1xyXG5cclxuICBjb25zdCBwYWdlUmVuZGVyID0gKCkgPT4ge1xyXG4gICAgcGFyZW50Q3JlYXRvcigpO1xyXG4gICAgRm9vdGVyQ3JlYXRvci5mb290ZXJSZW5kZXIoZWxlbWVudHNBcnJbNF0uZWxlbWVudCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGFyZW50Q3JlYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhZ2VDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhcmVudENvbnRhaW5lcixcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdwYWdlLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnaGVhZGluZy1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFnZUNvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3NpZGViYXItY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhZ2VDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdsaXN0LWNvbnRhaW5lcidcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnZm9vdGVyLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBlbGVtZW50c0Fyci5wdXNoKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLFxyXG4gICAgICBoZWFkaW5nQ29udGFpbmVyLFxyXG4gICAgICBzaWRlYmFyQ29udGFpbmVyLFxyXG4gICAgICBsaXN0Q29udGFpbmVyLFxyXG4gICAgICBmb290ZXJDb250YWluZXJcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFnZUNvbnRhaW5lcixcclxuICAgICAgaGVhZGluZ0NvbnRhaW5lcixcclxuICAgICAgc2lkZWJhckNvbnRhaW5lcixcclxuICAgICAgbGlzdENvbnRhaW5lcixcclxuICAgICAgZm9vdGVyQ29udGFpbmVyLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBwYWdlUmVuZGVyLCBlbGVtZW50c0FyciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBQYWdlUmVuZGVyZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFN0b3JhZ2VNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBsaXN0UGFyYW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJyk7XHJcbiAgY29uc3Qgc3RvcmFnZUFyciA9IFtdO1xyXG5cclxuICBjb25zdCBzdG9yYWdlU3RhcnQgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U3RvcmFnZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgc2V0U3RvcmFnZSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIHN0b3JhZ2UnKTtcclxuICB9O1xyXG4gIGNvbnN0IHBvcHVsYXRlU3RvcmFnZSA9ICgpID0+IHtcclxuICAgIGNyZWF0ZVN0b3JhZ2VDYXJkKDEpO1xyXG4gICAgY29uc29sZS5sb2coJ3BvcHVsYXRpbmcgc3RvcmFnZScpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVN0b3JhZ2VDYXJkID0gKGluZGV4KSA9PiB7XHJcbiAgICBsZXQgdGl0bGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdGl0bGUke2luZGV4fWApO1xyXG4gICAgY29uc29sZS5sb2codGl0bGUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgc3RvcmFnZVN0YXJ0LCBwb3B1bGF0ZVN0b3JhZ2UsIHN0b3JhZ2VBcnIgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZU1hbmFnZXI7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==