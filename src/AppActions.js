export const PAGE_LOAD_START = 'PAGE_LOAD_START';
export const PAGE_LOAD_END = 'PAGE_LOAD_END';
export const PAGE_LOAD_SUCCESS = 'PAGE_LOAD_SUCCESS';
export const PAGE_LOAD_FAILED = 'PAGE_LOAD_FAILED';

export const CHANGE_PAGE_TITLE = 'CHANGE_PAGE_TITLE';
export const SAVE_CURRENT_ROUTE = 'SAVE_CURRENT_ROUTE';

export function startLoading() {
  return {
    type: PAGE_LOAD_START,
  };
}

export function endLoading() {
  return {
    type: PAGE_LOAD_END,
  };
}

export function successLoading() {
  return {
    type: PAGE_LOAD_SUCCESS,
  };
}

export function failedLoading() {
  return {
    type: PAGE_LOAD_FAILED,
  };
}

export const changePageTitle = (title, overrideTitleFormat = false) => {
  const newTitle = title
    ? ` - ${title
        .split('/')
        .map(i => i.charAt(0).toUpperCase() + i.slice(1))
        .join(' ')}`
    : '';
  return {
    type: CHANGE_PAGE_TITLE,
    title: overrideTitleFormat ? title : `TIQK ${newTitle}`,
  };
};

export const saveCurrentRoute = url => ({
  type: SAVE_CURRENT_ROUTE,
  url,
});
