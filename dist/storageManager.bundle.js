"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["storageManager"],{

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
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/elementCreator.js");
/* harmony import */ var _pageElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageElements */ "./src/pageElements.js");
/* harmony import */ var _footerCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footerCreator */ "./src/footerCreator.js");





const StorageManager = (function () {
  const listParant = document.querySelector('.list-container');
  const storageArr = [];
  let indexCounter = 0;

  const storageStart = () => {
    if (localStorage) {
      indexCounter = Number(localStorage.getItem('indexCounter'));
      populateStorage();
      localStorage.clear();
      indexCounter = 0;
    } else {
      setStorage();
    }
  };
  const setStorage = () => {
    console.log('setting storage');
  };
  const populateStorage = () => {
    if (indexCounter === 0) {
    } else if (indexCounter > 0) {
      for (let i = 0; i < indexCounter; i++) {
        createStorageCard(i + 1);
      }
    }

    console.log('populating storage');
  };

  const indexCounting = () => {
    indexCounter += 1;
    localStorage.setItem('indexCounter', indexCounter);
    console.log(indexCounter);
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
      _footerCreator__WEBPACK_IMPORTED_MODULE_2__["default"].lowCountGetter('add');
    } else if (priorityElement.textContent === 'High') {
      priorityElement.style.color = '#FFFAF0';
      priorityElement.style.backgroundColor = '#B22222';
      _footerCreator__WEBPACK_IMPORTED_MODULE_2__["default"].highCountGetter('add');
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
  };

  return { storageStart, populateStorage, storageArr, indexCounting };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageManager);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/storageManager.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsdURBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1REFBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVEQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdURBQWM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1REFBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix1REFBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVEQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdURBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0VBQTJCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0scUVBQTRCO0FBQ2xDLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTSxzRUFBNkI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsb0NBQW9DLE1BQU07QUFDMUMsMENBQTBDLE1BQU07QUFDaEQsdUNBQXVDLE1BQU07QUFDN0Msc0NBQXNDLE1BQU07QUFDNUMsb0NBQW9DLE1BQU07QUFDMUM7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0QsaUVBQWUsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VsZW1lbnRDcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb290ZXJDcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2VNYW5hZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuY2xhc3MgRWxlbWVudENyZWF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcGFyZW50RWxlbWVudCxcclxuICAgIGVsZW1lbnQsXHJcbiAgICBjbGFzc25hbWUsXHJcbiAgICBjb250ZW50LFxyXG4gICAgaW1nLFxyXG4gICAgaWQsXHJcbiAgICB0eXBlLFxyXG4gICAgbGlzdFZhbHVlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgdGhpcy5jbGFzc25hbWUgPSB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NuYW1lO1xyXG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5zZXRDb250ZXh0KGNvbnRlbnQpO1xyXG4gICAgdGhpcy5pbWcgPSB0aGlzLnNldEltYWdlKGltZyk7XHJcbiAgICB0aGlzLmlkID0gdGhpcy5sYWJlbFBsYWNlbWVudChpZCk7XHJcbiAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVQbGFjZW1lbnQodHlwZSk7XHJcbiAgICB0aGlzLmxpc3RWYWx1ZSA9IHRoaXMudmFsdWVQbGFjZW1lbnQobGlzdFZhbHVlKTtcclxuICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHRoaXMuZWxlbWVudFBsYWNlbWVudChwYXJlbnRFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHNldENvbnRleHQoY29udGVudCkge1xyXG4gICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRJbWFnZShpbWcpIHtcclxuICAgIGlmIChpbWcpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnNyYyA9IGltZztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbGVtZW50UGxhY2VtZW50KHBhcmVudEVsZW1lbnQpIHtcclxuICAgIGlmIChwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxhYmVsUGxhY2VtZW50KGlkKSB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuICB0eXBlUGxhY2VtZW50KGlucHV0VHlwZSkge1xyXG4gICAgaWYgKGlucHV0VHlwZSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRUeXBlKTtcclxuICAgIH1cclxuICB9XHJcbiAgdmFsdWVQbGFjZW1lbnQobGlzdFZhbHVlKSB7XHJcbiAgICBpZiAobGlzdFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbGlzdFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnRDcmVhdG9yO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuL2VsZW1lbnRDcmVhdG9yJztcclxuaW1wb3J0IFBhZ2VSZW5kZXJlciBmcm9tICcuL3BhZ2VFbGVtZW50cyc7XHJcblxyXG5jb25zdCBGb290ZXJDcmVhdG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgbG93UHJpb3JpdHlDb3VudCA9IDA7XHJcbiAgbGV0IGhpZ2hQcmlvcml0eUNvdW50ID0gMDtcclxuXHJcbiAgY29uc3QgZm9vdGVyUmVuZGVyID0gKHBhcmVudEVsZW1lbnQpID0+IHtcclxuICAgIGZvb3RlckVsZW1lbnRDcmVhdG9yKHBhcmVudEVsZW1lbnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvb3RlckVsZW1lbnRDcmVhdG9yID0gKHBhcmVudEVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGxvd1ByaW9yaXR5RGl2ID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYXJlbnRFbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2xvd0NvdW50ZXItY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGxvd1ByaW9yaXR5VGl0bGUgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGxvd1ByaW9yaXR5RGl2LmVsZW1lbnQsXHJcbiAgICAgICdwJyxcclxuICAgICAgJ2xvdy10ZXh0JyxcclxuICAgICAgYExvdyBQcmlvcml0eTogJHtsb3dQcmlvcml0eUNvdW50fWBcclxuICAgICk7XHJcbiAgICBjb25zdCBoaWdoUHJpb3JpdHlEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhcmVudEVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnaGlnaENvdW50LWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBoaWdoUHJpb3JpdHlUaXRsZSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgaGlnaFByaW9yaXR5RGl2LmVsZW1lbnQsXHJcbiAgICAgICdwJyxcclxuICAgICAgJ2hpZ2gtdGV4dCcsXHJcbiAgICAgIGBIaWdoIFByaW9yaXR5OiAke2hpZ2hQcmlvcml0eUNvdW50fWBcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG93Q291bnRHZXR0ZXIgPSAoY2hvaWNlKSA9PiB7XHJcbiAgICBjb25zdCBsb3dDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3dDb3VudGVyLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgaGlnaENoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2hDb3VudC1jb250YWluZXInKTtcclxuICAgIGlmIChjaG9pY2UgPT09ICdhZGQnKSB7XHJcbiAgICAgIGxvd1ByaW9yaXR5Q291bnQgKz0gMTtcclxuICAgICAgUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQucmVtb3ZlQ2hpbGQobG93Q2hpbGQsIGhpZ2hDaGlsZCk7XHJcbiAgICAgIEZvb3RlckNyZWF0b3IuZm9vdGVyUmVuZGVyKFBhZ2VSZW5kZXJlci5lbGVtZW50c0Fycls0XS5lbGVtZW50KTtcclxuICAgIH0gZWxzZSBpZiAoY2hvaWNlID09PSAnc3VidHJhY3QnKSB7XHJcbiAgICAgIGxvd1ByaW9yaXR5Q291bnQgLT0gMTtcclxuICAgICAgUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQucmVtb3ZlQ2hpbGQobG93Q2hpbGQsIGhpZ2hDaGlsZCk7XHJcbiAgICAgIEZvb3RlckNyZWF0b3IuZm9vdGVyUmVuZGVyKFBhZ2VSZW5kZXJlci5lbGVtZW50c0Fycls0XS5lbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhpZ2hDb3VudEdldHRlciA9IChjaG9pY2UpID0+IHtcclxuICAgIGNvbnN0IGxvd0NoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvd0NvdW50ZXItY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBoaWdoQ2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaENvdW50LWNvbnRhaW5lcicpO1xyXG4gICAgaWYgKGNob2ljZSA9PT0gJ2FkZCcpIHtcclxuICAgICAgaGlnaFByaW9yaXR5Q291bnQgKz0gMTtcclxuICAgICAgUGFnZVJlbmRlcmVyLmVsZW1lbnRzQXJyWzRdLmVsZW1lbnQucmVtb3ZlQ2hpbGQobG93Q2hpbGQsIGhpZ2hDaGlsZCk7XHJcbiAgICAgIEZvb3RlckNyZWF0b3IuZm9vdGVyUmVuZGVyKFBhZ2VSZW5kZXJlci5lbGVtZW50c0Fycls0XS5lbGVtZW50KTtcclxuICAgIH0gZWxzZSBpZiAoY2hvaWNlID09PSAnc3VidHJhY3QnKSB7XHJcbiAgICAgIGhpZ2hQcmlvcml0eUNvdW50IC09IDE7XHJcbiAgICAgIFBhZ2VSZW5kZXJlci5lbGVtZW50c0Fycls0XS5lbGVtZW50LnJlbW92ZUNoaWxkKGxvd0NoaWxkLCBoaWdoQ2hpbGQpO1xyXG4gICAgICBGb290ZXJDcmVhdG9yLmZvb3RlclJlbmRlcihQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbNF0uZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgZm9vdGVyUmVuZGVyLCBsb3dDb3VudEdldHRlciwgaGlnaENvdW50R2V0dGVyIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlckNyZWF0b3I7XHJcbiIsImltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuL2VsZW1lbnRDcmVhdG9yJztcclxuaW1wb3J0IEZvb3RlckNyZWF0b3IgZnJvbSAnLi9mb290ZXJDcmVhdG9yJztcclxuXHJcbmNvbnN0IFBhZ2VSZW5kZXJlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcclxuICBjb25zdCBlbGVtZW50c0FyciA9IFtdO1xyXG5cclxuICBjb25zdCBwYWdlUmVuZGVyID0gKCkgPT4ge1xyXG4gICAgcGFyZW50Q3JlYXRvcigpO1xyXG4gICAgRm9vdGVyQ3JlYXRvci5mb290ZXJSZW5kZXIoZWxlbWVudHNBcnJbNF0uZWxlbWVudCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGFyZW50Q3JlYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhZ2VDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhcmVudENvbnRhaW5lcixcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdwYWdlLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnaGVhZGluZy1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFnZUNvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3NpZGViYXItY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhZ2VDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdsaXN0LWNvbnRhaW5lcidcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnZm9vdGVyLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBlbGVtZW50c0Fyci5wdXNoKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLFxyXG4gICAgICBoZWFkaW5nQ29udGFpbmVyLFxyXG4gICAgICBzaWRlYmFyQ29udGFpbmVyLFxyXG4gICAgICBsaXN0Q29udGFpbmVyLFxyXG4gICAgICBmb290ZXJDb250YWluZXJcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFnZUNvbnRhaW5lcixcclxuICAgICAgaGVhZGluZ0NvbnRhaW5lcixcclxuICAgICAgc2lkZWJhckNvbnRhaW5lcixcclxuICAgICAgbGlzdENvbnRhaW5lcixcclxuICAgICAgZm9vdGVyQ29udGFpbmVyLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBwYWdlUmVuZGVyLCBlbGVtZW50c0FyciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBQYWdlUmVuZGVyZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4vZWxlbWVudENyZWF0b3InO1xyXG5pbXBvcnQgUGFnZVJlbmRlcmVyIGZyb20gJy4vcGFnZUVsZW1lbnRzJztcclxuaW1wb3J0IEZvb3RlckNyZWF0b3IgZnJvbSAnLi9mb290ZXJDcmVhdG9yJztcclxuXHJcbmNvbnN0IFN0b3JhZ2VNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBsaXN0UGFyYW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJyk7XHJcbiAgY29uc3Qgc3RvcmFnZUFyciA9IFtdO1xyXG4gIGxldCBpbmRleENvdW50ZXIgPSAwO1xyXG5cclxuICBjb25zdCBzdG9yYWdlU3RhcnQgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgIGluZGV4Q291bnRlciA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5kZXhDb3VudGVyJykpO1xyXG4gICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgIGluZGV4Q291bnRlciA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTdG9yYWdlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBzZXRTdG9yYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3NldHRpbmcgc3RvcmFnZScpO1xyXG4gIH07XHJcbiAgY29uc3QgcG9wdWxhdGVTdG9yYWdlID0gKCkgPT4ge1xyXG4gICAgaWYgKGluZGV4Q291bnRlciA9PT0gMCkge1xyXG4gICAgfSBlbHNlIGlmIChpbmRleENvdW50ZXIgPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXhDb3VudGVyOyBpKyspIHtcclxuICAgICAgICBjcmVhdGVTdG9yYWdlQ2FyZChpICsgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygncG9wdWxhdGluZyBzdG9yYWdlJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5kZXhDb3VudGluZyA9ICgpID0+IHtcclxuICAgIGluZGV4Q291bnRlciArPSAxO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luZGV4Q291bnRlcicsIGluZGV4Q291bnRlcik7XHJcbiAgICBjb25zb2xlLmxvZyhpbmRleENvdW50ZXIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVN0b3JhZ2VDYXJkID0gKGluZGV4KSA9PiB7XHJcbiAgICBsZXQgdGl0bGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdGl0bGUke2luZGV4fWApO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGRlc2NyaXB0aW9uJHtpbmRleH1gKTtcclxuICAgIGxldCBwcmlvcml0eSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBwcmlvcml0eSR7aW5kZXh9YCk7XHJcbiAgICBsZXQgZHVlRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBkdWVEYXRlJHtpbmRleH1gKTtcclxuICAgIGxldCBub3RlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBub3RlcyR7aW5kZXh9YCk7XHJcbiAgICBjb25zdCBjYXJkID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbM10uZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdjYXJkJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGNhcmRUaXRsZSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY2FyZC5lbGVtZW50LFxyXG4gICAgICAncCcsXHJcbiAgICAgICdjYXJkLXRpdGxlJyxcclxuICAgICAgdGl0bGVcclxuICAgICk7XHJcbiAgICBjb25zdCBjYXJkRGVzY3JpcHRpb24gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGNhcmQuZWxlbWVudCxcclxuICAgICAgJ3AnLFxyXG4gICAgICAnY2FyZC1kZXNjcmlwdGlvbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICApO1xyXG4gICAgY29uc3QgY2FyZER1ZURhdGUgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGNhcmQuZWxlbWVudCxcclxuICAgICAgJ3AnLFxyXG4gICAgICAnY2FyZC1kdWVEYXRlJyxcclxuICAgICAgZHVlRGF0ZVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNhcmRQcmlvcml0eSA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY2FyZC5lbGVtZW50LFxyXG4gICAgICAncCcsXHJcbiAgICAgICdjYXJkLXByaW9yaXR5JyxcclxuICAgICAgcHJpb3JpdHlcclxuICAgICk7XHJcbiAgICBjb25zdCBjYXJkTm90ZXMgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGNhcmQuZWxlbWVudCxcclxuICAgICAgJ3AnLFxyXG4gICAgICAnY2FyZC1ub3RlcycsXHJcbiAgICAgIG5vdGVzXHJcbiAgICApO1xyXG4gICAgY29uc3QgY29tcGxldGVEaXYgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGNhcmQuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdjb21wbGV0ZS1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgY2hlY2tMYWJlbCA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgY29tcGxldGVEaXYuZWxlbWVudCxcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgJ2NvbXBsZXRlLWxhYmVsJyxcclxuICAgICAgJ0NvbXBsZXRlOiAnXHJcbiAgICApO1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGNvbXBsZXRlRGl2LmVsZW1lbnQsXHJcbiAgICAgICdpbnB1dCcsXHJcbiAgICAgICdjb21wbGV0ZS1jaGVjaycsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgICdjaGVja2JveCdcclxuICAgICk7XHJcbiAgICBjb25zdCBidXR0b24gPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIGNhcmQuZWxlbWVudCxcclxuICAgICAgJ2J1dHRvbicsXHJcbiAgICAgICdkZWxldGUtYnV0dG9uJyxcclxuICAgICAgJ1gnXHJcbiAgICApO1xyXG4gICAgcHJpb3JpdHlDaGVjayhjYXJkUHJpb3JpdHkuZWxlbWVudCk7XHJcbiAgICBjb21wbGV0ZVVwZGF0ZXIoY2hlY2tib3gsIGNhcmQpO1xyXG4gICAgZGVsZXRlTGlzdGVuZXIoYnV0dG9uLCBQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnJbM10sIGNhcmQsIGluZGV4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmlvcml0eUNoZWNrID0gKHByaW9yaXR5RWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKHByaW9yaXR5RWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0xvdycpIHtcclxuICAgICAgcHJpb3JpdHlFbGVtZW50LnN0eWxlLmNvbG9yID0gJyNGRkZBRjAnO1xyXG4gICAgICBwcmlvcml0eUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMxNzcyNDUnO1xyXG4gICAgICBGb290ZXJDcmVhdG9yLmxvd0NvdW50R2V0dGVyKCdhZGQnKTtcclxuICAgIH0gZWxzZSBpZiAocHJpb3JpdHlFbGVtZW50LnRleHRDb250ZW50ID09PSAnSGlnaCcpIHtcclxuICAgICAgcHJpb3JpdHlFbGVtZW50LnN0eWxlLmNvbG9yID0gJyNGRkZBRjAnO1xyXG4gICAgICBwcmlvcml0eUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNCMjIyMjInO1xyXG4gICAgICBGb290ZXJDcmVhdG9yLmhpZ2hDb3VudEdldHRlcignYWRkJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29tcGxldGVVcGRhdGVyID0gKGNoZWNrRWxlbWVudCwgY2FyZERpdikgPT4ge1xyXG4gICAgY2hlY2tFbGVtZW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICBpZiAoY2hlY2tFbGVtZW50LmVsZW1lbnQuY2hlY2tlZCkge1xyXG4gICAgICAgIGNhcmREaXYuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzdDQjlFOCc7XHJcbiAgICAgIH0gZWxzZSBjYXJkRGl2LmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlZmVmZWYnO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlTGlzdGVuZXIgPSAoZGVsZXRlQnV0dG9uLCBwYXJlbnRFbGVtZW50LCBjaGlsZEVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICBkZWxldGVCdXR0b24uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgcGFyZW50RWxlbWVudC5lbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkRWxlbWVudC5lbGVtZW50KTtcclxuICAgIH0pO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYHRpdGxlJHtpbmRleH1gKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBkZXNjcmlwdGlvbiR7aW5kZXh9YCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgcHJpb3JpdHkke2luZGV4fWApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGR1ZURhdGUke2luZGV4fWApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYG5vdGVzJHtpbmRleH1gKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBzdG9yYWdlU3RhcnQsIHBvcHVsYXRlU3RvcmFnZSwgc3RvcmFnZUFyciwgaW5kZXhDb3VudGluZyB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlTWFuYWdlcjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9