function getCheckedIds(checked) {
  const ids = checked.map(checkbox => checkbox.dataset?.itemid)
  console.log('list Id', checked?.[0]?.dataset?.listid)
  console.log('item Ids', ids)
}

document.addEventListener('DOMContentLoaded', () => {
  const options = {
    valueNames: ["item-name", "item-title", "item-email", "item-score", "item-company"], 
    page: 10, 
    pagination: {paginationClass: "list-pagination"}
  }
  createList('contactList', options)
})


/**
 * Create a List given an id and options
 * @param {string} listId the id of the element containing list items
 * @param {object} optionsObj options to initialise list
 */
function createList(listId, optionsObj) {

  const list = document.getElementById(listId)
  const sorts = document.querySelectorAll('[data-sort]');

  function init(list) {
    const listAlert = list.querySelector('.list-alert');
    const listAlertCount = list.querySelector('.list-alert-count');
    const listAlertClose = list.querySelector('.list-alert .btn-close');
    const listCheckboxes = list.querySelectorAll('.list-checkbox');
    const listCheckboxAll = list.querySelector('.list-checkbox-all');
    const listPagination = list.querySelectorAll('.list-pagination');
    const listPaginationPrev = list.querySelector('.list-pagination-prev');
    const listPaginationNext = list.querySelector('.list-pagination-next');
    const listOptions = optionsObj || (list.dataset.list && JSON.parse(list.dataset.list));

    const defaultOptions = {
      listClass: 'list',
      searchClass: 'list-search',
      sortClass: 'list-sort',
    };

    // Merge options
    const options = Object.assign(defaultOptions, listOptions);

    // Init
    const listObj = new List(list, options);

    // Pagination
    if (listPagination) {
      [].forEach.call(listPagination, function (pagination) {
        pagination.addEventListener('click', function (e) {
          e.preventDefault();
        });
      });
    }

    // Pagination (next)
    if (listPaginationNext) {
      listPaginationNext.addEventListener('click', function (e) {
        e.preventDefault();

        const nextItem = parseInt(listObj.i) + parseInt(listObj.page);

        if (nextItem <= listObj.size()) {
          listObj.show(nextItem, listObj.page);
        }
      });
    }

    // Pagination (prev)
    if (listPaginationPrev) {
      listPaginationPrev.addEventListener('click', function (e) {
        e.preventDefault();

        const prevItem = parseInt(listObj.i) - parseInt(listObj.page);

        if (prevItem > 0) {
          listObj.show(prevItem, listObj.page);
        }
      });
    }

    // Checkboxes
    if (listCheckboxes) {
      [].forEach.call(listCheckboxes, function (checkbox) {
        checkbox.addEventListener('change', function () {
          countCheckboxes(listCheckboxes, listAlert, listAlertCount);
          if (listCheckboxAll) {
            listCheckboxAll.checked = false;
          }
        });
      });
    }

    // Checkbox
    if (listCheckboxAll) {
      listCheckboxAll.addEventListener('change', function () {
        [].forEach.call(listCheckboxes, function (checkbox) {
          checkbox.checked = listCheckboxAll.checked;
        });
        countCheckboxes(listCheckboxes, listAlert, listAlertCount);
      });
    }

    // Alert
    if (listAlertClose) {
      listAlertClose.addEventListener('click', function (e) {
        e.preventDefault();

        if (listCheckboxAll) {
          listCheckboxAll.checked = false;
        }

        [].forEach.call(listCheckboxes, function (checkbox) {
          checkbox.checked = false;
        });

        countCheckboxes(listCheckboxes, listAlert, listAlertCount);
      });
    }
  }

  function countCheckboxes(listCheckboxes, listAlert, listAlertCount) {
    const checked = [].slice.call(listCheckboxes).filter(function (checkbox) {
      return checkbox.checked;
    });

    getCheckedIds(checked)

    if (listAlert) {
      checked.length ? listAlert.classList.add('show') : listAlert.classList.remove('show');
      listAlertCount.innerHTML = checked.length;
    }
  }

  if (typeof List !== 'undefined' && list) {
    init(list)
  }

  if (typeof List !== 'undefined' && sorts) {
    [].forEach.call(sorts, function (sort) {
      sort.addEventListener('click', function (e) {
        e.preventDefault();
      });
    });
  }
}