///<reference types="Cypress"/>

describe('Seção 6',()=>{

    beforeEach(()=>{
        cy.visit('../../src/index.html');
    })

    it('marca ambos checkboxes, depois desmarca o último ',()=>{
        cy.get('input[type="checkbox"]')
        .should('have.length','2')
        .each(($checkbox)=>{
            cy.wrap($checkbox).check().should('be.checked')
        })
        .last().uncheck().should('not.be.checked')

    })
})