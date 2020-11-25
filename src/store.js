const bookmarks = [];
let error = null;
let adding = false;
let filter =0;

const findById = function (id) {
  return this.bookmarks.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.bookmarks.push(item);
};

const findAndDelete = function (id) {
  this.bookmarks = this.bookmarks.filter(currentItem => currentItem.id !== id);
};
const toggleStoreAdding = function (){
  this.adding = !this.adding;
};
const toggleCheckedFilter = function () {
  this.hideCheckedbookmarks = !this.hideCheckedbookmarks;
};

const findAndUpdate = function (id, newData) {
  const currentItem = this.findById(id);
  Object.assign(currentItem, newData);
};
const setError = function (error) {
  this.error = error;
};

export default {
  filter,
  error,
  adding,
  bookmarks,
  toggleStoreAdding,
  findById,
  addItem,
  findAndUpdate,
  findAndDelete,
  toggleCheckedFilter,
  setError
};