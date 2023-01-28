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
/* harmony import */ var _pageElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageElements */ "./src/pageElements.js");




const ModalCreator = (function () {
  const parentElement = document.body;
  const listArr = [];
  class ListElement {
    constructor(storageArr, title, description, dueDate, priority, notes) {
      this.storageArr = this.sendtoArr(storageArr);
      this.title = title.value;
      this.description = description.value;
      this.dueDate = dueDate.value;
      this.priority = priority.value;
      this.notes = notes.value;
      this.checklist = false;
    }

    sendtoArr() {
      if (this.storageArr) {
        this.storageArr.push();
      }
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
      storage,
      title,
      description,
      dueDate,
      priority,
      notes
    );
    console.log(listObject);
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

      console.log('working');
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
/* harmony import */ var _headingElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headingElement */ "./src/headingElement.js");



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RGY7QUFDaUM7QUFDSjtBQUNJO0FBQzlDO0FBQ0E7QUFDQSx3QkFBd0IsaUVBQXdCO0FBQ2hEO0FBQ0E7QUFDQSwwQkFBMEIsdURBQWM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdURBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0scUVBQXdCO0FBQzlCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNELGlFQUFlLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lbGVtZW50Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGluZ0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xpc3RNb2RhbENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhckVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5jbGFzcyBFbGVtZW50Q3JlYXRvciB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwYXJlbnRFbGVtZW50LFxyXG4gICAgZWxlbWVudCxcclxuICAgIGNsYXNzbmFtZSxcclxuICAgIGNvbnRlbnQsXHJcbiAgICBpbWcsXHJcbiAgICBpZCxcclxuICAgIHR5cGUsXHJcbiAgICBsaXN0VmFsdWVcclxuICApIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICB0aGlzLmNsYXNzbmFtZSA9IHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc25hbWU7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLnNldENvbnRleHQoY29udGVudCk7XHJcbiAgICB0aGlzLmltZyA9IHRoaXMuc2V0SW1hZ2UoaW1nKTtcclxuICAgIHRoaXMuaWQgPSB0aGlzLmxhYmVsUGxhY2VtZW50KGlkKTtcclxuICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZVBsYWNlbWVudCh0eXBlKTtcclxuICAgIHRoaXMubGlzdFZhbHVlID0gdGhpcy52YWx1ZVBsYWNlbWVudChsaXN0VmFsdWUpO1xyXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gdGhpcy5lbGVtZW50UGxhY2VtZW50KHBhcmVudEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGV4dChjb250ZW50KSB7XHJcbiAgICBpZiAoY29udGVudCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEltYWdlKGltZykge1xyXG4gICAgaWYgKGltZykge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc3JjID0gaW1nO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsZW1lbnRQbGFjZW1lbnQocGFyZW50RWxlbWVudCkge1xyXG4gICAgaWYgKHBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcy5lbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcbiAgbGFiZWxQbGFjZW1lbnQoaWQpIHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHR5cGVQbGFjZW1lbnQoaW5wdXRUeXBlKSB7XHJcbiAgICBpZiAoaW5wdXRUeXBlKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpbnB1dFR5cGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICB2YWx1ZVBsYWNlbWVudChsaXN0VmFsdWUpIHtcclxuICAgIGlmIChsaXN0VmFsdWUpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBsaXN0VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudENyZWF0b3I7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4vZWxlbWVudENyZWF0b3InO1xyXG5pbXBvcnQgUGFnZVJlbmRlcmVyIGZyb20gJy4vcGFnZUVsZW1lbnRzJztcclxuXHJcbmNvbnN0IEhlYWRpbmdFbGVtZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyO1xyXG4gIGNvbnN0IGhlYWRpbmdSZW5kZXJlciA9ICgpID0+IHtcclxuICAgIGhlYWRpbmdDcmVhdG9yKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGVhZGluZ0NyZWF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFyZW50RWxlbWVudFsxXS5lbGVtZW50LFxyXG4gICAgICAnaDEnLFxyXG4gICAgICAndGl0bGUtZWxlbWVudCcsXHJcbiAgICAgICdUTy1ETyBMaXN0J1xyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBoZWFkaW5nUmVuZGVyZXIgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZ0VsZW1lbnQ7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4vZWxlbWVudENyZWF0b3InO1xyXG5pbXBvcnQgUGFnZVJlbmRlcmVyIGZyb20gJy4vcGFnZUVsZW1lbnRzJztcclxuXHJcbmNvbnN0IE1vZGFsQ3JlYXRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XHJcbiAgY29uc3QgbGlzdEFyciA9IFtdO1xyXG4gIGNsYXNzIExpc3RFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHN0b3JhZ2VBcnIsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XHJcbiAgICAgIHRoaXMuc3RvcmFnZUFyciA9IHRoaXMuc2VuZHRvQXJyKHN0b3JhZ2VBcnIpO1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGUudmFsdWU7XHJcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi52YWx1ZTtcclxuICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZS52YWx1ZTtcclxuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlO1xyXG4gICAgICB0aGlzLm5vdGVzID0gbm90ZXMudmFsdWU7XHJcbiAgICAgIHRoaXMuY2hlY2tsaXN0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZHRvQXJyKCkge1xyXG4gICAgICBpZiAodGhpcy5zdG9yYWdlQXJyKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlQXJyLnB1c2goKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbGlzdENyZWF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0TW9kYWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhcmVudEVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnbW9kYWwtY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGxpc3REaXZpc2lvbiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgbGlzdE1vZGFsLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnZm9ybS1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgZm9ybVRpdGxlID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBsaXN0RGl2aXNpb24uZWxlbWVudCxcclxuICAgICAgJ2gxJyxcclxuICAgICAgJ2Zvcm0tdGl0bGUnLFxyXG4gICAgICAnTmV3IEl0ZW0nXHJcbiAgICApO1xyXG4gICAgY29uc3QgZm9ybUJsb2NrID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBsaXN0RGl2aXNpb24uZWxlbWVudCxcclxuICAgICAgJ2Zvcm0nLFxyXG4gICAgICAnZm9ybS1ibG9jaydcclxuICAgICk7XHJcbiAgICBjb25zdCBmaWVsZHNldEZvcm0gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZvcm1CbG9jay5lbGVtZW50LFxyXG4gICAgICAnZmllbGRzZXQnLFxyXG4gICAgICAnZm9ybS1maWVsZHNldCdcclxuICAgICk7XHJcbiAgICBjb25zdCBmaWVsZHNldExlZ2VuZCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZmllbGRzZXRGb3JtLmVsZW1lbnQsXHJcbiAgICAgICdsZWdlbmQnLFxyXG4gICAgICAnZm9ybS1maWVsZHNldC1sZWdlbmQnLFxyXG4gICAgICAnVG8tRG8gSXRlbSdcclxuICAgICk7XHJcbiAgICBjb25zdCB0aXRsZURpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZmllbGRzZXRGb3JtLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAndG9kby10aXRsZSdcclxuICAgICk7XHJcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICB0aXRsZURpdi5lbGVtZW50LFxyXG4gICAgICAnbGFiZWwnLFxyXG4gICAgICAndGl0bGUtbGFiZWwnLFxyXG4gICAgICAnVGl0bGU6JyxcclxuICAgICAgJycsXHJcbiAgICAgICd0aXRsZSdcclxuICAgICk7XHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICB0aXRsZURpdi5lbGVtZW50LFxyXG4gICAgICAnaW5wdXQnLFxyXG4gICAgICAndGl0bGUtaW5wdXQnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICd0aXRsZScsXHJcbiAgICAgICd0ZXh0J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICd0b2RvLWRlc2NyaXB0aW9uJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGRlc2NyaXB0aW9uRGl2LmVsZW1lbnQsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICdkZXMtbGFiZWwnLFxyXG4gICAgICAnRGVzY3JpcHRpb246JyxcclxuICAgICAgJycsXHJcbiAgICAgICdkZXNjcmlwdGlvbidcclxuICAgICk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBkZXNjcmlwdGlvbkRpdi5lbGVtZW50LFxyXG4gICAgICAnaW5wdXQnLFxyXG4gICAgICAnZGVzLWlucHV0JyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnZGVzY3JpcHRpb24nLFxyXG4gICAgICAndGV4dCdcclxuICAgICk7XHJcbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICd0b2RvLWR1ZURhdGUnXHJcbiAgICApO1xyXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBkdWVEYXRlRGl2LmVsZW1lbnQsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICdkdWVEYXRlLWxhYmVsJyxcclxuICAgICAgJ0R1ZSBEYXRlOiAnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ2R1ZURhdGUnXHJcbiAgICApO1xyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBkdWVEYXRlRGl2LmVsZW1lbnQsXHJcbiAgICAgICdpbnB1dCcsXHJcbiAgICAgICdkdWVEYXRlLWlucHV0JyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnZHVlRGF0ZScsXHJcbiAgICAgICdkYXRlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICd0b2RvLXByaW9yaXR5J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHByaW9yaXR5RGl2LmVsZW1lbnQsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICd0b2RvLXByaW9yaXR5JyxcclxuICAgICAgJ1ByaW9yaXR5OiAnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ3ByaW9yaXR5J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwcmlvcml0eURpdi5lbGVtZW50LFxyXG4gICAgICAnc2VsZWN0JyxcclxuICAgICAgJ3ByaW9yaXR5LXNlbGVjdCcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ3ByaW9yaXR5J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uMSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcHJpb3JpdHlTZWxlY3QuZWxlbWVudCxcclxuICAgICAgJ29wdGlvbicsXHJcbiAgICAgICdzZWxlY3Rpb24nLFxyXG4gICAgICAnLS1QbGVhc2UgQ2hvb3NlIFByaW9yaXR5JyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ1wiXCInXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb24yID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwcmlvcml0eVNlbGVjdC5lbGVtZW50LFxyXG4gICAgICAnb3B0aW9uJyxcclxuICAgICAgJ3NlbGVjdGlvbicsXHJcbiAgICAgICdMb3cnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnTG93J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uMyA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcHJpb3JpdHlTZWxlY3QuZWxlbWVudCxcclxuICAgICAgJ29wdGlvbicsXHJcbiAgICAgICdzZWxlY3Rpb24nLFxyXG4gICAgICAnSGlnaCcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdIaWdoJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IG5vdGVzRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdub3Rlcy10ZXh0YXJlYSdcclxuICAgICk7XHJcbiAgICBjb25zdCBub3Rlc0xhYmVsID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBub3Rlc0Rpdi5lbGVtZW50LFxyXG4gICAgICAnbGFiZWwnLFxyXG4gICAgICAnbm90ZXMtbGFiZWwnLFxyXG4gICAgICAnTm90ZXM6ICcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnbm90ZXMnXHJcbiAgICApO1xyXG4gICAgY29uc3Qgbm90ZXNUZXh0QXJlYSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgbm90ZXNEaXYuZWxlbWVudCxcclxuICAgICAgJ3RleHRhcmVhJyxcclxuICAgICAgJ25vdGVzLXRleHQnXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZmllbGRzZXRGb3JtLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnYnV0dG9uLWRpdidcclxuICAgICk7XHJcbiAgICBjb25zdCBmb3JtQnV0dG9uID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBidXR0b25EaXYuZWxlbWVudCxcclxuICAgICAgJ2J1dHRvbicsXHJcbiAgICAgICdmb3JtLWJ1dHRvbicsXHJcbiAgICAgICdDcmVhdGUgSXRlbSdcclxuICAgICk7XHJcbiAgICBmb3JtU3VibWl0KFxyXG4gICAgICBmb3JtQnV0dG9uLmVsZW1lbnQsXHJcbiAgICAgIGxpc3RNb2RhbC5lbGVtZW50LFxyXG4gICAgICBsaXN0QXJyLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtaW5wdXQnKSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlcy1pbnB1dCcpLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlRGF0ZS1pbnB1dCcpLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktc2VsZWN0JyksXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy10ZXh0JylcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGlzdE9qZWN0Q3JlYXRvciA9IChcclxuICAgIHN0b3JhZ2UsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgbm90ZXNcclxuICApID0+IHtcclxuICAgIGNvbnN0IGxpc3RPYmplY3QgPSBuZXcgTGlzdEVsZW1lbnQoXHJcbiAgICAgIHN0b3JhZ2UsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgZHVlRGF0ZSxcclxuICAgICAgcHJpb3JpdHksXHJcbiAgICAgIG5vdGVzXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2cobGlzdE9iamVjdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybVN1Ym1pdCA9IChcclxuICAgIGJ1dHRvbixcclxuICAgIGNoaWxkRWxlbWVudCxcclxuICAgIHN0b3JhZ2UsXHJcbiAgICB0aXRsZUlucHV0LFxyXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcclxuICAgIGR1ZURhdGVJbnB1dCxcclxuICAgIHByaW9yaXR5SW5wdXQsXHJcbiAgICBub3Rlc0lucHV0XHJcbiAgKSA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGxpc3RPamVjdENyZWF0b3IoXHJcbiAgICAgICAgc3RvcmFnZSxcclxuICAgICAgICB0aXRsZUlucHV0LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQsXHJcbiAgICAgICAgZHVlRGF0ZUlucHV0LFxyXG4gICAgICAgIHByaW9yaXR5SW5wdXQsXHJcbiAgICAgICAgbm90ZXNJbnB1dFxyXG4gICAgICApO1xyXG4gICAgICBwYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkRWxlbWVudCk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnd29ya2luZycpO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgbGlzdENyZWF0b3IsIGxpc3RBcnIgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxDcmVhdG9yO1xyXG4iLCJpbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi9lbGVtZW50Q3JlYXRvcic7XHJcbmltcG9ydCBIZWFkaW5nRWxlbWVudCBmcm9tICcuL2hlYWRpbmdFbGVtZW50JztcclxuXHJcbmNvbnN0IFBhZ2VSZW5kZXJlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcclxuICBjb25zdCBlbGVtZW50c0FyciA9IFtdO1xyXG5cclxuICBjb25zdCBwYWdlUmVuZGVyID0gKCkgPT4ge1xyXG4gICAgcGFyZW50Q3JlYXRvcigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBhcmVudENyZWF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYXJlbnRDb250YWluZXIsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAncGFnZS1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgaGVhZGluZ0NvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFnZUNvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2hlYWRpbmctY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHNpZGViYXJDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhZ2VDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdzaWRlYmFyLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnbGlzdC1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnZm9vdGVyLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBlbGVtZW50c0Fyci5wdXNoKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLFxyXG4gICAgICBoZWFkaW5nQ29udGFpbmVyLFxyXG4gICAgICBzaWRlYmFyQ29udGFpbmVyLFxyXG4gICAgICBsaXN0Q29udGFpbmVyLFxyXG4gICAgICBmb290ZXJDb250YWluZXJcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFnZUNvbnRhaW5lcixcclxuICAgICAgaGVhZGluZ0NvbnRhaW5lcixcclxuICAgICAgc2lkZWJhckNvbnRhaW5lcixcclxuICAgICAgbGlzdENvbnRhaW5lcixcclxuICAgICAgZm9vdGVyQ29udGFpbmVyLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBwYWdlUmVuZGVyLCBlbGVtZW50c0FyciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBQYWdlUmVuZGVyZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4vZWxlbWVudENyZWF0b3InO1xyXG5pbXBvcnQgUGFnZVJlbmRlcmVyIGZyb20gJy4vcGFnZUVsZW1lbnRzJztcclxuaW1wb3J0IE1vZGFsQ3JlYXRvciBmcm9tICcuL2xpc3RNb2RhbENyZWF0b3InO1xyXG5cclxuY29uc3QgU2lkZWJhckVsZW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyO1xyXG4gIGxldCBidXR0b25Ib2xkZXI7XHJcbiAgY29uc3Qgc2lkZWJhckVsZW1lbnRDcmVhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9uRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYXJlbnRFbGVtZW50WzJdLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnYnV0dG9ucy1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgY3JlYXRCdXR0b24gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhcmVudEVsZW1lbnRbMl0uZWxlbWVudCxcclxuICAgICAgJ2J1dHRvbicsXHJcbiAgICAgICdjcmVhdC1jYXJkLWJ1dHRvbicsXHJcbiAgICAgICdOZXcgSXRlbSdcclxuICAgICk7XHJcblxyXG4gICAgYnV0dG9uSG9sZGVyID0gY3JlYXRCdXR0b247XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBidXR0b25Ib2xkZXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgTW9kYWxDcmVhdG9yLmxpc3RDcmVhdG9yKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWRiYXJSZW5kZXJlciA9ICgpID0+IHtcclxuICAgIHNpZGViYXJFbGVtZW50Q3JlYXRvcigpO1xyXG4gICAgYnV0dG9uQ2xpY2soKTtcclxuICB9O1xyXG4gIHJldHVybiB7IHNpZGJhclJlbmRlcmVyIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJFbGVtZW50cztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9