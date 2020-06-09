/// <reference types="cypress" />

import React from 'react'
import { mount } from 'cypress-react-unit-test'
import App from './App'
describe('Unitest', () => {
    beforeEach("beforEach",()=>{
        cy.visit('/')
    })
    it('mount contain app', () => {
        // mount(<App />)
        // cy.contains('Hello World!').should('be.visible')
    })
  // it('unit test plue function', () => {
  //   const calculator = new App()
  //   const result = calculator.plus(1, 2)
  //   expect(result).equal(3)
  // })
  // it('unit test subtract function', () => {
  //   const calculator = new App()
  //   const result = calculator.subtract(10, 2)
  //   expect(result).equal(8)
  // })
  // it('unit test multiple function', () => {
  //   const calculator = new App()
  //   const result = calculator.multiple(10, 10)
  //   expect(result).equal(100)
  // })
  // it('unit test divide function', () => {
  //   const calculator = new App()
  //   const result = calculator.divide(10, 2)
  //   expect(result).equal(5)
  // })
  // it('unit test divide 0 function', () => {
  //   const calculator = new App()
  //   const result = calculator.divide(10, 0)
  //   expect(result).equal(0)
  // })
})
