import ElementCreator from './elementCreator';
import HeadingElement from './headingElement';

const PageRenderer = (function () {
  const parentContainer = document.body;
  const elementsArr = [];

  const pageRender = () => {
    parentCreator();
  };

  const parentCreator = () => {
    const pageContainer = new ElementCreator(
      parentContainer,
      'div',
      'page-container'
    );
    const headingContainer = new ElementCreator(
      pageContainer.element,
      'div',
      'heading-container'
    );
    const sidebarContainer = new ElementCreator(
      pageContainer.element,
      'div',
      'sidebar-container'
    );
    const listContainer = new ElementCreator(
      pageContainer.element,
      'div',
      'list-container'
    );
    const footerContainer = new ElementCreator(
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
export default PageRenderer;
