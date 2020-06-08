import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import {createStore} from "redux";
// const mylogger=(store)=>(next)=>(action)=>{
//     console.log("Log Action",action);
//     next(action)
// }
const reducer = (state,action)=>{
    switch(action.type){
        case "ADD":
            state+= action.payload
            break;
        case "SUBTRACT":
            state-=action.payload;
            break;
        default:
    }
    return state;
}

const store = createStore(reducer,0)
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
  document.getElementById('root')
);

store.subscribe(()=>{
    console.log("Update Store:",store.getState())
})
store.dispatch({
    type:"ADD",
    payload:500
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
