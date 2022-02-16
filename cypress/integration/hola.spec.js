// hola.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

function colaButton(){
    return cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function addColaButton(click){
    for (var i=0; i<click; i++)
        colaButton().click()
}

function beerButton(){
    return cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function addBeerButton(click){
    for (var i=0; i<click; i++)
        beerButton().click()
}

function wineButton(){
    return cy.get(':nth-child(3) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function addWineButton(click){
    for (var i=0; i<click; i++)
        wineButton().click()
}

function totalText(){
    return cy.get(':nth-child(4) > .ng-binding')
}

function checkout(){
    return cy.get('.col-12 > .btn')
}

function ageInput(){
    return cy.get('#ageInput');
}

function insertAge(edad){
    ageInput().type(edad)
}

function order(){
    return cy.get('.btn-success')
}

function cancel(){
    return cy.get('.btn-default')
}

function errorMessage(){
    return cy.get('.alert > .ng-binding')
}

function confirmationMessage(){
    return cy.get('p')
}


describe('CartSuiteTest', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })
    it('Says hello', () => {
        expect(true).to.equal(true)
    })
    it('Order a cola', () => {
        checkout()
            .should("be.disabled")
        addColaButton(1)
        totalText()
            .should("contain.text", "€1.25")
        checkout()
            .should("not.be.disabled")
    })
    it('Order two colas', () => {
        addColaButton(2)
        totalText()
            .should("contain.text", "€2.50")
    })
    it('Order a beer', () => {
        addBeerButton(1)
        totalText()
            .should("contain.text", "€2.00")
    })
    it('Order two beers', () => {
        addBeerButton(2)
        totalText()
            .should("contain.text", "€4.00")
    })
    it('Order a wine', () => {
        addWineButton(1)
        totalText()
            .should("contain.text", "€3.00")
    })
    it('Order two wines', () => {
        addWineButton(2)
        totalText()
            .should("contain.text", "€6.00")
    })
    it('Order each one one time', () => {
        addColaButton(1)
        addBeerButton(1)
        addWineButton(1)
        totalText()
            .should("contain.text", "€6.25")
    })
})

describe('AgeSuiteTest', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })
    it('Says hello', () => {
        expect(true).to.equal(true)
    })
    it('Edad cola', () => {
        addColaButton(1)
        checkout()
            .click()
        order()
            .click()
        confirmationMessage()
            .should("contain.text", "Coming right up! ~bzzzt~")
    })
    it('Edad menor cerveza', () => {
        addBeerButton(1)
        checkout()
            .click()
        ageInput().type("18")
        order()
            .click()
        errorMessage()
            .should("contain.text", "Only adults can buy alcohol!")
    })
    it('Edad mayor cerveza', () => {
        addBeerButton(1)
        checkout()
            .click()
        ageInput().type("19")
        order()
            .click()
        confirmationMessage()
            .should("contain.text", "Coming right up! ~bzzzt~")
    })
    it('Edad menor vino', () => {
        addWineButton(1)
        checkout()
            .click()
        ageInput().type("18")
        order()
            .click()
        errorMessage()
            .should("contain.text", "Only adults can buy alcohol!")
    })
    it('Edad mayor vino', () => {
        addWineButton(1)
        checkout()
            .click()
        ageInput().type("19")
        order()
            .click()
        confirmationMessage()
            .should("contain.text", "Coming right up! ~bzzzt~")
    })
    it('Cancelar', () => {
        addWineButton(1)
        checkout()
            .click()
        cancel()
            .click()
    })


})
