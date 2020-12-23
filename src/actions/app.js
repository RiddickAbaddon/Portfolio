export const SET_LANGUAGE = 'SET_LANGUAGE'
export const SET_SORT = 'SET_SORT'
export const SET_FILTER = 'SET_FILTER'
export const SET_SEARCH = 'SET_SEARCH'
export const SET_RERENDER_SEARCH = 'RERENDER_SEARCH'

export const DEFAULT_SORT = 'date'
export const DEFAULT_SORT_DIRECTION = 'asc'
export const DEFAULT_CATEGORY = 'all'
export const DEFAULT_TECHNOLOGY = 'all'

let searchTimeout = null

export const LANGUAGES = {
   pl: 'pl',
   en: 'en',
}

export const setLanguage = (language) => (dispatch) => {
   dispatch({ type: SET_LANGUAGE, payload: { language } })
}

export const setSort = (option, direction) => (dispatch) => {
   dispatch({ type: SET_SORT, payload: { option, direction } })
}

export const setFilter = (type, value) => (dispatch) => {
   dispatch({ type: SET_FILTER, payload: { type, value } })
}

export const setRerenderSearch = () => (dispatch) => {
   dispatch({ type: SET_RERENDER_SEARCH })
}

export const setSearch = (phrase) => (dispatch) => {
   clearTimeout(searchTimeout)
   searchTimeout = setTimeout(() => {
      dispatch({ type: SET_SEARCH, payload: { phrase } })
   }, 300)
}
