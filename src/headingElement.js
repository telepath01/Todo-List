'use strict';
import ElementCreator from './elementCreator';
import PageRenderer from './pageElements';

const HeadingElement = (function () {
  const parentElement = PageRenderer.elementsArr;
  const headingRenderer = () => {
    headingCreator();
  };

  const headingCreator = () => {
    const title = new ElementCreator(
      parentElement[1].element,
      'h1',
      'title-element',
      'TO-DO List'
    );
  };

  return { headingRenderer };
})();
export default HeadingElement;
