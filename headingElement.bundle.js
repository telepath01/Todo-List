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
  constructor(parentElement, element, classname, content, img) {
    this.element = document.createElement(element);
    this.classname = this.element.className = classname;
    this.content = this.setContext(content);
    this.img = this.setImage(img);
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
      this.element.createAtribute('src', img);
      return;
    }
  }
  elementPlacement(parentElement) {
    if (parentElement) {
      parentElement.append(this.element);
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/headingElement.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGluZ0VsZW1lbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCakI7QUFDaUM7QUFDSjtBQUMxQztBQUNBO0FBQ0Esd0JBQXdCLGlFQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVEQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRCxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJnQjtBQUNBO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHVEQUFjO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVEQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVEQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHVEQUFjO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVEQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0QsaUVBQWUsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VsZW1lbnRDcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWFkaW5nRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZUVsZW1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuY2xhc3MgRWxlbWVudENyZWF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHBhcmVudEVsZW1lbnQsIGVsZW1lbnQsIGNsYXNzbmFtZSwgY29udGVudCwgaW1nKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgdGhpcy5jbGFzc25hbWUgPSB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NuYW1lO1xyXG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5zZXRDb250ZXh0KGNvbnRlbnQpO1xyXG4gICAgdGhpcy5pbWcgPSB0aGlzLnNldEltYWdlKGltZyk7XHJcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRQbGFjZW1lbnQocGFyZW50RWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBzZXRDb250ZXh0KGNvbnRlbnQpIHtcclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0SW1hZ2UoaW1nKSB7XHJcbiAgICBpZiAoaW1nKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jcmVhdGVBdHJpYnV0ZSgnc3JjJywgaW1nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbGVtZW50UGxhY2VtZW50KHBhcmVudEVsZW1lbnQpIHtcclxuICAgIGlmIChwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMuZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50Q3JlYXRvcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi9lbGVtZW50Q3JlYXRvcic7XHJcbmltcG9ydCBQYWdlUmVuZGVyZXIgZnJvbSAnLi9wYWdlRWxlbWVudHMnO1xyXG5cclxuY29uc3QgSGVhZGluZ0VsZW1lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBQYWdlUmVuZGVyZXIuZWxlbWVudHNBcnI7XHJcbiAgY29uc3QgaGVhZGluZ1JlbmRlcmVyID0gKCkgPT4ge1xyXG4gICAgaGVhZGluZ0NyZWF0b3IoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoZWFkaW5nQ3JlYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYXJlbnRFbGVtZW50WzFdLmVsZW1lbnQsXHJcbiAgICAgICdoMScsXHJcbiAgICAgICd0aXRsZS1lbGVtZW50JyxcclxuICAgICAgJ1RPLURPIExpc3QnXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGhlYWRpbmdSZW5kZXJlciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nRWxlbWVudDtcclxuIiwiaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4vZWxlbWVudENyZWF0b3InO1xyXG5pbXBvcnQgSGVhZGluZ0VsZW1lbnQgZnJvbSAnLi9oZWFkaW5nRWxlbWVudCc7XHJcblxyXG5jb25zdCBQYWdlUmVuZGVyZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LmJvZHk7XHJcbiAgY29uc3QgZWxlbWVudHNBcnIgPSBbXTtcclxuXHJcbiAgY29uc3QgcGFnZVJlbmRlciA9ICgpID0+IHtcclxuICAgIHBhcmVudENyZWF0b3IoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwYXJlbnRDcmVhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFnZUNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFyZW50Q29udGFpbmVyLFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ3BhZ2UtY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGhlYWRpbmdDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3IoXHJcbiAgICAgIHBhZ2VDb250YWluZXIuZWxlbWVudCxcclxuICAgICAgJ2RpdicsXHJcbiAgICAgICdoZWFkaW5nLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKFxyXG4gICAgICBwYWdlQ29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgICdkaXYnLFxyXG4gICAgICAnc2lkZWJhci1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFnZUNvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2xpc3QtY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcihcclxuICAgICAgcGFnZUNvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgJ2Zvb3Rlci1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgZWxlbWVudHNBcnIucHVzaChcclxuICAgICAgcGFnZUNvbnRhaW5lcixcclxuICAgICAgaGVhZGluZ0NvbnRhaW5lcixcclxuICAgICAgc2lkZWJhckNvbnRhaW5lcixcclxuICAgICAgbGlzdENvbnRhaW5lcixcclxuICAgICAgZm9vdGVyQ29udGFpbmVyXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhZ2VDb250YWluZXIsXHJcbiAgICAgIGhlYWRpbmdDb250YWluZXIsXHJcbiAgICAgIHNpZGViYXJDb250YWluZXIsXHJcbiAgICAgIGxpc3RDb250YWluZXIsXHJcbiAgICAgIGZvb3RlckNvbnRhaW5lcixcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgcGFnZVJlbmRlciwgZWxlbWVudHNBcnIgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgUGFnZVJlbmRlcmVyO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=