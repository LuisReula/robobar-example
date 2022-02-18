export default {
    colaButton() {
        return cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
    },

    beerButton() {
        return cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
    },

    wineButton() {
        return cy.get(':nth-child(3) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
    },

    addColas(n) {
        let btn = cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
        for (let i = 0; i < n; i++) {
            btn.click()
        }
    },

    addBeers(n) {
        let btn = cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
        for (let i = 0; i < n; i++) {
            btn.click()
        }
    },

    addWines(n) {
        let btn = cy.get(':nth-child(3) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
        for (let i = 0; i < n; i++) {
            btn.click()
        }
    },

    orderButton() {
        return cy.get('.col-12 > .btn')
    },

    //Page 2 (Order Review)
    enterAge() {
        return cy.get('#ageInput')
    },

    confirmOrder() {
        return cy.get('.btn-success')
    },

    alertMessage() {
        return cy.get(':nth-child(2) > :nth-child(1) > .alert')
    },

    //Page 3 (Confirm Order)
    confirmationOfOrder() {
        return cy.get('p')
    }
}