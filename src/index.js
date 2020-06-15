import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {Provider} from "react-redux"
import store from './stores/index'
import {add} from "./stores/actions/add";




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
