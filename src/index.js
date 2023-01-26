import _ from 'lodash';
import './style.css';
import ElementCreator from './elementCreator';
import HeadingElement from './headingElement';
import PageRenderer from './pageElements';

const Renderer = (function () {
  const renderElements = () => {
    PageRenderer.pageRender();
    HeadingElement.headingRenderer();
  };

  return { renderElements };
})();
Renderer.renderElements();
