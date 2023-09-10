///<reference types="Cypress"/>

describe('Seção 5', ()=>{

    beforeEach(()=>{
        cy.visit('../../src/index.html')
    })

    it('Marca o tipo de antendimento "feedback"',()=>{
        cy.get('input[type="radio"][value="feedback"]')
            .check()
            .should('have.value','feedback')
    })
    
    it('marca cada tipo de atendimento',()=>{
        cy.get('input[type="radio"]')
        .should('have.length','3')
        .each(($radio)=>{
            cy.wrap($radio).check();
            cy.wrap($radio).should('be.checked')
        } )
        }) 
})