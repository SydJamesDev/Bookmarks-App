//I hope this works
import $ from 'jquery';

import './index.css';
import bookmarks from './bookmark';
import api from './api';
import store from './store';

const main = function () {
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      bookmarks.render();
    });
  bookmarks.bindEventListener();
  bookmarks.render();
};

$(main);