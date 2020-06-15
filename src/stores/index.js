import {applyMiddleware, createStore} from "redux"

import reducers from './reducers/index'

const mylogger=(store)=>(next)=>(action)=>{
    console.log("Log Action",action);
    next(action)
}
const store = createStore(reducers,{},applyMiddleware(mylogger));

export default store;
