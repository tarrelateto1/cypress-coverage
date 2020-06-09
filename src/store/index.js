import {createStore,combineReducers,applyMiddleware} from "redux"

import {reducer} from './reducers/index'
const mylogger=(store)=>(next)=>(action)=>{
    console.log("Log Action",action);
    next(action)
}
const store = createStore(combineReducers({reducer}),{},applyMiddleware(mylogger));

export default store;
