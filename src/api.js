//This should work
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Syd/bookmarks';


const listApiFetch = function (...args) {
  let error;
  return fetch(...args)
    .then(res => {
      if (!res.ok) {
        error = { code: res.status };

        if (!res.headers.get('content-type').includes('json')) {
          error.message = res.statusText;
          return Promise.reject(error);
        }
      }
    
      return res.json();
    })
    .then(data => {

      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }

      return data;
    });
};

const getItems = function () {
  return listApiFetch(`${BASE_URL}`);
};

const createItem = function (name) {
  const newItem = JSON.stringify(name);
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem
  });
};

const deleteItem = function (id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const updateItem = function (id, updateData) {
  const newData = JSON.stringify(updateData);
  return fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: newData
  });
};
  
export default {
  updateItem,
  deleteItem,
  getItems,
  createItem
};