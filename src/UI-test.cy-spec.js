/// <reference types="cypress" />

import React from 'react'
import { mount } from 'cypress-react-unit-test'
describe('UI-test',()=>{
    it('open browser',()=>{
        cy.visit('/')
    })
    it('test plus function',()=>{
        cy.get('form > :nth-child(1)').clear()
        cy.get('form > :nth-child(1)').type(1)
        cy.get('form > :nth-child(2)').focus().clear()
        cy.get('form > :nth-child(2)').type(2)
        cy.get('.plus').click()
        cy.get('.result').should('have.text','3')

    })
    it('test subtract function',()=>{
        cy.get('form > :nth-child(1)').clear()
        cy.get('form > :nth-child(1)').type(10)
        cy.get('form > :nth-child(2)').focus().clear()
        cy.get('form > :nth-child(2)').type(5)
        cy.get('.subtract').click()
        cy.get('.result').should('have.text','5')
    })
    it('test multiple function',()=>{
        cy.get('form > :nth-child(1)').clear()
        cy.get('form > :nth-child(1)').type(10)
        cy.get('form > :nth-child(2)').focus().clear()
        cy.get('form > :nth-child(2)').type(10)
        cy.get('.multiple').click()
        cy.get('.result').should('have.text','100')
    })
    it('test divide function',()=>{
        cy.get('form > :nth-child(1)').clear()
        cy.get('form > :nth-child(1)').type(12)
        cy.get('form > :nth-child(2)').focus().clear()
        cy.get('form > :nth-child(2)').type(4)
        cy.get('.divide').click()
        cy.get('.result').should('have.text','3')
    })
    it('test divide 0 function',()=>{
        cy.get('form > :nth-child(1)').clear()
        cy.get('form > :nth-child(1)').type(12)
        cy.get('form > :nth-child(2)').focus().clear()
        cy.get('form > :nth-child(2)').type(0)
        cy.get('.divide').click()
        cy.get('.result').should('have.text','0')
    })
})