// hola.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

function colaButton(){
    return cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function totalText(){
    return cy.get(':nth-child(4) > .ng-binding')
}

describe('Hello Cypress', () => {
    it('Says hello', () =>{
        expect(true).to.equal(true)
    })
    it('Order a cola', () =>{
        cy.visit('http://localhost:3000/')
        colabutton()
            .click()
        totalText()
            .should("contain.text", "€1.25")
    })
    it('Order two colas', () => {
        cy.visit('http://localhost:3000/')
        colaButton()
            .click()
            .click()
        totalText()
            .should("contain.text", "€2.50")
    })
})