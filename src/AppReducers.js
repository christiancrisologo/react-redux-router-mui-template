import {
  PAGE_LOAD_SUCCESS,
  PAGE_LOAD_FAILED,
  PAGE_LOAD_START,
  PAGE_LOAD_END,
  CHANGE_PAGE_TITLE,
  SAVE_CURRENT_ROUTE,
} from './AppActions';

// Initial State
const initialState = {
  pageLoading: false,
  pageTitle: '',
  lastPage: '',
};

// Reducer
const Reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case PAGE_LOAD_START:
      return {
        ...state,
        pageLoading: true,
      };
    case PAGE_LOAD_SUCCESS:
    case PAGE_LOAD_FAILED:
    case PAGE_LOAD_END:
      return {
        ...state,
        pageLoading: false,
      };
    case CHANGE_PAGE_TITLE:
      return {
        ...state,
        pageTitle: action.title,
      };
    case SAVE_CURRENT_ROUTE: {
      const lastPage = action.url;
      return {
        ...state,
        lastPage,
      };
    }
    default:
      return state;
  }
};

/* Selectors */
export const getPageTitle = state => state.app.pageTitle;
export const getLastPage = state => state.app.lastPage;

export default Reducer;
