import _ from 'lodash';
import './style.css';
import HeadingElement from './headingElement';
import PageRenderer from './pageElements';
import SidebarElements from './sidebarElement';
import StorageManager from './storageManager';

const Renderer = (function () {
  const renderElements = () => {
    PageRenderer.pageRender();
    HeadingElement.headingRenderer();
    SidebarElements.sidbarRenderer();
    StorageManager.storageStart();
  };

  return { renderElements };
})();
Renderer.renderElements();
