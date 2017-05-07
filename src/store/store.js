import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import pointsReducer from '../reducers/pointsReducer'

const reducers = combineReducers({
  points:pointsReducer
})
const middleware = applyMiddleware(thunk)

export default createStore(reducers, middleware)
