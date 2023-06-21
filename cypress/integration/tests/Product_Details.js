/// <reference types="cypress" />

describe('Product Details,', function() {

    beforeEach(function () {

        cy.fixture('example').then(function (data) {
          this.data = data
        })
      })

      it('View Details for Samsung s7', function() {
        cy.visit("https://www.demoblaze.com/index.html")
        cy.view_product('Samsung galaxy s7')
        cy.url().should('include', '/prod')    
        cy.get('.name').should('have.text', 'Samsung galaxy s7')
      })

      it('Navigate Back to Home from Product', function() {
        cy.visit("https://www.demoblaze.com/index.html")
        cy.view_product('Samsung galaxy s7')
        cy.get('a').contains('Home').click()
        cy.url().should('include', 'index.html')          
      })

      it('Add Nexus 6 to Cart', function() {
        cy.visit("https://www.demoblaze.com/index.html")
        cy.view_product('Nexus 6')
        cy.get('.btn').contains('Add to cart').click()
        cy.get('#cartur').click()
        //alert
        cy.url().should('include', 'cart.html')
        cy.get('td:nth-child(2)').should('have.text', 'Nexus 6')
      })

      it('Delete Nexus 6 from Cart', function() {
        cy.visit("https://www.demoblaze.com/index.html")
        cy.view_product('Nexus 6')
        cy.get('.btn').contains('Add to cart').click()
        cy.get('#cartur').click()
        cy.get('a').contains('Delete').click()
        cy.get('td').should('not.exist')
      })


      


    })