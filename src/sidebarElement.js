'use strict';
import ElementCreator from './elementCreator';
import PageRenderer from './pageElements';
import ModalCreator from './listModalCreator';

const SidebarElements = (function () {
  const parentElement = PageRenderer.elementsArr;
  let buttonHolder;
  const sidebarElementCreator = () => {
    const buttonDiv = new ElementCreator(
      parentElement[2].element,
      'div',
      'buttons-container'
    );
    const creatButton = new ElementCreator(
      parentElement[2].element,
      'button',
      'creat-card-button',
      'New Item'
    );

    buttonHolder = creatButton;
  };

  const buttonClick = () => {
    buttonHolder.element.addEventListener('click', () => {
      ModalCreator.listCreator();
    });
  };

  const sidbarRenderer = () => {
    sidebarElementCreator();
    buttonClick();
  };
  return { sidbarRenderer };
})();
export default SidebarElements;
