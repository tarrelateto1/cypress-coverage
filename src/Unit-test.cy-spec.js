/// <reference types="cypress" />
// compare to App.test.js
import React from 'react'
import App from './containers/App'
import { mount } from 'cypress-react-unit-test'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from "./stores/reducers";
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
    it('Check Hello world!',()=>{
        mount(
            <Provider store={store}>
                <App />
            </Provider>
        )
        cy.contains('Hello world!').should('be.visible')
    })
    it('check Option1',()=>{
        mount(
            <Provider store={store}>
                <App />
            </Provider>
        )
        cy.contains('Option 1').should('be.visible')
    })
});
