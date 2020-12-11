import {
   DEFAULT_CATEGORY,
   DEFAULT_SORT,
   DEFAULT_SORT_DIRECTION,
   DEFAULT_TECHNOLOGY,
   LANGUAGES,
   SET_FILTER,
   SET_LANGUAGE,
   SET_SORT,
} from 'actions/app'

const initialState = {
   language: LANGUAGES.pl,
   sort: {
      option: DEFAULT_SORT,
      direction: DEFAULT_SORT_DIRECTION,
   },
   filter: {
      category: DEFAULT_CATEGORY,
      technology: DEFAULT_TECHNOLOGY,
      search: '',
   },
}

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_LANGUAGE: {
         return {
            ...state,
            language: action.payload.language,
         }
      }
      case SET_SORT: {
         return {
            ...state,
            sort: {
               option: action.payload.option,
               direction: action.payload.direction,
            },
         }
      }
      case SET_FILTER: {
         return {
            ...state,
            filter: {
               ...state.filter,
               [action.payload.type]: action.payload.value,
            },
         }
      }
      default:
         return state
   }
}

export default appReducer
