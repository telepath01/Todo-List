import _ from 'lodash';
import './style.css';
import ElementCreator from './elementCreator';

const PageRenderer = (function () {
  const parentContainer = document.body;

  const pageLoader = () => {
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
  };
  return { pageLoader };
})();

PageRenderer.pageLoader();
