import { LANGUAGES, SET_LANGUAGE } from 'actions/app'

const initialState = {
   language: LANGUAGES.pl,
}

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_LANGUAGE: {
         return {
            ...state,
            language: action.payload.language,
         }
      }
      default:
         return state
   }
}

export default appReducer
