export const doSort = (dataArray, sortByHeadings, placeNullAtEnd = false) => {
  if (!dataArray) {
    return;
  }
  const sortString = function(a, b) {
    if (placeNullAtEnd) {
      a[sortByHeadings.sortField] = a[sortByHeadings.sortField]
        ? a[sortByHeadings.sortField]
        : 9999999999;
      b[sortByHeadings.sortField] = b[sortByHeadings.sortField]
        ? b[sortByHeadings.sortField]
        : 9999999999;
    }
    if (a && sortByHeadings.sortField) {
      if (!a[sortByHeadings.sortField]) return -1;
      if (!b[sortByHeadings.sortField]) return 1;
      if (
        String(a[sortByHeadings.sortField]).toLowerCase() <
        String(b[sortByHeadings.sortField]).toLowerCase()
      )
        return -1;
      if (
        String(a[sortByHeadings.sortField]).toLowerCase() >
        String(b[sortByHeadings.sortField]).toLowerCase()
      )
        return 1;
    }
    return 0;
  };

  const sortNumber = function(a, b) {
    if (placeNullAtEnd) {
      a[sortByHeadings.sortField] = a[sortByHeadings.sortField]
        ? a[sortByHeadings.sortField]
        : 9999999999;
      b[sortByHeadings.sortField] = b[sortByHeadings.sortField]
        ? b[sortByHeadings.sortField]
        : 9999999999;
    }
    if (a && sortByHeadings.sortField) {
      if (!a[sortByHeadings.sortField]) return -1;
      if (!b[sortByHeadings.sortField]) return 1;
      if (a[sortByHeadings.sortField] < b[sortByHeadings.sortField]) return -1;
      if (a[sortByHeadings.sortField] > b[sortByHeadings.sortField]) return 1;
    }
    return 0;
  };

  const sortString_reverse = function(a, b) {
    if (placeNullAtEnd) {
      a[sortByHeadings.sortField] = a[sortByHeadings.sortField]
        ? a[sortByHeadings.sortField]
        : 9999999999;
      b[sortByHeadings.sortField] = b[sortByHeadings.sortField]
        ? b[sortByHeadings.sortField]
        : 9999999999;
    }
    if (a && sortByHeadings.sortField) {
      if (!b[sortByHeadings.sortField]) return -1;
      if (!a[sortByHeadings.sortField]) return 1;
      if (
        String(a[sortByHeadings.sortField]).toLowerCase() <
        String(b[sortByHeadings.sortField]).toLowerCase()
      )
        return 1;
      if (
        String(a[sortByHeadings.sortField]).toLowerCase() >
        String(b[sortByHeadings.sortField]).toLowerCase()
      )
        return -1;
    }
    return 0;
  };

  const sortNumber_reverse = function(a, b) {
    if (placeNullAtEnd) {
      a[sortByHeadings.sortField] = a[sortByHeadings.sortField]
        ? a[sortByHeadings.sortField]
        : 9999999999;
      b[sortByHeadings.sortField] = b[sortByHeadings.sortField]
        ? b[sortByHeadings.sortField]
        : 9999999999;
    }
    if (a && sortByHeadings.sortField) {
      if (!b[sortByHeadings.sortField]) return -1;
      if (!a[sortByHeadings.sortField]) return 1;
      if (a[sortByHeadings.sortField] > b[sortByHeadings.sortField]) return -1;
      if (a[sortByHeadings.sortField] < b[sortByHeadings.sortField]) return 1;
    }
    return 0;
  };

  if (sortByHeadings.isAsc) {
    if (sortByHeadings.isNumber) {
      dataArray.sort(sortNumber);
    } else {
      dataArray.sort(sortString);
    }
  } else {
    if (sortByHeadings.isNumber) {
      dataArray.sort(sortNumber_reverse);
    } else {
      dataArray.sort(sortString_reverse);
    }
  }

  return dataArray;
};

export default doSort;
