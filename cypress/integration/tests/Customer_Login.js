/// <reference types="cypress" />

describe('Customer Login Suite,', function() {

    beforeEach(function () {

        cy.fixture('example').then(function (data) {
          this.data = data
        })
      })

    it('Successful Login', function() {
        cy.loginSuccess(this.data.username, this.data.password)     
        cy.get('#logout2').should('have.text', 'Log out')
        cy.get('#nameofuser').should('have.text', 'Welcome Test_User_123')        
    })

    it('Log out', function() {
        cy.loginSuccess(this.data.username, this.data.password) 
        cy.get('#logout2').click()
        cy.get('#login2').should('have.text', 'Log in')
        cy.get('#signin2').should('be.visible')

    })

    it('Unsuccessful Login - Username', function() {
      cy.login_bad_username(this.data.username_bad, this.data.password)
      cy.on('window:alert', (str) => {
        expect(str).to.equal('User does not exist.')
      })

    })

    it('Unsuccessful Login - Password', function() {
      cy.login_bad_password(this.data.username, this.data.password_bad)
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Wrong password.')
      })

    })
})

