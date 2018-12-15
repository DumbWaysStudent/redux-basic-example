import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer';
import movieReducer from './movieReducer';

const reducers = combineReducers({
    categoryReducer,
    movieReducer
})

export default reducers