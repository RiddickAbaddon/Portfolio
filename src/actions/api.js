import axios from 'axios'
import { API_TOKEN, API_URL } from 'defines'

export const FETCH_COLLECTION_REQUEST = 'FETCH_COLLECTION_REQUEST'
export const FETCH_COLLECTION_SUCCESS = 'FETCH_COLLECTION_SUCCESS'
export const FETCH_COLLECTION_FAILURE = 'FETCH_COLLECTION_FAILURE'

export const FETCH_SINGLETON_REQUEST = 'FETCH_SINGLETON_REQUEST'
export const FETCH_SINGLETON_SUCCESS = 'FETCH_SINGLETON_SUCCESS'
export const FETCH_SINGLETON_FAILURE = 'FETCH_SINGLETON_FAILURE'

export const FETCH_THUMBNAIL_REQUEST = 'FETCH_THUMBNAIL_REQUEST'
export const FETCH_THUMBNAIL_SUCCESS = 'FETCH_THUMBNAIL_SUCCESS'
export const FETCH_THUMBNAIL_FAILURE = 'FETCH_THUMBNAIL_FAILURE'

export const fetchCollection = (collection) => (dispatch) => {
   dispatch({ type: FETCH_COLLECTION_REQUEST })

   return axios(`${API_URL}/api/collections/get/${collection}`, {
      params: {
         token: API_TOKEN,
      },
   })
      .then(({ data }) => {
         dispatch({
            type: FETCH_COLLECTION_SUCCESS,
            payload: {
               type: collection,
               data: data.entries,
            },
         })
      })
      .catch((err) => dispatch({ type: FETCH_COLLECTION_FAILURE, payload: { err, collection } }))
}

export const fetchSingleton = (singleton) => (dispatch) => {
   dispatch({ type: FETCH_SINGLETON_REQUEST })

   return axios(`${API_URL}/api/singletons/get/${singleton}`, {
      params: {
         token: API_TOKEN,
      },
   })
      .then(({ data }) => {
         dispatch({
            type: FETCH_SINGLETON_SUCCESS,
            payload: {
               type: singleton,
               data,
            },
         })
      })
      .catch((err) => dispatch({ type: FETCH_SINGLETON_FAILURE, payload: { err, singleton } }))
}

export const fetchThumbnail = (path, width, height) => (dispatch) => {
   dispatch({ type: FETCH_THUMBNAIL_REQUEST })

   return axios(`${API_URL}/api/cockpit/image`, {
      params: {
         token: API_TOKEN,
         src: path,
         w: width,
         h: height,
      },
   })
      .then(({ data }) => {
         dispatch({
            type: FETCH_THUMBNAIL_SUCCESS,
            payload: {
               name: `${path}/${width}/${height}`,
               url: data,
            },
         })
      })
      .catch((err) => dispatch({ type: FETCH_THUMBNAIL_FAILURE, payload: err }))
}
