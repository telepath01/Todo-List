'use strict';
import ElementCreator from './elementCreator';
import PageRenderer from './pageElements';

const FooterCreator = (function () {
  let lowPriorityCount = 0;
  let highPriorityCount = 0;

  const footerRender = (parentElement) => {
    footerElementCreator(parentElement);
  };

  const footerElementCreator = (parentElement) => {
    const lowPriorityDiv = new ElementCreator(
      parentElement,
      'div',
      'lowCounter-container'
    );
    const lowPriorityTitle = new ElementCreator(
      lowPriorityDiv.element,
      'p',
      'low-text',
      `Low Priority: ${lowPriorityCount}`
    );
    const highPriorityDiv = new ElementCreator(
      parentElement,
      'div',
      'highCount-container'
    );
    const highPriorityTitle = new ElementCreator(
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
      PageRenderer.elementsArr[4].element.removeChild(lowChild, highChild);
      FooterCreator.footerRender(PageRenderer.elementsArr[4].element);
    } else if (choice === 'subtract') {
      lowPriorityCount -= 1;
      PageRenderer.elementsArr[4].element.removeChild(lowChild, highChild);
      FooterCreator.footerRender(PageRenderer.elementsArr[4].element);
    }
  };
  const highCountGetter = (choice) => {
    const lowChild = document.querySelector('.lowCounter-container');
    const highChild = document.querySelector('.highCount-container');
    if (choice === 'add') {
      highPriorityCount += 1;
      PageRenderer.elementsArr[4].element.removeChild(lowChild, highChild);
      FooterCreator.footerRender(PageRenderer.elementsArr[4].element);
    } else if (choice === 'subtract') {
      highPriorityCount -= 1;
      PageRenderer.elementsArr[4].element.removeChild(lowChild, highChild);
      FooterCreator.footerRender(PageRenderer.elementsArr[4].element);
    }
  };

  return { footerRender, lowCountGetter, highCountGetter };
})();
export default FooterCreator;
