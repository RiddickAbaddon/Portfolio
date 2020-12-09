import { loadState, saveState } from 'localStorage'
import apiReducer from 'reducers/api'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

const persistedState = loadState()

const rootReducer = combineReducers({
   api: apiReducer,
})

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)))
/* eslint-enable */

store.subscribe(() => {
   saveState({
      api: store.getState().api,
   })
})

export default store
