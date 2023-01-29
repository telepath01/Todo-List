"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["headingElement"],{

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

/***/ "./src/headingElement.js":
/*!*******************************!*\
  !*** ./src/headingElement.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/elementCreator.js");
/* harmony import */ var _pageElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageElements */ "./src/pageElements.js");




const HeadingElement = (function () {
  const parentElement = _pageElements__WEBPACK_IMPORTED_MODULE_1__["default"].elementsArr;
  const headingRenderer = () => {
    headingCreator();
  };

  const headingCreator = () => {
    const title = new _elementCreator__WEBPACK_IMPORTED_MODULE_0__["default"](
      parentElement[1].element,
      'h1',
      'title-element',
      'TO-DO List'
    );
  };

  return { headingRenderer };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadingElement);


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
/* harmony import */ var _listCardCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listCardCreator */ "./src/listCardCreator.js");



const PageRenderer = (function () {
  const parentContainer = document.body;
  const elementsArr = [];

  const pageRender = () => {
    parentCreator();
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/headingElement.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGluZ0VsZW1lbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEakI7QUFDaUM7QUFDSjtBQUMxQztBQUNBO0FBQ0Esd0JBQXdCLGlFQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVEQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRCxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJqQjtBQUNpQztBQUNBO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUVBQW9CO0FBQ3hDLG9CQUFvQixvQkFBb0I7QUFDeEMsMEJBQTBCLHVEQUFjO0FBQ3hDLHdCQUF3Qix1REFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0EsOEJBQThCLHVEQUFjO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdURBQWM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix1REFBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVEQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdURBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdURBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix1REFBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVEQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0QsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHbEI7QUFDaUM7QUFDRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix1REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix1REFBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix1REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVEQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVEQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVEQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdURBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdURBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdURBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix1REFBYztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1REFBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1REFBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVEQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVEQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVEQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdURBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdURBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsdURBQWM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsdURBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVEQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1REFBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdURBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdURBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdURBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix1REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix1REFBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQTRCO0FBQ3BDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNELGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsUWtCO0FBQ0U7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdURBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdURBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdURBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdURBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1REFBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNELGlFQUFlLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lbGVtZW50Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGluZ0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xpc3RDYXJkQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGlzdE1vZGFsQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZUVsZW1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuY2xhc3MgRWxlbWVudENyZWF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcGFyZW50RWxlbWVudCxcclxuICAgIGVsZW1lbnQsXHJcbiAgICBjbGFzc25hbWUsXHJcbiAgICBjb250ZW50LFxyXG4gICAgaW1nLFxyXG4gICAgaWQsXHJcbiAgICB0eXBlLFxyXG4gICAgbGlzdFZhbHVlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgdGhpcy5jbGFzc25hbWUgPSB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NuYW1lO1xyXG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5zZXRDb250ZXh0KGNvbnRlbnQpO1xyXG4gICAgdGhpcy5pbWcgPSB0aGlzLnNldEltYWdlKGltZyk7XHJcbiAgICB0aGlzLmlkID0gdGhpcy5sYWJlbFBsYWNlbWVudChpZCk7XHJcbiAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVQbGFjZW1lbnQodHlwZSk7XHJcbiAgICB0aGlzLmxpc3RWYWx1ZSA9IHRoaXMudmFsdWVQbGFjZW1lbnQobGlzdFZhbHVlKTtcclxuICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHRoaXMuZWxlbWVudFBsYWNlbWVudChwYXJlbnRFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHNldENvbnRleHQoY29udGVudCkge1xyXG4gICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRJbWFnZShpbWcpIHtcclxuICAgIGlmIChpbWcpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnNyYyA9IGltZztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbGVtZW50UGxhY2VtZW50KHBhcmVudEVsZW1lbnQpIHtcclxuICAgIGlmIChwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxhYmVsUGxhY2VtZW50KGlkKSB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuICB0eXBlUGxhY2VtZW50KGlucHV0VHlwZSkge1xyXG4gICAgaWYgKGlucHV0VHlwZSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRUeXBlKTtcclxuICAgIH1cclxuICB9XHJcbiAgdmFsdWVQbGFjZW1lbnQobGlzdFZhbHVlKSB7XHJcbiAgICBpZiAobGlzdFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbGlzdFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnRDcmVhdG9yO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuL2VsZW1lbnRDcmVhdG9yJztcclxuaW1wb3J0IFBhZ2VSZW5kZXJlciBmcm9tICcuL3BhZ2VFbGVtZW50cyc7XHJcblxyXG5jb25zdCBIZWFkaW5nRWxlbWVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IFBhZ2VSZW5kZXJlci5lbGVtZW50c0FycjtcclxuICBjb25zdCBoZWFkaW5nUmVuZGVyZXIgPSAoKSA9PiB7XHJcbiAgICBoZWFkaW5nQ3JlYXRvcigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhlYWRpbmdDcmVhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGl0bGUgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhcmVudEVsZW1lbnRbMV0uZWxlbWVudCxcclxuICAgICAgJ2gxJyxcclxuICAgICAgJ3RpdGxlLWVsZW1lbnQnLFxyXG4gICAgICAnVE8tRE8gTGlzdCdcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgaGVhZGluZ1JlbmRlcmVyIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmdFbGVtZW50O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBNb2RhbENyZWF0b3IgZnJvbSAnLi9saXN0TW9kYWxDcmVhdG9yJztcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4vZWxlbWVudENyZWF0b3InO1xyXG5cclxuY29uc3QgTGlzdENhcmRDcmVhdG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjYXJkUmVuZGVyZXIgPSAoKSA9PiB7XHJcbiAgICBjYXJkQ3JlYXRvcigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhcmRDcmVhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFyZW50Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgY2FyZEFyciA9IE1vZGFsQ3JlYXRvci5saXN0QXJyO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNhcmREaXYgPSBuZXcgRWxlbWVudENyZWF0b3IocGFyZW50Q2FyZCwgJ2RpdicsICdjYXJkJyk7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAncCcsXHJcbiAgICAgICAgJ2NhcmQtdGl0bGUnLFxyXG4gICAgICAgIGBUaXRsZTogJHtjYXJkQXJyW2ldLnRpdGxlfWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LFxyXG4gICAgICAgICdwJyxcclxuICAgICAgICAnY2FyZC1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgY2FyZEFycltpXS5kZXNjcmlwdGlvblxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkdWVEYXRlID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAncCcsXHJcbiAgICAgICAgJ2NhcmQtZHVlRGF0ZScsXHJcbiAgICAgICAgY2FyZEFycltpXS5kdWVEYXRlXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudCxcclxuICAgICAgICAncCcsXHJcbiAgICAgICAgJ2NhcmQtcHJpb3JpdHknLFxyXG4gICAgICAgIGNhcmRBcnJbaV0ucHJpb3JpdHlcclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgbm90ZXMgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LFxyXG4gICAgICAgICdwJyxcclxuICAgICAgICAnY2FyZC1ub3RlcycsXHJcbiAgICAgICAgY2FyZEFycltpXS5ub3Rlc1xyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBjb21wbGV0ZURpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjYXJkRGl2LmVsZW1lbnQsXHJcbiAgICAgICAgJ2RpdicsXHJcbiAgICAgICAgJ2NvbXBsZXRlLWNvbnRhaW5lcidcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY2hlY2tMYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgICBjb21wbGV0ZURpdi5lbGVtZW50LFxyXG4gICAgICAgICdsYWJlbCcsXHJcbiAgICAgICAgJ2NvbXBsZXRlLWxhYmVsJyxcclxuICAgICAgICAnQ29tcGxldGU6ICdcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY2hlY2tib3ggPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY29tcGxldGVEaXYuZWxlbWVudCxcclxuICAgICAgICAnaW5wdXQnLFxyXG4gICAgICAgICdjb21wbGV0ZS1jaGVjaycsXHJcbiAgICAgICAgJycsXHJcbiAgICAgICAgJycsXHJcbiAgICAgICAgJycsXHJcbiAgICAgICAgJ2NoZWNrYm94J1xyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBidXR0b24gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LFxyXG4gICAgICAgICdidXR0b24nLFxyXG4gICAgICAgICdkZWxldGUtYnV0dG9uJyxcclxuICAgICAgICAnWCdcclxuICAgICAgKTtcclxuICAgICAgY29tcGxldGVDaGVja2VkKGNoZWNrYm94LCBjYXJkRGl2KTtcclxuICAgICAgZGVsZXRlTGlzdGVuZXIoYnV0dG9uLCBwYXJlbnRDYXJkLCBjYXJkRGl2LCBjYXJkQXJyLCBpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjb21wbGV0ZUNoZWNrZWQgPSAoY2hlY2tFbGVtZW50LCBjYXJkRGl2KSA9PiB7XHJcbiAgICBjaGVja0VsZW1lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIGlmIChjaGVja0VsZW1lbnQuZWxlbWVudC5jaGVja2VkKSB7XHJcbiAgICAgICAgY2FyZERpdi5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjN0NCOUU4JztcclxuICAgICAgfSBlbHNlIGNhcmREaXYuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2VmZWZlZic7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVMaXN0ZW5lciA9IChcclxuICAgIGRlbGV0ZUJ1dHRvbixcclxuICAgIHBhcmVudEVsZW1lbnQsXHJcbiAgICBjaGlsZEVsZW1lbnQsXHJcbiAgICBhcnJheUxpc3QsXHJcbiAgICBpbmRleFxyXG4gICkgPT4ge1xyXG4gICAgZGVsZXRlQnV0dG9uLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGRFbGVtZW50LmVsZW1lbnQpO1xyXG4gICAgICBhcnJheUxpc3Quc3BsaWNlKGluZGV4KTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgY2FyZFJlbmRlcmVyIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IExpc3RDYXJkQ3JlYXRvcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi9lbGVtZW50Q3JlYXRvcic7XHJcbmltcG9ydCBMaXN0Q2FyZENyZWF0b3IgZnJvbSAnLi9saXN0Q2FyZENyZWF0b3InO1xyXG5cclxuY29uc3QgTW9kYWxDcmVhdG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcclxuICBjb25zdCBsaXN0QXJyID0gW107XHJcbiAgY2xhc3MgTGlzdEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcclxuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlLnZhbHVlO1xyXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24udmFsdWU7XHJcbiAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUudmFsdWU7XHJcbiAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eS52YWx1ZTtcclxuICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzLnZhbHVlO1xyXG4gICAgICB0aGlzLmNoZWNrbGlzdCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbGlzdENyZWF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0TW9kYWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhcmVudEVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnbW9kYWwtY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGxpc3REaXZpc2lvbiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgbGlzdE1vZGFsLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnZm9ybS1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgZm9ybVRpdGxlID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBsaXN0RGl2aXNpb24uZWxlbWVudCxcclxuICAgICAgJ2gxJyxcclxuICAgICAgJ2Zvcm0tdGl0bGUnLFxyXG4gICAgICAnTmV3IEl0ZW0nXHJcbiAgICApO1xyXG4gICAgY29uc3QgZm9ybUJsb2NrID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBsaXN0RGl2aXNpb24uZWxlbWVudCxcclxuICAgICAgJ2Zvcm0nLFxyXG4gICAgICAnZm9ybS1ibG9jaydcclxuICAgICk7XHJcbiAgICBjb25zdCBmaWVsZHNldEZvcm0gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZvcm1CbG9jay5lbGVtZW50LFxyXG4gICAgICAnZmllbGRzZXQnLFxyXG4gICAgICAnZm9ybS1maWVsZHNldCdcclxuICAgICk7XHJcbiAgICBjb25zdCBmaWVsZHNldExlZ2VuZCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZmllbGRzZXRGb3JtLmVsZW1lbnQsXHJcbiAgICAgICdsZWdlbmQnLFxyXG4gICAgICAnZm9ybS1maWVsZHNldC1sZWdlbmQnLFxyXG4gICAgICAnVG8tRG8gSXRlbSdcclxuICAgICk7XHJcbiAgICBjb25zdCB0aXRsZURpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZmllbGRzZXRGb3JtLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAndG9kby10aXRsZSdcclxuICAgICk7XHJcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICB0aXRsZURpdi5lbGVtZW50LFxyXG4gICAgICAnbGFiZWwnLFxyXG4gICAgICAndGl0bGUtbGFiZWwnLFxyXG4gICAgICAnVGl0bGU6JyxcclxuICAgICAgJycsXHJcbiAgICAgICd0aXRsZSdcclxuICAgICk7XHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICB0aXRsZURpdi5lbGVtZW50LFxyXG4gICAgICAnaW5wdXQnLFxyXG4gICAgICAndGl0bGUtaW5wdXQnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICd0aXRsZScsXHJcbiAgICAgICd0ZXh0J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICd0b2RvLWRlc2NyaXB0aW9uJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGRlc2NyaXB0aW9uRGl2LmVsZW1lbnQsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICdkZXMtbGFiZWwnLFxyXG4gICAgICAnRGVzY3JpcHRpb246JyxcclxuICAgICAgJycsXHJcbiAgICAgICdkZXNjcmlwdGlvbidcclxuICAgICk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBkZXNjcmlwdGlvbkRpdi5lbGVtZW50LFxyXG4gICAgICAnaW5wdXQnLFxyXG4gICAgICAnZGVzLWlucHV0JyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnZGVzY3JpcHRpb24nLFxyXG4gICAgICAndGV4dCdcclxuICAgICk7XHJcbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICd0b2RvLWR1ZURhdGUnXHJcbiAgICApO1xyXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBkdWVEYXRlRGl2LmVsZW1lbnQsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICdkdWVEYXRlLWxhYmVsJyxcclxuICAgICAgJ0R1ZSBEYXRlOiAnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ2R1ZURhdGUnXHJcbiAgICApO1xyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBkdWVEYXRlRGl2LmVsZW1lbnQsXHJcbiAgICAgICdpbnB1dCcsXHJcbiAgICAgICdkdWVEYXRlLWlucHV0JyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnZHVlRGF0ZScsXHJcbiAgICAgICdkYXRlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICd0b2RvLXByaW9yaXR5J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHByaW9yaXR5RGl2LmVsZW1lbnQsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICd0b2RvLXByaW9yaXR5JyxcclxuICAgICAgJ1ByaW9yaXR5OiAnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ3ByaW9yaXR5J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwcmlvcml0eURpdi5lbGVtZW50LFxyXG4gICAgICAnc2VsZWN0JyxcclxuICAgICAgJ3ByaW9yaXR5LXNlbGVjdCcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ3ByaW9yaXR5J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uMSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcHJpb3JpdHlTZWxlY3QuZWxlbWVudCxcclxuICAgICAgJ29wdGlvbicsXHJcbiAgICAgICdzZWxlY3Rpb24nLFxyXG4gICAgICAnLS1QbGVhc2UgQ2hvb3NlIFByaW9yaXR5JyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ1wiXCInXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb24yID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwcmlvcml0eVNlbGVjdC5lbGVtZW50LFxyXG4gICAgICAnb3B0aW9uJyxcclxuICAgICAgJ3NlbGVjdGlvbicsXHJcbiAgICAgICdMb3cnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnTG93J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uMyA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcHJpb3JpdHlTZWxlY3QuZWxlbWVudCxcclxuICAgICAgJ29wdGlvbicsXHJcbiAgICAgICdzZWxlY3Rpb24nLFxyXG4gICAgICAnSGlnaCcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdIaWdoJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IG5vdGVzRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdub3Rlcy10ZXh0YXJlYSdcclxuICAgICk7XHJcbiAgICBjb25zdCBub3Rlc0xhYmVsID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBub3Rlc0Rpdi5lbGVtZW50LFxyXG4gICAgICAnbGFiZWwnLFxyXG4gICAgICAnbm90ZXMtbGFiZWwnLFxyXG4gICAgICAnTm90ZXM6ICcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnbm90ZXMnXHJcbiAgICApO1xyXG4gICAgY29uc3Qgbm90ZXNUZXh0QXJlYSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgbm90ZXNEaXYuZWxlbWVudCxcclxuICAgICAgJ3RleHRhcmVhJyxcclxuICAgICAgJ25vdGVzLXRleHQnXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZmllbGRzZXRGb3JtLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnYnV0dG9uLWRpdidcclxuICAgICk7XHJcbiAgICBjb25zdCBmb3JtQnV0dG9uID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBidXR0b25EaXYuZWxlbWVudCxcclxuICAgICAgJ2J1dHRvbicsXHJcbiAgICAgICdmb3JtLWJ1dHRvbicsXHJcbiAgICAgICdDcmVhdGUgSXRlbSdcclxuICAgICk7XHJcbiAgICBmb3JtU3VibWl0KFxyXG4gICAgICBmb3JtQnV0dG9uLmVsZW1lbnQsXHJcbiAgICAgIGxpc3RNb2RhbC5lbGVtZW50LFxyXG4gICAgICBsaXN0QXJyLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtaW5wdXQnKSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlcy1pbnB1dCcpLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlRGF0ZS1pbnB1dCcpLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktc2VsZWN0JyksXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy10ZXh0JylcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGlzdE9qZWN0Q3JlYXRvciA9IChcclxuICAgIHN0b3JhZ2UsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgbm90ZXNcclxuICApID0+IHtcclxuICAgIGNvbnN0IGxpc3RPYmplY3QgPSBuZXcgTGlzdEVsZW1lbnQoXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgZHVlRGF0ZSxcclxuICAgICAgcHJpb3JpdHksXHJcbiAgICAgIG5vdGVzXHJcbiAgICApO1xyXG5cclxuICAgIHN0b3JhZ2UucHVzaChsaXN0T2JqZWN0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtU3VibWl0ID0gKFxyXG4gICAgYnV0dG9uLFxyXG4gICAgY2hpbGRFbGVtZW50LFxyXG4gICAgc3RvcmFnZSxcclxuICAgIHRpdGxlSW5wdXQsXHJcbiAgICBkZXNjcmlwdGlvbklucHV0LFxyXG4gICAgZHVlRGF0ZUlucHV0LFxyXG4gICAgcHJpb3JpdHlJbnB1dCxcclxuICAgIG5vdGVzSW5wdXRcclxuICApID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGlzdE9qZWN0Q3JlYXRvcihcclxuICAgICAgICBzdG9yYWdlLFxyXG4gICAgICAgIHRpdGxlSW5wdXQsXHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dCxcclxuICAgICAgICBkdWVEYXRlSW5wdXQsXHJcbiAgICAgICAgcHJpb3JpdHlJbnB1dCxcclxuICAgICAgICBub3Rlc0lucHV0XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBwYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkRWxlbWVudCk7XHJcbiAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1jb250YWluZXInKS50ZXh0Q29udGVudCA9ICcnKSxcclxuICAgICAgICBMaXN0Q2FyZENyZWF0b3IuY2FyZFJlbmRlcmVyKCk7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBsaXN0Q3JlYXRvciwgbGlzdEFyciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBNb2RhbENyZWF0b3I7XHJcbiIsImltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuL2VsZW1lbnRDcmVhdG9yJztcclxuaW1wb3J0IExpc3RDYXJkQ3JlYXRvciBmcm9tICcuL2xpc3RDYXJkQ3JlYXRvcic7XHJcblxyXG5jb25zdCBQYWdlUmVuZGVyZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LmJvZHk7XHJcbiAgY29uc3QgZWxlbWVudHNBcnIgPSBbXTtcclxuXHJcbiAgY29uc3QgcGFnZVJlbmRlciA9ICgpID0+IHtcclxuICAgIHBhcmVudENyZWF0b3IoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwYXJlbnRDcmVhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFnZUNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFyZW50Q29udGFpbmVyLFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3BhZ2UtY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGhlYWRpbmdDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhZ2VDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdoZWFkaW5nLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnc2lkZWJhci1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFnZUNvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2xpc3QtY29udGFpbmVyJ1xyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhZ2VDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdmb290ZXItY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGVsZW1lbnRzQXJyLnB1c2goXHJcbiAgICAgIHBhZ2VDb250YWluZXIsXHJcbiAgICAgIGhlYWRpbmdDb250YWluZXIsXHJcbiAgICAgIHNpZGViYXJDb250YWluZXIsXHJcbiAgICAgIGxpc3RDb250YWluZXIsXHJcbiAgICAgIGZvb3RlckNvbnRhaW5lclxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYWdlQ29udGFpbmVyLFxyXG4gICAgICBoZWFkaW5nQ29udGFpbmVyLFxyXG4gICAgICBzaWRlYmFyQ29udGFpbmVyLFxyXG4gICAgICBsaXN0Q29udGFpbmVyLFxyXG4gICAgICBmb290ZXJDb250YWluZXIsXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IHBhZ2VSZW5kZXIsIGVsZW1lbnRzQXJyIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VSZW5kZXJlcjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9