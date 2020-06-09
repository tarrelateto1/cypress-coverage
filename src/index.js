import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import {createStore} from "redux";
import {reducer} from "./store/reducers";
import {OPERATOR} from "./store/definitions/operator";
import {add} from "./store/actions/add";
// const mylogger=(store)=>(next)=>(action)=>{
//     console.log("Log Action",action);
//     next(action)
// }


const store = createStore(reducer)
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
  document.getElementById('root')
);

store.subscribe(()=>{
    console.log("Update Store:",store.getState())
})
store.dispatch(add())

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
