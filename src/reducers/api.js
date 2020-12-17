import {
   FETCH_COLLECTION_SUCCESS,
   FETCH_SINGLETON_SUCCESS,
   FETCH_THUMBNAIL_SUCCESS,
} from 'actions/api'

const initialState = {
   thumbnails: [],
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
      default:
         return state
   }
}

export default apiReducer
