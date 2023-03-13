import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { productaddreducer, productlistreducer } from './Reducers/productreducers';


const reducer = combineReducers({
    PRODUCTLIST: productlistreducer,
    PRODUCTADD: productaddreducer
})

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
