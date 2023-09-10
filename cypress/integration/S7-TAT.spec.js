///<reference types="Cypress"/>

describe('Seção 7', () =>{

    beforeEach(()=>{
        cy.visit('../../src/index.html');
    });

    it('seleciona um arquivo da pasta fixtures',()=>{
        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('cypress/fixtures/example.json')
        .should(($input)=>{
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('seleciona um arquivo simulando um drag-and-drop',()=>{
        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
        .should(($input)=>{
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias',()=>{
        cy.fixture('example.json').as('samplefile')

        cy.get('input[type="file"]')
            .selectFile('@samplefile')
            .should(($input)=>{
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })
})