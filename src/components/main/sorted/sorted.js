const sortBy = {
  searchText: '',
  priority: 'all',
  completed: 'all',
};

function sorted(sortObject) {
  sortBy.completed = sortObject.completed;
  sortBy.priority = sortObject.priority;
  sortBy.searchText = sortObject.searchText;

  return sortBy;
}

export default sorted;
