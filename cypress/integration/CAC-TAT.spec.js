// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
///<reference types="Cypress"/>

describe('Central de Atendimento ao cliente TAT',function(){
    beforeEach(() => {
        cy.visit("./src/index.html")
    });

    it('Verifica o título da aplicação', function(){
        
        cy.title().should('eq','Central de Atendimento ao Cliente TAT');
    });

    it('preenche os campos obrigatórios e envia o formulári',()=>{
        cy.get("#firstName")
            .type("Leonardo");
        
        cy.get("#lastName")
            .type("Teodoro Vital");

        cy.get("#email")
            .type("leoteovital@gamil.com");
        
        cy.get("#open-text-area")
            .type("Automatizando testessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",{delay:0});
        
        cy.contains('button','Enviar')
            .click()

            cy.get('.success')
            .should('be.visible');
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',()=>{
        cy.get('#firstName')
            .type('Leonardo')
        
        cy.get('#lastName')
            .type('maradona')
        
        cy.get('#email')
            .type('testeemailincorreto')

        cy.get("#open-text-area")
            .type("Automatizando testessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",{delay:0});
        
        cy.contains('button','Enviar')
            .click()

        cy.get('.error')
            .should('be.visible');
    })

    it('verificando se o campo telefone está vazio após digitar um texto',()=>{

    cy.get('#phone')
        .type('abc').should('have.value','');

    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário',()=>{
        cy.get('#firstName')
            .type('Leonardo')
        
        cy.get('#lastName')
            .type('maradona')
        
        cy.get('#email')
            .type('testeemailincorreto')

        cy.get("#open-text-area")
            .type("Automatizando testessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",{delay:0});
        
        cy.get('#phone-checkbox')
            .check().should('be.checked');
        
        cy.contains('button','Enviar')
            .click();

            cy.get('.error')
            .should('be.visible');
        })    
    
    it('preenche e limpa os campos nome, sobrenome, email e telefone',()=>{
        
        cy.get('#firstName')
            .type('Leonardo')
            .should('have.value','Leonardo')
            .clear()
            .should('have.value','');

        cy.get('#lastName')
            .type('Teodoro Vital')
            .should('have.value','Teodoro Vital')
            .clear()
            .should('have.value','');

        cy.get('#phone')
            .type('11931231232')
            .should('have.value','11931231232')
            .clear()
            .should('have.value','');
        
        cy.get('#email')
            .type('leoteovital@testando.com')
            .should('have.value','leoteovital@testando.com')
            .clear()
            .should('have.value','');
    })
    
    it('envia o formuário com sucesso usando um comando customizado',()=>{
        cy.fillMandatoryFieldsAndSubmit('Leonardo','Teodoro Vital','leoteovital@testando.com','teste teste teste teste teste teste teste teste teste teste teste ');
        
        cy.get('.success')
            .should('be.visible');
    })
})