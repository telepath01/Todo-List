import _ from 'lodash';
import './style.css';
import HeadingElement from './headingElement';
import PageRenderer from './pageElements';
import SidebarElements from './sidebarElement';

const Renderer = (function () {
  const renderElements = () => {
    PageRenderer.pageRender();
    HeadingElement.headingRenderer();
    SidebarElements.sidbarRenderer();
  };

  return { renderElements };
})();
Renderer.renderElements();
