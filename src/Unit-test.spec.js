/// <reference types="cypress" />
// compare to App.test.js
import React from 'react'
import App from './App'
import { mount } from 'cypress-react-unit-test'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from "./store/reducers";
import { Provider } from 'react-redux'


const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    // we could hook into this logger from the test
    middleware.push(createLogger());
}
describe('App', () => {
    let store

    beforeEach(() => {
        store = createStore(
            reducers,
            applyMiddleware(...middleware)
        )

        // note that once mounting, App starts fetching news right away
        // so let's spy on "window.fetch" before it
        cy.spy(window, 'fetch').as('fetch')


    })
    it('test mount redux state',()=>{
        mount(
            <Provider store={store}>
                <App />
            </Provider>
        )
        cy.contains('Hello World!').should('be.visible')
    })
});
