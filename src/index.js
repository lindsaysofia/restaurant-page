import { pageLoad, clearLi, clearContent } from './pageLoad';
import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';

pageLoad();

(function () {
  homePage();

  const listItems = document.querySelectorAll('li');
  listItems.forEach(listItem => listItem.addEventListener('click', changeTab));

  function changeTab(e) {
    let tab = e.target.classList[0];
    clearLi();
    clearContent();
    switch(tab) {
      case 'home':
        homePage();
        break;
      case 'menu':
        menuPage();
        break;
      case 'contact':
        contactPage();
        break;
    }
  }
})();