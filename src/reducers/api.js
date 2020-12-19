import {
   FETCH_COLLECTION_FAILURE,
   FETCH_COLLECTION_SUCCESS,
   FETCH_SINGLETON_FAILURE,
   FETCH_SINGLETON_SUCCESS,
   FETCH_THUMBNAIL_SUCCESS,
} from 'actions/api'

const initialState = {
   thumbnails: [],
   connectionErrors: {},
}

const apiReducer = (state = initialState, action) => {
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
      case FETCH_THUMBNAIL_SUCCESS: {
         return {
            ...state,
            thumbnails: [
               ...state.thumbnails,
               {
                  name: action.payload.name,
                  url: action.payload.url,
               },
            ],
         }
      }
      case FETCH_SINGLETON_FAILURE: {
         return {
            ...state,
            connectionErrors: {
               ...state.connectionErrors,
               fetchDataFailure: true,
            },
         }
      }
      case FETCH_COLLECTION_FAILURE: {
         return {
            ...state,
            connectionErrors: {
               ...state.connectionErrors,
               fetchDataFailure: true,
            },
         }
      }
      case '@@INIT': {
         return {
            ...state,
            connectionErrors: {},
         }
      }
      default:
         return state
   }
}

export default apiReducer
