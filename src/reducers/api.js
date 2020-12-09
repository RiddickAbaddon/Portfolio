import { FETCH_COLLECTION_SUCCESS, FETCH_SINGLETON_SUCCESS } from 'actions/api'

const apiReducer = (state = [], action) => {
   switch (action.type) {
      case FETCH_COLLECTION_SUCCESS: {
         return {
            ...state,
            [action.payload.type]: [...action.payload.data],
         }
      }
      case FETCH_SINGLETON_SUCCESS: {
         return {
            ...state,
            [action.payload.type]: action.payload.data,
         }
      }
      default:
         return state
   }
}

export default apiReducer
