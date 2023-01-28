"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["modalCreator"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/listModalCreator.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lbGVtZW50Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGluZ0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xpc3RNb2RhbENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VFbGVtZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmNsYXNzIEVsZW1lbnRDcmVhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHBhcmVudEVsZW1lbnQsXHJcbiAgICBlbGVtZW50LFxyXG4gICAgY2xhc3NuYW1lLFxyXG4gICAgY29udGVudCxcclxuICAgIGltZyxcclxuICAgIGlkLFxyXG4gICAgdHlwZSxcclxuICAgIGxpc3RWYWx1ZVxyXG4gICkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICAgIHRoaXMuY2xhc3NuYW1lID0gdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzbmFtZTtcclxuICAgIHRoaXMuY29udGVudCA9IHRoaXMuc2V0Q29udGV4dChjb250ZW50KTtcclxuICAgIHRoaXMuaW1nID0gdGhpcy5zZXRJbWFnZShpbWcpO1xyXG4gICAgdGhpcy5pZCA9IHRoaXMubGFiZWxQbGFjZW1lbnQoaWQpO1xyXG4gICAgdGhpcy50eXBlID0gdGhpcy50eXBlUGxhY2VtZW50KHR5cGUpO1xyXG4gICAgdGhpcy5saXN0VmFsdWUgPSB0aGlzLnZhbHVlUGxhY2VtZW50KGxpc3RWYWx1ZSk7XHJcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRQbGFjZW1lbnQocGFyZW50RWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBzZXRDb250ZXh0KGNvbnRlbnQpIHtcclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0SW1hZ2UoaW1nKSB7XHJcbiAgICBpZiAoaW1nKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zcmMgPSBpbWc7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcbiAgZWxlbWVudFBsYWNlbWVudChwYXJlbnRFbGVtZW50KSB7XHJcbiAgICBpZiAocGFyZW50RWxlbWVudCkge1xyXG4gICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBsYWJlbFBsYWNlbWVudChpZCkge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcclxuICAgIH1cclxuICB9XHJcbiAgdHlwZVBsYWNlbWVudChpbnB1dFR5cGUpIHtcclxuICAgIGlmIChpbnB1dFR5cGUpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsIGlucHV0VHlwZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHZhbHVlUGxhY2VtZW50KGxpc3RWYWx1ZSkge1xyXG4gICAgaWYgKGxpc3RWYWx1ZSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGxpc3RWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50Q3JlYXRvcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi9lbGVtZW50Q3JlYXRvcic7XHJcbmltcG9ydCBQYWdlUmVuZGVyZXIgZnJvbSAnLi9wYWdlRWxlbWVudHMnO1xyXG5cclxuY29uc3QgSGVhZGluZ0VsZW1lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnI7XHJcbiAgY29uc3QgaGVhZGluZ1JlbmRlcmVyID0gKCkgPT4ge1xyXG4gICAgaGVhZGluZ0NyZWF0b3IoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoZWFkaW5nQ3JlYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYXJlbnRFbGVtZW50WzFdLmVsZW1lbnQsXHJcbiAgICAgICdoMScsXHJcbiAgICAgICd0aXRsZS1lbGVtZW50JyxcclxuICAgICAgJ1RPLURPIExpc3QnXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGhlYWRpbmdSZW5kZXJlciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nRWxlbWVudDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi9lbGVtZW50Q3JlYXRvcic7XHJcbmltcG9ydCBQYWdlUmVuZGVyZXIgZnJvbSAnLi9wYWdlRWxlbWVudHMnO1xyXG5cclxuY29uc3QgTW9kYWxDcmVhdG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcclxuICBjb25zdCBsaXN0QXJyID0gW107XHJcbiAgY2xhc3MgTGlzdEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3Ioc3RvcmFnZUFyciwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcclxuICAgICAgdGhpcy5zdG9yYWdlQXJyID0gdGhpcy5zZW5kdG9BcnIoc3RvcmFnZUFycik7XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZS52YWx1ZTtcclxuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnZhbHVlO1xyXG4gICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlLnZhbHVlO1xyXG4gICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHkudmFsdWU7XHJcbiAgICAgIHRoaXMubm90ZXMgPSBub3Rlcy52YWx1ZTtcclxuICAgICAgdGhpcy5jaGVja2xpc3QgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kdG9BcnIoKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0b3JhZ2VBcnIpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2VBcnIucHVzaCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaXN0Q3JlYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxpc3RNb2RhbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFyZW50RWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdtb2RhbC1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgbGlzdERpdmlzaW9uID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBsaXN0TW9kYWwuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdmb3JtLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGxpc3REaXZpc2lvbi5lbGVtZW50LFxyXG4gICAgICAnaDEnLFxyXG4gICAgICAnZm9ybS10aXRsZScsXHJcbiAgICAgICdOZXcgSXRlbSdcclxuICAgICk7XHJcbiAgICBjb25zdCBmb3JtQmxvY2sgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGxpc3REaXZpc2lvbi5lbGVtZW50LFxyXG4gICAgICAnZm9ybScsXHJcbiAgICAgICdmb3JtLWJsb2NrJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGZpZWxkc2V0Rm9ybSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZm9ybUJsb2NrLmVsZW1lbnQsXHJcbiAgICAgICdmaWVsZHNldCcsXHJcbiAgICAgICdmb3JtLWZpZWxkc2V0J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGZpZWxkc2V0TGVnZW5kID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2xlZ2VuZCcsXHJcbiAgICAgICdmb3JtLWZpZWxkc2V0LWxlZ2VuZCcsXHJcbiAgICAgICdUby1EbyBJdGVtJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHRpdGxlRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICd0b2RvLXRpdGxlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHRpdGxlRGl2LmVsZW1lbnQsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICd0aXRsZS1sYWJlbCcsXHJcbiAgICAgICdUaXRsZTonLFxyXG4gICAgICAnJyxcclxuICAgICAgJ3RpdGxlJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHRpdGxlRGl2LmVsZW1lbnQsXHJcbiAgICAgICdpbnB1dCcsXHJcbiAgICAgICd0aXRsZS1pbnB1dCcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ3RpdGxlJyxcclxuICAgICAgJ3RleHQnXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3RvZG8tZGVzY3JpcHRpb24nXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgZGVzY3JpcHRpb25EaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ2Rlcy1sYWJlbCcsXHJcbiAgICAgICdEZXNjcmlwdGlvbjonLFxyXG4gICAgICAnJyxcclxuICAgICAgJ2Rlc2NyaXB0aW9uJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGRlc2NyaXB0aW9uRGl2LmVsZW1lbnQsXHJcbiAgICAgICdpbnB1dCcsXHJcbiAgICAgICdkZXMtaW5wdXQnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICd0ZXh0J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3RvZG8tZHVlRGF0ZSdcclxuICAgICk7XHJcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGR1ZURhdGVEaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ2R1ZURhdGUtbGFiZWwnLFxyXG4gICAgICAnRHVlIERhdGU6ICcsXHJcbiAgICAgICcnLFxyXG4gICAgICAnZHVlRGF0ZSdcclxuICAgICk7XHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGR1ZURhdGVEaXYuZWxlbWVudCxcclxuICAgICAgJ2lucHV0JyxcclxuICAgICAgJ2R1ZURhdGUtaW5wdXQnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdkdWVEYXRlJyxcclxuICAgICAgJ2RhdGUnXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3RvZG8tcHJpb3JpdHknXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcHJpb3JpdHlEaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ3RvZG8tcHJpb3JpdHknLFxyXG4gICAgICAnUHJpb3JpdHk6ICcsXHJcbiAgICAgICcnLFxyXG4gICAgICAncHJpb3JpdHknXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHByaW9yaXR5RGl2LmVsZW1lbnQsXHJcbiAgICAgICdzZWxlY3QnLFxyXG4gICAgICAncHJpb3JpdHktc2VsZWN0JyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAncHJpb3JpdHknXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb24xID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwcmlvcml0eVNlbGVjdC5lbGVtZW50LFxyXG4gICAgICAnb3B0aW9uJyxcclxuICAgICAgJ3NlbGVjdGlvbicsXHJcbiAgICAgICctLVBsZWFzZSBDaG9vc2UgUHJpb3JpdHknLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnXCJcIidcclxuICAgICk7XHJcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbjIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHByaW9yaXR5U2VsZWN0LmVsZW1lbnQsXHJcbiAgICAgICdvcHRpb24nLFxyXG4gICAgICAnc2VsZWN0aW9uJyxcclxuICAgICAgJ0xvdycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdMb3cnXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb24zID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwcmlvcml0eVNlbGVjdC5lbGVtZW50LFxyXG4gICAgICAnb3B0aW9uJyxcclxuICAgICAgJ3NlbGVjdGlvbicsXHJcbiAgICAgICdIaWdoJyxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJ0hpZ2gnXHJcbiAgICApO1xyXG4gICAgY29uc3Qgbm90ZXNEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGZpZWxkc2V0Rm9ybS5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ25vdGVzLXRleHRhcmVhJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IG5vdGVzTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIG5vdGVzRGl2LmVsZW1lbnQsXHJcbiAgICAgICdsYWJlbCcsXHJcbiAgICAgICdub3Rlcy1sYWJlbCcsXHJcbiAgICAgICdOb3RlczogJyxcclxuICAgICAgJycsXHJcbiAgICAgICdub3RlcydcclxuICAgICk7XHJcbiAgICBjb25zdCBub3Rlc1RleHRBcmVhID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBub3Rlc0Rpdi5lbGVtZW50LFxyXG4gICAgICAndGV4dGFyZWEnLFxyXG4gICAgICAnbm90ZXMtdGV4dCdcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uRGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBmaWVsZHNldEZvcm0uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdidXR0b24tZGl2J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGZvcm1CdXR0b24gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGJ1dHRvbkRpdi5lbGVtZW50LFxyXG4gICAgICAnYnV0dG9uJyxcclxuICAgICAgJ2Zvcm0tYnV0dG9uJyxcclxuICAgICAgJ0NyZWF0ZSBJdGVtJ1xyXG4gICAgKTtcclxuICAgIGZvcm1TdWJtaXQoXHJcbiAgICAgIGZvcm1CdXR0b24uZWxlbWVudCxcclxuICAgICAgbGlzdE1vZGFsLmVsZW1lbnQsXHJcbiAgICAgIGxpc3RBcnIsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1pbnB1dCcpLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzLWlucHV0JyksXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWVEYXRlLWlucHV0JyksXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1zZWxlY3QnKSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLXRleHQnKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsaXN0T2plY3RDcmVhdG9yID0gKFxyXG4gICAgc3RvcmFnZSxcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgcHJpb3JpdHksXHJcbiAgICBub3Rlc1xyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgbGlzdE9iamVjdCA9IG5ldyBMaXN0RWxlbWVudChcclxuICAgICAgc3RvcmFnZSxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBkdWVEYXRlLFxyXG4gICAgICBwcmlvcml0eSxcclxuICAgICAgbm90ZXNcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhsaXN0T2JqZWN0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtU3VibWl0ID0gKFxyXG4gICAgYnV0dG9uLFxyXG4gICAgY2hpbGRFbGVtZW50LFxyXG4gICAgc3RvcmFnZSxcclxuICAgIHRpdGxlSW5wdXQsXHJcbiAgICBkZXNjcmlwdGlvbklucHV0LFxyXG4gICAgZHVlRGF0ZUlucHV0LFxyXG4gICAgcHJpb3JpdHlJbnB1dCxcclxuICAgIG5vdGVzSW5wdXRcclxuICApID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGlzdE9qZWN0Q3JlYXRvcihcclxuICAgICAgICBzdG9yYWdlLFxyXG4gICAgICAgIHRpdGxlSW5wdXQsXHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dCxcclxuICAgICAgICBkdWVEYXRlSW5wdXQsXHJcbiAgICAgICAgcHJpb3JpdHlJbnB1dCxcclxuICAgICAgICBub3Rlc0lucHV0XHJcbiAgICAgICk7XHJcbiAgICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGRFbGVtZW50KTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCd3b3JraW5nJyk7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBsaXN0Q3JlYXRvciwgbGlzdEFyciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBNb2RhbENyZWF0b3I7XHJcbiIsImltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuL2VsZW1lbnRDcmVhdG9yJztcclxuaW1wb3J0IEhlYWRpbmdFbGVtZW50IGZyb20gJy4vaGVhZGluZ0VsZW1lbnQnO1xyXG5cclxuY29uc3QgUGFnZVJlbmRlcmVyID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBwYXJlbnRDb250YWluZXIgPSBkb2N1bWVudC5ib2R5O1xyXG4gIGNvbnN0IGVsZW1lbnRzQXJyID0gW107XHJcblxyXG4gIGNvbnN0IHBhZ2VSZW5kZXIgPSAoKSA9PiB7XHJcbiAgICBwYXJlbnRDcmVhdG9yKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGFyZW50Q3JlYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhZ2VDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhcmVudENvbnRhaW5lcixcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdwYWdlLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnaGVhZGluZy1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFnZUNvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3NpZGViYXItY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhZ2VDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdsaXN0LWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhZ2VDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdmb290ZXItY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGVsZW1lbnRzQXJyLnB1c2goXHJcbiAgICAgIHBhZ2VDb250YWluZXIsXHJcbiAgICAgIGhlYWRpbmdDb250YWluZXIsXHJcbiAgICAgIHNpZGViYXJDb250YWluZXIsXHJcbiAgICAgIGxpc3RDb250YWluZXIsXHJcbiAgICAgIGZvb3RlckNvbnRhaW5lclxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYWdlQ29udGFpbmVyLFxyXG4gICAgICBoZWFkaW5nQ29udGFpbmVyLFxyXG4gICAgICBzaWRlYmFyQ29udGFpbmVyLFxyXG4gICAgICBsaXN0Q29udGFpbmVyLFxyXG4gICAgICBmb290ZXJDb250YWluZXIsXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IHBhZ2VSZW5kZXIsIGVsZW1lbnRzQXJyIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VSZW5kZXJlcjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9