///<reference types="Cypress"/>

describe('Seção 5',()=>{

    beforeEach(()=>{
        cy.visit('../../src/index.html')
    })
    it('seleciona um produto (YouTube) por seu texto',()=>{

        cy.get('#product')
            .select('YouTube')
            .should('have.value','youtube')
    })

    it('seleciona um produto (Mentoria) por seu valor (value)',()=>{
        cy.get('#product')
            .select('Mentoria')
            .should('have.value','mentoria');
    })

    it('seleciona um produto (Blog) por seu valor (value)',()=>{
        cy.get('#product')
            .select(1)
            .should('have.value','blog');
    })

})