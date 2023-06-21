/// <reference types="cypress" />

describe('Fitler Products,', function() {

    beforeEach(function () {

        cy.fixture('example').then(function (data) {
          this.data = data
        })
      })

    it('Correct Categories Display', function() {
        cy.visit("https://www.demoblaze.com/index.html")
        cy.get('.list-group').should('contain.text', 'CATEGORIES')
        cy.get('.list-group').should('contain.text', 'Phones')
        cy.get('.list-group').should('contain.text', 'Laptops')
        cy.get('.list-group').should('contain.text', 'Monitors')
    })  

    it('Filter by Phones', function() {
        cy.visit("https://www.demoblaze.com/index.html")
        cy.get('.list-group').contains('Phones').click()
        cy.get('.card-block').should('have.length', 7)
        cy.get('.card-block').should('contain.text', 'Nokia lumia 1520')
        cy.get('.card-block').should('contain.text', 'Iphone 6 32gb')
        cy.get('.card-block').should('contain.text', 'HTC One M9')
        cy.get('.card-block').should('not.contain.text', '2017 Dell 15.6 Inch')        
    })  

    it('Filter by Laptops', function() {
        cy.visit("https://www.demoblaze.com/index.html")
        cy.get('.list-group').contains('Laptops').click()
        cy.get('.card-block').should('have.length', 6)        
        cy.get('.card-block').should('contain.text', '2017 Dell 15.6 Inch')   
        cy.get('.card-block').should('contain.text', 'Sony vaio i7')  
        cy.get('.card-block').should('not.contain.text', 'HTC One M9')
    })  

    it('Filter by Monitors', function() {
        cy.visit("https://www.demoblaze.com/index.html")
        cy.get('.list-group').contains('Monitors').click()
        cy.get('.card-block').should('have.length', 2)        
        cy.get('.card-block').should('contain.text', 'Apple monitor 24')   
        cy.get('.card-block').should('not.contain.text', 'Sony vaio i7')
        cy.get('.card-block').should('not.contain.text', 'HTC One M9')

    })  





    })