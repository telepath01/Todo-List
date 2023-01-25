'use strict';
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
    parentElement.append(this.element);
  }
}

export default ElementCreator;
