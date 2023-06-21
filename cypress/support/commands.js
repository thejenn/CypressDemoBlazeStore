// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('loginSuccess', (username, password) => {
    cy.visit("https://www.demoblaze.com/index.html")
    cy.get('#login2').click()

    //improve this without wait
    cy.wait(1000)
    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(password)
    cy.get('button').contains('Log in').click()

})

Cypress.Commands.add('login_bad_username', (username_bad, password) => {
    cy.visit("https://www.demoblaze.com/index.html")
    cy.get('#login2').click()

    //improve this without wait
    cy.wait(1000)
    cy.get('#loginusername').type(username_bad)
    cy.get('#loginpassword').type(password)
    cy.get('button').contains('Log in').click()
})

Cypress.Commands.add('login_bad_password', (username, password_bad) => {
    cy.visit("https://www.demoblaze.com/index.html")
    cy.get('#login2').click()

    //improve this without wait
    cy.wait(1000)
    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(password_bad)
    cy.get('button').contains('Log in').click()
})

Cypress.Commands.add("view_product", (productName) => {
    cy.get('.card-block').each(($el, index, $list) => {
        if ($el.text().includes(productName))
        {
            cy.get('a').contains(productName).click()
        }          
        })    
    })

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })