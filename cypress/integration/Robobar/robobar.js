import{Given} from "cypress-cucumber-preprocessor/steps";
import{Then} from "cypress-cucumber-preprocessor/steps";
import{When} from "cypress-cucumber-preprocessor/steps";

//Functions
import robobar from "./robobarFunctions";

//Step definitions
Given('user opens robobar website', ()=>{
    cy.visit('http://localhost:3000/')
})

When('user adds a cola', (title)=>{
    robobar.colaButton().click()
})

When('user adds a beer', (title)=>{
    robobar.beerButton().click()
})

When('user adds a wine', (title)=>{
    robobar.wineButton().click()
})

Then('total should be €{float}', (price)=>{
    cy.get(':nth-child(4) > .ng-binding')
        .should('contain', "€" + price)
})

When('user adds {int} cola', (n)=>{
    robobar.addColas(n)
})

When('user adds {int} beer', (n)=>{
    robobar.addBeers(n)
})

When('user adds {int} wine', (n)=>{
    robobar.addWines(n)
})

When('user adds {int} cola {int} beer {int} wine', (cola, beer, wine)=>{
    robobar.addColas(cola)
    robobar.addBeers(beer)
    robobar.addWines(wine)
})

When('user press submit button', ()=>{
    robobar.orderButton().click()
})

When('user enter her age is {int}', (n)=>{
    robobar.enterAge().type(n)
})

When('user press order button', ()=>{
    robobar.confirmOrder().click()
})

Then('alert is active', ()=>{
    robobar.alertMessage().should('be.visible')
})

Then('order is confirmed', ()=>{
    robobar.confirmationOfOrder().should("contain.text", "Coming right up! ~bzzzt~")
})

Then('checkout result is {string}', (expect)=>{
    if(expect === 'fail')  {
        robobar.alertMessage().should('be.visible')
    }else{
        robobar.confirmationOfOrder().should("contain.text", "Coming right up! ~bzzzt~")
    }
})